import { useState, useEffect } from "react"

export function useGeolocation(options?: PositionOptions) {
  const [position, setPosition] = useState<GeolocationPosition | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.")
      setLoading(false)
      return
    }
    const watcher = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition(pos)
        setError(null)
        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      },
      options
    )
    return () => navigator.geolocation.clearWatch(watcher)
  }, [options])

  return { position, error, loading }
}
