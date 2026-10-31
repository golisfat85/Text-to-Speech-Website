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
  checkout: "https://cadencereads.lemonsqueezy.com/checkout/buy/093a8e50-4aec-4805-9f97-c7940343141d",
  supportEmail: "hello@cadencereads.com", // set up forwarding for this at your domain registrar
  requirements: "Mac with Apple silicon (M1 or later) · macOS 15 Sequoia or later · 8 GB memory (16 GB recommended)",
  // Shown as a small badge under the buy buttons and in the FAQ. Set to "" to hide it.
  pcVersion: "Windows PC version coming soon",

  // Short clips for "Hear it" on the home page. Put the MP3s in assets/audio/.
  // A sample whose file isn't there yet shows as "Sample coming soon".
  samples: [
    {
      voice: "Olivia",
      style: "Storytellers pack",
      text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
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
      text: "Hello! I’m one of many voices. Do I sound the way you imagined? Let’s find out together.",
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
      checkout: "https://cadencereads.lemonsqueezy.com/checkout/buy/cbdf22fe-e9c2-4fa8-af45-885f10983ee8",
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
      checkout: "https://cadencereads.lemonsqueezy.com/checkout/buy/88269862-94f6-4376-b6da-83a30509efd4",
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
      checkout: "https://cadencereads.lemonsqueezy.com/checkout/buy/5da1dba0-644e-402d-beb0-8bcb8cd642c8",
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
      checkout: "https://cadencereads.lemonsqueezy.com/checkout/buy/34783d62-6dd1-4dd8-9c9f-753c7fe621cb",
    },
  ],

  bundle: {
    name: "Every voice pack",
    tagline: "All four packs, 14 voices, plus 4 future packs added later.",
    price: "$15",
    checkout: "https://cadencereads.lemonsqueezy.com/checkout/buy/af307bf3-e5e5-42d5-8063-de3f42167a0c",
  },
};
