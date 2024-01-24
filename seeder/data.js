"use strict";
//
//
// export const rooms = [
//   {
//     name: "Charming Studio < 10 Miles to Wells' Beaches!",
//     pricePerNight: 168,
//     description:
//       "A friendly atmosphere and natural delights await your visit to the town of Wells! Stay at this well-equipped 1-bath studio and enjoy easy access to several beaches, including Wells Beach and Drakes Island Beach, as well as Rachel Carson National Wildlife Refuge - the best spot for wildlife viewing just 8 miles away. Not to mention, with the downtown area just 10 minutes from vacation rental.",
//     address: "4667 Bicetown Street, New York, NY, 10004",
//     guestCapacity: 1,
//     numOfBeds: 1,
//     isInternet: true,
//     isBreakfast: true,
//     isAirConditioned: false,
//     isPetsAllowed: false,
//     isRoomCleaning: true,
//     ratings: 0,
//     numOfReviews: 0,
//     images: [
//       {
//         public_id: "bookit/demo/ny4n2w1ubdnfktua8stg",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693135931/bookit/demo/ny4n2w1ubdnfktua8stg.jpg",
//       },
//       {
//         public_id: "bookit/demo/ao7enhxobr0z1qyxgyki",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693135931/bookit/demo/ao7enhxobr0z1qyxgyki.jpg",
//       },
//     ],
//     category: "King",
//     reviews: [],
//   },
//   {
//     name: "Picturesque 2-Story Farmhouse w/Private Hot Tub",
//     pricePerNight: 242,
//     description:
//       "Find plenty of space for a family or a large group at this picturesque Wells home, the perfect spot for a relaxing getaway in charming, quintessential Maine style! Spend your days on the beautiful nearby beaches, and come home to a large backyard and orchard where your kids can play, as well as a patio with a gas grill for barbecues on summer afternoons.",
//     address: "200 Olympic Dr, Stafford, VS, 22554",
//     guestCapacity: 2,
//     numOfBeds: 2,
//     isInternet: true,
//     isBreakfast: false,
//     isAirConditioned: true,
//     isPetsAllowed: false,
//     isRoomCleaning: true,
//     ratings: 0,
//     numOfReviews: 0,
//     images: [
//       {
//         public_id: "bookit/demo/gbabqnb7nzvc7gmmpcvg",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136060/bookit/demo/gbabqnb7nzvc7gmmpcvg.jpg",
//       },
//       {
//         public_id: "bookit/demo/tvheutup1idr5wi0p5bq",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1694680598/bookit/demo/tvheutup1idr5wi0p5bq.jpg",
//       },
//     ],
//     category: "Twins",
//     reviews: [],
//   },
//   {
//     name: "Downtown Portsmouth Private Getaway! Hot Tub",
//     pricePerNight: 85,
//     description:
//       "Absolutely the best location in Portsmouth! Beautifully furnished, this spacious and private home is perfectly suited for taking in all of the must-see sights and historic landmarks that make this vibrant city so unique. Situated near the banks of the Piscataqua River just minutes away from Strawbery Banke Museum, Prescott Park, USS Albacore Museum, Market Square and more!",
//     address: "3747 Parkway Street, Apple Valley, CA, 92307",
//     guestCapacity: 3,
//     numOfBeds: 2,
//     isInternet: true,
//     isBreakfast: true,
//     isAirConditioned: true,
//     isPetsAllowed: true,
//     isRoomCleaning: false,
//     ratings: 0,
//     numOfReviews: 0,
//     images: [
//       {
//         public_id: "bookit/demo/nhhthdrrvaundinfnyxd",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136187/bookit/demo/nhhthdrrvaundinfnyxd.jpg",
//       },
//       {
//         public_id: "bookit/demo/qsmprvvkshpwynqinz8i",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136187/bookit/demo/qsmprvvkshpwynqinz8i.jpg",
//       },
//     ],
//     category: "King",
//     reviews: [],
//   },
//   {
//     name: "Spacious Suite in a quiet Boston neighborhood.",
//     pricePerNight: 95,
//     description:
//       "Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.",
//     address: "224 Cherry St, Buffalo, NY, 14202",
//     guestCapacity: 6,
//     numOfBeds: 3,
//     isInternet: true,
//     isBreakfast: true,
//     isAirConditioned: true,
//     isPetsAllowed: false,
//     isRoomCleaning: true,
//     ratings: 0,
//     numOfReviews: 0,
//     images: [
//       {
//         public_id: "bookit/demo/ahxbixikavvrlokgf8jp",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136394/bookit/demo/ahxbixikavvrlokgf8jp.jpg",
//       },
//       {
//         public_id: "bookit/demo/m7hgvpqj6kbqjsma0gfy",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136394/bookit/demo/m7hgvpqj6kbqjsma0gfy.jpg",
//       },
//       {
//         public_id: "bookit/demo/inpn3k94tvsmdaun0dsj",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136394/bookit/demo/inpn3k94tvsmdaun0dsj.jpg",
//       },
//     ],
//     category: "Single",
//     reviews: [],
//   },
//   {
//     name: "Shangri-La Hotel, Washington",
//     pricePerNight: 105,
//     description:
//       "Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.",
//     address: "4724  Mudlick Road, Yakima, WA, 98902",
//     guestCapacity: 2,
//     numOfBeds: 1,
//     isInternet: true,
//     isBreakfast: true,
//     isAirConditioned: true,
//     isPetsAllowed: false,
//     isRoomCleaning: true,
//     ratings: 0,
//     numOfReviews: 0,
//     images: [
//       {
//         public_id: "bookit/demo/ir1705u1vtfgzvqqdfh2",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136765/bookit/demo/ir1705u1vtfgzvqqdfh2.jpg",
//       },
//       {
//         public_id: "bookit/demo/o3ieyr8gltwhwccgqzia",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136765/bookit/demo/o3ieyr8gltwhwccgqzia.jpg",
//       },
//     ],
//     category: "King",
//     reviews: [],
//   },
//   {
//     name: "Hotel Chimayo de Santa Fe Rooms",
//     pricePerNight: 36,
//     description:
//       "Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.",
//     address: "1029  Godfrey Street, Portland, OR, 97205",
//     guestCapacity: 2,
//     numOfBeds: 2,
//     isInternet: true,
//     isBreakfast: true,
//     isAirConditioned: true,
//     isPetsAllowed: false,
//     isRoomCleaning: true,
//     ratings: 0,
//     numOfReviews: 0,
//     images: [
//       {
//         public_id: "bookit/demo/hmvqt42lzdjc197ynrtk",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136789/bookit/demo/hmvqt42lzdjc197ynrtk.jpg",
//       },
//     ],
//     category: "Twins",
//     reviews: [],
//   },
//   {
//     name: "Hotel Garni Ischgl 4 star room comfort",
//     pricePerNight: 82,
//     description:
//       "Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.",
//     address: "2645  Parrish Avenue, SAINT LOUIS, MO, 63116",
//     guestCapacity: 5,
//     numOfBeds: 3,
//     isInternet: true,
//     isBreakfast: true,
//     isAirConditioned: true,
//     isPetsAllowed: false,
//     isRoomCleaning: false,
//     ratings: 0,
//     numOfReviews: 0,
//     images: [
//       {
//         public_id: "bookit/demo/aenyd4econmkcvyiyjkc",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136804/bookit/demo/aenyd4econmkcvyiyjkc.jpg",
//       },
//     ],
//     category: "Single",
//     reviews: [],
//   },
//   {
//     name: "The Spa at Base Camp at Kerry Hotel",
//     pricePerNight: 76,
//     description:
//       "Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.",
//     address: "3118  Red Hawk Road, Garfield, MN, 56332",
//     guestCapacity: 2,
//     numOfBeds: 1,
//     isInternet: true,
//     isBreakfast: false,
//     isAirConditioned: true,
//     isPetsAllowed: false,
//     isRoomCleaning: true,
//     ratings: 0,
//     numOfReviews: 0,
//     images: [
//       {
//         public_id: "bookit/demo/bwrnbs3sqzd6bbuyau47",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136823/bookit/demo/bwrnbs3sqzd6bbuyau47.jpg",
//       },
//       {
//         public_id: "bookit/demo/hhjpp67jiqyacv8gvmso",
//         url: "http://res.cloudinary.com/udemy-courses/image/upload/v1693136822/bookit/demo/hhjpp67jiqyacv8gvmso.jpg",
//       },
//     ],
//     category: "Single",
//     reviews: [],
//   },
// ];
Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = void 0;
exports.rooms = [
  {
    name: "Executive King Guest Room at Le Royal Meridien",
    pricePerNight: 5400,
    description:
      "Le Royal Meridien Chennai features meeting and banquet space for up 1,500 guests, five restaurants and bars, a state-of-the-art fitness center and a splendid outdoor pool with whirlpool. A travel desk is in the hotel's lobby that assists guests as they experience the sights of Chennai, including the Marina Beach, temple architecture, a vibrant theater scene and a five week-long Music Season, one of the world's largest cultural events.",
    address:
      "1, Grand Southern Trunk Rd, Alandur, St.Thomas Mount, Ramapuram, Tamil Nadu 600016",
    guestCapacity: 2,
    numOfBeds: 1,
    isInternet: true,
    isBreakfast: true,
    isAirConditioned: true,
    isPetsAllowed: false,
    isRoomCleaning: true,
    ratings: 0,
    numOfReviews: 0,
    images: [
      {
        public_id: "chennaihotels/demo/maamd-room-7114-hor-wide_nqyipo",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706004784/Home/rooms/maamd-room-7114-hor-wide_nqyipo.png",
      },
    ],
    category: "Twins",
    reviews: [],
  },
  {
    name: "Deluxe Room at Taj Club House",
    pricePerNight: 7000,
    description:
      "Sophisticated and warm colour palettes combined with textured furnishing gives the room a sophisticated style of a personalized city residence. The room has a Flat Screen television and tea/coffee maker. A work desk, multi-line telephone and electronic safe are few amenities provided, to ensure your business is smooth and stay is comfortable.",
    address:
      "No. 2, Club House Road, Mount Road, Chennai, Tamilnadu, 600002, India",
    guestCapacity: 3,
    numOfBeds: 1,
    isInternet: true,
    isBreakfast: false,
    isAirConditioned: true,
    isPetsAllowed: true,
    isRoomCleaning: true,
    ratings: 0,
    numOfReviews: 0,
    images: [
      {
        public_id: "chennaihotels/demo/tjtjntyn",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706005130/Home/rooms/cq5dam.web.756.756_1_dk75ju.jpg",
      },
      {
        public_id: "chennaihotels/demo/dvdfvdvd",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706005130/Home/rooms/cq5dam.web.756.756_2_p7vqvt.jpg",
      },
    ],
    category: "King",
    reviews: [],
  },
  {
    name: "Premium Room at Taj Club House",
    pricePerNight: 9000,
    description:
      "Located on the 5th floor, these rooms exuberate modernity and comfort. Marble Flooring, tastefully chosen furniture and abstract artwork with local influences make these rooms perfect for those who indulge in that little more. 41-inch smart televisions, DVD player and wonderful 3-fixture, glass partitioned bathrooms create a marvellous experience.",
    address:
      "No. 2, Club House Road, Mount Road, Chennai, Tamilnadu, 600002, India",
    guestCapacity: 3,
    numOfBeds: 1,
    isInternet: true,
    isBreakfast: true,
    isAirConditioned: true,
    isPetsAllowed: true,
    isRoomCleaning: true,
    ratings: 0,
    numOfReviews: 0,
    images: [
      {
        public_id: "chennaihotels/demo/ccsdccsdc",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706005445/Home/rooms/tajpremium_du5gzs.jpg",
      },
    ],
    category: "King",
    reviews: [],
  },
  {
    name: "Superior Room at Taj Club House",
    pricePerNight: 5000,
    description:
      "Our 25 Sq. mt Superior Rooms are ideal for the business traveler who seeks distinctive and smart designs coupled with comfort. Features and amenities include wooden flooring, a queen-sized bed, workstation, complimentary Wi-Fi for up to 4 devices (standard plan), Flatscreen Television and tea/coffee maker.",
    address:
      "No. 2, Club House Road, Mount Road, Chennai, Tamilnadu, 600002, India",
    guestCapacity: 2,
    numOfBeds: 1,
    isInternet: false,
    isBreakfast: false,
    isAirConditioned: true,
    isPetsAllowed: true,
    isRoomCleaning: true,
    ratings: 0,
    numOfReviews: 0,
    images: [
      {
        public_id: "chennaihotels/demo/sgbnzfvdf",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706005763/Home/rooms/gallery-14_aaepsw.jpg",
      },
      {
        public_id: "chennaihotels/demo/vsfhdgbdsv",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706005762/Home/rooms/superiortaj1_ptxz05.jpg",
      },
    ],
    category: "Twins",
    reviews: [],
  },
  {
    name: "King Bed High Floor at Hyatt Regency",
    pricePerNight: 6400,
    description:
      "This King Bed High Floor room situated on high floor provides guests with unobstructed skyline view in this 40-46 sqm / 430-495 sqft room with contemporary design and custom artwork, which creates an inviting ambience. The room encompasses one king bed, an alluring view of the pool or city, well-lit, expansive work area, wellness coupled with spa-inspired deep soak bathtub and separate rain shower. Enjoy modern conveniences such as a 40-inch LCD TV and Free Wi-Fi.",
    address: "365, Anna Salai, Teynampet, Chennai, Tamil Nadu, India, 600018",
    guestCapacity: 4,
    numOfBeds: 1,
    isInternet: true,
    isBreakfast: false,
    isAirConditioned: true,
    isPetsAllowed: true,
    isRoomCleaning: true,
    ratings: 0,
    numOfReviews: 0,
    images: [
      {
        public_id: "chennaihotels/demo/sgbsdcsd",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706008150/Home/rooms/CHENN-P0141-Standard-King-Room.16x9_z2rpru.png",
      },
    ],
    category: "King",
    reviews: [],
  },
  {
    name: "2 Twin Beds High Floor at Hyatt Regency",
    pricePerNight: 6600,
    description:
      "This Twin Bed High Floor room situated on high floor provides guests with unobstructed skyline view in this 40-46 sqm / 430-495 sqft room with contemporary design and custom artwork which creates an inviting ambience. The room encompasses two twin beds, an alluring view of the pool or city, well-lit, expansive work area, wellness coupled with spa-inspired deep soak bathtub and separate rain shower. Enjoy modern conveniences such as a 40-inch LCD TV and Free Wi-Fi.",
    address: "365, Anna Salai, Teynampet, Chennai, Tamil Nadu, India, 600018",
    guestCapacity: 2,
    numOfBeds: 3,
    isInternet: true,
    isBreakfast: false,
    isAirConditioned: true,
    isPetsAllowed: true,
    isRoomCleaning: true,
    ratings: 0,
    numOfReviews: 0,
    images: [
      {
        public_id: "chennaihotels/demo/sdfvdfvvdf",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706008302/Home/rooms/CHENN-P0143-Standard-Twin-Room.16x9_svnop4.png",
      },
    ],
    category: "Twins",
    reviews: [],
  },
  {
    name: "1 King Bed with Club Access at Hyatt Regency",
    pricePerNight: 12000,
    description:
      "Located on floors 6 & 7, this 40-sqm / 430 sqft room offers contemporary design and custom artwork, one king bed, pool & city skyline views, over-sized work area, spa-inspired deep soak bathtub, separate rain shower and access to happy hours between 6 pm to 8 pm (condition apply). Enjoy modern conveniences such as a 40-inch LCD TV and Free Wi-Fi.",
    address: "365, Anna Salai, Teynampet, Chennai, Tamil Nadu, India, 600018",
    guestCapacity: 4,
    numOfBeds: 1,
    isInternet: true,
    isBreakfast: true,
    isAirConditioned: true,
    isPetsAllowed: true,
    isRoomCleaning: true,
    ratings: 0,
    numOfReviews: 0,
    images: [
      {
        public_id: "chennaihotels/demo/sdfvdfvvdf",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706008640/Home/rooms/CHENN-P0142-Standard-King-Bathroom-View.16x9_x4ohte.png",
      },
    ],
    category: "King",
    reviews: [],
  },
  {
    name: "Five Star Superior Rooms at The Accord Hotels",
    pricePerNight: 11500,
    description:
      "326 sq. ft. of absolute coziness and charm, our Superior Rooms are ideal for two. These rooms are designed to gratify you with a host of amenities, turning every moment of your stay into an incredibly enjoyable experience.",
    address:
      "35, Gopathi Narayanaswami Chetty Rd, Lakshimi Colony, T. Nagar, Chennai, Tamil Nadu 600017",
    guestCapacity: 2,
    numOfBeds: 1,
    isInternet: true,
    isBreakfast: false,
    isAirConditioned: true,
    isPetsAllowed: true,
    isRoomCleaning: true,
    ratings: 0,
    numOfReviews: 0,
    images: [
      {
        public_id: "chennaihotels/demo/sddfvscsdf",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706017378/Home/rooms/superior-2_locnpk.jpg",
      },
    ],
    category: "Twins",
    reviews: [],
  },
  {
    name: "Five Star Deluxe King Rooms at The Accord Hotels",
    pricePerNight: 13500,
    description:
      "Introducing our new Deluxe King rooms perfect for both business and leisure travellers. These rooms are designed to offer modern comfort and convenience. Enjoy a comfortable king sized bed and stylish decor that creates a cosy atmosphere. For business travellers, there's a well equipped workspace with fast Wi-Fi. If you're here to relax, you'll love the spa like bathroom. Plus, we provide entertainment with a flat screen TV and a minibar for your convenience. The Deluxe King rooms at Accord Metropolitan are all about making your stay comfortable and enjoyable, whether you're here for work or leisure. Experience the best of both worlds in our Deluxe King rooms, where modern amenities and relaxation come together seamlessly.",
    address:
      "35, Gopathi Narayanaswami Chetty Rd, Lakshimi Colony, T. Nagar, Chennai, Tamil Nadu 600017",
    guestCapacity: 2,
    numOfBeds: 1,
    isInternet: true,
    isBreakfast: false,
    isAirConditioned: true,
    isPetsAllowed: true,
    isRoomCleaning: true,
    ratings: 0,
    numOfReviews: 0,
    images: [
      {
        public_id: "chennaihotels/demo/ssdvfdgjnz",
        url: "https://res.cloudinary.com/dxcleqyco/image/upload/v1706017723/Home/rooms/Deluxe-King-Room-1_ev0x8b.jpg",
      },
    ],
    category: "King",
    reviews: [],
  },
];
