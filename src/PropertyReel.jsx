import React from 'react'

const REEL_STYLE = `
  .preel-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 520px;
    overflow: hidden;
    background: #000;
    cursor: pointer;
    font-family: Georgia, serif;
  }

  /* Progress bar */
  .preel-prog {
    position: absolute;
    top: 0; left: 0;
    height: 3px;
    width: 0%;
    background: #d4af37;
    z-index: 30;
    transition: none;
  }
  .preel-prog.running {
    transition: width linear;
  }

  /* Top bar */
  .preel-top {
    position: absolute;
    top: 0; left: 0; right: 0;
    padding: 22px 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
  }
  .preel-brand-n {
    color: #d4af37;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: Arial, sans-serif;
    font-weight: 700;
  }
  .preel-brand-s {
    color: rgba(255,255,255,0.6);
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: Arial, sans-serif;
    margin-top: 3px;
  }
  .preel-counter {
    color: rgba(255,255,255,0.5);
    font-size: 12px;
    letter-spacing: 3px;
    font-family: Arial, sans-serif;
  }

  /* Slides */
  .preel-slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 1.4s ease-in-out;
    z-index: 1;
  }
  .preel-slide.active { opacity: 1; z-index: 2; }

  .preel-slide img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.08);
  }
  .preel-slide.active img { animation: preel-kb 6s ease-out forwards; }
  .preel-slide.active.alt img { animation: preel-kb2 6s ease-out forwards; }

  @keyframes preel-kb {
    0%   { transform: scale(1.08) translate(1.5%, 0.8%); }
    100% { transform: scale(1)    translate(0, 0); }
  }
  @keyframes preel-kb2 {
    0%   { transform: scale(1.08) translate(-1.5%, -0.8%); }
    100% { transform: scale(1)    translate(0, 0); }
  }

  /* Gradient overlay */
  .preel-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
      rgba(0,0,0,0.45) 0%,
      rgba(0,0,0,0)    30%,
      rgba(0,0,0,0)    55%,
      rgba(0,0,0,0.82) 100%);
    z-index: 3;
  }

  /* Bottom info */
  .preel-bot {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 28px 40px 48px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    pointer-events: none;
  }
  .preel-room {
    color: #d4af37;
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-family: Arial, sans-serif;
    margin-bottom: 8px;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;
  }
  .preel-title {
    color: #fff;
    font-size: 30px;
    font-weight: normal;
    line-height: 1.25;
    max-width: 560px;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s;
  }
  .preel-pinfo {
    text-align: right;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.7s ease 0.9s, transform 0.7s ease 0.9s;
  }
  .preel-slide.active .preel-room,
  .preel-slide.active .preel-title,
  .preel-slide.active .preel-pinfo {
    opacity: 1;
    transform: translateY(0);
  }
  .preel-addr  { color: #fff; font-size: 15px; font-family: Arial, sans-serif; font-weight: 700; }
  .preel-city  { color: rgba(255,255,255,0.65); font-size: 12px; font-family: Arial, sans-serif; margin-top: 2px; }
  .preel-price { color: #d4af37; font-size: 22px; font-family: Arial, sans-serif; font-weight: 700; margin-top: 6px; }

  /* Nav arrows */
  .preel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.28);
    border: 1px solid rgba(212,175,55,0.45);
    color: #d4af37;
    width: 50px; height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 26px;
    display: flex; align-items: center; justify-content: center;
    z-index: 15;
    transition: background 0.3s;
    line-height: 1;
  }
  .preel-nav:hover { background: rgba(212,175,55,0.28); }
  .preel-nav.left  { left: 22px; }
  .preel-nav.right { right: 22px; }

  /* Dots */
  .preel-dots {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    z-index: 15;
  }
  .preel-dot {
    width: 6px; height: 6px;
    border-radius: 3px;
    background: rgba(255,255,255,0.3);
    border: none;
    cursor: pointer;
    transition: all 0.35s ease;
  }
  .preel-dot.active { background: #d4af37; width: 22px; }

  /* Pause icon */
  .preel-pause {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255,255,255,0.75);
    font-size: 64px;
    z-index: 20;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }
  .preel-pause.show { opacity: 1; }

  /* CTA finale */
  .preel-cta {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 8;
    opacity: 0;
    pointer-events: none;
    transition: opacity 1.2s ease;
  }
  .preel-cta.show { opacity: 1; pointer-events: auto; }
  .preel-cbox {
    background: rgba(0,0,0,0.78);
    border: 1px solid rgba(212,175,55,0.55);
    padding: 44px 64px;
    text-align: center;
    max-width: 520px;
  }
  .preel-cey {
    color: #d4af37;
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-family: Arial, sans-serif;
    margin-bottom: 14px;
  }
  .preel-ch   { color: #fff; font-size: 34px; margin-bottom: 6px; }
  .preel-csub { color: rgba(255,255,255,0.6); font-size: 13px; font-family: Arial, sans-serif; margin-bottom: 6px; }
  .preel-cprice { color: #d4af37; font-size: 26px; font-family: Arial, sans-serif; font-weight: 700; margin-bottom: 26px; }
  .preel-stats {
    display: flex; justify-content: center; gap: 24px; margin-bottom: 28px;
  }
  .preel-stat { color: rgba(255,255,255,0.7); font-size: 12px; font-family: Arial, sans-serif; }
  .preel-stat strong { display: block; color: #fff; font-size: 18px; }
  .preel-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .preel-btn-gold {
    display: inline-block;
    background: #d4af37; color: #000;
    padding: 13px 28px;
    font-family: Arial, sans-serif; font-size: 11px;
    letter-spacing: 2.5px; text-transform: uppercase;
    text-decoration: none; font-weight: 700;
  }
  .preel-btn-out {
    display: inline-block;
    background: transparent; color: #d4af37;
    border: 1px solid #d4af37;
    padding: 13px 28px;
    font-family: Arial, sans-serif; font-size: 11px;
    letter-spacing: 2.5px; text-transform: uppercase;
    text-decoration: none; font-weight: 700;
  }
  .preel-replay {
    display: block; margin: 18px auto 0;
    background: none; border: none;
    color: rgba(255,255,255,0.4);
    font-size: 11px; letter-spacing: 2px;
    text-transform: uppercase; font-family: Arial, sans-serif;
    cursor: pointer;
  }
  .preel-replay:hover { color: rgba(255,255,255,0.8); }
`

