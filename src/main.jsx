import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const storyImages = Array.from({ length: 20 }, (_, i) => `/listings/14839-story-lane/Images/story-${i + 1}.jpg`)

function Header() {
  return (
    <header className="navbar">
      <a href="/" className="brand">
        <img src="/rek-logo.png" alt="REKonnection Real Estate Logo" />
      </a>
      <nav>
        <a href="/#home">Home</a>
        <a href="/#listings">Listings</a>
        <a href="/#services">Services</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a href="tel:9725520158" className="callButton">Call Harish</a>
    </header>
  )
}

function ContactForm() {
  return (
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
        <option>14839 Story Lane Private Tour</option>
      </select>
      <textarea name="message" placeholder="Tell me about your real estate goals" required></textarea>
      <input type="hidden" name="subject" value="New Website Lead - REKonnection" />
      <button type="submit">Send Message</button>
    </form>
  )
}

function FloatingButtons() {
  return (
    <>
      <div className="floatingButtons">
        <a href="tel:9725520158">📞</a>
        <a href="sms:9725520158">💬</a>
        <a href="mailto:realtor.harishp@gmail.com">📧</a>
      </div>
      <div className="mobileSticky">
        <a href="tel:9725520158">Call</a>
        <a href="mailto:realtor.harishp@gmail.com">Email</a>
      </div>
    </>
  )
}

