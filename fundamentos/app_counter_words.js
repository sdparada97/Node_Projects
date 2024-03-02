const fs = require('fs');

const data = fs.readFileSync('README-REACT.md', 'utf8');
const wordCount = data.split(' ').length;

const wordReactCount = data.match(/react/gi ?? []).length;

console.log('PALABRAS:', wordCount);
console.log('PALABRAS REACT:', wordReactCount);