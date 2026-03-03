const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF(presentationDir) {
    const absPath = path.resolve(presentationDir);
    const indexPath = path.join(absPath, 'index.html');

    if (!fs.existsSync(indexPath)) {
        console.error(`Error: index.html not found in ${absPath}`);
        process.exit(1);
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport to a common presentation size
    await page.setViewport({ width: 1920, height: 1080 });

    // Load the index.html file
    await page.goto(`file://${indexPath}`, { waitUntil: 'networkidle0' });

    // Inject CSS to prepare for printing
    // This makes sure all slides are visible and take up one page each
    await page.addStyleTag({
        content: `
            @media print {
                html, body {
                    margin: 0 !important;
                    padding: 0 !important;
                    height: auto !important;
                    overflow: visible !important;
                    background: white !important;
                }
                #presentation-container {
                    transform: none !important;
                    width: 1920px !important;
                    height: auto !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    overflow: visible !important;
                    position: relative !important;
                    display: block !important;
                }
                .slide {
                    display: flex !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    position: relative !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 1920px !important;
                    height: 1080px !important;
                    page-break-after: always !important;
                    break-after: page !important;
                    pointer-events: auto !important;
                    transform: none !important;
                    transition: none !important;
                }
                .slide .content > * {
                    opacity: 1 !important;
                    transform: none !important;
                    transition: none !important;
                }
                .controls, #prev-btn, #next-btn, #slide-indicator {
                    display: none !important;
                }
            }
        `
    });

    const outputFileName = `${path.basename(absPath)}.pdf`;
    const outputPath = path.join(absPath, outputFileName);

    await page.pdf({
        path: outputPath,
        width: '1920px',
        height: '1080px',
        printBackground: true,
        preferCSSPageSize: true
    });

    await browser.close();
    console.log(`PDF generated: ${outputPath}`);
}

const dir = process.argv[2];
if (!dir) {
    console.error('Usage: node generate-pdf.js <presentation-directory>');
    process.exit(1);
}

generatePDF(dir);