export default function PropertyReel({
  images,
  address,
  city,
  price,
  beds,
  baths,
  sqft,
  built,
  listingUrl,
  tourUrl = 'https://calendly.com/realtor-harishp/30min',
  phone = '972-552-0158',
  roomLabels = [],
  slideTitles = [],
  duration = 4800,
}) {
  const [current, setCurrent]   = React.useState(0)
  const [paused, setPaused]     = React.useState(false)
  const [ctaShown, setCtaShown] = React.useState(false)
  const timerRef  = React.useRef(null)
  const progRef   = React.useRef(null)
  const pausedRef = React.useRef(false)

  const total = images.length

  const animateProgress = React.useCallback(() => {
    const el = progRef.current
    if (!el) return
    el.classList.remove('running')
    el.style.width = '0%'
    void el.offsetWidth
    el.style.transitionDuration = (duration / 1000) + 's'
    el.classList.add('running')
    el.style.width = '100%'
  }, [duration])

  const goTo = React.useCallback((idx) => {
    const next = ((idx % total) + total) % total
    setCurrent(next)
    setCtaShown(prev => next !== total - 1 ? false : prev)
    animateProgress()
    clearInterval(timerRef.current)
    if (!pausedRef.current) {
      timerRef.current = setInterval(() => {
        setCurrent(c => {
          const n = (c + 1) % total
          animateProgress()
          if (n === total - 1) setTimeout(() => setCtaShown(true), 2200)
          else setCtaShown(false)
          return n
        })
      }, duration)
    }
  }, [total, duration, animateProgress])

  React.useEffect(() => {
    animateProgress()
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        const n = (c + 1) % total
        animateProgress()
        if (n === total - 1) setTimeout(() => setCtaShown(true), 2200)
        else setCtaShown(false)
        return n
      })
    }, duration)
    return () => clearInterval(timerRef.current)
  }, []) // eslint-disable-line

  const togglePause = () => {
    const nowPaused = !pausedRef.current
    pausedRef.current = nowPaused
    setPaused(nowPaused)
    if (nowPaused) {
      clearInterval(timerRef.current)
      if (progRef.current) progRef.current.style.transitionDuration = '0s'
    } else {
      goTo(current + 1)
    }
  }

  const handleClick = (e) => {
    if (e.target.closest('.preel-nav, .preel-dot, .preel-cta')) return
    togglePause()
  }

  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') goTo(current + 1)
      if (e.key === 'ArrowLeft')  goTo(current - 1)
      if (e.key === ' ')          { e.preventDefault(); togglePause() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current]) // eslint-disable-line

  return (
    <>
      <style>{REEL_STYLE}</style>
      <div className="preel-wrap" onClick={handleClick}>

        <div className="preel-prog running" ref={progRef} />

        <div className="preel-top">
          <div>
            <div className="preel-brand-n">REKonnection Real Estate</div>
            <div className="preel-brand-s">Harish Patel · Realtor® · {phone}</div>
          </div>
          <div className="preel-counter">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
        </div>

        {images.map((src, i) => (
          <div
            key={src}
            className={`preel-slide${i % 2 ? ' alt' : ''}${i === current ? ' active' : ''}`}
          >
            <img
              src={src}
              alt={roomLabels[i] || `Photo ${i + 1}`}
              loading={i < 4 ? 'eager' : 'lazy'}
            />
            <div className="preel-overlay" />
            <div className="preel-bot">
              <div>
                <div className="preel-room">{roomLabels[i] || ''}</div>
                <div className="preel-title">{slideTitles[i] || ''}</div>
              </div>
              <div className="preel-pinfo">
                <div className="preel-addr">{address}</div>
                <div className="preel-city">{city}</div>
                <div className="preel-price">{price}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="preel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`preel-dot${i === current ? ' active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={e => { e.stopPropagation(); goTo(i) }}
            />
          ))}
        </div>

        <button className="preel-nav left"  aria-label="Previous" onClick={e => { e.stopPropagation(); goTo(current - 1) }}>&#8249;</button>
        <button className="preel-nav right" aria-label="Next"     onClick={e => { e.stopPropagation(); goTo(current + 1) }}>&#8250;</button>

        <div className={`preel-pause${paused ? ' show' : ''}`}>&#10074;&#10074;</div>

        <div className={`preel-cta${ctaShown ? ' show' : ''}`}>
          <div className="preel-cbox">
            <p className="preel-cey">Featured Listing</p>
            <h2 className="preel-ch">{address}</h2>
            <p className="preel-csub">{city}</p>
            <p className="preel-cprice">{price}</p>
            <div className="preel-stats">
              {beds  && <div className="preel-stat"><strong>{beds}</strong>Beds</div>}
              {baths && <div className="preel-stat"><strong>{baths}</strong>Baths</div>}
              {sqft  && <div className="preel-stat"><strong>{sqft}</strong>Sq Ft</div>}
              {built && <div className="preel-stat"><strong>{built}</strong>Built</div>}
            </div>
            <div className="preel-btns">
              <a className="preel-btn-gold" href={tourUrl} target="_blank" rel="noopener noreferrer">Schedule Tour</a>
              <a className="preel-btn-gold" href={`tel:${phone.replace(/\D/g,'')}`}>Call {phone}</a>
              {listingUrl && <a className="preel-btn-out" href={listingUrl}>View Listing</a>}
            </div>
            <button
              className="preel-replay"
              onClick={e => {
                e.stopPropagation()
                setCtaShown(false)
                pausedRef.current = false
                setPaused(false)
                goTo(0)
              }}
            >
              ↺ Watch Again
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
