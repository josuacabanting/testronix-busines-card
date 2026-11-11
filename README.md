# Testronix digital business card

Updated directly from the supplied HTML. Vanilla HTML, CSS and JavaScript; no install, build, CDN, backend, analytics or external font required. Original artwork is preserved byte-for-byte.

## Files

- `index.html`: updated original page and contact destinations.
- `assets/styles.css`: responsive styling, full-image header, focus and reduced-motion support.
- `assets/card.js`: vCard download and production-link sharing.
- `assets/business-card.png`, `assets/testronix-logo.png`: extracted original images.
- `original/index.html`: untouched reference; do not upload this folder.
- `scripts/serve.cjs`: local preview server, requires Node.js.
- `scripts/enhance.cjs`: records the original markup transformation. Rerunning overwrites `index.html`; edit the finished HTML directly for ongoing maintenance.
- `tests/contact.test.cjs`: contact and sharing regression checks.
- `VERIFICATION.md`: validation results and device checks still needed.
- `testronix-card-deploy.zip`: deployment files only, with `index.html` at ZIP root.

## Local testing

Open `index.html` in a browser for a quick preview. For an HTTP preview, open PowerShell in this project folder and run:

```powershell
node scripts/serve.cjs
```

Visit `http://127.0.0.1:4173`. Stop the server with Ctrl+C. Run functional checks with `node --test tests/contact.test.cjs`. You can preview without Node by opening the HTML directly; sharing can offer a selectable link if clipboard access is unavailable.

## Production URL

The proposed URL is `https://testronix.ph/card/josua`. It is deliberately used for sharing even on a local preview. This project does not confirm that the proposed URL is already deployed. Before release, set `CARD_URL` in `assets/card.js` and the fallback input value in `index.html` to the confirmed HTTPS URL. If hosting redirects to a trailing slash, use that final address consistently in both places, your QR code, and the NFC URL record.

## GoDaddy deployment

These instructions apply to GoDaddy Web Hosting with cPanel, rather than its website-builder product. See [GoDaddy’s upload guide](https://www.godaddy.com/en-uk/help/upload-files-using-my-web-hosting-cpanel-file-manager-3239) and [cPanel File Manager documentation](https://docs.cpanel.net/cpanel/files/file-manager/).

1. In GoDaddy My Products, open the relevant Web Hosting account, then cPanel File Manager. Back up any existing files in the destination before replacing them.
2. Identify the document root for `testronix.ph`. For the primary domain it is normally `public_html`; addon domains may have a different root. Create `card/josua` underneath that root.
3. Upload `testronix-card-deploy.zip` into `card/josua` and extract it there. The folder must contain `index.html` and `assets/` directly, with no extra enclosing folder. Remove the uploaded archive after extraction.
4. Confirm the domain has working HTTPS through the hosting account. Open `https://testronix.ph/card/josua/` on a phone. Directory hosting commonly redirects the proposed address without the trailing slash to this address; relative asset paths then work normally. If the existing website routes all paths through a CMS, arrange a route exception for this physical directory with its administrator.
5. Verify the logo and entire header are visible, assets return successfully, and Save Contact opens or downloads a `.vcf`. Import it into Contacts and check each field. Check call, email, website, map and sharing on both iOS and Android.
6. Confirm and set the final share URL as described above, re-upload changed files, and refresh the browser. No database, PHP configuration or server-side NFC access is required.

Upload only `index.html` and `assets/` for manual deployment. Recreate the ZIP after edits with `Compress-Archive -Path index.html,assets -DestinationPath testronix-card-deploy.zip -Force` in PowerShell.

## QR code and physical NFC card

1. Finish deployment and verify the final public HTTPS address first.
2. Generate a static URL QR code containing that exact address using your chosen QR tool. This page intentionally adds no QR service dependency. Test the printed code at its actual physical size before ordering cards.
3. In your NFC-writing application, write a standard NDEF URI/URL record containing the same address to the physical card. Read it back and test on compatible iPhone and Android devices. The webpage does not access or program NFC hardware.
4. Both scanning and tapping should open this same page. Keep the URL stable so future contact updates do not require reprinting or rewriting cards.

## Ongoing maintenance

Update verified contact details in both HTML links/text and the vCard data in `assets/card.js`. Keep the original corporate artwork unless a replacement is supplied. Its tiny printed details are intentionally reproduced without cropping; the readable contact rows below are the mobile interaction surface. The profile uses the supplied portrait in `assets/josua-profile.png`, framed with CSS inside the circular avatar.
