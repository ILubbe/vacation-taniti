const SourcesData = [
    {
        page: "Page",
        location: "Location",
        description: "Title",
        classification: "Classification",
        src: "Image",
        apa: "Source",
        url: ""
    },
    {
        page: "All",
        location: "Most prominently on NavBar left side",
        description: "Nasturtium",
        classification: "img",
        src: "images/logo.png",
        apa: "designhub. (n.d.). Nasturtium [Online image]. Freepik. ", // keep a space on end of every apa value.
        url: "https://www.freepik.com/icon/nasturtium_9103465"
    },
    {
        page: "/home",
        location: "hero section",
        description: "Drone footage of a tropical beach in the Dominican Republic",
        classification: "video",
        src: "video",
        apa: "Marek, M. (2019). Drone footage of a tropical beach in the Dominican Republic [Video]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/video/drone-footage-of-a-tropical-beach-in-the-dominican-republic-3223480/"
    },
    {
        page: "All",
        location: "NavBar right side in mobile page view",
        description: "Hamburger button",
        classification: "img",
        src: "images/hamburger.png",
        apa: "Unknown. (n.d.). Hamburger button [Online image]. Icons8. ", // keep a space on end of every apa value.
        url: "https://icons8.com/icons/set/hamburger-button--white"
    },
    {
        page: "All",
        location: "NavBar right side in mobile page view (menu open)",
        description: "Close button",
        classification: "img",
        src: "images/close.png",
        apa: "Unknown. (n.d.). Close button [Online image]. Icons8. ", // keep a space on end of every apa value.
        url: "https://icons8.com/icons/set/close-button--white"
    },
    {
        page: "/home",
        location: "bottom of /home",
        description: "Luxury resort",
        classification: "img",
        src: "images/luxuryResort.jpg",
        apa: "jpotts25. (n.d.). Luxury resort [Online image]. Wallpapersafari. ", // keep a space on end of every apa value.
        url: "https://wallpapersafari.com/w/A8funW"
    },
    {
        page: "/home",
        location: "Reviews (Sophia Martinez)",
        description: "Woman wearing black spaghetti strap top",
        classification: "img",
        src: "images/woman.jpg",
        apa: "Pixabay. (2019). Woman wearing black spaghetti strap top [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/"
    },
    {
        page: "/home",
        location: "Reviews (John Anderson)",
        description: "Man in brown polo shirt",
        classification: "img",
        src: "images/man.jpg",
        apa: "Robben, S. (2018). Man in brown polo shirt [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/man-in-brown-polo-shirt-614810/"
    },
    {
        page: "/home",
        location: "Reviews (Emily Parker)",
        description: "Woman holding a maple leaf",
        classification: "img",
        src: "images/woman2.jpg",
        apa: "Ultra. (2019). Woman holding a maple leaf [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/woman-holding-a-maple-leaf-2965690/"
    },
    {
        page: "/food",
        location: "American",
        description: "Hamburger",
        classification: "img",
        src: "images/american-food.jpg",
        apa: "leonardovieira260998. (2019). Hamburger [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/hamburger-food-snack-cheeseburger-7191899/"
    },
    {
        page: "/food",
        location: "Pan-Asian",
        description: "Cooking wok",
        classification: "img",
        src: "images/pan-asian-food.jpg",
        apa: "Pexels. (2018). Cooking wok [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/cooking-wok-chinese-asian-food-1835369/"
    },
    {
        page: "/food",
        location: "Seafood",
        description: "Salmon fish seafood",
        classification: "img",
        src: "images/seafood.jpg",
        apa: "cattalin. (2016). Salmon fish seafood [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/salmon-fish-seafood-veggies-salad-518032/"
    },
    {
        page: "/stores",
        location: "Coral Coast Superstore",
        description: "Grocery store",
        classification: "img",
        src: "images/supermarket.jpg",
        apa: "ccipeggy. (2018). Grocery store [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/grocery-store-supermarket-retail-2619380/"
    },
    {
        page: "/stores",
        location: "Taniti Fresh Market",
        description: "Market fruits",
        classification: "img",
        src: "images/grocery.jpg",
        apa: "justine007. (2020). Market fruits [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/market-fruits-food-fruit-healthy-4802751/"
    },
    {
        page: "/stores",
        location: "Quick Stop Convenience Store",
        description: "Convenience store",
        classification: "img",
        src: "images/corner-store.jpg",
        apa: "ignartonosbg. (2020). Convenience store [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/convenience-store-store-shop-7377810/"
    },
    {
        page: "/lodging",
        location: "Taniti Estate: Your Luxury Resort on Taniti",
        description: "Brown and white house near swimming pool during daytime",
        classification: "img",
        src: "images/luxuryResort2.jpg",
        apa: "Lambert, C. (n.d.). Brown and white house near swimming pool during daytime [Online image]. Unsplash. ", // keep a space on end of every apa value.
        url: "https://unsplash.com/photos/brown-and-white-house-near-swimming-pool-during-daytime-jcBwieuJhHA"
    },
    {
        page: "/lodging",
        location: "Coral Sands Hotel",
        description: "Upholstered bed near cabinet",
        classification: "img",
        src: "images/hotel.jpg",
        apa: "Pixabay. (2018). Upholstered bed near cabinet [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/upholstered-bed-near-cabinet-262048/"
    },
    {
        page: "/lodging",
        location: "Seaside Backpackers Hostel",
        description: "Bunk beds",
        classification: "img",
        src: "images/hostel.jpg",
        apa: "Hans. (2013). Bunk beds [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/beds-youth-hostel-bunk-beds-sleep-182965/"
    },
    {
        page: "/transportation",
        location: "Bicycle Rentals",
        description: "Pile of assorted color bikes",
        classification: "img",
        src: "images/bikes.jpg",
        apa: "Christin Hume. (2018). Pile of assorted color bikes [Online image]. Unsplash. ", // keep a space on end of every apa value.
        url: "https://unsplash.com/photos/pile-of-assorted-color-bikes-on-concrete-pavemenet-zbUH21c9ARk"
    },
    {
        page: "/transportation",
        location: "City Bus",
        description: "Bus path",
        classification: "img",
        src: "images/bus.jpg",
        apa: "tayguntoprak. (2017). Bus path [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/bus-path-city-2069419/"
    },
    {
        page: "/transportation",
        location: "Taxis",
        description: "Taxi sign",
        classification: "img",
        src: "images/taxi.jpg",
        apa: "652234 (2018). Taxi sign [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/taxi-sign-automobile-3504010/"
    },
    {
        page: "/transportation",
        location: "Rental Cars",
        description: "Key",
        classification: "img",
        src: "images/keys.jpg",
        apa: "TBIT. (2016). Key [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/key-car-key-keychain-metal-949094/"
    },
    {
        page: "/entertainment",
        location: "Beaches",
        description: "Beach footprints",
        classification: "img",
        src: "images/beach.jpg",
        apa: "Kanenori. (2021). Beach footprints [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/beach-sea-footprints-sand-6292382/"
    },
    {
        page: "/entertainment",
        location: "Mount Seraphina",
        description: "Volcanic ash clouds",
        classification: "img",
        src: "images/volcano.jpg",
        apa: "Balderama, E. (2020). Volcanic ash clouds [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/volcanic-ash-clouds-in-air-5269237/"
    },
    {
        page: "/entertainment",
        location: "Emerald Grove Rainforest",
        description: "Rainforest path",
        classification: "img",
        src: "images/rainforest.jpg",
        apa: "Kanenori. (2019). Rainforest path [Online image]. Pixabay. ", // keep a space on end of every apa value.
        url: "https://pixabay.com/photos/rainforest-path-morning-mist-asahi-4350845/"
    },
    {
        page: "/entertainment",
        location: "Taniti Heritage Museum",
        description: "Brown and grey building with people inside",
        classification: "img",
        src: "images/museum.jpg",
        apa: "Pixabay. (2018). Brown and grey building with people inside [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/brown-and-grey-building-with-people-inside-208636/"
    },
    {
        page: "/entertainment",
        location: "Fishing Tours",
        description: "Man fishing",
        classification: "img",
        src: "images/fishing.jpg",
        apa: "McAllister, W. (2019). Man fishing [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/photo-of-man-fishing-3793366/"
    },
    {
        page: "/entertainment",
        location: "Snorkeling Tours",
        description: "Woman snorkeling over coral reef",
        classification: "img",
        src: "images/snorkeling.jpg",
        apa: "Maahid Photos. (2020). Woman snorkeling over coral reef [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/woman-snorkeling-over-coral-reef-26927362/"
    },
    {
        page: "/entertainment",
        location: "Ziplining",
        description: "Two people riding a zip line",
        classification: "img",
        src: "images/zipline.jpg",
        apa: "Arcelus, A. (2021). Two people riding a zip line [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/two-people-riding-a-zip-line-8771397/"
    },
    {
        page: "/entertainment",
        location: "Pubs",
        description: "Black barstools",
        classification: "img",
        src: "images/pub.jpg",
        apa: "Olichon, A. (2018). Black barstools [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/black-barstools-2387566/"
    },
    {
        page: "/entertainment",
        location: "Tropical Brews Microbrewery",
        description: "Food nature field beer",
        classification: "img",
        src: "images/hops.jpg",
        apa: "Spiske, M. (2020). Food nature field beer [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/food-nature-field-beer-6278625/"
    },
    {
        page: "/entertainment",
        location: "*NEW* Neon Vibes Nightclub",
        description: "Group of people in a concert",
        classification: "img",
        src: "images/danceClub.jpg",
        apa: "Sampan, M. A. (2019). Group of people in a concert [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/group-of-people-in-a-concert-1587927/"
    },
    {
        page: "/entertainment",
        location: "Starview Cinemas",
        description: "Big cinema screen on stage",
        classification: "img",
        src: "images/movie.jpg",
        apa: "Szemerey, B. (2020). Big cinema screen on stage [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/big-cinema-screen-on-stage-7513421/"
    },
    {
        page: "/entertainment",
        location: "Skyview Helicopter Tours",
        description: "Helicopter ride",
        classification: "img",
        src: "images/helo.jpg",
        apa: "Bertelli, M. (2019). Helicopter ride [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/helicopter-ride-2868236/"
    },
    {
        page: "/entertainment",
        location: "Game Haven Arcade",
        description: "Arcade facade",
        classification: "img",
        src: "images/arcade.jpg",
        apa: "Element5 Digital. (2018). Arcade facade [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/arcade-facade-1293261/"
    },
    {
        page: "/entertainment",
        location: "Taniti Art Gallery",
        description: "Colorful arts hanging on wall",
        classification: "img",
        src: "images/artGallery.jpg",
        apa: "Viana, M. (2019). Colorful arts hanging on wall [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/colorful-arts-hanging-on-wall-2372978/"
    },
    {
        page: "/entertainment",
        location: "Strike Paradise Bowling Alley",
        description: "Assorted bowling balls",
        classification: "img",
        src: "images/bowling.jpg",
        apa: "Zomer, M. (2018). Assorted bowling balls [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/assorted-bowling-ball-lot-344034/"
    },
    {
        page: "/entertainment",
        location: "*COMING SOON* Emerald Golf Club",
        description: "Photo of a golf course",
        classification: "img",
        src: "images/golf.jpg",
        apa: "Kindel Media. (2020). Photo of a golf course [Online image]. Pexels. ", // keep a space on end of every apa value.
        url: "https://www.pexels.com/photo/photo-of-a-golf-course-6573872/"
    }
]

export default SourcesData;
