# Smart Drug Delivery Computing — website

Static website for Smart Drug Delivery Computing Pty Ltd (ACN 701 246 219), hosted free on GitHub Pages.

## Structure

| File | Page |
|------|------|
| `index.html` | Home |
| `software.html` | SmartDelivery Studio (product) |
| `services.html` | Services |
| `about.html` | About us |
| `contact.html` | Contact |
| `404.html` | Not-found page |
| `assets/css/style.css` | All styling (colours/fonts are variables at the top) |
| `assets/js/main.js` | Mobile menu, scroll animations, contact form (opens the visitor's email app) |
| `assets/img/` | Logo and images |

## Editing

Edit the HTML files directly. The header and footer are repeated in each page, so a change there
(e.g. the contact email `info@smartdrugdelivery.com.au`) must be made in every `.html` file — a
find-and-replace across the folder does it.

## Preview locally

```
py -m http.server 8765 --directory website
```

then open http://localhost:8765

## Publish

Commit and push to the `main` branch; GitHub Pages redeploys automatically within a minute or two.
