import fs from 'fs';
import path from 'path';

const feature = process.argv[2];
if (!feature) throw new Error('Feature name missing');

const basePath = path.join('src', 'app', 'features', feature);

['pages', 'components', 'data', 'models'].forEach(dir => {
  fs.mkdirSync(path.join(basePath, dir), { recursive: true });
});

fs.writeFileSync(path.join(basePath, 'pages', `${feature}.page.ts`),
  `import { Component } from '@angular/core';\n@Component({selector: 'app-${feature}', template: '<p>${feature} works!</p>'})\nexport class ${feature[0].toUpperCase() + feature.slice(1)}Page {}`);
