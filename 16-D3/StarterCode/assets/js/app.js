// @TODO: YOUR CODE HERE!
//Setting up chart
let svgWidth = 1000;
let svgHeight = 600;

let margin = {
    top: 40,
    right: 40,
    bottom: 60;
    left: 50
};

let width = svgWidth - margin.right - margin.left;
let height = svgHeight - margin.top - margin.bottom;

let chart = d3.select('#scatter')
    .append('div')
    .classed('chart', true);

let svg = chart.append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);


