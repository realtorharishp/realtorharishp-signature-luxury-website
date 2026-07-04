import React from 'react'

// Free, no-signup-required counter namespace for the whole site.
// Each property page passes its own unique `slug`, so every listing gets
// its own independent view count inside this namespace.
// Uses CounterAPI's public V1 endpoint directly (no npm package, no account,
// no API key) — the V2 SDK requires a pre-registered workspace, which is
// why an earlier version of this component silently failed.
//Made changes
const COUNTER_NAMESPACE = 'rekonnection-real-estate'

export default function ViewCounter({ slug }) {
  const [views, setViews] = React.useState(null)

  React.useEffect(() => {
    if (!slug) return

    // Only increment once per browser session per listing, so refreshing
    // the page or navigating back and forth doesn't inflate the count.
    const sessionKey = `viewed-${slug}`
    const alreadyCounted = sessionStorage.getItem(sessionKey)
    const url = alreadyCounted
      ? `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${slug}/`
      : `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${slug}/up`

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setViews(data.count)
        if (!alreadyCounted) sessionStorage.setItem(sessionKey, '1')
      })
      .catch(() => setViews(null))
  }, [slug])

  if (views === null) return null

  return (
    <p className="viewCounter">
      {views.toLocaleString()} {views === 1 ? 'person has' : 'people have'} viewed this listing
    </p>
  )
}
