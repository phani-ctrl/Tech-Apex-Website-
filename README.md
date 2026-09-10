# Tech-Apex Solutions — Final Self-Contained Website

This package is a fully local static website. All website photos, logo files, CSS, and JavaScript are included in the package.

## Run locally

Open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then open:

http://localhost:8000/

Do not move the `assets` folder away from the HTML files.

## Structure

- `index.html` — Home
- `about.html` — About Us
- `services.html` — Services
- `solutions.html` — Solutions
- `industries.html` — Industries
- `careers.html` — Careers
- `contact.html` — Contact
- `service-*.html` — Individual service pages
- `solution-*.html` — Individual solution pages
- `industry-*.html` — Individual industry pages
- `assets/styles.css` — Site styling
- `assets/app.js` — Interactions and animations
- `assets/tech-apex-logo.png` — Main logo
- `assets/tech-apex-logo-footer.png` — Footer logo
- `assets/images/photos/` — Local website photography

All photo references are local. No image is loaded from Unsplash, Pexels, or another image-hosting site.
