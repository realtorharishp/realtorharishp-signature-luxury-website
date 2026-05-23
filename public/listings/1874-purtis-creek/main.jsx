import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { listings } from './data/listings'
import { marketSections } from './data/marketActivity'
import { partners } from './data/partners'
import { testimonials } from './data/testimonials'
import { cities } from './data/cities'
import PropertyReel from './PropertyReel'

const storyImages = Array.from(
  { length: 20 },
  (_, i) => `/listings/14839-story-lane/story-${i + 1}.jpg`
)

function Header() {
  return (
    <header className="navbar">
      <a href="/" className="brand">
        <img src="/rek-logo-1.png" alt="REKonnection Real Estate Logo" />
      </a>
      <nav>
        <a href="/#home">Home</a>
        <a href="/#listings">Listings</a>
        <a href="/#services">Services</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
     <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      <SocialLinks />
      <a href="tel:9725520158" className="callButton">
        Call Harish
      </a>
    </div>
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
function FooterLinks() {
  return (
    <div style={{ marginTop: '16px' }}>
      <a
        href="/documents/information-about-brokerage-services.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#d4af37', marginRight: '18px' }}
      >
        Information About Brokerage Services
      </a>

      <a
        href="/documents/consumer-protection-notice.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#d4af37' }}
      >
        Consumer Protection Notice
      </a>
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="socialIcons">
      <a href="https://www.instagram.com/realtorharish" target="_blank" rel="noopener noreferrer">IG</a>
      <a href="https://www.facebook.com/p/Realtor-Harish-at-REKonnection-61565769466996/" target="_blank" rel="noopener noreferrer">FB</a>
      <a href="https://www.linkedin.com/in/patelharishn" target="_blank" rel="noopener noreferrer">IN</a>
      <a href="https://www.tiktok.com/@realtor.harish" target="_blank" rel="noopener noreferrer">TT</a>
      <a href="https://www.realtor.com/realestateagents/66bcfbc76e0cc7bd9220513c" target="_blank" rel="noopener noreferrer">R</a>
    </div>
  )
}

function GoogleReviewsSection() {
  return (
    <section className="googleReviews">
      <p className="eyebrow dark">Google Reviews</p>
      <h2>See What Clients Are Saying</h2>
      <p>
        Read verified Google reviews and share your experience working with
        Harish Patel and REKonnection Real Estate.
      </p>

      <div className="reviewButtons">
        <a
          href="https://share.google/4FY1ESFb6aay18YdW"
          target="_blank"
          rel="noopener noreferrer"
          className="btnGold"
        >
          View Google Profile
        </a>

        <a
          href="https://share.google/4FY1ESFb6aay18YdW"
          target="_blank"
          rel="noopener noreferrer"
          className="btnOutline"
        >
          Leave a Review
        </a>
      </div>
    </section>
  )
}

function FloatingSocialBar() {
  return (
    <div className="floatingSocialBar">
      <a href="https://www.instagram.com/realtorharish" target="_blank" rel="noopener noreferrer">📸</a>
      <a href="https://www.facebook.com/p/Realtor-Harish-at-REKonnection-61565769466996/" target="_blank" rel="noopener noreferrer">f</a>
      <a href="https://www.tiktok.com/@realtor.harish" target="_blank" rel="noopener noreferrer">♪</a>
     <a href="https://www.youtube.com/@RealtorHarish" target="_blank" rel="noopener noreferrer">▶</a>

<a href="sms:9725520158">💬</a>
    </div>
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

function ImageCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length])

  React.useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length
    const img = new Image()
    img.src = images[nextIndex]
  }, [currentIndex, images])

  return (
    <div className="carousel">
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`${title} photo ${currentIndex + 1}`}
        loading="eager"
        onError={(e) => {
          e.currentTarget.src = images[0]
        }}
      />

      <button
        type="button"
        className="carouselBtn left"
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        }
      >
        ‹
      </button>

      <button
        type="button"
        className="carouselBtn right"
        onClick={() =>
          setCurrentIndex((prev) => (prev + 1) % images.length)
        }
      >
        ›
      </button>

      <div className="carouselDots">
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            className={index === currentIndex ? 'activeDot' : ''}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

function FeaturedListingsCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredListings.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  const listing = featuredListings[currentIndex]

  return (
    <section className="featuredCarousel">
      <div className="featuredCard">
        <img src={listing.image} alt={listing.title} />

        <div className="featuredOverlay">
          <p>{listing.city}</p>
          <h2>{listing.title}</h2>

          <a href={listing.link} className="btnGold">
            View Property
          </a>
        </div>

        <button
          className="carouselBtn left"
          onClick={() =>
            setCurrentIndex(
              (prev) =>
                (prev - 1 + featuredListings.length) % featuredListings.length
            )
          }
        >
          ‹
        </button>

        <button
          className="carouselBtn right"
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % featuredListings.length)
          }
        >
          ›
        </button>
      </div>
    </section>
  )
}
function MarketActivitySection() {
 const sections = marketSections

  return (
    <section className="marketActivity">
      <p className="eyebrow dark">Market Activity</p>

      <h2>Active Real Estate Pipeline</h2>

      {sections.map((section) => (
        <div key={section.title} className="activitySection">
          <h3>{section.title}</h3>

          <div className="activityGrid">
            {section.items.map((item) => (
              <div className="activityCard" key={item.address}>
                <img src={item.image} alt={item.address} />

                <div className="activityBody">
                  <span>{item.status}</span>

                  <h4>{item.address}</h4>

                  <p>{item.city}</p>

                  <strong>{item.price}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
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
        <PropertyReel
          images={storyImages}
          address="14839 Story Lane"
          city="Frisco, TX 75035"
          price="$923,631"
          beds="4" baths="3.5" sqft="3,593" built="2011"
          listingUrl="/listings/14839-story-lane"
          roomLabels={['Primary Bath','Primary Suite','Primary Suite','Bathroom','Bedroom','Office','Entry','Breakfast Nook','Kitchen','Kitchen','Kitchen','Family Room','Family Room','Family Room','Family Room','Formal Living','Staircase','Exterior','Exterior','Exterior']}
          slideTitles={['Spa-Style Primary Bath with Soaking Tub','Primary Suite with Vaulted Ceiling','Spacious Primary Suite with Bay Windows','Updated Secondary Bathroom','Comfortable Secondary Bedroom','Private Office with French Doors','Grand Two-Story Entry Foyer','Sunlit Breakfast Nook with Built-In Desk','Gourmet Kitchen with Granite Island','Gas Cooktop & Travertine Backsplash','Open Kitchen Layout','Stone Corner Fireplace','Open Concept Living & Kitchen','Family Room with Natural Light','Spacious Family Living Area','Formal Living Room','Elegant Staircase with Iron Balusters','Stone & Brick Elevation','3-Car Garage & Curb Appeal','Beautiful Street Presence']}
        />
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

      <section className="leadMagnet">
  <h2>Get Free North Texas Home Updates</h2>

  <p>
    Receive new listings, market updates, investment opportunities,
    and open house alerts directly from Harish Patel.
  </p>

  <form action="https://api.web3forms.com/submit" method="POST">
    <input
      type="hidden"
      name="access_key"
      value="YOUR_KEY"
    />

    <input
      type="email"
      name="email"
      placeholder="Enter Your Email"
      required
    />

    <button type="submit">
      Subscribe
    </button>
  </form>
</section>
      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>
        <h2>Interested in 14839 Story Lane?</h2>
        <p>Submit your information below and Harish will follow up with private tour options.</p>
        <ContactForm />
      </section>

     <footer>
      <img src="/rek-logo.png" alt="REKonnection Logo" />

     <p>
        Harish Patel • Realtor® • 972-552-0158 •
        realtor.harishp@gmail.com
    </p>

    <p className="footerAddress">
    100 N Central Expwy, Suite #913, Richardson, TX 75080
    </p>

      <div style={{ marginTop: '16px' }}>
      <a
        href="/documents/information-about-brokerage-services.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#d4af37', marginRight: '18px' }}
      >
        Information About Brokerage Services
      </a>

    <a
      href="/documents/consumer-protection-notice.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#d4af37' }}
    >
      Consumer Protection Notice
    </a>
  </div>
</footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}
function AmberwoodsPage() {
  const amberImages = Array.from(
    { length: 15 },
    (_, i) => `/listings/9650-amberwoods-lane/amber-${i + 1}.jpg`
  )

  return (
    <div>
      <Header />

      <section
        className="listingPageHero"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.78)), url('/listings/9650-amberwoods-lane/amber-1.jpg') center/cover no-repeat"
        }}
      >
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">
            ← Back to Listings
          </a>

          <p className="eyebrow">Featured Listing</p>

          <h1>9650 Amberwoods Lane</h1>

          <p>Frisco, TX • Luxury Residential Listing</p>

          <p className="listingPrice">$549,999</p>

          <div className="buttons">
            <a href="#contact" className="btnGold">
              Schedule Private Tour
            </a>

            <a href="tel:9725520158" className="btnOutline">
              Call Harish
            </a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>3</strong>Bedrooms</div>
        <div><strong>2.5</strong>Bathrooms</div>
        <div><strong>2,593</strong>Sq Ft</div>
        <div><strong>2013</strong>Built</div>
        <div><strong>2</strong>Car Garage</div>
        <div><strong>Office</strong>+ Media</div>
      </section>

      <section className="listingSection">
        <h2>Luxury Living in Frisco</h2>

        <p className="listingDescription">
          Beautifully maintained Frisco home featuring an open-concept layout,
          spacious living areas, dedicated office, media room, dining space,
          and premium finishes throughout.
        </p>

        <PropertyReel
          images={amberImages}
          address="9650 Amberwoods Lane"
          city="Frisco, TX 75035"
          price="$549,999"
          beds="3" baths="2.5" sqft="2,593" built="2013"
          listingUrl="/listings/9650-amberwoods-lane"
          roomLabels={['Exterior','Office','Entry','Dining','Kitchen','Kitchen','Kitchen','Kitchen','Family Room','Family Room','Family Room','Family Room','Formal Living','Staircase','Exterior']}
          slideTitles={['Stunning Stone & Brick Elevation','Private Study with French Doors','Grand Two-Story Entry Foyer','Sunlit Breakfast Nook','Gourmet Kitchen with Granite Island','Custom Cabinetry & Stainless Appliances','Gas Cooktop & Travertine Backsplash','Open Concept Kitchen & Living','Floor-to-Ceiling Stone Fireplace','Expansive Open Floor Plan','Warm Stone Fireplace & Natural Light','Spacious Living Area','Elegant Formal Living Room','Wrought Iron Baluster Staircase','Beautiful Curb Appeal']}
        />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>

        <h2>Interested in 9650 Amberwoods Lane?</h2>

        <p>
          Contact Harish Patel for private showings and additional property
          information.
        </p>

        <ContactForm />
      </section>

    <footer>
      <img src="/rek-logo.png" alt="REKonnection Logo" />

     <p>
        Harish Patel • Realtor® • 972-552-0158 •
        realtor.harishp@gmail.com
      </p>

    <p className="footerAddress">
      100 N Central Expwy, Suite #913, Richardson, TX 75080
    </p>

     <FooterLinks />
    <SocialLinks />
  </footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}
function ShetlandPage() {
  const shetlandImages = Array.from(
    { length: 15 },
    (_, i) => `/listings/2935-shetland-drive/shetland-${i + 1}.jpg`
  )

  return (
    <div>
      <Header />

      <section
        className="listingPageHero"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.78)), url('/listings/2935-shetland-drive/shetland-1.jpg') center/cover no-repeat"
        }}
      >
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">
            ← Back to Listings
          </a>

          <p className="eyebrow">Featured Listing</p>

          <h1>2935 Shetland Drive</h1>

          <p>Aubrey, TX • Park Facing Home</p>

          <p className="listingPrice">$318,000</p>

          <div className="buttons">
            <a href="#contact" className="btnGold">
              Schedule Private Tour
            </a>

            <a href="tel:9725520158" className="btnOutline">
              Call Harish
            </a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>3</strong>Bedrooms</div>
        <div><strong>2</strong>Bathrooms</div>
        <div><strong>1,792</strong>Sq Ft</div>
        <div><strong>2023</strong>Built</div>
        <div><strong>2</strong>Car Garage</div>
        <div><strong>Huge</strong>Backyard</div>
      </section>

      <section className="listingSection">
        <h2>Modern Living in Aubrey</h2>

        <p className="listingDescription">
          Beautiful park-facing home featuring modern finishes, spacious living
          areas, natural light, open-concept design, and a huge backyard perfect
          for entertaining and family living.
        </p>

        <PropertyReel
          images={shetlandImages}
          address="2935 Shetland Drive"
          city="Aubrey, TX • Park Facing"
          price="$318,000"
          beds="3" baths="2" sqft="1,792" built="2023"
          listingUrl="/listings/2935-shetland-drive"
          roomLabels={['Living Room','Living Room','Living Room','Living Room','Entry','Kitchen','Kitchen','Kitchen','Kitchen & Living','Bedroom','Bathroom','Bedroom','Hallway','Exterior','Exterior']}
          slideTitles={['Open Concept Living with Kitchen Views','Modern Linear Fireplace & Living Area','Wall-Mounted TV & Cozy Living Space','Spacious Living Area with Hardwood Floors','Entry Hall & Open Floor Plan','Gas Range & White Shaker Cabinets','Full Kitchen with Stainless Appliances','Kitchen Island with Sink','Open Concept Kitchen & Living','Comfortable Secondary Bedroom','Dual Vanity Bathroom with Tub','Bright Secondary Bedroom with Windows','Bedroom & Bath Wing','Brick Elevation with 2-Car Garage','Front Elevation & Curb Appeal']}
        />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>

        <h2>Interested in 2935 Shetland Drive?</h2>

        <p>
          Contact Harish Patel for private showings and additional property
          information.
        </p>

        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />

        <p>
          Harish Patel • Realtor® • 972-552-0158 •
          realtor.harishp@gmail.com
        </p>

        <p className="footerAddress">
          100 N Central Expwy, Suite #913, Richardson, TX 75080
        </p>
      </footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}
function StonebrookPage() {
  const stonebrookImages = Array.from(
    { length: 15 },
    (_, i) => `/listings/400-stonebrook-303/stonebrook-${i + 1}.jpg`
  )

  return (
    <div>
      <Header />

      <section
        className="listingPageHero"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.78)), url('/listings/400-stonebrook-303/stonebrook-1.jpg') center/cover no-repeat"
        }}
      >
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">← Back to Listings</a>

          <p className="eyebrow">Commercial Property</p>
          <h1>400 Stonebrook Pkwy #303</h1>
          <p>Frisco, TX • Office Suite</p>
          <p className="listingPrice">$429,999</p>

          <div className="buttons">
            <a href="#contact" className="btnGold">Schedule Private Tour</a>
            <a href="tel:9725520158" className="btnOutline">Call Harish</a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>4</strong>Offices</div>
        <div><strong>1</strong>Restroom</div>
        <div><strong>1,225</strong>Sq Ft</div>
        <div><strong>Suite</strong>#303</div>
        <div><strong>Frisco</strong>Location</div>
        <div><strong>Reception</strong>Area</div>
      </section>

      <section className="listingSection">
        <h2>Commercial Office Opportunity in Frisco</h2>

        <p className="listingDescription">
          Professional commercial office suite located at 400 Stonebrook Pkwy,
          Suite #303 in Frisco, TX. This space features 4 private offices,
          1 restroom, 1,225 square feet, and a dedicated reception area.
        </p>

        <PropertyReel
          images={stonebrookImages}
          address="400 Stonebrook Pkwy #303"
          city="Frisco, TX • Office Suite"
          price="$429,999"
          listingUrl="/listings/400-stonebrook"
          roomLabels={['Building','Building','Suite Entry','Reception','Reception','Office 1','Office 2','Office 3','Office 4','Restroom','Hallway','Common Area','Common Area','Parking','Building']}
          slideTitles={['Professional Class A Building','Prime Frisco Location','Suite #303 Entry','Welcoming Reception Area','Open Reception & Waiting','Private Office 1','Private Office 2','Private Office 3','Private Office 4','Dedicated Restroom','Suite Hallway','Shared Common Area','Breakroom & Common Space','Ample Parking Available','Stonebrook Pkwy Frontage']}
        />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>
        <h2>Interested in 400 Stonebrook Pkwy #303?</h2>
        <p>Contact Harish Patel for private tours and commercial property details.</p>
        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />
       <p>
          Harish Patel • Realtor® • 972-552-0158 •
          realtor.harishp@gmail.com
        </p>

        <p className="footerAddress">
          100 N Central Expwy, Suite #913, Richardson, TX 75080
        </p>
      </footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}
