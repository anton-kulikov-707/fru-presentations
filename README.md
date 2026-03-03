# FundraiseUp Presentations

This repository contains various presentations for FundraiseUp, built with HTML, CSS, and JavaScript.

## Project Structure

- `assets/`: Shared background images and global presentation styles.
- `scripts/`:
  - `presentation-logic.js`: Handles slide navigation and display.
  - `presentation-manager.js`: CLI tool for managing presentations (legacy/template-dependent).
  - `generate-pdf.js`: Script to generate PDF versions of presentations using Puppeteer.
- `style.css`: Global baseline styles.
- `[presentation-folder]/`: Individual presentation directories (e.g., `canvassing`, `memberships`).
  - `index.html`: The main presentation file.
  - `img/`: Presentation-specific assets.

## How to Create a New Presentation

Since presentations follow a standardized HTML structure, the easiest way to create a new one is to duplicate an existing one:

1.  **Create a new directory** in the root folder.
2.  **Add an `index.html`**: You can copy [memberships/index.html](memberships/index.html) as a starting point.
3.  **Update Content**:
    - Modify the `<title>` in the `<head>`.
    - Edit the slides within the `<div id="presentation-container">`.
    - Use the `<div class="slide">` structure for each new slide.
4.  **Reference Shared Assets**: Ensure your `index.html` correctly links to the root styles and scripts:
    ```html
    <link rel="stylesheet" href="../style.css">
    <script src="../scripts/presentation-logic.js"></script>
    ```

## Controls

While viewing a presentation in a browser:
- **Left Arrow / Backspace**: Previous slide.
- **Right Arrow / Space / Enter**: Next slide.
- **On-screen buttons**: Use the arrow buttons at the bottom right.

## PDF Generation

To generate a PDF version of a presentation:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the PDF script:
   ```bash
   npm run pdf -- --path=./memberships/index.html --output=./memberships/presentation.pdf
   ```
   *(Note: Ensure you provide the correct path to the index.html and desired output location.)*
