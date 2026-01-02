import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const newName = process.argv[2];
if (!newName) throw new Error('Project name missing');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function replaceInFile(file) {
  const content = fs.readFileSync(file, 'utf8').replace(/angular-enterprise-template/g, newName);
  fs.writeFileSync(file, content);
}

['package.json', 'README.md', 'angular.json'].forEach(f => replaceInFile(path.join(__dirname, '..', f)));

console.log('Project renamed to', newName);