function GalvestonPage() {
  const galvestonImages = Array.from(
    { length: 20 },
    (_, i) => `/listings/2900-galveston/galveston-${i + 1}.jpg`
  )

  return (
    <div>
      <Header />

      <section
        className="listingPageHero"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.78)), url('/listings/2900-galveston/galveston-1.jpg') center/cover no-repeat"
        }}
      >
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">
            ← Back to Listings
          </a>

          <p className="eyebrow">Residential Lease</p>

          <h1>2900 Galveston Street</h1>

          <p>Plano, TX 75075 • Luxury Lease Home</p>

          <p className="listingPrice">$2,799 / Month</p>

          <div className="buttons">
            <a href="#contact" className="btnGold">
              Schedule Private Tour
            </a>

            <a href="tel:9725520158" className="btnOutline">
              Call Harish
            </a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>3</strong>Bedrooms</div>
        <div><strong>2.5</strong>Bathrooms</div>
        <div><strong>1,870</strong>Sq Ft</div>
        <div><strong>2018</strong>Built</div>
        <div><strong>Plano</strong>Location</div>
        <div><strong>Luxury</strong>Lease</div>
      </section>

      <section className="listingSection">
        <h2>Luxury Lease Opportunity in Plano</h2>

        <p className="listingDescription">
          Beautiful lease property located in Plano featuring spacious living
          areas, modern finishes, open-concept design, and comfortable luxury
          living in a prime North Texas location.
        </p>

        <PropertyReel
          images={galvestonImages}
          address="2900 Galveston Street"
          city="Plano, TX 75075"
          price="$2,799 / Month"
          beds="3" baths="2.5" sqft="1,870" built="2018"
          listingUrl="/listings/2900-galveston"
          roomLabels={['Exterior','Kitchen','Kitchen','Kitchen','Kitchen','Half Bath','Laundry','Upstairs Landing','Bedroom','Primary Suite','Primary Suite','Primary Bath','Primary Bath','Bedroom','Bedroom','Bedroom','Bedroom','Bathroom','Backyard','Backyard']}
          slideTitles={['Modern Two-Story Elevation','White Shaker Cabinets & Granite','Full Kitchen with Stainless Appliances','Gas Range & Tile Backsplash','Kitchen with Pantry Nook','Downstairs Powder Room','Dedicated Laundry Room','Upstairs Landing & Hallway','Secondary Bedroom with Vaulted Ceiling','Primary Suite with Tray Ceiling','Spacious Primary Suite','Primary Bath Dual Vanity','Walk-In Shower & Dual Vanity','Secondary Bedroom','Secondary Bedroom Open Layout','Third Bedroom','Third Bedroom Natural Light','Secondary Bathroom with Tub','Private Fenced Side Yard','Fenced Backyard with Gate']}
        />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>

        <h2>Interested in 2900 Galveston Street?</h2>

        <p>
          Contact Harish Patel for private tours and lease details.
        </p>

        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />
        <p>
          Harish Patel • Realtor® • 972-552-0158 •
          realtor.harishp@gmail.com
        </p>

        <p className="footerAddress">
          100 N Central Expwy, Suite #913, Richardson, TX 75080
        </p>
      </footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}
