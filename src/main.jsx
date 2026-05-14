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
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">REKonnection Real Estate</p>
          <h1>Reconnecting You <span>To Your Future</span></h1>
          <p className="subtitle">Luxury real estate representation for buying, selling, leasing, commercial opportunities, and investment properties across North Texas.</p>
          <div className="buttons">
            <a href="#contact" className="btnGold">Schedule Consultation</a>
            <a href="#listings" className="btnOutline">View Listings</a>
          </div>
          <div className="agent">
            <div className="agentPhoto">HP</div>
            <div>
              <h3>Harish Patel</h3>
              <p>Realtor®</p>
              <p>972-552-0158</p>
              <p>realtor.harishp@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="heroCard">
          <div className="imagePlaceholder">Luxury Property Image</div>
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
              <div className="cardBody">
                <h3>{p.price}</h3>
                <h4>{p.title}</h4>
                <p>{p.city}</p>
                <p>{p.details}</p>
                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow dark">Services</p>
        <h2>Real Estate Services Built Around Your Goals</h2>
        <div className="services">
          {['Buy', 'Sell', 'Lease', 'Invest', 'Commercial'].map(s => (
            <div className="service" key={s}>
              <div className="icon"></div>
              <h3>{s}</h3>
              <p>Personalized real estate guidance tailored to your unique goals.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>
        <h2>Ready To Make Your Next Move?</h2>
        <p>Let’s create a strategy for buying, selling, leasing, or investing in North Texas real estate.</p>
        <form>
          <input placeholder="Your Name" />
          <input placeholder="Phone Number" />
          <textarea placeholder="Tell me about your real estate goals"></textarea>
          <button type="button">Send Message</button>
        </form>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
