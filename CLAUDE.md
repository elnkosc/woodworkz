# CLAUDE.md

## Project Overview

WoodWorkz is a static single-page website for a Dutch wood crafting company specializing in interior carpentry (interieurbouw), maintenance (onderhoud), and repairs (reparaties). All UI content is in Dutch.

## Tech Stack

- **HTML5** / **CSS3** / **Vanilla JavaScript** — no frameworks or libraries
- No package manager, no build tools, no bundler
- Static files served directly

## Project Structure

```
index.html          # Single-page site (header, hero, services, about, contact, footer)
css/style.css       # All styles, CSS custom properties, responsive breakpoints at 900px and 768px
js/main.js          # Scroll effects, mobile nav, form validation, intersection observer animations
images/logo.svg     # SVG hammer logo
```

## Development

- Open `index.html` directly in a browser — no build step required.
- No test framework, linter, or formatter is configured.

## Design System

- **Primary color:** `#8B4513` (saddle brown) with light `#C8782A` and dark `#5C2D0E` variants
- **Accent:** `#DEB887` (burlywood)
- **Background:** `#FAF6F1` (light cream)
- **Text:** `#3A2F28` (dark brown)
- **Headings font:** Georgia / Times New Roman
- **Body font:** system font stack

## Code Conventions

- CSS uses custom properties defined in `:root`
- JavaScript uses an IIFE pattern for encapsulation
- Passive scroll listeners for performance
- No external dependencies — keep it that way