function VillageWoodPage() {
  const villageImages = Array.from(
    { length: 20 },
    (_, i) => `/listings/1009-village-wood-ct/village-${i + 1}.jpg`
  )

  return (
    <div>
      <Header />

      <section
        className="listingPageHero"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.78)), url('/listings/1009-village-wood-ct/village-1.jpg') center/cover no-repeat"
        }}
      >
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">
            ← Back to Listings
          </a>

          <p className="eyebrow">Residential Lease</p>

          <h1>1009 Village Wood Ct</h1>

          <p>Arlington, TX • Spacious Lease Home</p>

          <p className="listingPrice">$2,850 / Month</p>

          <div className="buttons">
            <a href="#contact" className="btnGold">
              Schedule Private Tour
            </a>

            <a href="tel:9725520158" className="btnOutline">
              Call Harish
            </a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>4</strong>Bedrooms</div>
        <div><strong>2.5</strong>Bathrooms</div>
        <div><strong>2,336</strong>Sq Ft</div>
        <div><strong>1987</strong>Built</div>
        <div><strong>Large</strong>Layout</div>
        <div><strong>Lease</strong>Home</div>
      </section>

      <section className="listingSection">
        <h2>Comfortable Living in Arlington</h2>

        <p className="listingDescription">
          Spacious Arlington lease property featuring multiple living spaces,
          generous bedrooms, functional layout, and comfortable family living
          in a well-established neighborhood.
        </p>

        <PropertyReel
          images={villageImages}
          address="1009 Village Wood Ct"
          city="Arlington, TX"
          price="$2,850 / Month"
          beds="4" baths="2.5" sqft="2,336" built="1987"
          listingUrl="/listings/1009-village-wood-ct"
          roomLabels={['Exterior','Kitchen','Hallway','Bathroom','Bedroom','Bedroom','Bathroom','Entry','Primary Bath','Primary Suite','Primary Bath','Living Room','Living Room','Living Room','Living Room','Bonus Room','Kitchen','Bedroom','Backyard','Exterior']}
          slideTitles={['Classic Brick Ranch Elevation','Black Granite Kitchen with Skylight','Hardwood Hallway with French Door','Dual Vanity Bathroom with Tub','Spacious Secondary Bedroom','Secondary Bedroom with Closet','Second Full Bathroom','Chandelier Foyer with Hardwood Floors','Primary Bath with Soaking Tub & Shower','Primary Suite with Tray Ceiling','Primary Bath Soaking Tub Detail','Living Room with Fireplace','Open Concept Living Area','Living Room with Built-In Wet Bar','Bright & Spacious Living Area','Versatile Bonus Room','Gas Range Kitchen View','Additional Bedroom','Private Backyard','Curb Appeal & Street View']}
        />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>

        <h2>Interested in 1009 Village Wood Ct?</h2>

        <p>
          Contact Harish Patel for private tours and lease information.
        </p>

        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />
        <p>
          Harish Patel • Realtor® • 972-552-0158 •
          realtor.harishp@gmail.com
        </p>

        <p className="footerAddress">
          100 N Central Expwy, Suite #913, Richardson, TX 75080
        </p>
      </footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}

const featuredListings = listings.slice(0, 6)

function HemmingwayPage() {
  const hemmingImages = Array.from(
    { length: 15 },
    (_, i) => `/listings/615-hemmingway-lane/hemmingway-${i + 1}.jpg`
  )

  return (
    <div>
      <Header />

      <section
        className="listingPageHero"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.78)), url('/listings/615-hemmingway-lane/hemmingway-1.jpg') center/cover no-repeat"
        }}
      >
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">
            ← Back to Listings
          </a>

          <p className="eyebrow">Residential Lease</p>

          <h1>615 Hemmingway Lane</h1>

          <p>McKinney, TX 75069 • Modern Lease Home</p>

          <p className="listingPrice">$2,239 / Month</p>

          <div className="buttons">
            <a href="#contact" className="btnGold">
              Schedule Private Tour
            </a>

            <a href="tel:9725520158" className="btnOutline">
              Call Harish
            </a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>4</strong>Bedrooms</div>
        <div><strong>2</strong>Bathrooms</div>
        <div><strong>1,605</strong>Sq Ft</div>
        <div><strong>2024</strong>Built</div>
        <div><strong>Modern</strong>Design</div>
        <div><strong>Lease</strong>Home</div>
      </section>

      <section className="listingSection">
        <h2>Modern Living in McKinney</h2>

        <p className="listingDescription">
          Beautiful newer-construction lease property located in McKinney,
          featuring modern finishes, open-concept living, spacious bedrooms,
          and comfortable North Texas living.
        </p>

        <PropertyReel
          images={hemmingImages}
          address="615 Hemmingway Lane"
          city="McKinney, TX 75069"
          price="$2,239 / Month"
          beds="4" baths="2" sqft="1,605" built="2024"
          listingUrl="/listings/615-hemmingway-lane"
          roomLabels={['Exterior','Exterior','Entry','Living Room','Living Room','Kitchen','Kitchen','Dining','Primary Suite','Primary Bath','Bedroom','Bedroom','Bedroom','Bathroom','Backyard']}
          slideTitles={['Brand New 2024 Construction','Modern Exterior & Landscaping','Open Bright Entry','Open Concept Living Room','Spacious Living Area','Sleek Modern Kitchen','Kitchen Island & Finishes','Dining Area','Primary Suite','Primary Bathroom','Bedroom Two','Bedroom Three','Bedroom Four','Full Bathroom','Private Backyard']}
        />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>

        <h2>Interested in 615 Hemmingway Lane?</h2>

        <p>
          Contact Harish Patel for private tours and lease information.
        </p>

        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />
        <p>
          Harish Patel • Realtor® • 972-552-0158 •
          realtor.harishp@gmail.com
        </p>

        <p className="footerAddress">
          100 N Central Expwy, Suite #913, Richardson, TX 75080
        </p>
      </footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}
