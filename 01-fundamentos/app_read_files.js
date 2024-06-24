const fs = require('fs');

const data = fs.readFileSync('README-REACT.md', 'utf8');

const newData = data.replace(/React/ig, 'Angular');

fs.writeFileSync('README-ANGULAR.md', newData);
