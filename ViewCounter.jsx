import React from 'react'

const COUNTER_NAMESPACE = 'rekonnection-real-estate'

export default function ViewCounter({ slug }) {
  const [views, setViews] = React.useState(null)

  React.useEffect(() => {
    if (!slug) {
      setViews(null)
      return
    }

    let cancelled = false
    const controller = new AbortController()

    const loadViews = async () => {
      try {
        const sessionKey = `viewed-${slug}`
        const alreadyCounted = sessionStorage.getItem(sessionKey)
        const url = alreadyCounted
          ? `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${slug}/`
          : `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${slug}/up`

        const response = await fetch(url, { signal: controller.signal })

        // Counter failures must never break a property page.
        if (!response.ok) {
          if (!cancelled) setViews(null)
          return
        }

        const data = await response.json()
        const count = Number(data?.count)

        // Only render the counter when the API returned a valid number.
        if (!Number.isFinite(count)) {
          if (!cancelled) setViews(null)
          return
        }

        if (!cancelled) {
          setViews(count)
          if (!alreadyCounted) {
            sessionStorage.setItem(sessionKey, '1')
          }
        }
      } catch (error) {
        if (error?.name !== 'AbortError' && !cancelled) {
          setViews(null)
        }
      }
    }

    loadViews()

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [slug])

  // Hide the counter when unavailable instead of crashing the page.
  if (!Number.isFinite(views)) return null

  return (
    <p className="viewCounter">
      {views.toLocaleString()} {views === 1 ? 'person has' : 'people have'} viewed this listing
    </p>
  )
}
