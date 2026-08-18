# Novelio – Digital Library

Novelio is a digital library web app for browsing, reading, and downloading books and novels online. Built with HTML, CSS, and vanilla JavaScript. **This project is currently a work in progress.**

## Features

- Home page with a search popup (recent searches & popular categories)
- Library / Browse page with hero section, live stats, and a search bar
- Navigation for Categories, Authors, and Favorites (pages scaffolded, content pending)
- Font Awesome icons throughout the UI

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- [Font Awesome](https://fontawesome.com/) (icons)

## Project Structure

```
├── index.html          # Home page
├── library.html         # Browse / Library page
├── authors.html         # Authors page (in progress – empty)
├── categories.html      # Categories page (in progress – empty)
├── favorites.html       # Favorites page (in progress – empty)
├── script.js             # Home page search popup logic
├── library.js            # Library page logic (in progress – empty)
├── shared.js              # Shared logic across pages (in progress – empty)
└── css/
    ├── style.css          # Home page styles (missing – needs to be added)
    ├── shared.css          # Shared styles across pages (missing – needs to be added)
    └── library.css         # Library page styles (missing – needs to be added)
```

##  Known Issues / TODO

- [ ] Add `css/style.css`, `css/shared.css`, and `css/library.css` — referenced in the HTML but not yet created
- [ ] Fill in `authors.html`, `categories.html`, `favorites.html`
- [ ] Implement `library.js` and `shared.js`
- [ ] Fix navigation inconsistency: some links point to `home.html` while the actual home file is `index.html`

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/USERNAME/REPO_NAME.git
   ```
2. Open `index.html` in your browser to view the home page.

> Note: some pages/styles are still missing since the project is in progress — see the TODO list above.

## Contributing

Contributions are welcome! If you'd like to help finish the project:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is available under the MIT License. See the [LICENSE](LICENSE) file for more details.
