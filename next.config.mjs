import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = "C:\\Users\\Junaid\\.gemini\\antigravity\\brain\\e3989484-964a-4d62-b387-ea121a52bbef";
const targetDir = path.join(__dirname, "public", "images");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

if (fs.existsSync(sourceDir)) {
  const files = fs.readdirSync(sourceDir);
  for (const file of files) {
    if (file.endsWith(".png")) {
      const cleanName = file.replace(/_\d+\.png$/, '.png');
      fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, cleanName));
    }
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable image optimization since we're using static export and SVG only
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

