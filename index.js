var Plotly = require('plotly.js/lib/core');

// Register your desired components here.
//   See: https://github.com/plotly/plotly.js/blob/master/lib/index.js
Plotly.register([
   require('plotly.js/lib/bar')
]);

var gd = document.createElement('div');
document.body.appendChild(gd);

Plotly.plot(gd, [{
  type: 'bar',
  x: [1, 2, 3],
  y: [2, 1, 4]
}]);
