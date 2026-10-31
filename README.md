# Cadence website

The website for **Cadence**, the Mac text-to-speech app: a home page, a voice
packs store, and privacy and terms pages. It's plain HTML, CSS and JavaScript,
so it can be hosted anywhere for free, with nothing to build or install.

| Page | File |
|---|---|
| Home: hero, samples, how it works, features, comparison, pricing, FAQ | `index.html` |
| Voice packs store | `voices.html` |
| Privacy policy | `privacy.html` |
| Terms | `terms.html` |

## Changing prices, links and voice packs

Everything that changes lives in **`assets/js/config.js`**: no HTML editing
needed.

- `price`: the app's price, shown everywhere on the site.
- `checkout`: the app's checkout link (see "Taking payments" below).
- `supportEmail`: shown in the FAQ, footer and legal pages.
- `samples`: the three voice samples on the home page.
- `packs`: the voice packs, each with a name, category, description, voices,
  price, sample and checkout link. **The packs in there now are examples**:
  replace them with your real ones. Categories become the filter buttons on the
  store page automatically.
- `bundle`: the "every voice pack" deal.

Until a checkout link is filled in, its button shows "Coming soon" when
clicked, so the site is safe to put online before the store is ready.

## Voice samples

Put MP3s in `assets/audio/` (see the README there). Make them with Cadence
itself. Until a sample's file exists, its card shows "Sample coming soon".

## Taking payments

Use a store that handles payment, sales tax and file delivery for you, and
paste its checkout links into `config.js`:

- **[Lemon Squeezy](https://www.lemonsqueezy.com)** or
  **[Paddle](https://www.paddle.com)**: "merchant of record" services, so
  they collect and pay sales tax/VAT worldwide for you. Good for software.
- **[Gumroad](https://gumroad.com)**: the simplest to set up for digital
  downloads.
- **[Stripe Payment Links](https://stripe.com/payments/payment-links)**: lowest
  fees, but you handle tax and delivering the download yourself.

For each product (the app, each voice pack, the bundle), upload the file
(`Cadence.dmg`, or a pack's `.zip`) in the store, create a checkout
link, and paste it into `config.js`.

### With Lemon Squeezy

1. **Make a store** at [lemonsqueezy.com](https://www.lemonsqueezy.com) and
   name it Cadence. Leave it in **test mode** while setting up.
2. **Add the app:** Products › New product. Name it "Cadence for Mac", set a
   single payment of $10, and under **Files** upload `Cadence.dmg`. Buyers
   get it by email straight after paying, and can download it again from
   their order page.
3. **Copy its link:** open the product, click **Share**, copy the checkout
   link and paste it into `checkout` in `assets/js/config.js`. Each voice
   pack (with its `.zip`) and the bundle work the same way, with their links
   going into each pack's `checkout`.
4. **Try it:** in test mode, buy it with the test card `4242 4242 4242 4242`
   (any future date, any CVC). The checkout opens as a pop-up over the site.
5. **Go live:** complete **Settings › Store activation** (identity and
   payout details; Lemon Squeezy reviews the store and website), then turn
   test mode off. Products made in test mode need copying to live mode (the
   product's menu has an option for it); check each live product's Share
   link and update `config.js` if it changed.

## Putting it online (free, with GitHub Pages)

1. On GitHub, open this repository's **Settings › Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, pick the
   branch with the site and the **/ (root)** folder, and save.
3. After a minute the site is live at the address GitHub shows. To use your
   own domain (like `cadence.app`), add it on the same page.

Once it has its final address, change `og:image` in each page's `<head>` to
the full address (e.g. `https://cadence.app/assets/img/og.png`) so link
previews show the image everywhere.

## Before you sell

- **Have the privacy and terms pages reviewed.** They're a plain-language
  starting point written for how Cadence works, not legal advice.
- **Voice packs need the speakers' permission** for their voices to be cloned
  and used commercially. Get it in writing from each voice actor.
- **The refund promise** (14 days if it doesn't run) appears in the FAQ and
  terms; change both if you choose a different policy.
- **Sign and notarize the app** with an Apple Developer account ($99/year) so
  buyers don't see macOS's "can't be checked" warning on first launch.

## Screenshots

The images in `assets/img` are rendered from the app's real interface with the
Cadence name. `og.png` is the link-preview image.
