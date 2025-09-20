// Utility to check if a point is inside a circular geofence
export function isInsideGeofence(
  userLat: number,
  userLng: number,
  fenceLat: number,
  fenceLng: number,
  radiusMeters: number
): boolean {
  const toRad = (x: number) => (x * Math.PI) / 180
  const R = 6371000 // Earth radius in meters
  const dLat = toRad(fenceLat - userLat)
  const dLng = toRad(fenceLng - userLng)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(userLat)) *
      Math.cos(toRad(fenceLat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c
  return distance <= radiusMeters
}

// Example geofences (add more as needed)
export const GEOFENCES = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    lat: 27.1751,
    lng: 78.0421,
    radius: 500, // meters
  },
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    lat: 18.9219841,
    lng: 72.8346543,
    radius: 400,
  },
]
