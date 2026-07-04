import React from 'react'
import { Counter } from 'counterapi'

// One free, no-signup-required counter "workspace" for the whole site.
// Each property page passes its own unique `slug`, so every listing gets
// its own independent view count inside this workspace.
const counter = new Counter({ workspace: 'rekonnection-real-estate' })

export default function ViewCounter({ slug }) {
  const [views, setViews] = React.useState(null)

  React.useEffect(() => {
    if (!slug) return

    // Only increment once per browser session per listing, so refreshing
    // the page or navigating back and forth doesn't inflate the count.
    const sessionKey = `viewed-${slug}`
    const alreadyCounted = sessionStorage.getItem(sessionKey)
    const request = alreadyCounted ? counter.get(slug) : counter.up(slug)

    request
      .then((result) => {
        setViews(result.value)
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
