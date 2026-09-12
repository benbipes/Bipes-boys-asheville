/**
 * Bipes Boys Asheville Mountain Trip - Curated Data
 */
const TRIP_DATA = {
  title: "Bipes Boys Asheville",
  subtitle: "Mountain Reunion • South Slope • Oct/Fall 2026",
  house: {
    name: "South Slope Townhouse HQ",
    address: "98 Southside Avenue, Asheville, NC 28801",
    checkIn: "Thursday @ 4:00 PM",
    checkOut: "Sunday @ 11:00 AM",
    quietHours: "10:00 PM",
    unitCode: "4791#",
    garageCode: "0115 ENTER",
    doorNote: "Access code is for the door beside the garage",
    wifi: {
      ssid: "98Southside",
      password: "beercity828"
    },
    parking: {
      spots: 2,
      summary: "Two parking spaces: 1 inside the garage, 1 dedicated outdoor spot #98 behind the townhomes.",
      details: [
        "Spot 1: Dedicated space inside the private garage.",
        "Spot 2: Dedicated outdoor spot marked '98'. At the entrance, turn left behind the townhomes. The third parallel spot is designated 98.",
        "Townhome 98 is situated directly to the right of the entrance.",
        "Note: The 4791# key code operates the door beside the garage."
      ]
    },
    checkoutRules: [
      { id: "dishes", text: "Dishes & Cookware: Load all dirty dishes into dishwasher and start it. No dishes left in sink.", icon: "utensils" },
      { id: "trash", text: "Trash & Recycling: Properly bag up all items to avoid spillage/leakage. Place in garage trash cans.", icon: "trash" },
      { id: "fridge", text: "Fridge & Microwave: Empty completely and leave wiped clean.", icon: "snowflake" },
      { id: "towels", text: "Towels: Place used towels on the tile bathroom floor only (never on furniture or beds).", icon: "towel" },
      { id: "thermostat", text: "Thermostat: Set to 70° (winter) or 72° (summer) upon leaving.", icon: "thermometer-half" },
      { id: "lockup", text: "Final Lockup: Verify all doors and windows secured before 11:00 AM checkout.", icon: "key" }
    ]
  },
  crew: [
    { name: "Tom Bipes", role: "Dad / Legend", location: "Buffalo, MN", badge: "Minnesota Chief", emoji: "🎣" },
    { name: "Dan Bipes", role: "Brother", location: "Raleigh, NC", badge: "Triangle Boss", emoji: "🌲" },
    { name: "Ben Bipes", role: "Host / Logistical Officer", location: "Kingsport, TN", badge: "Tri-Cities Rep", emoji: "🥃" }
  ],
  gear: [
    { item: "Premium Cigars, Torch & Cutter", broughtBy: "Ben", icon: "smoke", status: "Stashed" },
    { item: "Regulation Dart Board & Darts", broughtBy: "Ben", icon: "bullseye", status: "Ready to Hang" },
    { item: "Sonos Wireless Speakers", broughtBy: "Ben", icon: "music", status: "Loaded" },
    { item: "Bourbon Stash: Buffalo Trace (90°) & Old Forester 1920 (115°)", broughtBy: "Ben", icon: "whiskey", status: "Purchased & Packed" },
    { item: "Decks of Cards & Poker Chips", broughtBy: "Tom / Dan / Ben", icon: "cards", status: "In Bag" },
    { item: "Welcome Dinner Fixings (French Dips, Green Beans, Potato Salad)", broughtBy: "Ben", icon: "utensils", status: "Prepped & Packed" },
    { item: "Friday Breakfast Fixings (Biscuits, Sausage Gravy, Eggs)", broughtBy: "Ben", icon: "utensils", status: "Prepped & Packed" }
  ],
  itinerary: [
    {
      dayId: "thu",
      dayName: "Thursday",
      dateLabel: "Day 1 • Rendezvous & South Slope Kickoff",
      tagline: "Staggered Arrivals, Dart Setup, First Bourbon Pours & French Dips Feast",
      events: [
        {
          time: "4:30 PM",
          title: "Ben Arrives & Preps HQ",
          location: "98 Southside Ave HQ",
          type: "hq",
          notes: "Ben rolls in from Kingsport, TN (keypad code 4791#). Unpack gear, fire up the Sonos playlist, hang the regulation dart board, get the welcome bourbon uncorked, and start dinner prep."
        },
        {
          time: "6:00 PM",
          title: "Dad & Dan Arrive: The Reunion Begins!",
          location: "98 Southside Ave HQ",
          type: "hq",
          notes: "Tom (from Buffalo, MN) and Dan (from Raleigh, NC) arrive! Park vehicles (garage spot + outdoor spot #98 behind townhomes). Welcome bourbon pour, first toast, and tour of the South Slope townhouse."
        },
        {
          time: "6:30 PM",
          title: "Quick South Slope Pint Stroll (Optional)",
          location: "Burial Beer Co. or Green Man (0.2–0.3 mi)",
          type: "brewery",
          notes: "Stretch travel legs with a quick 5-minute walk to Burial Beer Co. (outdoor beer garden) or Green Man for an arrival pint — or relax on the townhouse porch while dinner heats up."
        },
        {
          time: "7:45 PM",
          title: "Welcome Dinner at HQ: Ben's French Dips",
          location: "98 Southside Ave HQ Kitchen",
          type: "food",
          notes: "The boys sit down for Ben's welcome dinner: hot French Dips piled high with warm savory au jus for dipping, tender green beans, and homemade potato salad. Paired with cold local craft beer and bourbon."
        },
        {
          time: "9:30 PM",
          title: "Townhouse Porch, Cigars & Inaugural Darts Match",
          location: "98 Southside Ave HQ",
          type: "relax",
          notes: "Relax on the patio with the weekend's first cigars, turn on the Sonos tunes, pour small-batch bourbon, and inaugurate the dart board with a Cricket showdown! (Quiet hours begin at 10:00 PM)."
        }
      ]
    },
    {
      dayId: "fri",
      dayName: "Friday",
      dateLabel: "Day 2 • Mountains, Billiards & Tapas",
      tagline: "Hearty Biscuits & Gravy, Mountain Air, Afternoon Billiards, World-Class Tapas",
      events: [
        {
          time: "9:00 AM",
          title: "HQ Mountain Breakfast: Ben's Sausage Gravy & Biscuits",
          location: "98 Southside Ave HQ Kitchen",
          type: "food",
          notes: "Ben is cooking a hearty mountain breakfast at the house! Savory country sausage gravy over warm golden biscuits, served with fluffy scrambled eggs and fresh coffee. Ready around 9:00 AM to fuel up for the day."
        },
        {
          time: "10:30 AM",
          title: "Scenic Excursion: Blue Ridge Parkway or River Arts District",
          location: "Craggy Pinnacle or River Arts District (RAD)",
          type: "activity",
          notes: "Option A: 30-min scenic drive up the Blue Ridge Parkway to Craggy Gardens (milepost 364) for sweeping Appalachian ridge views. Option B: Explore the RAD studios, smokehouse smells, and riverside stroll."
        },
        {
          time: "1:30 PM",
          title: "Casual Lunch & Refreshment",
          location: "White Duck Taco Shop or 12 Bones Smokehouse",
          type: "food",
          notes: "Grab Bangkok shrimp tacos along the French Broad River, or famous smoked ribs at 12 Bones in the RAD."
        },
        {
          time: "3:30 PM",
          title: "The Main Pool & Darts Showdown",
          location: "Barley's Taproom & Billiards (Upstairs)",
          type: "pool",
          notes: "Head downtown to 42 Biltmore Ave (0.5 mi walk). Head straight UPSTAIRS to Barley's billiard hall: 8 regulation pool tables, championship steel-tip dart lanes, and 30+ craft taps. Loser buys the next round!"
        },
        {
          time: "7:15 PM",
          title: "Friday Feast: Cúrate or Storm Rhum Bar",
          location: "Downtown / South Slope",
          type: "food",
          notes: "World-class dinner: Cúrate for celebrated Spanish tapas by Katie Button (jamón ibérico, patatas bravas, vermut) or Storm Rhum Bar (wood-grilled steaks & cocktails right on Southside)."
        },
        {
          time: "9:15 PM",
          title: "Post-Dinner Belgian Ales at Thirsty Monk",
          location: "Thirsty Monk Brewery & Pub (92 Patton Ave)",
          type: "brewery",
          notes: "Stroll over to Asheville's famous Belgian beer institution. Head down to the cozy subterranean Belgian Cellar Bar for authentic Trappist ales, Dubbels, Tripels, or Quads on draft."
        },
        {
          time: "10:30 PM",
          title: "HQ Nightcap, Bourbon Flight & Porch Chill",
          location: "98 Southside Ave HQ",
          type: "relax",
          notes: "Return to HQ to pour a nightcap from Ben's bourbon stash, enjoy cigars on the patio under the mountain stars, or test skills on Johann's Folly. (Quiet hours begin at 10:00 PM)."
        }
      ]
    },
    {
      dayId: "sat",
      dayName: "Saturday",
      dateLabel: "Day 3 • Butcher Run, Brewery Crawl & Steak Feast",
      tagline: "Prime Cuts, South Slope Tasting Tour, Grill Night & Fireside Cigars",
      events: [
        {
          time: "9:30 AM",
          title: "Coffee & The Chop Shop Butchery Run",
          location: "The Chop Shop Butchery (100 Charlotte St)",
          type: "provisions",
          notes: "Drive 5 mins to Asheville's premier whole-animal butcher. Select thick-cut dry-aged ribeyes, NY strips, artisanal sausages, and local seasoning for tonight's townhouse cookout."
        },
        {
          time: "11:30 AM",
          title: "French Broad Food Co-op & Beverage Stash",
          location: "90 Biltmore Ave / ABC Store",
          type: "provisions",
          notes: "Pick up fresh potatoes, salad greens, garlic butter, fresh French bread, and any extra mixers or beer to stock the townhouse fridge."
        },
        {
          time: "1:00 PM",
          title: "South Slope Brewery Tour: Sours, Hazies & Lagers",
          location: "Wicked Weed Funkatorium • DSSOLVR • Hi-Wire",
          type: "brewery",
          notes: "Stroll through the heart of Beer City USA. Start at Funkatorium on Coxe Ave for wood-aged sours and charcuterie, hit DSSOLVR for avant-garde IPAs, and swing through Hi-Wire for crisp lagers."
        },
        {
          time: "4:00 PM",
          title: "Townhouse Afternoon: Dart Championship & Porch Tunes",
          location: "98 Southside Ave HQ",
          type: "games",
          notes: "Relax back at the townhouse. Dial in the Sonos with Southern rock and blues, open a fresh bottle, and run the official Bipes Boys Cricket Dart Bracket."
        },
        {
          time: "7:00 PM",
          title: "The Grand Townhouse Cook-In: Steaks & Bourbon",
          location: "98 Southside Ave HQ Kitchen",
          type: "food",
          notes: "Fire up the skillet or grill! Thick-cut Chop Shop ribeyes basted in herb garlic butter, loaded baked potatoes, cold beers, and top-shelf bourbon. No rush, no waiting for tables."
        },
        {
          time: "9:30 PM",
          title: "Fireside / Porch Cigar Night & Final Card Showdown",
          location: "98 Southside Ave HQ",
          type: "relax",
          notes: "Cut the best cigars in the humidor, relax under the mountain night air, cue the acoustic Sonos mountain playlist, and settle the score at the card table."
        }
      ]
    },
    {
      dayId: "sun",
      dayName: "Sunday",
      dateLabel: "Day 4 • Farewell Brunch & Mountain Checkout",
      tagline: "Packing, Morning Brews, Checkout Checklist & Departures",
      events: [
        {
          time: "8:30 AM",
          title: "Morning Mountain Coffee & Breakfast",
          location: "Early Girl Eatery / Sunny Point Café / Townhouse Kitchen",
          type: "food",
          notes: "Brew the last pot of coffee at HQ or grab an early table at Early Girl or Sunny Point for scratch southern hash and eggs."
        },
        {
          time: "9:45 AM",
          title: "The Checkout Walkthrough at 98 Southside",
          location: "98 Southside Ave HQ",
          type: "hq",
          notes: "Work through the interactive Checkout Checklist in the app: (1) Dishwasher loaded & started, (2) Trash in garage bins, (3) Fridge & microwave cleaned, (4) Towels on bathroom tile, (5) Thermostat set to 70°/72°."
        },
        {
          time: "11:00 AM",
          title: "Check-Out & Safe Travels Homeward",
          location: "Asheville, NC",
          type: "depart",
          notes: "Confirm unit locked. Dad departs for Buffalo, MN; Dan heads east to Raleigh, NC; Ben rolls north to Kingsport, TN. Until next time!"
        }
      ]
    }
  ],
  places: [
    {
      id: "burial",
      name: "Burial Beer Co.",
      category: "brewery",
      address: "40 Collier Ave, Asheville, NC 28801",
      distance: "0.3 mi",
      walkTime: "6 min walk",
      rating: "4.8 ★ (2,800+)",
      price: "$$",
      vibe: "Legendary IPAs • Metal/Moody Vibe • Large Beer Garden",
      description: "One of the most acclaimed craft breweries in America. Dark, evocative aesthetic with heavy metal themes, lush outdoor garden, and world-class hazy IPAs, imperial stouts, and saisons.",
      mustTry: "Surf Wax IPA, Skillet Donut Stout, Prophetmaker IPA",
      tags: ["Walkable", "Outdoor Patio", "Craft IPAs", "Top Pick"]
    },
    {
      id: "green-man",
      name: "Green Man Brewery & Mansion",
      category: "brewery",
      address: "27 Buxton Ave, Asheville, NC 28801",
      distance: "0.2 mi",
      walkTime: "4 min walk",
      rating: "4.7 ★ (1,500+)",
      price: "$$",
      vibe: "Historic British-Style Ales • 3-Story Taproom • Rooftop",
      description: "One of Asheville's original craft brewing pioneers (since 1997). Visit the legendary original 'Dirty Jack's' dive taproom or the multi-level Green Man 'Mansion' with its outdoor terrace overlooking the South Slope.",
      mustTry: "ESB (English Style Amber), Wayfarer IPA, Porter",
      tags: ["Walkable", "Rooftop", "Historic", "Classic Ales"]
    },
    {
      id: "hi-wire",
      name: "Hi-Wire Brewing (South Slope)",
      category: "brewery",
      address: "197 Hilliard Ave, Asheville, NC 28801",
      distance: "0.3 mi",
      walkTime: "7 min walk",
      rating: "4.6 ★ (1,200+)",
      price: "$$",
      vibe: "Circus Theme • Crisp Lagers • Shuffleboard & Ping Pong",
      description: "Hi-Wire's original South Slope brewery specializes in sour/wild ales, approachable craft lagers, and easy drinking ales. Fun, laid-back circus atmosphere with indoor games.",
      mustTry: "Hi-Pitch Mosaic IPA, Mountain Water Citrus Ale, Bed of Nails Brown",
      tags: ["Walkable", "Games", "Lagers", "Casual"]
    },
    {
      id: "funkatorium",
      name: "Wicked Weed Funkatorium",
      category: "brewery",
      address: "147 Coxe Ave, Asheville, NC 28801",
      distance: "0.3 mi",
      walkTime: "7 min walk",
      rating: "4.7 ★ (3,100+)",
      price: "$$$",
      vibe: "Barrel-Aged Sours • Old World Barrel House • Charcuterie",
      description: "The East Coast's premier sour and barrel-aged beer dedicated taproom. Warm wood barrel-lined cellar with incredible charcuterie, artisan sandwiches, and complex sours.",
      mustTry: "Red Angel, Medora, Black Angel, House Pretzel & Beer Cheese",
      tags: ["Walkable", "Barrel-Aged", "Charcuterie", "Unique"]
    },
    {
      id: "dssolvr",
      name: "DSSOLVR",
      category: "brewery",
      address: "63 N Lexington Ave, Asheville, NC 28801",
      distance: "0.7 mi",
      walkTime: "14 min walk / 3 min drive",
      rating: "4.8 ★ (1,100+)",
      price: "$$",
      vibe: "Psychedelic Surrealism • Hazy IPAs • Natural Wine & Cider",
      description: "Creative, boundary-pushing downtown brewery known for crazy flavor profiles, vibrant art cans, super-fresh DDH double IPAs, smoothie sours, and crisp pilsners.",
      mustTry: "Never Ending Death Double IPA, DDH Hazies, Crisp Czech Pilsner",
      tags: ["Downtown", "Hazy IPAs", "Artistic", "Creative"]
    },
    {
      id: "twin-leaf",
      name: "Twin Leaf Brewery",
      category: "brewery",
      address: "144 Coxe Ave, Asheville, NC 28801",
      distance: "0.3 mi",
      walkTime: "6 min walk",
      rating: "4.6 ★ (800+)",
      price: "$$",
      vibe: "Belgian-Inspired • Giant Jenga & Connect 4 • Dog-Friendly",
      description: "Cozy, unpretentious brewery right in the heart of the South Slope. Great Belgian dubbels, saisons, and traditional ales, with lots of board games and giant yard games to play with a pint.",
      mustTry: "Luminosity Belgian Tripel, MDXX Imperial Stout",
      tags: ["Walkable", "Games", "Belgian Ales", "Dog-Friendly"]
    },
    {
      id: "thirsty-monk",
      name: "Thirsty Monk Brewery & Pub",
      category: "brewery",
      address: "92 Patton Ave, Asheville, NC 28801",
      distance: "0.6 mi",
      walkTime: "12 min walk / 3 min drive",
      rating: "4.6 ★ (1,800+)",
      price: "$$",
      vibe: "World-Class Belgian Beers • Authentic Trappist Ales • Cellar Bar",
      description: "Asheville's legendary Belgian beer bar with two unique levels: the lively street-level pub and the moody subterranean Belgian Cellar Bar. Exceptional selection of authentic Trappist ales, Dubbels, Tripels, Quads, and house Belgian brews.",
      mustTry: "Belgian Quad, Chimay Triple on draft, Delirium Tremens, House Belgian Frites",
      tags: ["Walkable", "Downtown", "Belgian Ales", "Trappist", "Basement Bar", "Top Pick"]
    },
    {
      id: "ashevill-pizza",
      name: "Asheville Pizza & Brewing Co.",
      category: "brewery",
      address: "77 Coxe Ave, Asheville, NC 28801",
      distance: "0.4 mi",
      walkTime: "8 min walk",
      rating: "4.6 ★ (1,600+)",
      price: "$$",
      vibe: "Pizza, Pints & Fun • Outdoor Covered Patio",
      description: "Fun South Slope outpost serving stone-hearth gourmet pizzas, award-winning Shiva IPA, and delicious wings. Relaxed covered patio and sports on the screens.",
      mustTry: "Shiva IPA, Ninja Porter, Shear Delight Gourmet Pizza",
      tags: ["Walkable", "Pizza", "Wings", "Covered Patio"]
    },
    {
      id: "curate",
      name: "Cúrate Tapas Bar",
      category: "food",
      address: "26 Biltmore Ave, Asheville, NC 28801",
      distance: "0.5 mi",
      walkTime: "10 min walk",
      rating: "4.8 ★ (4,900+)",
      price: "$$$",
      vibe: "James Beard Winner • Authentic Spanish Tapas • World Class",
      description: "Chef Katie Button's celebrated Spanish tapas institution in a historic 1927 bus terminal. Legendary jamón ibérico de bellota, fried eggplant with wild mountain honey, and Spanish vermut.",
      mustTry: "Jamón Ibérico, Berenjenas con Miel (Eggplant), Pulpo a la Gallega, Sangría",
      tags: ["Walkable", "Fine Dining", "James Beard", "Spanish Tapas"]
    },
    {
      id: "chai-pani",
      name: "Chai Pani",
      category: "food",
      address: "32 Banks Ave, Asheville, NC 28801",
      distance: "0.3 mi",
      walkTime: "6 min walk",
      rating: "4.7 ★ (4,200+)",
      price: "$$",
      vibe: "James Beard Outstanding Restaurant • Indian Street Food",
      description: "Named America's Outstanding Restaurant by the James Beard Foundation in 2022. Vibrant, flavor-packed Indian street chaat, savory thalis, and spiced craft cocktails.",
      mustTry: "SPDP (Sev Potato Dahi Puri), Sloppy Jai, Matchstick Okra Fries",
      tags: ["Walkable", "James Beard Winner", "Street Food", "Cocktails"]
    },
    {
      id: "buxton-hall",
      name: "Buxton Hall Barbecue",
      category: "food",
      address: "32 Banks Ave, Asheville, NC 28801",
      distance: "0.3 mi",
      walkTime: "6 min walk",
      rating: "4.6 ★ (3,300+)",
      price: "$$",
      vibe: "Whole-Hog Eastern Carolina BBQ • Historic Roller Rink",
      description: "Wood-smoked whole-hog barbecue cooked low and slow over hardwood coals. Served with vinegar mop sauce, smoky collards, and house-made pies in a cavernous restored 1930s roller rink.",
      mustTry: "Pulled Pork Platter, Catfish Po' Boy, Smokey Collard Greens, Banana Pudding",
      tags: ["Walkable", "Barbecue", "Southern", "Craft Beer"]
    },
    {
      id: "storm-rhum",
      name: "Storm Rhum Bar and Bistro",
      category: "food",
      address: "125 S Lexington Ave, Asheville, NC 28801",
      distance: "0.3 mi",
      walkTime: "6 min walk",
      rating: "4.6 ★ (900+)",
      price: "$$$",
      vibe: "Brick & Timber Bistro • Wood-Fired Steaks • Craft Rum & Bourbon",
      description: "Located just down Southside/Lexington Ave. Dark, moody, high-end tavern serving wood-fired ribeyes, pork belly, duck, and exceptional cocktails. Great late-night kitchen.",
      mustTry: "Cast Iron Ribeye, Duck Confit, Smoked Old Fashioned",
      tags: ["Walkable", "Steaks", "Late Night", "Great Bourbon"]
    },
    {
      id: "bens-tuneup",
      name: "Ben's Tune Up",
      category: "food",
      address: "195 Hilliard Ave, Asheville, NC 28801",
      distance: "0.3 mi",
      walkTime: "6 min walk",
      rating: "4.5 ★ (1,400+)",
      price: "$$",
      vibe: "Converted Auto Shop • Sake Brewery • Urban Beer Garden",
      description: "Fun, gritty beer garden built into an old automotive garage. Houses America's first sake brewery east of the Mississippi. Asian-American comfort food, dumplings, and cold brews.",
      mustTry: "House Infused Sake, Pork Belly Bao Buns, Wonton Tacos",
      tags: ["Walkable", "Beer Garden", "Sake", "Outdoor Patio"]
    },
    {
      id: "bull-beggar",
      name: "The Bull and Beggar",
      category: "food",
      address: "37 Paynes Way, Asheville, NC 28801 (RAD)",
      distance: "1.5 mi",
      walkTime: "5 min drive",
      rating: "4.7 ★ (1,100+)",
      price: "$$$",
      vibe: "Rustic European Tavern • Heavy Iron Skillet Steaks • Oysters",
      description: "Tucked behind the railroad tracks in the River Arts District. Two-level rustic European steakhouse with candlelit brick, exquisite dry-aged ribeye steaks for sharing, fresh oysters, and an outstanding whiskey list.",
      mustTry: "Bone-in Ribeye with Bernaise, Fresh Shucked Oysters, Double Cheeseburger",
      tags: ["Short Drive", "River Arts", "Steaks", "Whiskey"]
    },
    {
      id: "12-bones",
      name: "12 Bones Smokehouse",
      category: "food",
      address: "5 Foundy St, Asheville, NC 28801 (RAD)",
      distance: "1.6 mi",
      walkTime: "6 min drive",
      rating: "4.6 ★ (3,500+)",
      price: "$$",
      vibe: "Graffiti Covered RAD • Famous Ribs • Presidents Ate Here",
      description: "Legendary Asheville smokehouse famously visited by President Obama. Known for slow-smoked baby back ribs with unconventional sauces like Blueberry Chipotle.",
      mustTry: "Blueberry Chipotle Ribs, Brown Sugar Ribs, Jalapeño Cheese Grits, Cornbread",
      tags: ["Short Drive", "Barbecue", "River Arts", "Iconic"]
    },
    {
      id: "barleys",
      name: "Barley's Taproom & Billiards",
      category: "pool",
      address: "42 Biltmore Ave, Asheville, NC 28801",
      distance: "0.5 mi",
      walkTime: "9 min walk",
      rating: "4.5 ★ (2,100+)",
      price: "$$",
      vibe: "8 Regulation Pool Tables • Steel-Tip Darts • 30+ Beers on Tap",
      description: "The #1 destination for boys' night billiards and darts. Downstairs serves sourdough pizza and craft beer; UPSTAIRS is a huge vintage gaming hall with 8 full-size billiard tables, official dartboards, and its own bar.",
      mustTry: "Upstairs Pool Table rental, Pitcher of Highland Gaelic Ale, Sourdough Pizza",
      tags: ["Walkable", "Pool Tables", "Dart Boards", "Top Pick"]
    },
    {
      id: "asheville-billiards",
      name: "Asheville Billiard & Bar",
      category: "pool",
      address: "105 Patton Ave, Asheville, NC 28801",
      distance: "0.6 mi",
      walkTime: "12 min walk",
      rating: "4.5 ★ (400+)",
      price: "$",
      vibe: "Historic Downtown Pool Hall • Jukebox • Cold Drafts",
      description: "Historic pool room right on Patton Avenue in downtown. Solid pool tables, honest cold beers, jukebox, and classic dive camaraderie.",
      mustTry: "Hourly pool table, Cold local IPA, Bar burgers",
      tags: ["Walkable", "Pool Hall", "Classic Dive", "Downtown"]
    },
    {
      id: "charlotte-st-pub",
      name: "Charlotte Street Pub",
      category: "pool",
      address: "157 Charlotte St, Asheville, NC 28801",
      distance: "1.6 mi",
      walkTime: "5 min drive",
      rating: "4.6 ★ (500+)",
      price: "$$",
      vibe: "English Neighborhood Pub • Steel Darts • Pool Table",
      description: "Classic neighborhood pub located right near The Chop Shop Butchery. Cozy wood booths, steel-tip dart boards, pool table, pub burgers, and great local draught selection.",
      mustTry: "Dart match, Guinness on tap, Pub smash burger",
      tags: ["Short Drive", "Darts", "Pool", "Neighborhood Pub"]
    },
    {
      id: "double-crown",
      name: "The Double Crown",
      category: "pool",
      address: "375 Haywood Rd, Asheville, NC 28806",
      distance: "2.3 mi",
      walkTime: "7 min drive",
      rating: "4.7 ★ (800+)",
      price: "$$",
      vibe: "West AVL Honky-Tonk • Pool Table • 150+ Bourbons & Ryes",
      description: "Eclectic West Asheville dive bar with vintage gospel/country aesthetics, a back pool table, killer vinyl jukebox, and an astonishing selection of over 150 bourbons, whiskeys, and ryes.",
      mustTry: "Single Barrel Bourbon Pour, Cold High Life, High-energy jukebox tunes",
      tags: ["Short Drive", "West AVL", "Bourbon Selection", "Pool Table"]
    },
    {
      id: "casablanca",
      name: "Casablanca Cigar Bar",
      category: "cigars",
      address: "18 Lodge St, Asheville, NC 28803 (Biltmore Village)",
      distance: "2.3 mi",
      walkTime: "7 min drive",
      rating: "4.8 ★ (500+)",
      price: "$$$",
      vibe: "Walk-in Humidor • Luxury Leather Lounge • Covered Patio",
      description: "Asheville's premier dedicated cigar lounge in historic Biltmore Village. Massive walk-in humidor with Arturo Fuente, Padron, Liga Privada, full craft cocktail bar, plush leather seats, and covered smoking patio.",
      mustTry: "Padron 1964 Anniversary, Smoked Bourbon Old Fashioned",
      tags: ["Short Drive", "Walk-in Humidor", "Cocktail Bar", "Heated Patio"]
    },
    {
      id: "bb-tobacconists",
      name: "B&B Tobacconists",
      category: "cigars",
      address: "4 S Pack Square, Asheville, NC 28801",
      distance: "0.6 mi",
      walkTime: "12 min walk",
      rating: "4.7 ★ (300+)",
      price: "$$",
      vibe: "Historic Downtown Tobacconist • Great Stick Selection",
      description: "Convenient downtown walk from 98 Southside. Classic tobacconist shop packed with cigars, pipe tobaccos, cutters, and lighters. Perfect place to restock your travel humidor before the evening fire.",
      mustTry: "Davidoff, Ashton, boutique North Carolina-rolled blends",
      tags: ["Walkable", "Downtown", "Cigars & Pipes", "Accessories"]
    },
    {
      id: "antidote",
      name: "Antidote at Chemist Spirits",
      category: "cigars",
      address: "151 Coxe Ave, Asheville, NC 28801",
      distance: "0.3 mi",
      walkTime: "6 min walk",
      rating: "4.8 ★ (1,200+)",
      price: "$$$",
      vibe: "1900s Apothecary Bar • Rooftop Patio • Craft Spirits",
      description: "Right around the corner on Coxe Ave. Stunning 3-story antique speakeasy with Victorian chemist decor, craft cocktails made with house-distilled spirits, and a beautiful outdoor roof terrace.",
      mustTry: "Barrel-Aged Negroni, Smoked Rye Cocktail, Rooftop Seating",
      tags: ["Walkable", "Speakeasy", "Rooftop", "South Slope"]
    },
    {
      id: "sovereign",
      name: "Sovereign Remedies",
      category: "cigars",
      address: "29 N Market St, Asheville, NC 28801",
      distance: "0.7 mi",
      walkTime: "14 min walk",
      rating: "4.7 ★ (1,100+)",
      price: "$$$",
      vibe: "Intimate Herbaceous Cocktails • Deep Whiskey & Bourbon List",
      description: "Cozy brick cocktail room famous for inventive apothecary cocktails, small-batch bourbon selections, and late-night artisan bar bites in a warm historic setting.",
      mustTry: "Root & Branch Bourbon Cocktail, Bone Marrow Tots",
      tags: ["Downtown", "Artisan Cocktails", "Bourbon", "Cozy"]
    },
    {
      id: "chop-shop",
      name: "The Chop Shop Butchery",
      category: "provisions",
      address: "100 Charlotte St, Asheville, NC 28801",
      distance: "1.5 mi",
      walkTime: "5 min drive",
      rating: "4.9 ★ (700+)",
      price: "$$$",
      vibe: "Pasture-Raised Whole Animal Butcher • Dry-Aged Steaks",
      description: "THE place for the Saturday night townhouse cook-in! Western North Carolina's premier artisan butcher. Thick-cut dry-aged bone-in ribeyes, pasture-raised pork chops, handmade sausages, bacon, and house spice rubs.",
      mustTry: "30-Day Dry-Aged Ribeye, Smoked Bacon, House Bratwursts",
      tags: ["Short Drive", "Top Butcher", "Steak Cook-in", "Local Farm"]
    },
    {
      id: "french-broad-coop",
      name: "French Broad Food Co-op",
      category: "provisions",
      address: "90 Biltmore Ave, Asheville, NC 28801",
      distance: "0.3 mi",
      walkTime: "6 min walk",
      rating: "4.7 ★ (800+)",
      price: "$$",
      vibe: "Community Organic Grocery • Fresh Bread & Cheese",
      description: "Just a 6-minute walk from 98 Southside. Excellent selection of local organic vegetables, artisan cheeses, fresh-baked crusty breads, butter, eggs, and snacks for the townhouse kitchen.",
      mustTry: "Local sourdough, farmhouse cheeses, organic steak potatoes",
      tags: ["Walkable", "Organic", "Kitchen Supplies", "Fast Walk"]
    },
    {
      id: "ingles",
      name: "Ingles Market (Supermarket)",
      category: "provisions",
      address: "229 Tunnel Rd, Asheville, NC 28805",
      distance: "2.4 mi",
      walkTime: "7 min drive",
      rating: "4.4 ★ (1,200+)",
      price: "$$",
      vibe: "Full Supermarket • Charcoal, Ice, Mixers & Snacks",
      description: "Large, full-service local North Carolina supermarket for big grocery runs: ice bags, firewood, charcoal, snacks, paper towels, foil, and pantry staples.",
      mustTry: "Bags of ice, BBQ snacks, charcoal/wood",
      tags: ["Short Drive", "Full Supermarket", "Ice & Supplies"]
    },
    {
      id: "abc-liquor",
      name: "ABC Spirits Store (North Carolina State Store)",
      category: "provisions",
      address: "1318 Tunnel Rd or 420 Merrimon Ave, Asheville, NC",
      distance: "2.8 mi",
      walkTime: "8 min drive",
      rating: "4.3 ★ (300+)",
      price: "$$",
      vibe: "Official State Liquor Store • Bourbon & Spirits",
      description: "Note: In North Carolina, all liquor must be purchased at official state ABC stores (beer and wine are sold at grocery stores). Great selection of NC craft spirits and bourbon.",
      mustTry: "Local North Carolina bourbons (Oak & Grist, Southern Star, Chemist)",
      tags: ["Short Drive", "Liquor Store", "Bourbon & Rye"]
    }
  ],
  johannsFollyUrl: "https://benbipes.github.io/johannsfolly/",
  spotifyPlaylist: {
    name: "Bipes Boys Asheville",
    url: "https://open.spotify.com/playlist/5bmnGiwp6n9l1j5UUCIgBz?si=2bafa98738694ae7",
    embedUrl: "https://open.spotify.com/embed/playlist/5bmnGiwp6n9l1j5UUCIgBz?utm_source=generator&theme=0",
    description: "Ben's curated trip playlist tuned for the Sonos speakers on the patio and living room."
  },
  starterBourbons: [
    {
      id: "b1",
      name: "Buffalo Trace Kentucky Straight",
      distiller: "Buffalo Trace Distillery",
      proof: "90.0°",
      owner: "Ben",
      rating: 8.9,
      notes: "Bottle #1 purchased by Ben for the trip! Classic brown sugar, toffee, vanilla, mint, and candied fruit with a smooth oak finish. Superb everyday crowd-pleaser for porch sipping and card games."
    },
    {
      id: "b2",
      name: "Old Forester 1920 Prohibition Style",
      distiller: "Brown-Forman / Old Forester",
      proof: "115.0°",
      owner: "Ben",
      rating: 9.4,
      notes: "Bottle #2 purchased by Ben for the trip! Barrel-proof powerhouse celebrating the 1920 Volstead Act medicinal exemption. Rich dark chocolate, caramelized pecans, maple syrup, baking spice, and a long warming finish. Magnificent with an evening cigar."
    }
  ]
};

// Export for Node/CommonJS or attach to window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TRIP_DATA;
} else {
  window.TRIP_DATA = TRIP_DATA;
}
