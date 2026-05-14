import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

function App() {


  const properties = [
    {
      number: 1,
      status: 'Residential Sale',
      title: '9650 Amberwoods Lane',
      city: 'Frisco, TX',
      price: '$549,999',
      image: '/property-1.jpg',
      facts: ['3 Bed', '2.5 Bath', '2,593 Sq Ft', 'Built 2013', '2 Car Garage', 'Dedicated Office', 'Dining Room', 'Media Room']
    },
    {
      number: 2,
      status: 'Residential Sale',
      title: '14839 Story Lane',
      city: 'Frisco, TX 75035',
      price: '$923,631',
      image: '/property-2.jpg',
      facts: ['4 Bed', '3.5 Bath', '3,593 Sq Ft', 'Built 2011', '3 Car Garage', 'Dedicated Office', 'Dining Room', 'Media & Game Room']
    },
    {
      number: 3,
      status: 'Residential Sale',
      title: '2935 Shetland Drive',
      city: 'Aubrey, TX',
      price: '$318,000',
      image: '/property-3.jpg',
      facts: ['3 Bed', '2 Bath', '1,792 Sq Ft', 'Built 2023', '2 Car Garage', 'Park Facing', 'Huge Backyard']
    },
    {
      number: 4,
      status: 'Commercial Property',
      title: '400 Stonebrook Pkwy #303',
      city: 'Frisco, TX',
      price: '$429,999',
      image: '/property-4.jpg',
      facts: ['4 Offices', '1 Restroom', '1,225 Sq Ft', 'Dedicated Reception']
    },
    {
      number: 5,
      status: 'Residential Lease',
      title: '2900 Galveston Street',
      city: 'Plano, TX 75075',
      price: '$2,799 / Month',
      image: '/property-5.jpg',
      facts: ['3 Bed', '2.5 Bath', '1,870 Sq Ft', 'Built 2018']
    },
    {
      number: 6,
      status: 'Residential Lease',
      title: '1009 Village Wood Ct',
      city: 'Arlington, TX',
      price: '$3,249 / Month',
      image: '/property-6.jpg',
      facts: ['4 Bed', '2.5 Bath', '2,336 Sq Ft', 'Built 1987']
    },
    {
      number: 7,
      status: 'Residential Lease',
      title: '615 Hemming Way',
      city: 'McKinney, TX 75069',
      price: '$2,239 / Month',
      image: '/property-7.jpg',
      facts: ['4 Bed', '2 Bath', '1,605 Sq Ft', 'Built 2024']
    },
    {
      number: 8,
      status: 'Investor Opportunity',
      title: '4414 Silverweed',
      city: 'Melissa, TX 75454',
      price: '$379,999',
      image: '/property-8.jpg',
      facts: ['3 Bed', '2.5 Bath', '1,862 Sq Ft', 'Built 2024', 'Leased at $2,676 / Month', 'Huge Backyard', 'Perfect for Investors']
    }
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
        <p className="sectionIntro">Explore residential sales, lease homes, commercial space, and investor-ready opportunities represented by Harish Patel.</p>

        <div className="propertyGrid">
          {properties.map((p) => (
            <article className="propertyCard" key={p.number}>
              <div className="imageWrap">
                <img src={p.image} alt={`${p.title}, ${p.city}`} />
                <div className="numberBadge">{p.number}</div>
                <div className="statusBadge">{p.status}</div>
              </div>

              <div className="propertyBody">
                <p className="propertyPrice">{p.price}</p>
                <h3>{p.title}</h3>
                <p className="propertyCity">{p.city}</p>

                <div className="facts">
                  {p.facts.map((fact) => <span key={fact}>{fact}</span>)}
                </div>

                <a className="propertyButton" href="#contact">Schedule Showing</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow dark">Services</p>
        <h2>Real Estate Services Built Around Your Goals</h2>
        <div className="services">
          {[
            ['Buy', 'Find the right home with expert local guidance.'],
            ['Sell', 'Premium listing presentation, pricing strategy, and negotiation.'],
            ['Lease', 'Lease homes faster with polished marketing and clear communication.'],
            ['Invest', 'Identify income-producing and long-term real estate opportunities.'],
            ['Commercial', 'Support for office and commercial real estate transactions.']
          ].map(([s, d]) => (
            <div className="service" key={s}><div className="icon"></div><h3>{s}</h3><p>{d}</p></div>
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

     <form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="f4aedf9e-e6a7-4792-aa46-6783dd738aa8" />

  <input type="text" name="name" placeholder="Your Name" required />
  <input type="text" name="phone" placeholder="Phone Number" required />
  <input type="email" name="email" placeholder="Email Address" required />

  <select name="interest" required>
    <option value="">I am interested in...</option>
    <option>Buying</option>
    <option>Selling</option>
    <option>Leasing</option>
    <option>Investing</option>
    <option>Commercial</option>
  </select>

  <textarea name="message" placeholder="Tell me about your real estate goals" required></textarea>

  <input type="hidden" name="subject" value="New Website Lead - REKonnection" />

  <button type="submit">Send Message</button>
</form>
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />
        <p>Harish Patel • Realtor® • 972-552-0158 • realtor.harishp@gmail.com</p>
        <p>Residential | Commercial | Leasing | Investment</p>
      </footer>

      <div className="mobileSticky"><a href="tel:9725520158">Call</a><a href="mailto:realtor.harishp@gmail.com">Email</a></div>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
