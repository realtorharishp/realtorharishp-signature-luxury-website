export const listings = [
  {
    slug: 'bird-creek',
    status: 'Premium Residential Sale',
    title: '725 Bird Creek Drive',
    city: 'Little Elm, Texas 75068',
    price: '$339,999',
    image: '/premium-listings/bird-creek-front.png',
    facts: ['3 Bed', '2 Bath', '2,025 Sq Ft', 'Built 2017'],
    link: '/listings/bird-creek/'
  },
  {
    slug: 'corner',
    status: 'Under Contract',
    title: '754 Corner Post Path',
    city: 'Celina, Texas 75009',
    price: '$573,999',
    image: '/listings/corner/corner-1.jpg',
    gallery: Array.from(
      { length: 25 },
      (_, i) => `/listings/corner/corner-${i + 1}.jpg`
    ),
    facts: ['4 Bed', '3 Bath', '3,008 Sq Ft', 'Built 2020'],
    link: '/listings/corner/corner'
  },
  
  {
    slug: 'Yarrow',
    status: 'Residential Lease',
    title: '625 Yarrow Street',
    city: 'Little Elm, Texas 75068',
    price: '$3595',
    image: '/listings/Yarrow/Yarrow-1.jpg',
    gallery: Array.from(
      { length: 15 },
      (_, i) => `/listings/Yarrow/Yarrow-${i + 1}.jpg`
    ),
    facts: ['5 Bed', '4 Bath', '4,070 Sq Ft', 'Built 2018'],
    link: '/listings/Yarrow/Yarrow'
  },
  {
    slug: 'stillwater',
    status: 'Residential Sale',
    title: '6451 Still Water Court',
    city: 'Midlothian, Texas 76065',
    price: '$714,999',
    image: '/listings/stillwater/stillwater-1.jpg',
    gallery: Array.from(
      { length: 15 },
      (_, i) => `/listings/stillwater/stillwater-${i + 1}.jpg`
    ),
    facts: ['4 Bed', '3.5 Bath', '3,159 Sq Ft', 'Built 2016'],
    link: '/listings/stillwater'
  },
  
  {
    slug: '400-stonebrook-303',
    status: 'Commercial Property',
    title: '400 Stonebrook Pkwy #303',
    city: 'Frisco, TX',
    price: '$429,999',
    image: '/listings/400-stonebrook-303/stonebrook-1.jpg',
    facts: ['4 Offices', '1 Bath', '1,225 Sq Ft', 'Suite #303'],
    link: '/listings/400-stonebrook'
  },
  
  {
    slug: '4414-silverweed-lane',
    status: 'Investor Opportunity',
    title: '4414 Silverweed Lane',
    city: 'Melissa, TX',
    price: '$379,999',
    image: '/listings/4414-silverweed-lane/silverweed-1.jpg',
    facts: ['3 Bed', '2.5 Bath', '1,862 Sq Ft', 'Built 2024'],
    link: '/listings/4414-silverweed-lane'
  },
 
  {
    slug: '400-stonebrook-301',
    status: 'Commercial Lease',
    title: '400 Stonebrook Pkwy #301',
    city: 'Frisco, TX',
    price: '$3,299',
    image: '/listings/400-stonebrook-301/stone-1.jpg',
    gallery: Array.from(
      { length: 15 },
      (_, i) => `/listings/400-stonebrook-301/stone-${i + 1}.jpg`
    ),
    facts: ['4 Offices', '1 Bath', '1,225 Sq Ft', 'Suite #301'],
    link: '/listings/400-stonebrook-pkwy'
  },
  {
    slug: 'washington',
    status: 'Residential Lease',
    title: '9929 George Washington Dr',
    city: 'McKinney, Texas 75070',
    price: '$2,999 / Month',
    image: '/listings/washington/washington-1.jpg',
    gallery: Array.from(
      { length: 15 },
      (_, i) => `/listings/washington/washington-${i + 1}.jpg`
    ),
    facts: ['3 Bed', '2 Bath', '1,700 Sq Ft', 'Built 2005'],
    link: '/listings/washington'
  }
]
