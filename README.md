# Testronix digital business cards

Static digital business card for Josua Cabanting. The site uses local HTML, CSS, JavaScript, photos and brand artwork. No build step or runtime dependency installation is required.

## GitHub Pages

Publish this repository from `main` and `/ (root)` under Settings → Pages → Deploy from a branch.

When hosted in the `cards` repository owned by `josuacabanting`, the profile URL is:

https://josuacabanting.github.io/cards/josua/

Write that exact HTTPS URL to the NFC card as a URL record and use it for the printed QR code. Confirm the deployed page works on iOS and Android before programming or printing cards. The root page redirects to Josua’s profile.

## Files

- `josua/index.html`: profile and contact links.
- `josua/assets/card.js`: generated contact download. Update its vCard fields when changing contact information.
- `josua/assets/styles.css`: navy theme and responsive layout.
- `josua/assets/`: local photos and brand images.
- `.nojekyll`: serves these files without Jekyll processing.

For another employee, copy the `josua` directory to a new employee directory, then update the profile photo, text, links, page metadata and vCard fields with verified details. Each employee directory receives its own URL.
