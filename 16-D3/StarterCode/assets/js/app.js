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

let chartGroup = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

//identifying axis
let chosenXAxis = 'poverty';
let chosenYAxis = 'healthcare';

//Linear Scales : xLinearScale
function XScale(censusData, chosenXAxis){
    xLinearScale = d3.scaleLinear()
    .domain([d3.min(censusData, d => d[chosenXAxis]) * 0.8, d3.max(censusData, d => d[chosenXAxis])* 1.2])
    .range([0, width]);
    
    return xLinearScale;
}

//Linear Scales : yLinearScale
function yScale(censusData, chosenYAxis){
    yLinearScale = d3.scaleLinear()
    .domain([d3.min(censusData, d => d[chosenYAxis]) * 0.8, d3.max(censusData, d => d[chosenYAxis]) * 1.2])
    .range([height, 0]);
    
    return yLinearScale;
}

function renderXAxis(newXScale, xAxis) {
    bottomAxis = d3.axisBottom(newXScale);
    
    xAxis.transition()
    .calll(bottomAxis);
    
    return xAxis;
}

function renderYAxis(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
    
    yAxis.transition()
    .call(leftAxis);
    
    return yAxis;
}


