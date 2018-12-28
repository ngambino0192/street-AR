const GeoPoints = [
  {
    id: 1,
    name: 'Gary Draws Fish',
    region: 'Hawaii',
    description: 'This is some unique text for testing the helper render method of 1',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.29822115591678,
    longitude: -157.85861134529117,
    image: '..assets/images/garydrawsfish.jpg',
    wall: 'http://honolulumagazine-images.dashdigital.com/images/2018/02-18/Pow-Wow-Mural-Kakaako-fishies-by-David-Croxford.jpg?ver=1519177882',
    url: 'http://www.honolulumagazine.com/Honolulu-Magazine/February-2018/Murals-From-Pow-Wow-Hawaii-2018-You-Will-Want-to-Instagram-Now-in-Kakaako/',
    artist: 'http://powwowhawaii.com/participants/gary-draws-fish/',
    propic: 'garydrawsfish.png'
  },
  {
    id: 2,
    name: 'Rone and Kamea Hadar',
    region: 'Hawaii',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.298326114755323,
    longitude: -157.85836994647983,
    image: '..assets/images/RoneAndKameaHadar',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2013/05/7K9A0963-Edit-1277x848.jpg',
    url: 'http://powwowhawaii.com/murals/abc-stores/',
    // wall: 'http://powwowhawaii.com/murals/kakaako-wall/',
    artist: 'http://powwowhawaii.com/media/pow-wow-hawaii-2013-rone-and-wonderlust/',
    // artist: 'http://powwowhawaii.com/participants/rone/',
    propic: 'kamea.png'
  },
  {
    id: 3,
    name: 'Mung Monster',
    region: 'California',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.29819116766342,
    longitude: -157.85837531089786,
    image: '../assets/images/MungMonster.jpg',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_MungMonster_BrandonShigeta.jpg',
    url: 'http://powwowhawaii.com/murals/mung-monster-wall-2/',
    artist: 'http://powwowhawaii.com/participants/mung-monster/',
    propic: 'mungmonster.png'
  },
  {
    id: 4,
    name: 'Woes',
    region: 'Japan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.29817117549113,
    longitude: -157.8582572937012,
    image: '../assets/images/woes.jpg',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_Woes_BrandonShigeta.jpg',
    url: 'http://powwowhawaii.com/murals/woes-wall-2/',
    artist: 'http://powwowhawaii.com/participants/aaron-martin/',
    propic: 'woes.png'
  },
  {
    id: 5,
    name: 'Katch',
    region: 'Hawaii',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.298071214588823,
    longitude: -157.85849869251254,
    image: '..assets/images/katch.jpg',
    // wall: 'http://powwowhawaii.com/murals/katch-wall/',
    // wall: 'http://powwowhawaii.com/murals/katch-on-coral-street/',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_Katch_BrandonShigeta.jpg',
    url: 'http://powwowhawaii.com/murals/katch-wall-3/',
    // wall: 'http://powwowhawaii.com/murals/katch-wall-2/',
    artist: 'http://powwowhawaii.com/participants/katch/',
    propic: 'katch.png'
  },
  {
    id: 6,
    name: 'Solomon Enos and Nicole Naone',
    region: 'California',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.297871292580258,
    longitude: -157.85830020904544,
    image: '../assets/images/SolomonEnosNicoleNaone.png',
    wall: 'https://www.patinaandsoul.com/wp-content/uploads/2018/05/03-845-post/hawaii2018_0420_portra400-1040(pp_w908_h613).jpg',
    url: 'https://www.patinaandsoul.com/pow-wow-hawaii-murals-april-2018/',
    artist: 'http://powwowhawaii.com/participants/solomon-enos/',
    // 'http://powwowhawaii.com/participants/nicole-naone/',
    propic: 'solomonenos.png'

  },
  {
    id: 7,
    name: 'Audrey Kawasaki',
    region: 'Japan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.297726348953997,
    longitude: -157.85817682743073,
    image: '../assets/images/AudreyKawasaki.jpg',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2016/03/pwh2016-Audrey-Kawasaki.jpg',
    url: 'http://powwowhawaii.com/murals/audrey-kawasaki-wall-2/',
    artist: 'http://powwowhawaii.com/participants/audrey-kawasaki/',
    propic: 'audrey.png'
  },
  {
    id: 8,
    name: 'Ouizi',
    region: 'Hawaii',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.297781327587682,
    longitude: -157.85781741142276,
    image: '../assets/images/ouizi.jpg',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_Ouizi_BrandonShigeta.jpg',
    url: 'http://powwowhawaii.com/murals/ouizi-wall/',
    artist: 'http://powwowhawaii.com/participants/ouizi/',
    propic: 'ouizi.png'
  },
  {
    id: 9,
    name: 'Wooden Wave and Gavin Murai',
    region: 'California',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.29749144001478,
    longitude: -157.85774767398837,
    image: '../assets/images/WoodenWaveandGavinMurai.jpg',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_WoodenWaveandGavinMurai_BrandonShigeta.jpg',
    url: 'http://powwowhawaii.com/murals/wooden-wave-gavin-murai-wall/',
    // artist: 'http://powwowhawaii.com/participants/gavin-murai/',
    artist: 'http://powwowhawaii.com/participants/matthew-and-roxanne-of-wooden-wave/',
    propic: 'gavinmurai.png'

  },
  {
    id: 10,
    name: 'Tristan Eaton and Matt Eaton',
    region: 'Hawaii',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.297341497942366,
    longitude: -157.85718977451327,
    image: '../assets/images/TristanAndMattEaton.jpg',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2015/04/eaton-1-1277x848.jpg',
    url: 'http://powwowhawaii.com/murals/tristan-matt-eaton-wall/',
    // wall: 'http://powwowhawaii.com/murals/tristan-eaton-wall-3/',
    artist: 'http://powwowhawaii.com/blog/eaton-brothers-pow-wow-hawaii-2015-video/',
    propic: 'tristaneaton.png'
  },
  {
    id: 11,
    name: 'Cryptik',
    region: 'California',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.29764138193422,
    longitude: -157.85678207874298,
    image: '../assets/images/cryptik.jpg',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2015/04/crytik-1-1277x848.jpg',
    url: 'http://powwowhawaii.com/murals/cryptik-wall/',
    artist: 'http://powwowhawaii.com/participants/cryptik/',
    propic: 'cryptik.png'
  },
  {
    id: 12,
    name: 'Kofie',
    region: 'Japan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.297271524922888,
    longitude: -157.85661578178406,
    image: '../assets/images/kofie.jpg',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2014/03/7K9A1527-Edit-1277x848.jpg',
    url: 'http://powwowhawaii.com/murals/kofie-on-kamani-street/',
    artist: 'http://powwowhawaii.com/participants/kofie/',
    propic: 'kofie.png'
  },
  {
    id: 13,
    name: 'Kinsey',
    region: 'Hawaii',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui rutrum, tincidunt enim eget, facilisis eros. Sed aliquet, ante non egestas molestie, quam massa dignissim nisi, ac aliquam arcu.',
    pic: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png',
    latitude: 21.297391478650173,
    longitude: -157.8566747903824,
    image: '../assets/images/kinsey.jpg',
    wall: 'http://powwowhawaii.com/wp-content/uploads/2014/03/7K9A1500-1277x848.jpg',
    url: 'http://powwowhawaii.com/murals/kinsey-wall/',
    artist: 'http://powwowhawaii.com/participants/dave-kinsey/',
    propic: 'kinsey.png'
  },
  {
    id: 14,
    name: 'Box Jelly',
    latitude: 21.2968673,
    longitude: -157.8566031,
    image: '../assets/images/TheBoxJelly.jpg',
    wall: 'https://s3-media3.fl.yelpcdn.com/bphoto/08eKCz5NlJKs_YMnh4cK5Q/o.jpg',
    url: 'test.com',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
  {
    id: 15,
    name: 'Kissa Tea Boss',
    latitude: 21.2932,
    longitude: -157.8474,
    image: '../assets/images/kissatenday.png',
    wall: 'https://fastly.4sqi.net/img/general/width960/589139_WiorPc2T5kXE9OL_ILYFPcivOSJ7pARF2wXeUWw0eY8.jpg',
    url: 'https://fr.foursquare.com/v/tea-boss-kissa/4d22b99b5acaa35d01beda35',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
  {
    id: 16,
    name: 'Kissa Tea Boss 2',
    latitude: 21.29326,
    longitude: -157.84746,
    image: '../assets/images/kissatennight.png',
    wall: 'https://fastly.4sqi.net/img/general/width960/38491220_DmThJ_ijMlbzUY4dl4MrOy4q16MH8bfwlS7qYlxFlpY.jpg',
    url: 'https://fr.foursquare.com/v/tea-boss-kissa/4d22b99b5acaa35d01beda35',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
  {
    id: 17,
    name: 'Kissa Tea Boss 3',
    latitude: 21.29340,
    longitude: -157.84730,
    image: '../assets/images/kissatenday.png',
    wall: 'https://fastly.4sqi.net/img/general/width960/589139_WiorPc2T5kXE9OL_ILYFPcivOSJ7pARF2wXeUWw0eY8.jpg',
    url: 'https://fr.foursquare.com/v/tea-boss-kissa/4d22b99b5acaa35d01beda35',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
  {
    id: 18,
    name: 'Box Jelly 2',
    latitude: 21.296743309550596,
    longitude: -157.85665215924385,
    image: '../assets/images/TheBoxJelly.jpg',
    wall: 'https://s3-media3.fl.yelpcdn.com/bphoto/08eKCz5NlJKs_YMnh4cK5Q/o.jpg',
    url: 'test.com',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
  {
    id: 19,
    name: 'Box Jelly 3',
    latitude: 21.296683176244265,
    longitude: -157.8566074417904,
    image: '../assets/images/TheBoxJelly.jpg',
    wall: 'https://s3-media3.fl.yelpcdn.com/bphoto/08eKCz5NlJKs_YMnh4cK5Q/o.jpg',
    url: 'test.com',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
  {
    id: 20,
    name: 'Box Jelly 4',
    latitude: 21.296774977145546,
    longitude: -157.85648955032232,
    image: '../assets/images/TheBoxJelly.jpg',
    wall: 'https://s3-media3.fl.yelpcdn.com/bphoto/08eKCz5NlJKs_YMnh4cK5Q/o.jpg',
    url: 'test.com',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
  {
    id: 21,
    name: 'Box Jelly 5',
    latitude: 21.296672535770295,
    longitude: -157.85639146110046,
    image: '../assets/images/TheBoxJelly.jpg',
    wall: 'https://s3-media3.fl.yelpcdn.com/bphoto/08eKCz5NlJKs_YMnh4cK5Q/o.jpg',
    url: 'test.com',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
  {
    id: 22,
    name: 'Home',
    latitude: 21.386906,
    longitude: -157.924244,
    image: '../assets/images/TheBoxJelly.jpg',
    wall: 'https://s3-media3.fl.yelpcdn.com/bphoto/08eKCz5NlJKs_YMnh4cK5Q/o.jpg',
    url: 'test.com',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
  {
    id: 23,
    name: 'Home 2',
    latitude: 21.386932,
    longitude: -157.924213,
    image: '../assets/images/TheBoxJelly.jpg',
    wall: 'https://s3-media3.fl.yelpcdn.com/bphoto/08eKCz5NlJKs_YMnh4cK5Q/o.jpg',
    url: 'test.com',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
  {
    id: 24,
    name: 'Home 3',
    latitude: 21.386554,
    longitude: -157.923950,
    image: '../assets/images/TheBoxJelly.jpg',
    wall: 'https://s3-media3.fl.yelpcdn.com/bphoto/08eKCz5NlJKs_YMnh4cK5Q/o.jpg',
    url: 'test.com',
    artist: 'aroha-tours.com',
    propic: 'garydrawsfish.png'
  },
]


export default GeoPoints;