function SilverweedPage() {
  const silverweedImages = Array.from(
    { length: 15 },
    (_, i) => `/listings/4414-silverweed-lane/silverweed-${i + 1}.jpg`
  )

  return (
    <div>
      <Header />

      <section
        className="listingPageHero"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.78)), url('/listings/4414-silverweed-lane/silverweed-1.jpg') center/cover no-repeat"
        }}
      >
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">
            ← Back to Listings
          </a>

          <p className="eyebrow">Investor Opportunity</p>

          <h1>4414 Silverweed Lane</h1>

          <p>Melissa, TX 75454 • Investment Property</p>

          <p className="listingPrice">$379,999</p>

          <div className="buttons">
            <a href="#contact" className="btnGold">
              Schedule Private Tour
            </a>

            <a href="tel:9725520158" className="btnOutline">
              Call Harish
            </a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>3</strong>Bedrooms</div>
        <div><strong>2.5</strong>Bathrooms</div>
        <div><strong>1,862</strong>Sq Ft</div>
        <div><strong>2024</strong>Built</div>
        <div><strong>$2,676</strong>Monthly Lease</div>
        <div><strong>Investor</strong>Ready</div>
      </section>

      <section className="listingSection">
        <h2>Investor Opportunity in Melissa</h2>

        <p className="listingDescription">
          Excellent investor-ready property located in Melissa, TX featuring
          modern finishes, strong rental potential, huge backyard, and currently
          leased at approximately $2,676 per month.
        </p>

        <PropertyReel
          images={silverweedImages}
          address="4414 Silverweed Lane"
          city="Melissa, TX 75454"
          price="$379,999"
          beds="3" baths="2.5" sqft="1,862" built="2024"
          listingUrl="/listings/4414-silverweed-lane"
          roomLabels={['Kitchen','Kitchen','Kitchen & Living','Half Bath','Exterior','Exterior','Living Room','Living Room','Living Room','Kitchen','Kitchen','Kitchen & Living','Half Bath','Exterior','Exterior']}
          slideTitles={['Granite Island with Sink & Dishwasher','Full Kitchen with Stainless Appliances','Open Kitchen & Living Floor Plan','Downstairs Half Bath','Modern Two-Story Brick Elevation','Front Elevation & 2-Car Garage','Open Living Room with Staircase','Spacious Living Area','Living Room with Backyard Access','Kitchen Island Detail','Kitchen with All Appliances','Open Concept Kitchen & Living','Private Half Bath','Brick Elevation & Driveway','Curb Appeal & Street View']}
        />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>

        <h2>Interested in 4414 Silverweed Lane?</h2>

        <p>
          Contact Harish Patel for investment details and private tours.
        </p>

        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />

       <p>
          Harish Patel • Realtor® • 972-552-0158 •
          realtor.harishp@gmail.com
        </p>

        <p className="footerAddress">
          100 N Central Expwy, Suite #913, Richardson, TX 75080
        </p>
        
      </footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}
function StonebrookPage() {
  const stonebrookImages = Array.from(
    { length: 17 },
    (_, i) => `/listings/400-stonebrook-pkwy/stonebrook-${i + 1}.jpg`
  )

  return (
    <div>
      <Header />

      <section
        className="listingPageHero"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.78)), url('/listings/400-stonebrook-pkwy/stonebrook-1.jpg') center/cover no-repeat"
        }}
      >
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">
            ← Back to Listings
          </a>

          <p className="eyebrow">Commercial Space For Lease</p>

          <h1>400 Stonebrook Pkwy #301</h1>

          <p>Frisco, TX 75034 • Suite #301</p>

          <p className="listingPrice">$3,299<span style={{fontSize:'1rem',fontWeight:400}}>/mo</span></p>

          <div className="buttons">
            <a href="#contact" className="btnGold">
              Schedule a Tour
            </a>

            <a href="tel:9725520158" className="btnOutline">
              Call Harish
            </a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>4</strong>Offices</div>
        <div><strong>1</strong>Bathroom</div>
        <div><strong>1,225</strong>Sq Ft</div>
        <div><strong>301</strong>Suite #</div>
        <div><strong>$3,299</strong>Monthly Lease</div>
        <div><strong>Frisco</strong>Location</div>
      </section>

      <section className="listingSection">
        <h2>Premium Commercial Space in Frisco</h2>

        <p className="listingDescription">
          Turnkey office suite featuring 4 private offices, a conference room,
          break room kitchenette, ADA accessible restroom, and a welcoming
          lobby — all with modern finishes throughout. Ideally located off
          Stonebrook Pkwy in Frisco with easy access to major highways.
        </p>

        <PropertyReel
          images={stonebrookImages}
          address="400 Stonebrook Pkwy #301"
          city="Frisco, TX 75034"
          price="$3,299/mo"
          beds="4 Offices" baths="1" sqft="1,225" built="Suite 301"
          listingUrl="/listings/400-stonebrook-pkwy"
          tourUrl="https://calendly.com/realtor-harishp/30min"
          roomLabels={['Private Office','Property Overview','Private Office','Private Office','Break Room','Break Room','Private Office','Break Room','Private Office','Private Office','Lobby / Reception','Lobby / Reception','Hallway','Hallway','Conference Room','Conference Room','Restroom']}
          slideTitles={['Spacious Private Office Suite','400 Stonebrook Pkwy Suite #301 — For Lease','Private Office with Dual Workstations','Office Suite with Ample Natural Light','Stainless Kitchenette with Refrigerator','Break Room with Full Appliances','Corner Office with Dual Windows','Kitchenette with Sink & Microwave','Bright Corner Office Suite','Private Office with Natural Light','Reception Lobby with Desk & Storage','Main Lobby Office with Ceiling Fan','Interior Hallway & Office Wing','Entry Hallway with Smart Thermostat','Conference Room with TV & Seating','Spacious 6-Person Conference Room','ADA Accessible Restroom']}
        />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>

        <h2>Interested in 400 Stonebrook Pkwy #301?</h2>

        <p>
          Contact Harish Patel for leasing details and to schedule a private showing.
        </p>

        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />

        <p>
          Harish Patel • Realtor® • 972-552-0158 •
          realtor.harishp@gmail.com
        </p>

        <SocialLinks />

        <p className="footerDisclaimer">
          All information deemed reliable but not guaranteed. Subject to change without notice.
        </p>
      </footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}