function ListingPage() {
  const highlights = ['North Facing Lot','3 Car Garage','$15K Seller Incentive','Large Gourmet Kitchen','Hardwood Floors','New Tankless Water Heater','Pre-Inspected Home','Lightning Protection System','Shelfed Garage Storage','Fresh Paint','Upgraded Bathrooms','60ft Ceiling Height Cabinets']
  const standouts = [
    ['Flexible $15K Incentive','Use the seller concession toward closing costs, rate buydown, price reduction, custom upgrades, or other buyer needs.'],
    ['Move-In Ready Confidence','Pre-inspected prior to listing with major items remediated for peace of mind.'],
    ['Luxury Highland Homes Design','Stone elevation, hardwood floors, custom maple cabinetry, double ovens, and elegant architectural details.'],
    ['Entertainer Floor Plan','Two bedrooms on the first floor plus upstairs game room and media room.'],
    ['Large Backyard','Impressive 40-foot deep backyard with potential for future pool design.'],
    ['Community Lifestyle','Mature trees, resort-style pool, scenic walking trails, and two elementary schools within the community.']
  ]

  return (
    <div>
      <Header />
      <section className="listingPageHero">
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">← Back to Listings</a>
          <p className="eyebrow">Featured Listing</p>
          <h1>14839 Story Lane</h1>
          <p>Frisco, TX 75035 • North Facing • 3 Car Garage • Highland Homes</p>
          <p className="listingPrice">$923,631 • Seller Offering $15,000 Incentive</p>
          <div className="buttons">
            <a href="#private-tour" className="btnGold">Schedule Private Tour</a>
            <a href="tel:9725520158" className="btnOutline">Call Harish</a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>4</strong>Bedrooms</div>
        <div><strong>3.5</strong>Bathrooms</div>
        <div><strong>3,593</strong>Sq Ft</div>
        <div><strong>2011</strong>Built</div>
        <div><strong>3</strong>Car Garage</div>
        <div><strong>$15K</strong>Incentive</div>
      </section>

      <section className="listingSection">
        <h2>Exceptional Value in Frisco</h2>
        <p className="listingDescription">Experience incredible value with this stunning Highland Homes residence featuring a flexible $15,000 seller concession. This incentive can be used toward a mortgage rate buydown, price reduction, custom upgrades, or closing costs. The home makes a grand first impression with a beautiful stone elevation and a modern layout designed for both luxury and functionality.</p>
        <p className="listingDescription">The gourmet kitchen is a chef’s dream with maple custom cabinets, double ovens, a dedicated planning desk, expansive storage, and 60ft ceiling-height cabinets. The highly desirable floor plan includes two bedrooms on the first floor while the upstairs features both a game room and media room, perfect for entertaining.</p>
        <p className="listingDescription">Fresh paint, upgraded bathrooms, new energy-efficient windows, a new tankless water heater, lightning protection, custom shelved garage storage, and a pre-inspected condition make this home move-in ready with confidence.</p>
        <div className="highlightGrid">
          {highlights.map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <section className="listingSection alt">
        <h2>Photo Gallery</h2>
        <div className="photoGallery">
          {storyImages.map((src, index) => <img src={src} alt={`14839 Story Lane photo ${index + 1}`} key={src} />)}
        </div>
      </section>

      <section className="listingSection">
        <h2>Why This Home Stands Out</h2>
        <div className="standoutGrid">
          {standouts.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section id="private-tour" className="tourCTA">
        <p className="eyebrow">Private Tour</p>
        <h2>Schedule Your Showing Today</h2>
        <p>Contact Harish Patel to tour 14839 Story Lane or request more details about the $15,000 seller incentive.</p>
        <div className="tourActions">
          <a className="btnGold" href="tel:9725520158">Call 972-552-0158</a>
          <a className="btnOutline" href="sms:9725520158">Text Harish</a>
          <a className="btnGold" href="https://calendly.com/realtor-harishp/30min" target="_blank">Book Consultation</a>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>
        <h2>Interested in 14839 Story Lane?</h2>
        <p>Submit your information below and Harish will follow up with private tour options.</p>
        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />
        <p>Harish Patel • Realtor® • 972-552-0158 • realtor.harishp@gmail.com</p>
        <p>Residential | Commercial | Leasing | Investment</p>
      </footer>
      <FloatingButtons />
    </div>
  )
}

function HomePage() {
  const properties = [
    { number: 1, status: 'Residential Sale', title: '9650 Amberwoods Lane', city: 'Frisco, TX', price: '$549,999', image: '/property-1.jpg', facts: ['3 Bed', '2.5 Bath', '2,593 Sq Ft', 'Built 2013', '2 Car Garage', 'Dedicated Office', 'Dining Room', 'Media Room'] },
    { number: 2, status: 'Residential Sale', title: '14839 Story Lane', city: 'Frisco, TX 75035', price: '$923,631', image: '/property-2.jpg', facts: ['4 Bed', '3.5 Bath', '3,593 Sq Ft', 'Built 2011', '3 Car Garage', 'Dedicated Office', 'Dining Room', 'Media & Game Room'], link: '/listings/14839-story-lane' },
    { number: 3, status: 'Residential Sale', title: '2935 Shetland Drive', city: 'Aubrey, TX', price: '$318,000', image: '/property-3.jpg', facts: ['3 Bed', '2 Bath', '1,792 Sq Ft', 'Built 2023', '2 Car Garage', 'Park Facing', 'Huge Backyard'] },
    { number: 4, status: 'Commercial Property', title: '400 Stonebrook Pkwy #303', city: 'Frisco, TX', price: '$429,999', image: '/property-4.jpg', facts: ['4 Offices', '1 Restroom', '1,225 Sq Ft', 'Dedicated Reception'] },
    { number: 5, status: 'Residential Lease', title: '2900 Galveston Street', city: 'Plano, TX 75075', price: '$2,799 / Month', image: '/property-5.jpg', facts: ['3 Bed', '2.5 Bath', '1,870 Sq Ft', 'Built 2018'] },
    { number: 6, status: 'Residential Lease', title: '1009 Village Wood Ct', city: 'Arlington, TX', price: '$3,249 / Month', image: '/property-6.jpg', facts: ['4 Bed', '2.5 Bath', '2,336 Sq Ft', 'Built 1987'] },
    { number: 7, status: 'Residential Lease', title: '615 Hemming Way', city: 'McKinney, TX 75069', price: '$2,239 / Month', image: '/property-7.jpg', facts: ['4 Bed', '2 Bath', '1,605 Sq Ft', 'Built 2024'] },
    { number: 8, status: 'Investor Opportunity', title: '4414 Silverweed', city: 'Melissa, TX 75454', price: '$379,999', image: '/property-8.jpg', facts: ['3 Bed', '2.5 Bath', '1,862 Sq Ft', 'Built 2024', 'Leased at $2,676 / Month', 'Huge Backyard', 'Perfect for Investors'] }
  ]

  return (
    <div>
      <Header />
      <section id="home" className="hero">
        <div>
          <p className="eyebrow">REKonnection Real Estate</p>
          <h1>Reconnecting You <span>To Your Future</span></h1>
          <p className="subtitle">Luxury real estate representation for buying, selling, leasing, commercial opportunities, and investment properties across North Texas.</p>
          <div className="buttons"><a href="#listings" className="btnGold">View Listings</a><a href="#contact" className="btnOutline">Schedule Consultation</a></div>
          <div className="agent"><img className="agentImage" src="/harish-patel.png" alt="Harish Patel Realtor" /><div><h3>Harish Patel</h3><p>Realtor®</p><p>972-552-0158</p><p>realtor.harishp@gmail.com</p></div></div>
        </div>
        <div className="heroCard"><div className="logoPanel"><img src="/rek-logo.png" alt="REKonnection Logo" /></div></div>
      </section>

      <section className="featuredListing">
        <div className="featuredListingInner">
          <img src="/listings/14839-story-lane/Images/story-1.jpg" alt="14839 Story Lane Frisco TX" />
          <div className="featuredCopy">
            <p className="eyebrow dark">Featured Listing</p>
            <h2>14839 Story Lane, Frisco</h2>
            <div className="incentiveBanner">Seller Offering $15,000 Incentive</div>
            <p>North-facing Highland Homes residence with 4 bedrooms, 3.5 baths, 3-car garage, fresh paint, upgraded baths, hardwood floors, large kitchen, new tankless water heater, and a pre-inspected move-in ready condition.</p>
            <a href="/listings/14839-story-lane" className="btnGold">View Full Details</a>
          </div>
        </div>
      </section>

      <section id="listings" className="section light">
        <p className="eyebrow dark">Featured Listings</p><h2>Premium North Texas Properties</h2><p className="sectionIntro">Explore residential sales, lease homes, commercial space, and investor-ready opportunities represented by Harish Patel.</p>
        <div className="propertyGrid">
          {properties.map((p) => (
            <article className="propertyCard" key={p.number}>
              <div className="imageWrap"><img src={p.image} alt={`${p.title}, ${p.city}`} /><div className="numberBadge">{p.number}</div><div className="statusBadge">{p.status}</div></div>
              <div className="propertyBody"><p className="propertyPrice">{p.price}</p><h3>{p.title}</h3><p className="propertyCity">{p.city}</p><div className="facts">{p.facts.map((fact) => <span key={fact}>{fact}</span>)}</div><a className="propertyButton" href={p.link || '#contact'}>{p.link ? 'View Details' : 'Schedule Showing'}</a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow dark">Services</p><h2>Real Estate Services Built Around Your Goals</h2>
        <div className="services">
          {[['Buy','Find the right home with expert local guidance.'],['Sell','Premium listing presentation, pricing strategy, and negotiation.'],['Lease','Lease homes faster with polished marketing and clear communication.'],['Invest','Identify income-producing and long-term real estate opportunities.'],['Commercial','Support for office and commercial real estate transactions.']].map(([s,d]) => <div className="service" key={s}><div className="icon"></div><h3>{s}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="whyWork"><p className="eyebrow dark">Why Work With Harish</p><h2>Local Expertise. Premium Marketing. Client-First Service.</h2><div className="whyGrid"><div><h3>Market Expertise</h3><p>Guidance backed by North Texas market knowledge and pricing strategy.</p></div><div><h3>Data-Driven Advice</h3><p>Smart decisions supported by real market numbers and analysis.</p></div><div><h3>Residential & Leasing</h3><p>Experience helping buyers, sellers, landlords, tenants, and investors.</p></div><div><h3>Premium Marketing</h3><p>Luxury flyers, social media campaigns, listing exposure, and branded presentation.</p></div><div><h3>Investor Guidance</h3><p>Support for rental income, lease strategy, and long-term investment goals.</p></div><div><h3>Relationship First</h3><p>Patient, responsive, and personal guidance from start to closing.</p></div></div></section>

      <section className="testimonials"><p className="eyebrow dark">Client Testimonials</p><h2>Trusted By North Texas Families & Investors</h2><div className="testimonialGrid"><div><p>“We are truly grateful for Harish Patel’s exceptional support and guidance throughout our home search journey. His calm approach and thoughtful advice helped us navigate every stage with confidence and ease. He felt more like an elder brother walking alongside us.”</p><h4>— Happy Homeowners</h4></div><div><p>“Mr. Patel is truly excellent to work with. He represented us both as renters and later as homebuyers, making every step smooth and stress-free. He is kind, patient, and very knowledgeable.”</p><h4>— Happy Clients</h4></div><div><p>“Mr. Harish is an exceptional real estate professional with deep market knowledge. He was prompt, data-driven, and always guided us while keeping our needs at the center.”</p><h4>— Satisfied Clients</h4></div></div></section>

      <section className="areasServed"><p className="eyebrow dark">Areas Served</p><h2>Helping Clients Across North Texas</h2><div className="areaGrid">{['Frisco','Plano','McKinney','Little Elm','Aubrey','Melissa','Prosper','Celina','Allen','Arlington'].map((city) => <div className="areaPill" key={city}>{city}</div>)}</div></section>

      <section className="homeValue"><div><p className="eyebrow">Home Value</p><h2>Curious What Your Home Is Worth?</h2><p>Get a personalized North Texas home value estimate and selling strategy from Harish Patel.</p></div><a href="#contact" className="btnGold">Request Home Valuation</a><a href="https://calendly.com/realtor-harishp/30min" target="_blank" className="btnGold">Book a Consultation</a></section>

      <section id="about" className="about"><div className="aboutPhotoWrap"><img src="/harish-patel.png" alt="Harish Patel" /></div><div><p className="eyebrow dark">Meet Your Realtor</p><h2>Harish Patel</h2><p>Harish helps North Texas clients buy, sell, lease, and invest with confidence through premium marketing, strong communication, and relationship-first service.</p><a href="tel:9725520158" className="btnGold inlineButton">Call 972-552-0158</a></div></section>

      <section id="contact" className="contact"><p className="eyebrow">Contact Harish Patel</p><h2>Ready To Make Your Next Move?</h2><p>Let’s create a strategy for buying, selling, leasing, or investing in North Texas real estate.</p><ContactForm /></section>
      <footer><img src="/rek-logo.png" alt="REKonnection Logo" /><p>Harish Patel • Realtor® • 972-552-0158 • realtor.harishp@gmail.com</p><p>Residential | Commercial | Leasing | Investment</p></footer>
      <FloatingButtons />
    </div>
  )
}

function App() {
  return window.location.pathname === '/listings/14839-story-lane' ? <ListingPage /> : <HomePage />
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
