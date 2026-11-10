/**
 * SYLVAN - Luxury Countryside & Farmstay Booking Platform
 * Mock Data Store & Persistence Helper
 */

const SYLVAN_DATA = {
  stays: [
    {
      id: "syl-01",
      slug: "willow-creek-farmhouse",
      name: "Willow Creek Heritage Farmhouse",
      category: "Farmhouses",
      type: "Whole Farmhouse & Orchard",
      tagline: "12-acre organic apple orchard with vintage stone hearth and alpine stream",
      location: "Highland Valley, Vermont",
      region: "Vermont",
      price: 285,
      originalPrice: 340,
      rating: 4.96,
      reviewsCount: 84,
      capacity: 8,
      bedrooms: 4,
      bathrooms: 3,
      beds: 5,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: true,
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Nestled amidst 12 rolling acres of heirloom apple orchards and gentle pastures, Willow Creek Farmhouse is a meticulously restored 19th-century timber-framed estate. Wake up to misty mountain views, pick crisp Honeycrisp apples in autumn, and gather around the hand-carved stone fireplace with farm-fresh cider.",
      highlights: [
        "Private 12-acre organic apple orchard",
        "Wood-fired cedar hot tub overlooking pastures",
        "Farm-to-table breakfast basket included daily",
        "Direct access to trout stream and wildflower meadow"
      ],
      amenities: [
        "Wi-Fi", "Swimming Pool", "Fireplace", "Kitchen", "Pet-Friendly", "Breakfast Included", 
        "Free Parking", "Air Conditioning", "Hot Tub", "EV Charger", "Organic Garden Access", "BBQ Grill"
      ],
      houseRules: [
        "Check-in: 3:00 PM - 8:00 PM",
        "Check-out: 11:00 AM",
        "Quiet hours: 10:00 PM - 7:00 AM",
        "Pets welcome (up to 2 well-behaved dogs)",
        "No smoking inside the premises"
      ],
      host: {
        name: "Eleanor & Marcus Vance",
        role: "Fourth-generation Organic Farmers",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        rating: 4.98,
        responseRate: "100%",
        responseTime: "within an hour",
        bio: "We have farmed this valley for over forty years. Sharing the beauty of seasonal rhythms, fresh sourdough, and starry nights with travelers is our greatest joy."
      }
    },
    {
      id: "syl-02",
      slug: "hazelwood-timber-cottage",
      name: "Hazelwood Timber Cottage",
      category: "Countryside Cottages",
      type: "Private Wooden Cottage",
      tagline: "Romantic artisan wood sanctuary surrounded by ancient oak groves and lavender",
      location: "Cotswold Hills, England",
      region: "Cotswolds",
      price: 195,
      originalPrice: 230,
      rating: 4.92,
      reviewsCount: 62,
      capacity: 4,
      bedrooms: 2,
      bathrooms: 2,
      beds: 2,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: true,
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "A fairy-tale stone and timber haven cloaked in climbing wisteria. Hazelwood Cottage combines traditional English pastoral elegance with modern comfort: heated reclaimed flagstone floors, an AGA cast-iron cooker, and an outdoor brass tub under ancient oaks.",
      highlights: [
        "Private lavender garden and sundial patio",
        "Artisanal breakfast hamper with clotted cream and sourdough",
        "Cast iron clawfoot tub and rain showers",
        "Bespoke wood stove with seasoned birch logs"
      ],
      amenities: [
        "Wi-Fi", "Fireplace", "Kitchen", "Free Parking", "Breakfast Included", 
        "Bathtub", "Garden View", "Coffee Maker", "Patio", "Washer"
      ],
      houseRules: [
        "Check-in: 2:00 PM - 7:00 PM",
        "Check-out: 10:30 AM",
        "Ideal for couples or small families",
        "No open fires outside designated fire pit"
      ],
      host: {
        name: "Claire Pendelton",
        role: "Landscape Architect & Botanist",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        rating: 4.95,
        responseRate: "99%",
        responseTime: "within 30 mins",
        bio: "Passionate about historic cottage gardens and wildlife conservation. I love giving guests cuttings from our heritage herb collection!"
      }
    },
    {
      id: "syl-03",
      slug: "sol-terra-eco-sanctuary",
      name: "Sol Terra Eco Sanctuary",
      category: "Eco Retreats",
      type: "Off-Grid Architectural Lodge",
      tagline: "Zero-emission solar sanctuary with natural plunge pool and panoramic ridge views",
      location: "Sedona Foothills, Arizona",
      region: "Southwest",
      price: 340,
      originalPrice: 390,
      rating: 4.98,
      reviewsCount: 110,
      capacity: 6,
      bedrooms: 3,
      bathrooms: 2,
      beds: 3,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: false,
      images: [
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Constructed with rammed earth and reclaimed cedar, Sol Terra blends invisibly into high-desert canyon ridges. Enjoy pristine dark-sky stargazing from your private observation deck, dip into a spring-fed plunge pool, and re-energize in pure solar tranquility.",
      highlights: [
        "100% solar and rainwater-harvested architecture",
        "Rooftop celestial stargazing daybed",
        "Natural filtered spring-water plunge pool",
        "Private canyon walking path with petroglyphs"
      ],
      amenities: [
        "Wi-Fi", "Swimming Pool", "Solar Powered", "Kitchen", "Free Parking", 
        "Air Conditioning", "Stargazing Deck", "Organic Toiletries", "Yoga Mats"
      ],
      houseRules: [
        "Check-in: 4:00 PM - 9:00 PM",
        "Check-out: 11:00 AM",
        "Zero single-use plastics policy",
        "Strict quiet zone after dark for wildlife"
      ],
      host: {
        name: "Mateo & Julian Ortiz",
        role: "Sustainable Architects",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        rating: 4.99,
        responseRate: "98%",
        responseTime: "within an hour",
        bio: "We designed Sol Terra to demonstrate that luxury and ecological harmony can amplify each other. Welcome to your mindful reset."
      }
    },
    {
      id: "syl-04",
      slug: "villa-bellacolina-tuscany",
      name: "Villa Bella Colina Farm Estate",
      category: "Private Villas",
      type: "Tuscan Stone Villa & Vineyard",
      tagline: "Centuries-old stone estate among Chianti olive groves and private infinity pool",
      location: "Val d'Orcia, Tuscany, Italy",
      region: "Tuscany",
      price: 490,
      originalPrice: 560,
      rating: 4.99,
      reviewsCount: 95,
      capacity: 10,
      bedrooms: 5,
      bathrooms: 5,
      beds: 7,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: true,
      images: [
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Gaze over golden undulating hills crowned with cypress trees. Villa Bella Colina offers classic Tuscan grandeur: terracotta vaults, an outdoor wood-fired pizza oven, private olive oil tastings from our 300-year-old trees, and sunset swims over the valley.",
      highlights: [
        "Infinity pool perched above Chianti vineyards",
        "Wood-fired pizza kitchen and outdoor pergola dining",
        "Complimentary estate olive oil and Chianti Classico",
        "Private in-villa chef options available on request"
      ],
      amenities: [
        "Wi-Fi", "Swimming Pool", "Fireplace", "Kitchen", "Free Parking", 
        "Air Conditioning", "Wine Cellar", "Pizza Oven", "Breakfast Included", "Pet-Friendly"
      ],
      houseRules: [
        "Check-in: 3:00 PM - 8:00 PM",
        "Check-out: 10:00 AM",
        "Respect the vineyard boundaries",
        "Pool hours: 8:00 AM - 10:00 PM"
      ],
      host: {
        name: "Gianluigi & Beatrice Rossi",
        role: "Sommeliers & Olive Oil Producers",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        rating: 5.0,
        responseRate: "100%",
        responseTime: "within an hour",
        bio: "Our family has made olive oil here since 1888. We love welcoming guests to experience true Italian conviviality and la dolce vita."
      }
    },
    {
      id: "syl-05",
      slug: "riverbend-cedar-lodge",
      name: "Riverbend Cedar Lodge",
      category: "Riverside Stays",
      type: "Handcrafted Log Lodge",
      tagline: "Waterfront tranquility with private boat dock, sauna, and riverside fire pit",
      location: "Huron River Valley, Michigan",
      region: "Midwest",
      price: 245,
      originalPrice: 290,
      rating: 4.88,
      reviewsCount: 54,
      capacity: 6,
      bedrooms: 3,
      bathrooms: 2,
      beds: 4,
      isSuperhost: false,
      featured: false,
      isAvailable: true,
      instantBook: true,
      images: [
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Built right at the bend of a crystal-clear river surrounded by whispering cedar trees. Cast a fishing fly straight from your morning deck, paddle kayaks into peaceful backwaters, and unwind in the authentic Nordic cedar barrel sauna.",
      highlights: [
        "Private cedar river dock with 2 tandem kayaks & canoe",
        "Nordic wood-fired outdoor barrel sauna",
        "Evening fire circle with free firewood provided",
        "Direct fly-fishing access for rainbow trout"
      ],
      amenities: [
        "Wi-Fi", "Fireplace", "Kitchen", "Free Parking", "Sauna", 
        "Waterfront", "Kayaks Included", "BBQ Grill", "Pet-Friendly"
      ],
      houseRules: [
        "Check-in: 3:00 PM - 7:00 PM",
        "Check-out: 11:00 AM",
        "Life jackets required when using boats",
        "Catch-and-release fishing encouraged"
      ],
      host: {
        name: "David & Sarah Lindqvist",
        role: "River Guides & Naturalists",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
        rating: 4.9,
        responseRate: "97%",
        responseTime: "within 2 hours",
        bio: "The river has taught us to slow down and listen. We built this lodge to share the restorative power of flowing waters with every guest."
      }
    },
    {
      id: "syl-06",
      slug: "misty-pinnacle-mountain-retreat",
      name: "Misty Pinnacle Mountain Chalet",
      category: "Mountain Retreats",
      type: "Alpine Wood Chalet",
      tagline: "Panoramic summit views, heated outdoor spa, and floor-to-ceiling glass alpine walls",
      location: "Blue Ridge Mountains, North Carolina",
      region: "Blue Ridge",
      price: 360,
      originalPrice: 420,
      rating: 4.97,
      reviewsCount: 78,
      capacity: 8,
      bedrooms: 4,
      bathrooms: 3,
      beds: 5,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: true,
      images: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Perched high on an exclusive ridgeline 3,800 feet above the morning cloud layer, Misty Pinnacle offers unforgettable sunsets over layer upon layer of smoky blue peaks. Complete with floor-to-ceiling panoramic glass, a game loft, and a cantilevered hot tub.",
      highlights: [
        "270-degree unhindered sunset mountain views",
        "Sunken alpine hot tub suspended over ridge",
        "Massive double-sided fieldstone fireplace",
        "Private trailhead connecting to the Appalachian trail"
      ],
      amenities: [
        "Wi-Fi", "Hot Tub", "Fireplace", "Kitchen", "Free Parking", 
        "Air Conditioning", "Game Room", "Mountain View", "Balcony", "BBQ Grill"
      ],
      houseRules: [
        "Check-in: 4:00 PM - 8:00 PM",
        "Check-out: 10:00 AM",
        "AWD / 4WD recommended during winter months",
        "No fireworks or loud outdoor speakers"
      ],
      host: {
        name: "Harrison Brooks",
        role: "Mountain Enthusiast & Woodworker",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
        rating: 4.96,
        responseRate: "99%",
        responseTime: "within an hour",
        bio: "I personally handcrafted the dining table and timber mantle from fallen ridge oaks. Welcome to the quietest sky in the East."
      }
    },
    {
      id: "syl-07",
      slug: "oak-hollow-homestay",
      name: "Oak Hollow Heritage Farmstay",
      category: "Homestays",
      type: "Authentic Family Farmstay",
      tagline: "Warm countryside hospitality with home-cooked farm dinners and dairy workshops",
      location: "Lancaster Valley, Pennsylvania",
      region: "Pennsylvania",
      price: 160,
      originalPrice: 190,
      rating: 4.94,
      reviewsCount: 130,
      capacity: 5,
      bedrooms: 2,
      bathrooms: 2,
      beds: 3,
      isSuperhost: true,
      featured: false,
      isAvailable: true,
      instantBook: true,
      images: [
        "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Experience the gentler rhythm of traditional farm life. Join host Mary for morning buttermilk biscuit baking, collect warm eggs from pasture-raised hens, and dine under an arbor of concord grapes while listening to evening crickets.",
      highlights: [
        "Daily country farm breakfast cooked fresh by host",
        "Hands-on butter churning and cheese-making sessions",
        "Gentle sheep, pygmy goats, and farm collies",
        "Private guest wing with separate garden entry"
      ],
      amenities: [
        "Wi-Fi", "Breakfast Included", "Free Parking", "Kitchenette", 
        "Air Conditioning", "Garden", "Farm Animal Access", "Patio"
      ],
      houseRules: [
        "Check-in: 2:00 PM - 7:00 PM",
        "Check-out: 11:00 AM",
        "Children love our animal barn with parent supervision",
        "No smoking on the property grounds"
      ],
      host: {
        name: "Mary & Samuel Yoder",
        role: "Traditional Farmers & Bakers",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        rating: 4.97,
        responseRate: "100%",
        responseTime: "within an hour",
        bio: "We believe hospitality is an act of warmth. We’ve hosted travelers from 42 countries and can’t wait to set a place at our table for you."
      }
    },
    {
      id: "syl-08",
      slug: "chateau-des-lavandes",
      name: "Château des Lavandes Estate",
      category: "Heritage Homes",
      type: "17th Century Stone Bastide",
      tagline: "Provencal grandeur surrounded by endless purple lavender and ancient cypress lanes",
      location: "Gordes, Provence, France",
      region: "Provence",
      price: 520,
      originalPrice: 600,
      rating: 4.99,
      reviewsCount: 71,
      capacity: 12,
      bedrooms: 6,
      bathrooms: 6,
      beds: 8,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: false,
      images: [
        "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "An authentic historic French bastide restored with uncompromised refinement. Featuring vaulted stone dining salons, a private tennis court, Roman swimming pool, and lavender fields that scent the warm summer breezes.",
      highlights: [
        "Private 20-meter heated Roman pool in olive garden",
        "Surrounded by fragrant blooming lavender fields",
        "Private sommelier cellar and wine tasting room",
        "Full housekeeping and concierge services"
      ],
      amenities: [
        "Wi-Fi", "Swimming Pool", "Fireplace", "Kitchen", "Free Parking", 
        "Air Conditioning", "Tennis Court", "Wine Cellar", "Breakfast Included", "Pet-Friendly"
      ],
      houseRules: [
        "Check-in: 4:00 PM - 8:00 PM",
        "Check-out: 10:00 AM",
        "Events permitted upon prior host approval",
        "Smoking allowed only in outdoor designated garden"
      ],
      host: {
        name: "Madame Genevieve Dupont",
        role: "Estate Curator & Historian",
        avatar: "https://images.unsplash.com/photo-1580489947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
        rating: 5.0,
        responseRate: "100%",
        responseTime: "within 30 mins",
        bio: "Preserving the architectural heritage of Luberon is my life's mission. I look forward to sharing our estate’s rich history with discerning guests."
      }
    },
    {
      id: "syl-09",
      slug: "emerald-canopy-treehouse-retreat",
      name: "Emerald Canopy Treehouse Retreat",
      category: "Eco Retreats",
      type: "Luxury Canopy Treehouse",
      tagline: "Suspended 35 feet among ancient fir trees with outdoor copper soak tub and suspension bridges",
      location: "Olympic Peninsula, Washington",
      region: "Pacific Northwest",
      price: 310,
      originalPrice: 350,
      rating: 4.95,
      reviewsCount: 118,
      capacity: 3,
      bedrooms: 1,
      bathrooms: 1,
      beds: 2,
      isSuperhost: true,
      featured: false,
      isAvailable: true,
      instantBook: true,
      images: [
        "https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Step across a gently swaying timber suspension bridge into a high-canopy sanctuary. Hear the gentle murmurs of moss-draped old growth forest, sleep under skylights that frame cathedral branches, and soak in warm copper tubs among the birds.",
      highlights: [
        "Suspended suspension bridge and canopy viewing deck",
        "Handmade copper soaking tub on open-air veranda",
        "Skylights directly above plush king bed",
        "Private trail into temperate rainforest preserve"
      ],
      amenities: [
        "Wi-Fi", "Fireplace", "Kitchenette", "Free Parking", 
        "Bathtub", "Rainforest View", "Coffee Maker", "Heating"
      ],
      houseRules: [
        "Check-in: 3:00 PM - 7:00 PM",
        "Check-out: 11:00 AM",
        "Not suitable for young children under 10",
        "Footwear removal inside required"
      ],
      host: {
        name: "Arlo & Wren Thorne",
        role: "Master Wood Artisans",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
        rating: 4.97,
        responseRate: "98%",
        responseTime: "within an hour",
        bio: "We spent three years building Emerald Canopy without driving a single nail into the living heartwood of these majestic Douglas firs."
      }
    },
    {
      id: "syl-10",
      slug: "golden-pastures-dairy-farm",
      name: "Golden Pastures Farmstead",
      category: "Farmhouses",
      type: "Working Dairy & Cheese Farm",
      tagline: "Authentic working organic dairy with fresh Jersey milk, artisan cheeses, and rolling pastures",
      location: "Green Mountains, Vermont",
      region: "Vermont",
      price: 210,
      originalPrice: 250,
      rating: 4.91,
      reviewsCount: 88,
      capacity: 6,
      bedrooms: 3,
      bathrooms: 2,
      beds: 4,
      isSuperhost: false,
      featured: false,
      isAvailable: true,
      instantBook: true,
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "An authentic working organic dairy farm where cows graze peacefully along clover meadows. Guests enjoy full access to daily milking, artisanal cheese-aging cellars, and complimentary farm-churned butter and warm crusty loaves every dawn.",
      highlights: [
        "Complimentary artisanal cheese and butter tasting board",
        "Optional morning cow-milking and calf-feeding participation",
        "Wide wrap-around porch with rocking chairs and pasture vistas",
        "Wood stove with unlimited seasoned sugar maple wood"
      ],
      amenities: [
        "Wi-Fi", "Fireplace", "Kitchen", "Breakfast Included", 
        "Free Parking", "Pet-Friendly", "BBQ Grill", "Air Conditioning"
      ],
      houseRules: [
        "Check-in: 3:00 PM - 8:00 PM",
        "Check-out: 11:00 AM",
        "Farm safety briefing for barn visits",
        "Close all pasture gates immediately"
      ],
      host: {
        name: "Caleb & Hannah Miller",
        role: "Organic Dairy Farmers",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        rating: 4.93,
        responseRate: "96%",
        responseTime: "within 3 hours",
        bio: "Our cows have names, not numbers. We are excited to show your family how genuine organic food is raised with integrity."
      }
    },
    {
      id: "syl-11",
      slug: "stone-meadow-countryside-villa",
      name: "Stone Meadow Countryside Villa",
      category: "Private Villas",
      type: "Modern Country Villa & Heated Pool",
      tagline: "Contemporary architectural masterpiece with floor-to-ceiling glass and private tennis lawn",
      location: "Sonoma Valley, California",
      region: "California",
      price: 475,
      originalPrice: 540,
      rating: 4.98,
      reviewsCount: 67,
      capacity: 8,
      bedrooms: 4,
      bathrooms: 4,
      beds: 5,
      isSuperhost: true,
      featured: false,
      isAvailable: true,
      instantBook: true,
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Where modern minimalist architecture meets warm wine country charm. Stone Meadow Villa features seamless indoor-outdoor sliding glass panels, an outdoor kitchen with Viking barbecue, heated saltwater pool, and private cabana beds.",
      highlights: [
        "Heated 40ft saltwater lap pool and hot tub",
        "Full outdoor gourmet chef kitchen with wine cooler",
        "Sonoma vineyard views with private bocce court",
        "Sonos integrated whole-home sound system"
      ],
      amenities: [
        "Wi-Fi", "Swimming Pool", "Hot Tub", "Kitchen", "Free Parking", 
        "Air Conditioning", "Wine Cellar", "BBQ Grill", "EV Charger", "Pet-Friendly"
      ],
      houseRules: [
        "Check-in: 4:00 PM - 8:00 PM",
        "Check-out: 11:00 AM",
        "No amplified music outdoors after 10:00 PM",
        "Respect neighboring vineyards"
      ],
      host: {
        name: "Serena Wu & Paul Chen",
        role: "Architect & Winemaker",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
        rating: 4.99,
        responseRate: "100%",
        responseTime: "within an hour",
        bio: "We designed Stone Meadow to frame Sonoma's incredible golden hour light. We hope it brings you the deep relaxation it brings us."
      }
    },
    {
      id: "syl-12",
      slug: "highland-loch-riverside-cabin",
      name: "Highland Loch Riverside Cabin",
      category: "Riverside Stays",
      type: "Rustic Waterfront Cabin",
      tagline: "Secluded loch-side retreat with cedar outdoor tub, wooden jetty, and wild heather glens",
      location: "Loch Lomond, Scottish Highlands",
      region: "Highlands",
      price: 230,
      originalPrice: 270,
      rating: 4.93,
      reviewsCount: 59,
      capacity: 4,
      bedrooms: 2,
      bathrooms: 1,
      beds: 3,
      isSuperhost: true,
      featured: false,
      isAvailable: true,
      instantBook: true,
      images: [
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Perched right at the tranquil water's edge where mist rises off ancient Scottish lochs. Enjoy hot drams of single malt whiskey by the cast-iron stove, row out on still morning waters, and watch red deer roam across heather-covered hills.",
      highlights: [
        "Private wooden loch jetty with rowing dinghy",
        "Wood-burning outdoor cedar hot tub over the water",
        "Cozy wood stove with peat and seasoned pine logs",
        "Completely quiet, secluded nature sanctuary"
      ],
      amenities: [
        "Wi-Fi", "Fireplace", "Kitchen", "Free Parking", 
        "Waterfront", "Hot Tub", "Boat Included", "Pet-Friendly"
      ],
      houseRules: [
        "Check-in: 3:00 PM - 7:00 PM",
        "Check-out: 10:30 AM",
        "Wellies (boots) recommended for waterside walks",
        "Fireplace safety screen must remain closed"
      ],
      host: {
        name: "Callum MacLeod",
        role: "Highland Forester & Storyteller",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
        rating: 4.95,
        responseRate: "98%",
        responseTime: "within an hour",
        bio: "My family has lived along this loch for six generations. You’ll find true peace here that lingers long after you head home."
      }
    }
  ],

  categories: [
    {
      id: "cat-farmhouses",
      name: "Farmhouses",
      count: 42,
      icon: "tractor",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Working farms with heritage livestock, orchards, and fresh harvest tables"
    },
    {
      id: "cat-homestays",
      name: "Luxury Homestays",
      count: 36,
      icon: "home",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      description: "Warm host-guided residences with rich home-cooked meals and traditions"
    },
    {
      id: "cat-cottages",
      name: "Countryside Cottages",
      count: 58,
      icon: "flower",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
      description: "Quaint thatched and stone cottages cloaked in wisteria and lavender"
    },
    {
      id: "cat-eco",
      name: "Eco Retreats",
      count: 29,
      icon: "leaf",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description: "Off-grid architectural treehouses, geodesic domes, and solar lodges"
    },
    {
      id: "cat-villas",
      name: "Private Villas",
      count: 24,
      icon: "sparkles",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      description: "Expansive gated countryside estates with pools and vineyard vistas"
    },
    {
      id: "cat-riverside",
      name: "Riverside Stays",
      count: 31,
      icon: "waves",
      image: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=800&q=80",
      description: "Waterfront docks, tranquil lochs, and cedar wood sauna retreats"
    },
    {
      id: "cat-mountain",
      name: "Mountain Retreats",
      count: 45,
      icon: "mountain",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      description: "High-altitude chalets, glass sky lofts, and mist-cloaked ridge escapes"
    },
    {
      id: "cat-heritage",
      name: "Heritage Homes",
      count: 18,
      icon: "castle",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      description: "Centuries-old French bastides, manor houses, and historic stone ruins"
    }
  ],

  destinations: [
    {
      id: "dest-cotswolds",
      name: "Cotswolds & Rolling Ridges",
      country: "England",
      region: "Europe",
      staysCount: 42,
      weather: "19°C · Gentle Breeze",
      bestSeason: "May - October",
      tagline: "Honey-coloured stone hamlets, babbling brooks, and ancient sheep pastures",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
      description: "Step into pastoral tranquility where storybook thatched cottages overlook rolling green downs, artisanal bakeries scent quaint village lanes, and walking trails weave through untouched nature preserves.",
      recommendedStay: "Hazelwood Timber Cottage"
    },
    {
      id: "dest-tuscany",
      name: "Val d'Orcia & Chianti",
      country: "Italy",
      region: "Europe",
      staysCount: 38,
      weather: "24°C · Sunny & Crisp",
      bestSeason: "April - November",
      tagline: "Centuries-old cypress avenues, golden hills, and premier vintage vineyards",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "The gold standard of rural elegance. Sip cold Vermentino under grapevine pergolas, tour boutique olive mills, and immerse yourself in timeless Renaissance countryside charm.",
      recommendedStay: "Villa Bella Colina Farm Estate"
    },
    {
      id: "dest-vermont",
      name: "Green Mountain Valleys",
      country: "United States",
      region: "North America",
      staysCount: 54,
      weather: "18°C · Mountain Fresh",
      bestSeason: "September - March (Foliage & Snow)",
      tagline: "Covered wooden bridges, heirloom maple sugar shacks, and organic cheese farms",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
      description: "Famous for dramatic autumn colors, artisanal farm stands, and pristine trout streams, Vermont represents the purest expression of quintessential American rural hospitality.",
      recommendedStay: "Willow Creek Heritage Farmhouse"
    },
    {
      id: "dest-provence",
      name: "Luberon Lavender Hills",
      country: "France",
      region: "Europe",
      staysCount: 31,
      weather: "26°C · Mediterranean Sun",
      bestSeason: "June - September",
      tagline: "Purple lavender oceans, perched hilltop villages, and rustic open-air markets",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      description: "Bathed in painterly light that inspired Cézanne and Van Gogh. Spend your mornings sampling goat cheeses at market squares and your afternoons sipping rosé beside historic stone fountains.",
      recommendedStay: "Château des Lavandes Estate"
    },
    {
      id: "dest-blueridge",
      name: "Blue Ridge & Smoky Highlands",
      country: "United States",
      region: "North America",
      staysCount: 47,
      weather: "21°C · Forest Breeze",
      bestSeason: "Year-Round",
      tagline: "Endless rolling misty blue peaks, roaring waterfalls, and secluded log chalets",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      description: "Ancient mountain majesty offering restorative silence, night skies untainted by city glow, and miles of trailheads winding beneath wild rhododendron canopies.",
      recommendedStay: "Misty Pinnacle Mountain Chalet"
    },
    {
      id: "dest-highlands",
      name: "Scottish Highlands & Lochs",
      country: "Scotland",
      region: "Europe",
      staysCount: 26,
      weather: "15°C · Highland Mist",
      bestSeason: "May - September",
      tagline: "Wild heather glens, tranquil reflective lochs, and cozy peat-fire hearths",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      description: "Untamed wilderness meets profound warmth. Venture onto quiet loch waters, walk among historic castle ruins, and return to deep down duvets and crackling fires.",
      recommendedStay: "Highland Loch Riverside Cabin"
    },
    {
      id: "dest-sonoma",
      name: "Sonoma & Russian River",
      country: "United States",
      region: "North America",
      staysCount: 39,
      weather: "25°C · Coastal Sunshine",
      bestSeason: "May - November",
      tagline: "Redwood coastal groves, bio-dynamic farmsteads, and sun-drenched vineyards",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      description: "The birthplace of farm-to-table cuisine. Savor world-class Pinot Noir alongside garden vegetables picked that very afternoon, all within earshot of towering ancient redwoods.",
      recommendedStay: "Stone Meadow Countryside Villa"
    },
    {
      id: "dest-sedona",
      name: "Sedona Red Rock Canyons",
      country: "United States",
      region: "North America",
      staysCount: 22,
      weather: "23°C · Dry Desert Air",
      bestSeason: "September - May",
      tagline: "Dramatic red rock sandstone mesas, celestial night skies, and wellness sanctuaries",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      description: "A sanctuary for renewal and quiet reflection. Unrivaled high-desert geology, sacred stillness, and architecturally striking eco-lodges designed to honor the earth.",
      recommendedStay: "Sol Terra Eco Sanctuary"
    }
  ],

  activities: [
    {
      id: "act-01",
      name: "Heirloom Orchard Harvest & Cider Pressing",
      category: "Farm Experiences",
      categoryKey: "farm",
      duration: "3.5 Hours",
      price: 65,
      rating: 4.97,
      reviewsCount: 42,
      minAge: "All Ages",
      includes: ["Orchard tour", "Basket picking", "Hand cider pressing", "Fresh bottled cider to keep"],
      image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=800&q=80",
      description: "Walk between century-old apple trees with our orchard master. Hand-pick heirloom varieties and use our vintage cast-iron ratchet press to bottle your own golden apple nectar."
    },
    {
      id: "act-02",
      name: "Artisan Sourdough & Hearth Baking Masterclass",
      category: "Cultural & Local",
      categoryKey: "cultural",
      duration: "4 Hours",
      price: 85,
      rating: 4.99,
      reviewsCount: 56,
      minAge: "12+ Years",
      includes: ["Wild yeast culture starter", "Stone hearth baking session", "Country lunch with butter & cheeses"],
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      description: "Learn the ancient art of wild fermentation using stone-ground heritage grains. Knead, score, and bake in a wood-fired outdoor oven, then feast on your crusty creations."
    },
    {
      id: "act-03",
      name: "Sunset Ridge Horseback Trek & Campfire",
      category: "Outdoor Adventures",
      categoryKey: "outdoor",
      duration: "2.5 Hours",
      price: 110,
      rating: 4.95,
      reviewsCount: 38,
      minAge: "10+ Years",
      includes: ["Gentle trail horse & tack", "Experienced mountain guide", "Hot spiced cider around dusk campfire"],
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80",
      description: "Ride through whispering pine groves up to an elevated ridge just as golden hour ignites the valley below. Conclude around a warm cedar fire with roasted marshmallows and cider."
    },
    {
      id: "act-04",
      name: "Farm-to-Table Vineyard Dining Under The Pergola",
      category: "Cultural & Local",
      categoryKey: "cultural",
      duration: "3 Hours",
      price: 125,
      rating: 5.0,
      reviewsCount: 64,
      minAge: "All Ages",
      includes: ["5-course seasonal menu", "Wine or botanical pairings", "Tour of host's biodynamic gardens"],
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      description: "An unforgettable evening dining banquet set directly inside the garden rows. Every single ingredient was harvested within 500 yards that very morning."
    },
    {
      id: "act-05",
      name: "Organic Dairy Milking & Artisan Cheesemaking",
      category: "Farm Experiences",
      categoryKey: "farm",
      duration: "3 Hours",
      price: 70,
      rating: 4.93,
      reviewsCount: 31,
      minAge: "6+ Years",
      includes: ["Cow milking tutorial", "Curd separation & pressing", "Cheese wheel to take home"],
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80",
      description: "Spend a magical morning inside the warm cedar dairy. Milk gentle Jersey cows, learn curdling chemistry, and press your own wheel of fresh herbaceous country cheese."
    },
    {
      id: "act-06",
      name: "Wild River Kayak & Secret Waterfall Picnic",
      category: "Outdoor Adventures",
      categoryKey: "outdoor",
      duration: "4.5 Hours",
      price: 95,
      rating: 4.94,
      reviewsCount: 47,
      minAge: "8+ Years",
      includes: ["Tandem river kayak", "Waterproof dry bag & gear", "Gourmet picnic basket with local charcuterie"],
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      description: "Glide down crystal-clear current through river bluffs where bald eagles nest. Pull onto a secluded pebble sandbank for a gourmet wild picnic by a hidden rushing waterfall."
    },
    {
      id: "act-07",
      name: "Traditional Wheel Pottery & Terracotta Workshop",
      category: "Cultural & Local",
      categoryKey: "cultural",
      duration: "2.5 Hours",
      price: 75,
      rating: 4.96,
      reviewsCount: 29,
      minAge: "All Ages",
      includes: ["Local river clay", "Throwing wheel lesson", "Kiln firing & optional doorstep glazing delivery"],
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
      description: "Shape raw clay into rustic pitchers, bowls, or mugs under the patient guidance of our village potter. A deeply tactile and centering experience amidst countryside gardens."
    },
    {
      id: "act-08",
      name: "Guided Dawn Birdwatching & Wildflower Botanics",
      category: "Outdoor Adventures",
      categoryKey: "outdoor",
      duration: "2.5 Hours",
      price: 50,
      rating: 4.92,
      reviewsCount: 23,
      minAge: "All Ages",
      includes: ["Nikon binoculars provided", "Field bird identification guide", "Thermos of mountain herbal tea"],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      description: "Catch the dawn chorus as the valley awakens. Identify native migratory warblers, rare raptors, and learn traditional foraging uses of meadow wildflowers and herbs."
    },
    {
      id: "act-09",
      name: "Stargazing Astronomy Night with Astrophotography",
      category: "Outdoor Adventures",
      categoryKey: "outdoor",
      duration: "2.5 Hours",
      price: 60,
      rating: 4.98,
      reviewsCount: 51,
      minAge: "All Ages",
      includes: ["High-power telescope access", "Warm alpaca blankets", "Digital astrophotography portrait of you"],
      image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80",
      description: "Far away from artificial city light, our dark-sky reserve reveals the Milky Way in blinding clarity. View Saturn's rings, the Andromeda galaxy, and distant nebulae."
    }
  ],

  testimonials: [
    {
      id: "rev-01",
      guest: "Seraphina & James Montrose",
      origin: "London, United Kingdom",
      stayName: "Hazelwood Timber Cottage",
      rating: 5,
      date: "October 2024",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
      quote: "Our weekend at Hazelwood was transformative. The scent of lavender, the warmth of the AGA stove, and the quiet stillness of the Cotswolds gave our souls the rest they desperately craved.",
      tripType: "Romantic Anniversary"
    },
    {
      id: "rev-02",
      guest: "Dr. Alexander Chen",
      origin: "San Francisco, California",
      stayName: "Sol Terra Eco Sanctuary",
      rating: 5,
      date: "September 2024",
      avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80",
      quote: "As someone who works in fast-paced tech, Sol Terra showed me what true architectural mindfulness looks like. Sleeping under Sedona's crystal stars was easily the highlight of my year.",
      tripType: "Solo Creative Retreat"
    },
    {
      id: "rev-03",
      guest: "The Bennett Family (David, Sarah & 2 kids)",
      origin: "Toronto, Canada",
      stayName: "Willow Creek Heritage Farmhouse",
      rating: 5,
      date: "August 2024",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      quote: "Our children had never held a newborn lamb or eaten a strawberry straight off the vine. Eleanor and Marcus were the warmest hosts imaginable. We have already booked for next summer!",
      tripType: "Family Farm Holiday"
    },
    {
      id: "rev-04",
      guest: "Elena Rostova & Friends",
      origin: "Zurich, Switzerland",
      stayName: "Villa Bella Colina",
      rating: 5,
      date: "July 2024",
      avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=80",
      quote: "Perfection. The infinity pool overlooking Val d'Orcia at dusk while sipping the estate's own red wine was like stepping straight into a classic painting. Unmatched hospitality.",
      tripType: "Group Holiday"
    }
  ],

  galleryItems: [
    {
      id: "gal-01",
      category: "Homestays",
      title: "Morning Sun in the Orchard Bedroom",
      location: "Vermont",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
      description: "Gentle dawn light filtering through white linen curtains across rustic pine floors."
    },
    {
      id: "gal-02",
      category: "Farmstays",
      title: "Jersey Dairy Pastures at Sunrise",
      location: "Lancaster Valley",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80",
      description: "Misty green meadows where our heritage cows graze peacefully each morning."
    },
    {
      id: "gal-03",
      category: "Interiors",
      title: "Hand-Hewn Stone Fireplace Lounge",
      location: "Cotswolds",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
      description: "Cozy leather armchairs, stacked birch wood, and warm glowing hearths."
    },
    {
      id: "gal-04",
      category: "Nature",
      title: "High Ridge Panorama Over Cloud Sea",
      location: "Blue Ridge",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
      description: "Unbroken mountain layers stretching into lavender twilight."
    },
    {
      id: "gal-05",
      category: "Activities",
      title: "Harvesting Heirloom Butter Beans",
      location: "Sonoma",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
      description: "Guests gathering vibrant organic vegetables for tonight’s communal dinner."
    },
    {
      id: "gal-06",
      category: "Interiors",
      title: "Sunken Copper Soaking Tub",
      location: "Sedona",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
      description: "Architectural bathroom with panoramic glass framing desert red rock formations."
    },
    {
      id: "gal-07",
      category: "Farmstays",
      title: "Twilight Lavender Blooms & Bastide",
      location: "Provence",
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=900&q=80",
      description: "Fragrant purple blossoms stretching as far as the eye can see at dusk."
    },
    {
      id: "gal-08",
      category: "Activities",
      title: "Artisanal Wood-Fired Hearth Baking",
      location: "Tuscany",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
      description: "Pulling crisp blistered loaves of sourdough from a 200-year-old stone oven."
    },
    {
      id: "gal-09",
      category: "Nature",
      title: "Crystal River Shallows in Autumn",
      location: "Michigan",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
      description: "Still morning waters reflecting vibrant amber, scarlet, and gold maple foliage."
    },
    {
      id: "gal-10",
      category: "Homestays",
      title: "Historic Timber Thatched Cottage",
      location: "Cotswolds",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
      description: "Wisteria climbing across weathered stone walls beside cottage flowerbeds."
    },
    {
      id: "gal-11",
      category: "Interiors",
      title: "Cathedral Ceiling Reading Loft",
      location: "Washington",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
      description: "Suspended daybed looking into ancient fir canopies with built-in bookshelves."
    },
    {
      id: "gal-12",
      category: "Activities",
      title: "Dusk Bonfire Under Canopy of Stars",
      location: "Highlands",
      image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=900&q=80",
      description: "Gathering by the loch fire sharing Scottish folklore and acoustic melodies."
    },
    {
      id: "gal-13",
      category: "Homestays",
      title: "Cotswold Honey-Stone Farmhouse",
      location: "Gloucestershire",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
      description: "Picturesque 17th-century country residence surrounded by wildflower meadows."
    },
    {
      id: "gal-14",
      category: "Farmstays",
      title: "Tuscan Vineyard Bastide at Sunset",
      location: "Chianti Hills",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
      description: "Historic stone estate overlooking rolling vineyard terraces and cypress trails."
    },
    {
      id: "gal-15",
      category: "Nature",
      title: "Misty Pine Forest & Alpine Lake",
      location: "Cascade Mountains",
      image: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=900&q=80",
      description: "Tranquil mirror waters reflecting old-growth evergreen forest canopy."
    }
  ],

  // Pre-populated user dashboard bookings & history
  initialUser: {
    name: "Julian Sterling",
    email: "julian.sterling@example.com",
    phone: "+1 (802) 555-0194",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    memberSince: "March 2023",
    membershipLevel: "Countryside Pioneer",
    country: "United States",
    address: "742 Evergreen Terrace, Burlington, VT"
  },

  initialBookings: [
    {
      id: "SYL-74892",
      stayId: "syl-01",
      stayName: "Willow Creek Heritage Farmhouse",
      stayImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
      location: "Highland Valley, Vermont",
      checkIn: "2026-11-20",
      checkOut: "2026-11-24",
      nights: 4,
      guests: { adults: 2, children: 1 },
      totalPrice: 1282.50,
      status: "Confirmed", // Confirmed, Pending, Completed, Cancelled
      paymentStatus: "Paid",
      paymentMethod: "Credit Card (ending 4242)",
      bookedOn: "2026-10-14",
      hostContact: "Eleanor Vance (+1 802-555-4921)",
      isUpcoming: true
    },
    {
      id: "SYL-63104",
      stayId: "syl-04",
      stayName: "Villa Bella Colina Farm Estate",
      stayImage: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=600&q=80",
      location: "Val d'Orcia, Tuscany, Italy",
      checkIn: "2026-12-18",
      checkOut: "2026-12-23",
      nights: 5,
      guests: { adults: 4, children: 0 },
      totalPrice: 2756.00,
      status: "Confirmed",
      paymentStatus: "Paid",
      paymentMethod: "UPI / Bank Transfer",
      bookedOn: "2026-09-28",
      hostContact: "Gianluigi Rossi (+39 0577 849201)",
      isUpcoming: true
    },
    {
      id: "SYL-58911",
      stayId: "syl-02",
      stayName: "Hazelwood Timber Cottage",
      stayImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80",
      location: "Cotswold Hills, England",
      checkIn: "2026-06-10",
      checkOut: "2026-06-14",
      nights: 4,
      guests: { adults: 2, children: 0 },
      totalPrice: 877.50,
      status: "Completed",
      paymentStatus: "Paid",
      paymentMethod: "Credit Card (ending 4242)",
      bookedOn: "2026-05-02",
      hostContact: "Claire Pendelton",
      isUpcoming: false
    },
    {
      id: "SYL-41209",
      stayId: "syl-05",
      stayName: "Riverbend Cedar Lodge",
      stayImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
      location: "Huron River Valley, Michigan",
      checkIn: "2026-04-12",
      checkOut: "2026-04-15",
      nights: 3,
      guests: { adults: 2, children: 2 },
      totalPrice: 827.25,
      status: "Cancelled",
      paymentStatus: "Refunded",
      paymentMethod: "Credit Card (ending 4242)",
      bookedOn: "2026-03-10",
      hostContact: "David Lindqvist",
      isUpcoming: false
    }
  ],

  initialSavedStayIds: ["syl-03", "syl-06", "syl-08"]
};

// Persistence helper for LocalStorage
const SylvanStore = {
  getUser: function() {
    const data = localStorage.getItem("sylvan_user");
    return data ? JSON.parse(data) : SYLVAN_DATA.initialUser;
  },
  saveUser: function(user) {
    localStorage.setItem("sylvan_user", JSON.stringify(user));
  },
  getBookings: function() {
    const data = localStorage.getItem("sylvan_bookings");
    return data ? JSON.parse(data) : SYLVAN_DATA.initialBookings;
  },
  addBooking: function(booking) {
    const bookings = this.getBookings();
    bookings.unshift(booking);
    localStorage.setItem("sylvan_bookings", JSON.stringify(bookings));
  },
  cancelBooking: function(bookingId) {
    const bookings = this.getBookings();
    const updated = bookings.map(b => {
      if (b.id === bookingId) {
        return { ...b, status: "Cancelled", paymentStatus: "Refund Initiated", isUpcoming: false };
      }
      return b;
    });
    localStorage.setItem("sylvan_bookings", JSON.stringify(updated));
    return updated;
  },
  getSavedStayIds: function() {
    const data = localStorage.getItem("sylvan_saved_stays");
    return data ? JSON.parse(data) : SYLVAN_DATA.initialSavedStayIds;
  },
  toggleSaveStay: function(stayId) {
    let saved = this.getSavedStayIds();
    if (saved.includes(stayId)) {
      saved = saved.filter(id => id !== stayId);
    } else {
      saved.push(stayId);
    }
    localStorage.setItem("sylvan_saved_stays", JSON.stringify(saved));
    return saved;
  },
  isStaySaved: function(stayId) {
    return this.getSavedStayIds().includes(stayId);
  }
};

