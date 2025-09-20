"use client";
// Client component for geofencing alert
import { useEffect, useState } from "react";
import { useGeolocation } from "@/hooks/use-geolocation";
import { isInsideGeofence, GEOFENCES } from "@/lib/geofence";
import { Alert } from "@/components/ui/alert";
import { Shield } from "lucide-react";

export function GeofencingAlert() {
  const { position, error, loading } = useGeolocation();
  const [inside, setInside] = useState<string | null>(null);

  useEffect(() => {
    if (position) {
      const { latitude, longitude } = position.coords;
      const found = GEOFENCES.find((fence) =>
        isInsideGeofence(
          latitude,
          longitude,
          fence.lat,
          fence.lng,
          fence.radius
        )
      );
      setInside(found ? found.name : null);
    }
  }, [position]);

  if (loading) return null;
  if (error)
    return <Alert variant="destructive">Location error: {error}</Alert>;

  return (
    <div>
      {inside ? (
        <Alert>
          <Shield className="h-5 w-5 text-accent mr-2" />
          You are inside the geofenced area: <b>{inside}</b>
        </Alert>
      ) : (
        <Alert variant="destructive">
          <Shield className="h-5 w-5 text-destructive mr-2" />
          You are outside all monitored geofenced areas.
        </Alert>
      )}
    </div>
  );
}
