# 10X Property Buyers website

This folder is a complete static website ready for GitHub Pages.

## Before publishing

Open `assets/js/config.js` and replace:

- `UPDATE PHONE NUMBER`
- the blank `phoneLink` with the number in international or UK dial format
- the blank `whatsappNumber` with digits only, including country code
- `UPDATE EMAIL ADDRESS`

Example:

```js
window.SITE_CONFIG = {
  businessName: "10X Property Buyers",
  phoneDisplay: "01903 123 456",
  phoneLink: "01903123456",
  whatsappNumber: "447700900000",
  email: "hello@10xpropertybuyers.co.uk",
  serviceArea: "Sussex and the South East"
};
```

## Put it live with GitHub Pages

1. Create a new public GitHub repository, for example `10x-property-buyers`.
2. Upload every file and folder from this package.
3. Open the repository **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose the `main` branch and `/ (root)`.
7. Press **Save**.
8. GitHub will show the live website address after a minute or two.

## Contact form

The enquiry form opens the visitor's email app with the property details filled in. This works on a free GitHub Pages site without a paid form service.

For a form that sends silently in the background, connect a service such as Formspree later.

## Domain

You can connect a custom domain in GitHub Pages settings. Add a `CNAME` file containing only the domain name after the DNS is set up.

## Legal check

The privacy and terms pages are templates and should be checked by a solicitor before commercial launch.
