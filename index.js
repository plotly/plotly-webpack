var Plotly = require('plotly.js');
var gd = document.createElement('div');
document.body.appendChild(gd);

Plotly.plot(gd, [{
    x: [1, 2, 3],
    y: [2, 1, 4]
}]);
