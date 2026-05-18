export const listings = [
  {
    slug: '14839 Story Lane',
    status: 'Residential Sale',
    title: '14839 Story Lane',
    city: 'Frisco, TX 75035',
    price: '$923,631',
    image: '/listings/14839-story-lane/story-1.jpg',
    facts: ['4 Bed', '3.5 Bath', '3,593 Sq Ft', 'Built 2011'],
    link: '/listings/14839-story-lane'
  },

  {
    slug: '9650-amberwoods-lane',
    status: 'Residential Sale',
    title: '9650 Amberwoods Lane',
    city: 'Frisco, TX',
    price: '$549,999',
    image: '/listings/9650-amberwoods-lane/amber-1.jpg',
    facts: ['3 Bed', '2.5 Bath', '2,593 Sq Ft', 'Built 2013'],
    link: '/listings/9650-amberwoods-lane'
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
   slug: '1009-village-wood-ct',
    status: 'Residential Lease',
    title: '1009 Village Wood Ct',
    city: 'Arlington, TX',
    price: '$2,850 / Month',
    image: '/listings/1009-village-wood-ct/village-1.jpg',
    facts: ['4 Bed', '2.5 Bath', '2,336 Sq Ft', 'Built 1987'],
    link: '/listings/1009-village-wood-ct'
  },

  {
  slug: 'cooper',
  status: 'Residential Sale',
  title: '12820 Cooper River Trail',
  city: 'Frisco, Texas 75035',
  price: '$865,000',
  image: '/listings/cooper/cooper-1.jpeg',
  gallery: Array.from(
    { length: 15 },
    (_, i) => `/listings/cooper/cooper-${i + 1}.jpg`
  ),
  facts: ['4 Bed', '2.5 Bath', '3,385 Sq Ft', 'Built 2020'],
  link: '/listings/cooper'
},

  {
    slug: '615-hemmingway-lane',
    status: 'Residential Lease',
    title: '615 Hemmingway Lane',
    city: 'McKinney, TX',
    price: '$2,239 / Month',
    image: '/listings/615-hemmingway-lane/hemmingway-1.jpg',
    facts: ['4 Bed', '2 Bath', '1,605 Sq Ft', 'Built 2024'],
    link: '/listings/615-hemmingway-lane'
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
  slug: 'arrow',
  status: 'Residential Sale',
  title: '1312 Arrowwood Drive',
  city: 'Aubrey, Texas 76227',
  price: '$549,999',
  image: '/listings/arrow/arrow-1.jpg',
  gallery: Array.from(
    { length: 15 },
    (_, i) => `/listings/arrow/arrow-${i + 1}.jpg`
  ),
  facts: ['4 Bed', '3.5 Bath', '3,106 Sq Ft', 'Built 2021'],
  link: '/listings/arrow'
},
  {
  slug: 'washington',
  status: 'Residential lease',
  title: '9929 George Washington Dr',
  city: 'Mckinney, Texas, 75070',
  price: '$2,999',
  image: '/listings/washington/washington-1.jpg',
  gallery: Array.from(
    { length: 15 },
    (_, i) => `/listings/washington/washington-${i + 1}.jpg`
  ),
  facts: ['3 Bed', '2 Bath', '1700 Sq Ft', 'Built 2005'],
  link: '/listings/warrow'
}
  ]