function PurtisCreekPage() {
  const purtisImages = Array.from(
    { length: 11 },
    (_, i) => `/listings/1874-purtis-creek/purtis-${i + 1}.jpg`
  )

  return (
    <div>
      <Header />

      <section
        className="listingPageHero"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.78)), url('/listings/1874-purtis-creek/purtis-1.jpg') center/cover no-repeat"
        }}
      >
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">← Back to Listings</a>

          <p className="eyebrow">Residential Sale</p>
          <h1>1874 Purtis Creek</h1>
          <p>Forney, TX 75126</p>
          <p className="listingPrice">$3,099</p>

          <div className="buttons">
            <a href="#contact" className="btnGold">Schedule Private Tour</a>
            <a href="tel:9725520158" className="btnOutline">Call Harish</a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        <div><strong>5</strong>Bedrooms</div>
        <div><strong>3</strong>Bathrooms</div>
        <div><strong>2212</strong>Sq Ft</div>
        <div><strong>2042</strong>Built</div>
        <div><strong>Forney</strong>Location</div>
        <div><strong>Lease</strong>Home</div>
      </section>

      <section className="listingSection">
        <h2>Beautiful Home in Forney</h2>

        <p className="listingDescription">
          Spacious residential home located in Forney, TX featuring modern finishes,
          comfortable living spaces, and a functional layout ideal for today’s lifestyle.
        </p>

        <PropertyReel
          images={purtisImages}
          address="1874 Purtis Creek"
          city="Forney, TX 75126"
          price="$3,099 / Month"
          beds="5" baths="3" sqft="2,212"
          listingUrl="/listings/1874-purtis-creek"
          roomLabels={['Kitchen','Bathroom','Bathroom','Bedroom','Living Room','Primary Suite','Bedroom','Primary Bath','Hallway','Bedroom','Bedroom']}
          slideTitles={['Open Concept Kitchen with Granite Island','Full Bathroom with Tub/Shower','Second Full Bathroom','Secondary Bedroom with Closet','Open Living & Kitchen Floor Plan','Spacious Primary Suite','Bedroom with Walk-In Closet','Primary Bath with Walk-In Shower','Entry Hallway to Front Door','Third Bedroom','Bedroom with Double Windows']}
        />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>
        <h2>Interested in 1874 Purtis Creek?</h2>
        <p>Contact Harish Patel for private tours and property details.</p>
        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />
       <p>
          Harish Patel • Realtor® • 972-552-0158 •
          realtor.harishp@gmail.com
        </p>

        <p className="footerAddress">
          100 N Central Expwy, Suite #913, Richardson, TX 75080
        </p>
      </footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}

function RecommendedBusinessesSection() {
  return (
    <section className="recommendedBusinesses">
      <p className="eyebrow dark">Trusted Partners</p>

      <h2>Preferred Local Partners</h2>

      <p className="sectionIntro">
        Trusted professionals and local businesses recommended by
        Harish Patel and REKonnection Real Estate.
      </p>

      <div className="businessGrid">
        {partners.map((business) => (
          <div className="businessCard" key={business.name}>
            <p className="businessCategory">
              {business.category}
            </p>

            <img
              src={business.logo}
              alt={business.name}
              className="partnerLogo"
            />

            <h3>{business.name}</h3>

            <p>{business.contact}</p>

            <p>{business.phone}</p>

            {business.services && (
              <p className="businessServices">
                {business.services}
              </p>
            )}

            {business.website &&
              business.website !== '#' && (
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              )}
          </div>
        ))}
      </div>
    </section>
  )
}

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const testimonial = testimonials[currentIndex]

  return (
    <section className="testimonials">
      <p className="eyebrow dark">Client Testimonials</p>
      <h2>Trusted By North Texas Families & Investors</h2>

      <div className="testimonialCarousel">
        <p>“{testimonial.review}”</p>
        <h4>— {testimonial.name}</h4>

        <button
          className="carouselBtn left"
          onClick={() =>
            setCurrentIndex((prev) =>
              (prev - 1 + testimonials.length) % testimonials.length
            )
          }
        >
          ‹
        </button>

        <button
          className="carouselBtn right"
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          }
        >
          ›
        </button>
      </div>
    </section>
  )
}
function DynamicListingPage({ listing }) {
  return (
    <div>
      <Header />

      <section
        className="listingPageHero"
        style={{
          background: `linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.78)), url('${listing.image}') center/cover no-repeat`
        }}
      >
        <div className="listingHeroContent">
          <a href="/#listings" className="backLink">← Back to Listings</a>
          <p className="eyebrow">{listing.status}</p>
          <h1>{listing.title}</h1>
          <p>{listing.city}</p>
          <p className="listingPrice">{listing.price}</p>

          <div className="buttons">
            <a href="#contact" className="btnGold">Schedule Private Tour</a>
            <a href="tel:9725520158" className="btnOutline">Call Harish</a>
          </div>
        </div>
      </section>

      <section className="statsBar">
        {listing.facts.map((fact) => (
          <div key={fact}>
            <strong>{fact}</strong>
          </div>
        ))}
      </section>

      <section className="listingSection">
        <h2>{listing.title}</h2>
        <p className="listingDescription">
          Contact Harish Patel for private tours, pricing details, availability,
          and full property information.
        </p>

        <PropertyReel
          images={listing.gallery || [listing.image]}
          address={listing.title}
          city={listing.city}
          price={listing.price}
          listingUrl={listing.link}
        />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>
        <h2>Interested in {listing.title}?</h2>
        <p>Submit your information below and Harish will follow up with details.</p>
        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />
        <p>
          Harish Patel • Realtor® • 972-552-0158 • realtor.harishp@gmail.com
        </p>
        <p className="footerAddress">
          100 N Central Expwy, Suite #913, Richardson, TX 75080
        </p>
        <FooterLinks />
        <SocialLinks />
      </footer>

      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}

function ChatbaseWidget() {
  React.useEffect(() => {
    if (document.getElementById('XeHFtp4qjjzaViuCVKiX7')) return

    if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = []
        }
        window.chatbase.q.push(args)
      }

      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === 'q') {
            return target.q
          }
          return (...args) => target(prop, ...args)
        }
      })
    }

    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = 'XeHFtp4qjjzaViuCVKiX7'
    script.setAttribute('domain', 'www.chatbase.co')
    document.body.appendChild(script)
  }, [])

  return null
}

