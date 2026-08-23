import React from 'react'

const COUNTER_NAMESPACE = 'rekonnection-real-estate'

export default function ViewCounter({ slug }) {
  const [views, setViews] = React.useState(null)

  React.useEffect(() => {
    if (!slug) return

    const sessionKey = `viewed-${slug}`
    const alreadyCounted = sessionStorage.getItem(sessionKey)

    const url = alreadyCounted
      ? `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${slug}/`
      : `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${slug}/up`

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Counter API returned ${response.status}`)
        }

        return response.json()
      })
      .then((data) => {
        const count = Number(data?.count)

        if (!Number.isFinite(count)) {
          throw new Error('Invalid counter response')
        }

        setViews(count)

        if (!alreadyCounted) {
          sessionStorage.setItem(sessionKey, '1')
        }
      })
      .catch((error) => {
        console.warn('View counter unavailable:', error)
        setViews(null)
      })
  }, [slug])

  if (!Number.isFinite(views)) return null

  return (
    <p className="viewCounter">
      {views.toLocaleString()} {views === 1 ? 'person has' : 'people have'} viewed this listing
    </p>
  )
}