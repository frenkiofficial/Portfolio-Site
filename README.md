# ✨ Frenki's Interactive JSON Profile Viewer ✨

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Repo Link](https://img.shields.io/badge/GitHub-Repo-blue.svg)](https://github.com/frenkiofficial/Portfolio-Site)

## 📜 Description

This project presents a unique and modern way to showcase a professional profile or resume. Instead of a traditional static page, it fetches data from a `resume.json` file and displays it within an interactive, code-like interface. The profile information is dynamically typed out using **TypeIt.js**, complete with syntax highlighting, giving it a distinct, tech-savvy feel.

Key information like account URLs and email addresses within the JSON data are automatically converted into clickable links. The project features a sleek, dark green gradient theme and is designed to be responsive across different screen sizes.

The primary goal is to offer an engaging and visually appealing alternative for developers and tech professionals to present their skills and experience.

## 🚀 Live Demo

Check out the live version deployed here:

➡️ **[frenki.vercel.app](https://frenki.vercel.app/)** ⬅️

## ✨ Key Features

*   **Dynamic JSON Display:** Profile data loaded asynchronously from `resume.json`.
*   **Typing Animation:** Smooth, accelerated typewriter effect for JSON content using TypeIt.js.
*   **Syntax Highlighting:** Clear differentiation of JSON keys, strings, booleans, and punctuation for readability.
*   **Intelligent Text Wrapping:** Long strings and paragraphs wrap correctly within the container, avoiding horizontal scrollbars.
*   **Interactive Links (In-JSON):** URLs (GitHub, Twitter, etc.) and email addresses within the JSON data are automatically hyperlinked, allowing direct navigation.
*   **Responsive Design:** Adapts well to various screen sizes, from mobile to desktop.
*   **Modern Aesthetic:** Elegant dark green gradient theme with blur effects on semi-transparent elements.
*   **Animated Header:** A stylish header introduces the profile view with a subtle animation.
*   **Informative Footer:** Direct links to social/professional profiles and copyright information.
*   **Data Reload Button:** Easily refetch and re-render data from `resume.json` without a full page refresh.
*   **Loading Indicator:** Visual feedback (spinner) while data is being fetched.

## 💻 Tech Stack

*   **HTML5:** Base structure of the web page.
*   **CSS3:** Styling, layout (Flexbox for structure), animations, and visual theme.
*   **JavaScript (Vanilla):** Core logic, DOM manipulation, data fetching (`fetch` API), event handling.
*   **TypeIt.js:** Library for the realistic typing animation effect.
*   **Font Awesome:** Icons used throughout the interface.

## 🚀 Getting Started

To run this project locally:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/frenkiofficial/Portfolio-Site.git
    cd Portfolio-Site
    ```

2.  **Open `index.html`:**
    Simply open the `index.html` file in your preferred web browser. No server or build process is needed as it runs entirely client-side.

## ⚙️ Usage & Customization

This project is designed to be easily adaptable for your own profile. Here’s how:

1.  **Edit `resume.json`:**
    *   This file contains all the profile information displayed.
    *   Open `resume.json` and carefully replace the **values** for each key with your own details (name, field, about_me, skills, technologies, account URLs, etc.).
    *   **Crucially, maintain the existing key structure** (e.g., `"name"`, `"field"`, `"accounts"`, `"accounts.github"`). The JavaScript relies on these specific keys to find and display the data correctly, including making the account URLs clickable.
    *   For paragraph breaks within strings like `"about_me"`, use `\n\n`. The script will convert these into `<br>` tags for proper line breaks in the display.

2.  **Update Footer Social Links (`index.html`):**
    *   Open `index.html`.
    *   Locate the `<footer class="site-footer">` section.
    *   Inside `<div class="social-links">`, update the `href` attribute for each `<a>` tag to point to your actual profile URLs.
    *   Add or remove `<a>` tags and their corresponding Font Awesome icons (`<i>`) to match the accounts you have listed in your `resume.json`.

3.  **Update Copyright Name (`index.html`):**
    *   In the footer section, find `<p class="copyright">`.
    *   Change the name "Frenki" to your name or desired alias.

4.  **(Optional) Customize Styles (`style.css`):**
    *   If you wish to change the appearance (colors, fonts, spacing, animations), you can modify the rules within the `style.css` file.

## 👤 Author

*   **Frenki**
    *   GitHub: [@frenkiofficial](https://github.com/frenkiofficial)
    *   Twitter: [@officialfrenki](https://twitter.com/officialfrenki)
    *   Telegram: [@FrenkiOfficial](https://t.me/FrenkiOfficial)
    *   Fiverr: [frenkimusic](https://fiverr.com/frenkimusic)
    *   Hugging Face: [@frenkiofficial](https://huggingface.co/frenkiofficial)

## 📄 License

This project is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) definition for details. You are free to use, modify, and distribute this code.

---
*README.md generated for Frenki's Portfolio Site.*