function CityPage({ city }) {
  const cityListings = listings.filter((listing) =>
    listing.city.toLowerCase().includes(city.city.toLowerCase())
  )

  React.useEffect(() => {
    document.title = `${city.title} | Realtor Harish`

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (metaDescription) {
      metaDescription.setAttribute('content', city.description)
    }
  }, [city])
  return (
    <div>
      <Header />

      <section className="listingPageHero">
        <div className="listingHeroContent">
          <a href="/" className="backLink">← Back Home</a>
          <p className="eyebrow">North Texas Real Estate</p>
          <h1>{city.title}</h1>
          <p>{city.description}</p>

          <div className="buttons">
            <a href="#contact" className="btnGold">Contact Harish</a>
            <a href="tel:9725520158" className="btnOutline">Call 972-552-0158</a>
          </div>
        </div>
      </section>

      <section className="listingSection">
        <h2>Real Estate Services in {city.city}</h2>
        <p className="listingDescription">
          Harish Patel helps clients buy, sell, lease, and invest in {city.city}
          and surrounding North Texas communities with local market expertise,
          premium marketing, and professional guidance.
        </p>
        <h2>Why Buyers Love {city.city}</h2>

      <p className="listingDescription">
      {city.city} offers strong schools, beautiful communities,
      convenient access to shopping and dining, and excellent
      opportunities for families, professionals, and investors
      looking to live in North Texas.
    </p>
      </section>

      <section className="section light">
  <p className="eyebrow dark">{city.city} Listings</p>

  <h2>Featured Properties in {city.city}</h2>

  <div className="propertyGrid">
    {cityListings.map((p) => (
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
            {p.facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>

          <a className="propertyButton" href={p.link}>
            View Details
          </a>
        </div>
      </article>
    ))}
  </div>
</section>
      <section className="section">
  <p className="eyebrow dark">Services</p>

  <h2>
    Real Estate Services in {city.city}
  </h2>

  <div className="services">
    {[
      [
        'Buy',
        `Find homes and luxury properties in ${city.city} with expert local guidance.`
      ],

      [
        'Sell',
        `Professional marketing and pricing strategies for homeowners in ${city.city}.`
      ],

      [
        'Lease',
        `Helping landlords and tenants with lease homes throughout ${city.city}.`
      ],

      [
        'Invest',
        `Identify rental and investment opportunities in ${city.city} and North Texas.`
      ],

      [
        'Relocate',
        `Helping families and professionals relocate smoothly to ${city.city}.`
      ]
    ].map(([title, desc]) => (
      <div className="service" key={title}>
        <div className="icon"></div>

        <h3>{title}</h3>

        <p>{desc}</p>
      </div>
    ))}
  </div>
</section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact Harish Patel</p>
        <h2>Looking for Real Estate Help in {city.city}?</h2>
        <p>Submit your information and Harish will follow up with you.</p>
        <ContactForm />
      </section>

      <footer>
        <img src="/rek-logo.png" alt="REKonnection Logo" />
        <p>Harish Patel • Realtor® • 972-552-0158 • realtor.harishp@gmail.com</p>
        <p className="footerAddress">
          100 N Central Expwy, Suite #913, Richardson, TX 75080
        </p>
        <FooterLinks />
        <SocialLinks />
      </footer>

      <FloatingSocialBar />
      <FloatingButtons />
      <ChatbaseWidget />
    </div>
  )
}

function HomePage() {
 
  return (
    <div>
      <Header />
      <ChatbaseWidget />
      <section id="home" className="hero">
        <div>
          <p className="eyebrow">Harish Patel</p>
          <h1>Reconnecting You <span>To Your Future</span></h1>
          <p className="subtitle">Luxury real estate representation for buying, selling, leasing, commercial opportunities, and investment properties across North Texas.</p>
         <div className="buttons">
            <a href="#listings" className="btnGold">View Listings</a>
            <a href="#contact" className="btnOutline">Schedule Consultation</a>
        </div>

<div className="googleMiniReview">
  <a
    href="https://share.google/4FY1ESFb6aay18YdW"
    target="_blank"
    rel="noopener noreferrer"
  >
    ⭐ 5.0 Google Reviews
  </a>
</div>
          <div className="agent"><img className="agentImage" src="/harish-patel.png" alt="Harish Patel Realtor" /><div><h3>Harish Patel</h3><p>Realtor®</p><p>972-552-0158</p><p>realtor.harishp@gmail.com</p></div></div>
        </div>
        <div className="heroCard"><div className="logoPanel"><img src="/rek-logo-1.png" alt="REKonnection Logo" /></div></div>
      </section>
      <FeaturedListingsCarousel />
      <section className="featuredListing">
        <div className="featuredListingInner">
           <img
            src="/listings/14839-story-lane/story-1.jpg"
              alt="14839 Story Lane Frisco TX"
            />
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
          {listings.map((p) => (
            <article className="propertyCard" key={p.number}>
              <div className="imageWrap"><img src={p.image} alt={`${p.title}, ${p.city}`} /><div className="numberBadge">{p.number}</div><div className="statusBadge">{p.status}</div></div>
              <div className="propertyBody"><p className="propertyPrice">{p.price}</p><h3>{p.title}</h3><p className="propertyCity">{p.city}</p><div className="facts">{p.facts.map((fact) => <span key={fact}>{fact}</span>)}</div><a className="propertyButton" href={p.link || '#contact'}>{p.link ? 'View Details' : 'Schedule Showing'}</a></div>
            </article>
          ))}
        </div>
      </section>
 <MarketActivitySection />
      <section id="services" className="section">
        <p className="eyebrow dark">Services</p><h2>Real Estate Services Built Around Your Goals</h2>
        <div className="services">
          {[['Buy','Find the right home with expert local guidance.'],['Sell','Premium listing presentation, pricing strategy, and negotiation.'],['Lease','Lease homes faster with polished marketing and clear communication.'],['Invest','Identify income-producing and long-term real estate opportunities.'],['Commercial','Support for office and commercial real estate transactions.']].map(([s,d]) => <div className="service" key={s}><div className="icon"></div><h3>{s}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="whyWork"><p className="eyebrow dark">Why Work With Harish</p><h2>Local Expertise. Premium Marketing. Client-First Service.</h2><div className="whyGrid"><div><h3>Market Expertise</h3><p>Guidance backed by North Texas market knowledge and pricing strategy.</p></div><div><h3>Data-Driven Advice</h3><p>Smart decisions supported by real market numbers and analysis.</p></div><div><h3>Residential & Leasing</h3><p>Experience helping buyers, sellers, landlords, tenants, and investors.</p></div><div><h3>Premium Marketing</h3><p>Luxury flyers, social media campaigns, listing exposure, and branded presentation.</p></div><div><h3>Investor Guidance</h3><p>Support for rental income, lease strategy, and long-term investment goals.</p></div><div><h3>Relationship First</h3><p>Patient, responsive, and personal guidance from start to closing.</p></div></div></section>

      <TestimonialsCarousel />
      <section className="cityLinksSection">
  <p className="eyebrow dark">Local Real Estate</p>
  <h2>Explore North Texas City Pages</h2>

  <div className="areaGrid">
    {cities.map((city) => (
      <a
        href={`/cities/${city.slug}`}
        className="areaPill"
        key={city.slug}
      >
        {city.city}
      </a>
    ))}
  </div>
</section>

      <section className="areasServed"><p className="eyebrow dark">Areas Served</p><h2>Helping Clients Across North Texas</h2><div className="areaGrid">{['Frisco','Plano','McKinney','Little Elm','Aubrey','Melissa','Prosper','Celina','Allen','Arlington'].map((city) => <div className="areaPill" key={city}>{city}</div>)}</div></section>

      <section className="homeValue"><div><p className="eyebrow">Home Value</p><h2>Curious What Your Home Is Worth?</h2><p>Get a personalized North Texas home value estimate and selling strategy from Harish Patel.</p></div><a href="#contact" className="btnGold">Request Home Valuation</a><a href="https://calendly.com/realtor-harishp/30min" target="_blank" className="btnGold">Book a Consultation</a></section>

      <section id="about" className="about"><div className="aboutPhotoWrap"><img src="/harish-patel.png" alt="Harish Patel" /></div><div><p className="eyebrow dark">Meet Your Realtor</p><h2>Harish Patel</h2><p>Harish helps North Texas clients buy, sell, lease, and invest with confidence through premium marketing, strong communication, and relationship-first service.</p><a href="tel:9725520158" className="btnGold inlineButton">Call 972-552-0158</a></div></section>
      <RecommendedBusinessesSection />
      <GoogleReviewsSection />
      <section id="contact" className="contact"><p className="eyebrow">Contact Harish Patel</p><h2>Ready To Make Your Next Move?</h2><p>Let’s create a strategy for buying, selling, leasing, or investing in North Texas real estate.</p><ContactForm /></section>
     <footer>
      <img src="/rek-logo.png" alt="REKonnection Logo" />

      <p>
          Harish Patel • Realtor® • 972-552-0158 •
          realtor.harishp@gmail.com
        </p>

        <p className="footerAddress">
          100 N Central Expwy, Suite #913, Richardson, TX 75080
        </p>

   <FooterLinks />
  <SocialLinks />
  </footer>
      <FloatingSocialBar />
      <FloatingButtons />
    </div>
  )
}

function App() {
  const path = window.location.pathname
  const dynamicListing = listings.find((listing) => listing.link === path)
  const citySlug = window.location.pathname.replace('/cities/', '')
  const cityPage = cities.find((city) => city.slug === citySlug)

if (window.location.pathname.startsWith('/cities/') && cityPage) {
  return <CityPage city={cityPage} />
}
  if (window.location.pathname === '/listings/14839-story-lane') {
    return <ListingPage />
  }

  if (window.location.pathname === '/listings/9650-amberwoods-lane') {
    return <AmberwoodsPage />
  }

  if (window.location.pathname === '/listings/2935-shetland-drive') {
    return <ShetlandPage />
  }

  if (window.location.pathname === '/listings/400-stonebrook') {
    return <StonebrookPage />
  }

  if (window.location.pathname === '/listings/2900-galveston') {
    return <GalvestonPage />
  }

  if (window.location.pathname === '/listings/1009-village-wood-ct') {
    return <VillageWoodPage />
  }

  if (window.location.pathname === '/listings/615-hemmingway-lane') {
    return <HemmingwayPage />
  }

  if (window.location.pathname === '/listings/4414-silverweed-lane') {
    return <SilverweedPage />
  }

  if (window.location.pathname === '/listings/1874-purtis-creek') {
    return <PurtisCreekPage />
  }

  if (window.location.pathname === '/listings/400-stonebrook-pkwy') {
    return <StonebrookPage />
  }
 
if (dynamicListing) {
  return <DynamicListingPage listing={dynamicListing} />
}

  return <HomePage />
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
