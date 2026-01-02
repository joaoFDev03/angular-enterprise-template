import fs from 'fs';
import path from 'path';

const newName = process.argv[2];
if (!newName) throw new Error('Project name missing');

function replaceInFile(file) {
  const content = fs.readFileSync(file, 'utf8').replace(/angular-enterprise-template/g, newName);
  fs.writeFileSync(file, content);
}

// lista de ficheiros para substituir nomes
['package.json', 'README.md', 'angular.json'].forEach(f => replaceInFile(path.join(__dirname, '..', f)));

console.log('Project renamed to', newName);
