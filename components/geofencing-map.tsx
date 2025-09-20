"use client";

import { useEffect, useRef, useState } from "react";
import { useGeolocation } from "@/hooks/use-geolocation";
import { Alert } from "@/components/ui/alert";

// Add type declaration for window.google
declare global {
  interface Window {
    google: any;
  }
}

// Replace with your Google Maps API key
const GOOGLE_MAPS_API_KEY = "AIzaSyC_UAiUptgZ1LtLtCruakjno39h9fJretg";

let googleMapsScriptLoading: Promise<void> | null = null;
function loadGoogleMapsScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject();
  if ((window as any).google && (window as any).google.maps)
    return Promise.resolve();
  if (googleMapsScriptLoading) return googleMapsScriptLoading;
  googleMapsScriptLoading = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onerror = () =>
      reject(
        new Error(
          "Failed to load Google Maps script. Check your API key and network."
        )
      );
    script.onload = () => {
      if ((window as any).google && (window as any).google.maps) resolve();
      else
        reject(
          new Error(
            "Google Maps failed to initialize. Check your API key and restrictions."
          )
        );
    };
    document.body.appendChild(script);
  });
  return googleMapsScriptLoading;
}

export function GeofencingMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [start, setStart] = useState<any>(null);
  const [end, setEnd] = useState<any>(null);
  const [circle, setCircle] = useState<any>(null);
  const { position, error } = useGeolocation();
  const [inside, setInside] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  // Load Google Maps robustly
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setMapError(null);
    loadGoogleMapsScript()
      .then(() => {
        if (cancelled) return;
        if (mapRef.current && !map) {
          const m = new (window as any).google.maps.Map(mapRef.current, {
            center: { lat: 20.5937, lng: 78.9629 },
            zoom: 5,
          });
          setMap(m);
        }
        setLoading(false);
      })
      .catch((err: Error) => {
        setMapError(err.message);
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [map]);

  // Place markers for start/end
  useEffect(() => {
    if (!map) return;
    let startMarker: any = null;
    let endMarker: any = null;
    if (start) {
      startMarker = new (window as any).google.maps.Marker({
        position: start,
        map,
        label: "A",
      });
      map.setCenter(start);
      map.setZoom(12);
    }
    if (end) {
      endMarker = new (window as any).google.maps.Marker({
        position: end,
        map,
        label: "B",
      });
    }
    return () => {
      startMarker?.setMap(null);
      endMarker?.setMap(null);
    };
  }, [map, start, end]);

  // Draw geofence (circle) between start and end
  useEffect(() => {
    if (!map || !start || !end) return;
    // Calculate midpoint
    const mid = {
      lat: (start.lat + end.lat) / 2,
      lng: (start.lng + end.lng) / 2,
    };
    // Calculate radius (distance between start and end, divided by 2, plus buffer)
    const toRad = (x: number) => (x * Math.PI) / 180;
    const R = 6371000;
    const dLat = toRad(end.lat - start.lat);
    const dLng = toRad(end.lng - start.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(start.lat)) *
        Math.cos(toRad(end.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    const radius = distance / 2 + 1000; // meters
    // Draw circle
    if (circle) circle.setMap(null);
    const newCircle = new (window as any).google.maps.Circle({
      center: mid,
      radius,
      map,
      fillColor: "#4285F4",
      fillOpacity: 0.15,
      strokeColor: "#4285F4",
      strokeOpacity: 0.7,
      strokeWeight: 2,
    });
    setCircle(newCircle);
    map.fitBounds(newCircle.getBounds()!);
    return () => {
      newCircle.setMap(null);
    };
  }, [map, start, end]);

  // Check if user is inside geofence
  useEffect(() => {
    if (!circle || !position) return;
    const { latitude, longitude } = position.coords;
    const userLatLng = new (window as any).google.maps.LatLng(
      latitude,
      longitude
    );
    setInside(circle.getBounds()?.contains(userLatLng) ?? false);
  }, [circle, position]);

  // Allow user to select start/end by clicking map
  useEffect(() => {
    if (!map) return;
    const listener = map.addListener("click", (e: any) => {
      if (!start) {
        setStart({ lat: e.latLng!.lat(), lng: e.latLng!.lng() });
      } else if (!end) {
        setEnd({ lat: e.latLng!.lat(), lng: e.latLng!.lng() });
      } else {
        setStart({ lat: e.latLng!.lat(), lng: e.latLng!.lng() });
        setEnd(null);
      }
    });
    return () => window.google.maps.event.removeListener(listener);
  }, [map, start, end]);

  return (
    <div>
      <div className="mt-8 mb-6 flex justify-center">
        {loading ? (
          <div className="glass px-6 py-4 rounded-xl text-base font-medium shadow-md w-full max-w-xl text-center">
            Loading map...
          </div>
        ) : mapError ? (
          <div className="glass px-6 py-4 rounded-xl text-base font-medium shadow-md w-full max-w-xl text-center border border-red-400 text-red-700 bg-red-100/60">
            {mapError}
          </div>
        ) : (
          <div
            className={`glass px-6 py-4 rounded-xl text-base font-medium shadow-md w-full max-w-xl text-center
              ${
                start && end && inside === true
                  ? "border border-green-600 text-green-900 bg-green-400/40"
                  : ""
              }
              ${
                start && end && inside === false
                  ? "border border-red-600 text-red-900 bg-red-400/30"
                  : ""
              }
            `}
            style={
              start && end && inside === true
                ? {
                    backgroundColor: "rgba(34,197,94,0.18)",
                    borderColor: "#22c55e",
                    color: "#166534",
                  }
                : start && end && inside === false
                ? {
                    backgroundColor: "rgba(239,68,68,0.18)",
                    borderColor: "#dc2626",
                    color: "#991b1b",
                  }
                : {}
            }
          >
            {start && end
              ? inside === null
                ? "Checking your location..."
                : inside
                ? "You are inside your journey geofence."
                : "You are outside your journey geofence."
              : "Click on the map to select your journey start and destination."}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div
          ref={mapRef}
          style={{
            width: "90%",
            maxWidth: 1100,
            height: 400,
            borderRadius: 12,
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
}
