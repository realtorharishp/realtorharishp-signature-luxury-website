import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

function App() {
  const properties = [
    { title: '9650 Amberwoods Lane', city: 'Frisco, TX', price: '$549,999', details: '3 Bed • 2.5 Bath • 2,593 Sq Ft' },
    { title: '14839 Story Lane', city: 'Frisco, TX', price: '$923,631', details: '4 Bed • 3.5 Bath • 3,593 Sq Ft' },
    { title: '2935 Shetland Drive', city: 'Aubrey, TX', price: '$318,000', details: '3 Bed • 2 Bath • 1,792 Sq Ft' },
    { title: '400 Stonebrook Pkwy #303', city: 'Frisco, TX', price: '$429,999', details: 'Commercial • 1,225 Sq Ft' }
  ]

  return (
    <div>
      <header className="navbar">
        <a href="#home" className="brand">
          <img src="/rek-logo.png" alt="REKonnection Real Estate Logo" />
        </a>
        <nav>
          <a href="#home">Home</a><a href="#listings">Listings</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <a href="tel:9725520158" className="callButton">Call Harish</a>
      </header>

      <section id="home" className="hero">
        <div>
          <p className="eyebrow">REKonnection Real Estate</p>
          <h1>Reconnecting You <span>To Your Future</span></h1>
          <p className="subtitle">Luxury real estate representation for buying, selling, leasing, commercial opportunities, and investment properties across North Texas.</p>
          <div className="buttons">
            <a href="#listings" className="btnGold">View Listings</a>
            <a href="#contact" className="btnOutline">Schedule Consultation</a>
          </div>
          <div className="agent">
            <img className="agentImage" src="/harish-patel.png" alt="Harish Patel Realtor" />
            <div>
              <h3>Harish Patel</h3><p>Realtor®</p><p>972-552-0158</p><p>realtor.harishp@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="heroCard">
          <div className="logoPanel"><img src="/rek-logo.png" alt="REKonnection Logo" /></div>
        </div>
      </section>

      <section id="listings" className="section light">
        <p className="eyebrow dark">Featured Listings</p>
        <h2>Premium North Texas Properties</h2>
        <p className="sectionIntro">Discover luxury homes, lease opportunities, commercial properties, and investment-ready listings.</p>
        <div className="grid">
          {properties.map((p, i) => (
            <div className="card" key={i}>
              <div className="cardImage">Property Image</div>
              <div className="cardBody"><h3>{p.price}</h3><h4>{p.title}</h4><p>{p.city}</p><p>{p.details}</p><button>View Details</button></div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow dark">Services</p>
        <h2>Real Estate Services Built Around Your Goals</h2>
        <div className="services">
          {['Buy', 'Sell', 'Lease', 'Invest', 'Commercial'].map(s => (
            <div className="service" key={s}><div className="icon"></div><h3>{s}</h3><p>Personalized real estate guidance tailored to your unique goals.</p></div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="aboutPhotoWrap"><img src="/harish-patel.png" alt="Harish Patel" /></div>
        <div>
          <p className="eyebrow dark">Meet Your Realtor</p>
          <h2>Harish Patel</h2>
          <p>Harish helps North Texas clients buy, sell, lease, and invest with confidence through premium marketing, strong communication, and relationship-first service.</p>
          <a href="tel:9725520158" className="btnGold inlineButton">Call 972-552-0158</a>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>
        <h2>Ready To Make Your Next Move?</h2>
        <p>Let’s create a strategy for buying, selling, leasing, or investing in North Texas real estate.</p>
        <form><input placeholder="Your Name" /><input placeholder="Phone Number" /><textarea placeholder="Tell me about your real estate goals"></textarea><button type="button">Send Message</button></form>
      </section>

      <div className="mobileSticky"><a href="tel:9725520158">Call</a><a href="mailto:realtor.harishp@gmail.com">Email</a></div>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
