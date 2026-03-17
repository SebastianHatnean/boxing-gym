# Suceava Boxing Club

Romanian-first landing page for a local boxing gym, built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Run

```bash
npm install
npm run dev
```

For a production bundle:

```bash
npm run build
```

## Main Edit Points

- Text, schedule, trainer profile, testimonials, FAQs, contact details, social links, and image URLs live in [src/content/siteContent.js](/Users/sebastianhatnean/Desktop/Dev/learning/boxing-gym/src/content/siteContent.js).
- Theme tokens and reusable visual helpers live in [src/index.css](/Users/sebastianhatnean/Desktop/Dev/learning/boxing-gym/src/index.css).
- Section composition is wired in [src/App.jsx](/Users/sebastianhatnean/Desktop/Dev/learning/boxing-gym/src/App.jsx).

## Replace Images

Update the `src` values in the `hero`, `about`, `trainer`, and `gallery` objects inside [src/content/siteContent.js](/Users/sebastianhatnean/Desktop/Dev/learning/boxing-gym/src/content/siteContent.js).

You can:

- Keep using remote URLs.
- Move real photos into `src/assets/` and import them into the content file.
- Swap alt text at the same time for accessibility and SEO.

## Update Branding

- Gym name, city, tagline, phone, email, and Instagram handle are under `brand`.
- Navigation labels are under `navigation`.
- SEO title and description are under `seo`.

## Update Colors and Motion

- Base colors, fonts, background treatment, and glass card styles are defined in [src/index.css](/Users/sebastianhatnean/Desktop/Dev/learning/boxing-gym/src/index.css).
- Shared motion variants are defined in [src/lib/motion.js](/Users/sebastianhatnean/Desktop/Dev/learning/boxing-gym/src/lib/motion.js).
- To reduce animation intensity, lower durations or remove `floatAnimation`.

## Contact Form

The contact form is front-end only and intentionally future-ready. It currently confirms submission in the UI.

Common next integrations:

- Formspree
- Netlify Forms
- Custom API endpoint

## Notes

- The Google Maps embed currently points to Suceava as an editable placeholder because the exact street address was not included in the brief.
- The trainer section is structured for one profile now but can be extended into a list without changing the overall page architecture.
