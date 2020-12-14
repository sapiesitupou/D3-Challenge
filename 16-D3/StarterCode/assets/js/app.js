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

//rendering Axises
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

//creating circlesGroup
function renderCircles(circlesGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {
    circlesGroup.transition()
        .attr('cx', data => newXScale(data[chosenXAxis]))
        .attr('cy', data => newYScale(data[chosenYAxis]))
    
    return circlesGroup;
}

//creating textGroup
function renderText(textGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {
    textGroup.transition()
        .attr('x', d => newXScale(d[chosenXAxis]))
        .attr('y', d => newYScale(d[chosenYAxis]));
    
    return textGroup;
}

//if statements for values populated for the graphs
function styleX(value, chosenXAxis) {
    if (chosenXAxis === 'poverty') {
        return `${value}%`;
    }
    else if (chosenXAxis === 'income') {
        return `${value}`;
    }
    else {
        return `${value}`;
    }
}

//creating toolTip
var toolTip = d3.tip()
    .attr('class', 'd3-tip)
    .offset([-8, 0])
          .html(function(d){
        return (`${d.state}<br>${xLabel} ${styleX(d[chosenXAxis], chosenXAxis)}<br>${yLabel} ${d[chosenYAxis]}%`);
    });

circlesGroup.call(toolTip);
circlesGroup.on('mouseover', toolTip.show)
          .on('mouseout', toolTip.hide);
          
          return circlesGroup;

//reading the csv file
d3.csv('/assets/data/data.csv').then(function(censusData) {
        console.log(censusData);
        
        censusData.forEach(function(data){
            data.obesity = +data.obesity;
            data.income = +data.income;
            data.smokes = +data.smokes;
            data.age = +data.age;
            data.healthcare = +data.healthcare;
            data.poverty = +data.poverty;
            )
    });
