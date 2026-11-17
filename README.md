

# Cloud-os-site

A small three-page static website built for the Cloud OS module of Operating Systems Design (CCIS-673). It is hosted on Cloudflare (Workers static assets, Free plan) and deployed from this GitHub repository.

## Pages

- `index.html`: project introduction
- `progress_page.html`: project and assignment progress
- `architecture.html`: Cloud OS architecture and the responsibility boundary (to be added)
- `404.html`: custom page for unknown URLs

# Folder layout

```
Cloud-os-site/
├── public/            # all site files served to visitors
│   ├── index.html
│   ├── progress_page.html
│   ├── architecture.html
│   ├── 404.html
│   └── _headers       # custom security headers
├── wrangler.json      # tells Cloudflare to serve ./public and use 404.html for missing paths
└── README.md
```

# Test locally

1. Clone the repo and open the `public/` folder.
2. Start a local server: `python3 -m http.server 8000` from inside `public/`.
3. Visit `http://localhost:8000` and click every navigation link.
4. Try the interactive element on each page.
5. Visit `http://localhost:8000/does-not-exist` to check unknown-URL behavior. (The basic Python server shows its own error page. The custom 404 appears on the deployed site.)

# Deployment

Pushing to `main` triggers a Cloudflare build that publishes the contents of `public/` over HTTPS. Live URL: <add your URL here>

# Notes

Only public or synthetic content is included. No credentials, student ID, or personal contact information is stored in this repository.
