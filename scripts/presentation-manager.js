const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PRESENTATIONS_DIR = path.join(__dirname, '..');
const MD_TEMPLATE_DIR = path.join(PRESENTATIONS_DIR, 'markdown-template');

function create(name) {
    if (!name) {
        console.error('Error: Please provide a name for the new presentation.');
        process.exit(1);
    }

    const targetDir = path.join(PRESENTATIONS_DIR, name);

    if (fs.existsSync(targetDir)) {
        console.error(`Error: Presentation "${name}" already exists.`);
        process.exit(1);
    }

    try {
        // Use system cp for recursive copy instead of adding fs-extra
        execSync(`cp -r "${MD_TEMPLATE_DIR}" "${targetDir}"`);
        console.log(`Successfully created new presentation: presentations/${name}`);
        console.log(`You can now edit presentations/${name}/slides.md`);
    } catch (err) {
        console.error('Error creating presentation:', err.message);
    }
}

function update(name) {
    // This script updates the common structural files (index.html, style.css) 
    // of markdown-based presentations by copying them from the template.
    // It skips slides.md to preserve content.

    let presentations = [];

    if (name) {
        const targetDir = path.join(PRESENTATIONS_DIR, name);
        if (!fs.existsSync(targetDir) || !fs.statSync(targetDir).isDirectory()) {
            console.error(`Error: Presentation "${name}" not found.`);
            process.exit(1);
        }
        if (!fs.existsSync(path.join(targetDir, 'slides.md'))) {
            console.error(`Error: "${name}" is not a markdown-based presentation.`);
            process.exit(1);
        }
        presentations = [name];
    } else {
        const items = fs.readdirSync(PRESENTATIONS_DIR);
        presentations = items.filter(item => {
            const fullPath = path.join(PRESENTATIONS_DIR, item);
            const stats = fs.statSync(fullPath);
            return stats.isDirectory() &&
                item !== 'scripts' &&
                item !== 'template' &&
                item !== 'markdown-template' &&
                fs.existsSync(path.join(fullPath, 'slides.md'));
        });

        if (presentations.length === 0) {
            console.log('No markdown-based presentations found to update.');
            return;
        }
        console.log(`Updating ${presentations.length} markdown-based presentations...`);
    }

    for (const pName of presentations) {
        const targetDir = path.join(PRESENTATIONS_DIR, pName);
        try {
            fs.copyFileSync(path.join(MD_TEMPLATE_DIR, 'index.html'), path.join(targetDir, 'index.html'));
            fs.copyFileSync(path.join(MD_TEMPLATE_DIR, 'style.css'), path.join(targetDir, 'style.css'));
            console.log(`- Updated: ${pName}`);
        } catch (err) {
            console.error(`- Error updating ${pName}:`, err.message);
        }
    }

    console.log('Update complete.');
}

const command = process.argv[2];
const arg = process.argv[3];

if (command === 'create') {
    create(arg);
} else if (command === 'update') {
    update(arg);
} else {
    console.log('Usage:');
    console.log('  node scripts/presentation-manager.js create <name>');
    console.log('  node scripts/presentation-manager.js update [name]');
}
