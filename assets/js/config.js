/*
 * Everything you'll want to change lives here: prices, checkout links,
 * the support address, voice samples and voice packs. No HTML editing needed.
 *
 * Checkout links come from your store: in Lemon Squeezy, open a product and
 * click Share to copy its link. Lemon Squeezy links open as a pop-up checkout
 * over the page; other stores' links (Gumroad, Stripe...) open their own page.
 * Until a link is filled in, its button says "Coming soon".
 */
window.CADENCE = {
  price: "$10",
  checkout: "", // e.g. "https://cadence.lemonsqueezy.com/buy/1a2b3c4d-..."
  supportEmail: "hello@cadence.app", // replace with your real address
  requirements: "Mac with Apple silicon (M1 or later) · macOS 15 Sequoia or later · 8 GB memory (16 GB recommended)",
  // Shown as a small badge under the buy buttons and in the FAQ. Set to "" to hide it.
  pcVersion: "Windows PC version coming soon",

  // Short clips for "Hear it" on the home page. Put the MP3s in assets/audio/.
  // A sample whose file isn't there yet shows as "Sample coming soon".
  samples: [
    {
      voice: "Olivia",
      style: "Storytellers pack",
      text: "It is dawn on Crystal Lake. The storm has passed, and the water is so still it looks like glass.",
      src: "assets/audio/olivia.mp3",
    },
    {
      voice: "Grayson",
      style: "Broadcast pack",
      text: "In the next ten minutes, you'll learn the three habits that changed how I work. Let's begin.",
      src: "assets/audio/grayson.mp3",
    },
    {
      voice: "British Female",
      style: "Built in",
      text: "Chapter One. The house on the hill had been empty for years, or so the village liked to believe.",
      src: "assets/audio/british-female.mp3",
    },
  ],

  // Voice packs for the store page (and the first three on the home page).
  // Only sell voices you have the speakers' written permission for.
  packs: [
    {
      id: "storytellers",
      name: "Storytellers",
      category: "Narration",
      tagline: "Warm, engaging voices made for audiobooks, bedtime stories and long reads.",
      voices: [
        { name: "Olivia", gender: "female" },
        { name: "Clive", gender: "male" },
        { name: "Michael", gender: "male" },
        { name: "Paul", gender: "male" },
        { name: "Sherman", gender: "male" },
      ],
      price: "$5",
      sample: "assets/audio/packs/storytellers.mp3",
      checkout: "",
    },
    {
      id: "broadcast",
      name: "Broadcast",
      category: "Presenters",
      tagline: "Clear, confident voices for explainers, courses, ads and podcasts.",
      voices: [
        { name: "Sarah", gender: "female" },
        { name: "Finneas", gender: "male" },
        { name: "Grayson", gender: "male" },
      ],
      price: "$5",
      sample: "assets/audio/packs/broadcast.mp3",
      checkout: "",
    },
    {
      id: "meditation",
      name: "Meditation",
      category: "Calm",
      tagline: "Soft, unhurried voices for meditations, sleep stories and winding down.",
      voices: [
        { name: "Esther", gender: "female" },
        { name: "Oliver", gender: "male" },
        { name: "Phillip", gender: "male" },
        { name: "Thomas", gender: "male" },
      ],
      price: "$5",
      sample: "assets/audio/packs/meditation.mp3",
      checkout: "",
    },
    {
      id: "characters",
      name: "Characters",
      category: "Fiction",
      tagline: "Distinct, expressive voices to give your characters a life of their own.",
      voices: [
        { name: "Antonio", gender: "male" },
        { name: "Casey", gender: "male" },
      ],
      price: "$5",
      sample: "assets/audio/packs/characters.mp3",
      checkout: "",
    },
  ],

  bundle: {
    name: "Every voice pack",
    tagline: "All four packs, 14 voices, plus every pack we add later.",
    price: "$15",
    checkout: "",
  },
};
