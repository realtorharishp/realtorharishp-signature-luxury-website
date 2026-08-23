export const listings = [
  {
    slug: 'corner',
    status: 'Residential Lease Or Sale',
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
    slug: '14839-story-lane',
    status: 'Residential Lease',
    title: '14839 Story Lane',
    city: 'Frisco, TX 75035',
    price: '$3,899 / Month',
    image: '/listings/14839-story-lane/story-1.jpg',
    gallery: Array.from(
      { length: 20 },
      (_, i) => `/listings/14839-story-lane/story-${i + 1}.jpg`
    ),
    facts: ['4 Bed', '3.5 Bath', '3,593 Sq Ft', 'Built 2011'],
    link: '/listings/14839-story-lane'
  },

  {
    slug: 'Yarrow',
    status: 'Residential Sale',
    title: '625 Yarrow Street',
    city: 'Little Elm, Texas 75068',
    price: '$774,999',
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
    price: '$729,999',
    image: '/listings/stillwater/stillwater-1.jpg',
    gallery: Array.from(
      { length: 15 },
      (_, i) => `/listings/stillwater/stillwater-${i + 1}.jpg`
    ),
    facts: ['4 Bed', '3.5 Bath', '3,159 Sq Ft', 'Built 2016'],
    link: '/listings/stillwater'
  },

  {
    slug: '2935-shetland-drive',
    status: 'Residential Sale',
    title: '2935 Shetland Drive',
    city: 'Aubrey, TX',
    price: '$318,000',
    image: '/listings/2935-shetland-drive/shetland-1.jpg',
    facts: ['3 Bed', '2 Bath', '1,792 Sq Ft', 'Built 2023'],
    link: '/listings/2935-shetland-drive'
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
    slug: '2900-galveston',
    status: 'Residential Lease',
    title: '2900 Galveston Street',
    city: 'Plano, TX',
    price: '$2,799 / Month',
    image: '/listings/2900-galveston/galveston-1.jpg',
    facts: ['3 Bed', '2.5 Bath', '1,870 Sq Ft', 'Built 2018'],
    link: '/listings/2900-galveston'
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
    slug: '1874-purtis-creek',
    status: 'Residential Lease',
    title: '1874 Purtis Creek',
    city: 'Forney, TX',
    price: '$3,099 / Month',
    image: '/listings/1874-purtis-creek/purtis-1.jpg',
    facts: ['5 Bed', '3 Bath', '2,212 Sq Ft', 'Built 2024'],
    link: '/listings/1874-purtis-creek'
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
