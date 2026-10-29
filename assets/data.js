// ===== Edit shop details, categories and products here =====
// To add a product: put a photo in images/products/ and add a line to that category's "products" list.
// price: "₹499" or leave "" to show "Ask for price". new: true shows it under New Arrivals.

const SHOP = {
  name: "Royal Gift Hub",
  nameHindi: "रॉयल गिफ्ट हब",
  nameUrdu: "رائل گفٹ ہب",
  phone: "+91 72190 30405",                 // from the shop signboard — TODO: confirm
  whatsapp: "917219030405",                 // TODO: confirm WhatsApp is on the same number
  email: "royalgifthub61@gmail.com",
  address: "Shop No. 01, Habeeb Seth Complex, Tension Chowk, Malegaon, Maharashtra 423203",
  hours: "11:00 AM to 11:00 PM",
  mapQuery: "Tension Chowk, Malegaon, Maharashtra 423203", // TODO: replace with shop's Google Maps listing once created
  instagram: "",                            // TODO: Instagram page, if any (hidden while empty)
  offer: "Wedding season special: customised gifts, trophies & hampers. Order on WhatsApp!" // top banner; "" hides it
};

const CATEGORIES = [
  {
    key: "customised", icon: "i-pen", title: "Customised Gifts",
    text: "Mug printing, photo frames, name lights, 3D items and more, made with your photo or name.",
    products: []
  },
  {
    key: "trophies", icon: "i-trophy", title: "Trophies, Mementos & ID Cards",
    text: "Trophies, mementos, pen stands and ID cards for schools, offices and events.",
    products: []
  },
  {
    key: "calligraphy", icon: "i-frame", title: "Islamic Calligraphy Frames",
    text: "Beautiful framed calligraphy for your home, shop or as a meaningful gift.",
    products: [
      { name: "Mashallah Calligraphy Frame (Blue)", image: "images/products/calligraphy-mashallah-blue.jpg", price: "", new: true },
      { name: "Hadha Min Fadli Rabbi Frame (Green & Gold)", image: "images/products/calligraphy-green-gold.jpg", price: "", new: true },
      { name: "Hadha Min Fadli Rabbi Frame (Sunset)", image: "images/products/calligraphy-orange.jpg", price: "" }
    ]
  },
  {
    key: "hampers", icon: "i-gift", title: "Gift Hampers & Boxes",
    text: "Ready gift boxes and custom hampers for birthdays, weddings and Eid.",
    products: [
      { name: "Red Gift Box with Necklace & Accessories", image: "images/products/hamper-red-box.jpg", price: "", new: true },
      { name: "Glitter Lamp & Perfume Gift Set", image: "images/products/hamper-glitter-lamp.jpg", price: "", new: true }
    ]
  },
  {
    key: "perfumes", icon: "i-drop", title: "Perfumes & Attar",
    text: "Long-lasting perfumes and attar, perfect for gifting.",
    products: []
  },
  {
    key: "accessories", icon: "i-sparkle", title: "Hair Accessories & Jewellery",
    text: "Hair clips, bows, scrunchies, bracelets and pendants.",
    products: [
      { name: "Hair Clips, Bow & Scrunchie Set", image: "images/products/hair-accessories-set.jpg", price: "" }
    ]
  },
  {
    key: "keychains", icon: "i-key", title: "Keychains & Small Gifts",
    text: "Cute keychains and small surprises that fit every budget.",
    products: []
  }
];
