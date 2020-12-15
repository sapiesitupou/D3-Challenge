// @TODO: YOUR CODE HERE!

dataElement = []



var svgWidth = 1000, svgHeight = 500, barPadding = 20;

var svg = d3.select('#scatterBubble')
     .attr("width", svgWidth)
     .attr("height", svgHeight);





d3.csv("/assets/data/data.csv", function(error, data) {
    if (error) throw error;
        // console.log(data[0]);
  
        // data.forEach(element => console.log(element));
  
        data.forEach(element =>
            
            
                 svg
     .append("circle")
       .attr("class", "bubbles")
       .attr("cx", element.poverty*40)
       .attr("cy", -element.healthcare*10)
       .attr("r", 10)
       .style("fill", "lightblue")
       .attr("transform", "translate(0,354)")
            
            );


  });

// array1.forEach(element => console.log(element));
// console.log(dataElement)

d3.csv("/assets/data/data.csv", function(error, data) {
    if (error) throw error;
        // console.log(data[0]);
  
        // data.forEach(element => console.log(element));
  
        data.forEach(element =>
            
            
            svg.append("text").text(element.abbr)
            .attr("x", element.poverty*40)
            .attr("y", -element.healthcare*10)
            .attr("transform", "translate(-7,356)")
            .style("font", "10px times")
            );

        


        
        


        
  });


//      svg
//      .append('g')
//      .selectAll("dot")
//      .data(data)
//      .enter()
//      .append("circle")
//        .attr("class", "bubbles")
//        .attr("cx", function(d) {return d.obesity;})
//        .attr("cy", function(d) {return d;})
//        .attr("r", function(d) {return d;})
//        .style("fill", "red");

var axisScaleX = d3.scaleLinear()
    .domain([0, 30])
    .range([0, svgWidth]);
     
var axisScaleY = d3.scaleBand()
    .domain([0, 30])
    .range([svgHeight, 0]);
     
var x_axis = d3.axisBottom()
    .scale(axisScaleX);
     
var y_axis = d3.axisLeft()
    .scale(axisScaleY);

svg.append("g")
    .call(x_axis)
    .attr("transform", "translate(0,452)");

svg.append("g")
    .call(y_axis)
    .attr("transform", "translate(25,100)");

    svg.append("text").text("Lacks Healthcare (%)")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(18,320)rotate(-90)")
    .attr("text-anchor", "middle")
    
    // .attr("transform", "translate(0,150)")
    .style("font", "20px times");

    svg.append("g")
    .call(y_axis)
    .attr("transform", "translate(25,100)");

    svg.append("text").text("In Poverty (%)")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(400,490)")
    .attr("text-anchor", "middle")
    
    // .attr("transform", "translate(0,150)")
    .style("font", "20px times");
