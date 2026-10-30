/*
 * Everything you'll want to change lives here: prices, checkout links,
 * the support address, voice samples and voice packs. No HTML editing needed.
 *
 * Checkout links come from your store (Lemon Squeezy, Gumroad, Stripe Payment
 * Links...). Until a link is filled in, its button says "Coming soon".
 */
window.CADENCE = {
  price: "$10",
  checkout: "", // e.g. "https://yourstore.lemonsqueezy.com/buy/abc123"
  supportEmail: "hello@cadence.app", // replace with your real address
  requirements: "Mac with Apple silicon (M1 or later) · macOS 15 Sequoia or later · 8 GB memory (16 GB recommended)",
  // Shown as a small badge under the buy buttons and in the FAQ. Set to "" to hide it.
  pcVersion: "Windows PC version coming soon",

  // Short clips for "Hear it" on the home page. Put the MP3s in assets/audio/.
  // A sample whose file isn't there yet shows as "Sample coming soon".
  samples: [
    {
      voice: "Eleanor",
      style: "Warm narration",
      text: "It is dawn on Crystal Lake. The storm has passed, and the water is so still it looks like glass.",
      src: "assets/audio/eleanor.mp3",
    },
    {
      voice: "Marcus",
      style: "Clear and confident",
      text: "In the next ten minutes, you'll learn the three habits that changed how I work. Let's begin.",
      src: "assets/audio/marcus.mp3",
    },
    {
      voice: "British Female",
      style: "Built in",
      text: "Chapter One. The house on the hill had been empty for years, or so the village liked to believe.",
      src: "assets/audio/british-female.mp3",
    },
  ],

  // Voice packs for the store page. These are EXAMPLES: replace them with
  // your real packs (and only sell voices you have the rights to).
  packs: [
    {
      id: "storytellers",
      name: "Storytellers",
      category: "Narration",
      tagline: "Warm, unhurried voices made for audiobooks and long reads.",
      voices: ["Eleanor", "Theo", "Margaret"],
      price: "$3",
      sample: "assets/audio/packs/storytellers.mp3",
      checkout: "",
    },
    {
      id: "bedtime",
      name: "Bedtime",
      category: "Calm",
      tagline: "Soft, slow voices for bedtime stories, meditations and sleep.",
      voices: ["Iris", "Felix"],
      price: "$3",
      sample: "assets/audio/packs/bedtime.mp3",
      checkout: "",
    },
    {
      id: "broadcast",
      name: "Broadcast",
      category: "Presenters",
      tagline: "Clear, confident voices for explainers, courses and podcasts.",
      voices: ["Marcus", "Dana", "Owen"],
      price: "$3",
      sample: "assets/audio/packs/broadcast.mp3",
      checkout: "",
    },
    {
      id: "characters",
      name: "Characters",
      category: "Fiction",
      tagline: "Distinct, expressive voices to give every character their own.",
      voices: ["Gus", "Wren", "Bram", "Lottie"],
      price: "$4",
      sample: "assets/audio/packs/characters.mp3",
      checkout: "",
    },
    {
      id: "accents",
      name: "Around the World",
      category: "Accents",
      tagline: "English from Dublin, Glasgow, Sydney, London and the American South.",
      voices: ["Niamh", "Callum", "Mia", "Harriet", "Beau"],
      price: "$4",
      sample: "assets/audio/packs/accents.mp3",
      checkout: "",
    },
    {
      id: "vintage",
      name: "Golden Hour",
      category: "Character",
      tagline: "Rich, seasoned voices with the warmth of old radio.",
      voices: ["Walter", "June"],
      price: "$3",
      sample: "assets/audio/packs/golden-hour.mp3",
      checkout: "",
    },
  ],

  bundle: {
    name: "Every voice pack",
    tagline: "All current packs, and every pack we add later.",
    price: "$12",
    checkout: "",
  },
};
