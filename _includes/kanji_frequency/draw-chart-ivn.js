var ivn_grades = [
  [1, "rgba(223, 193, 132, 0.7)", "Grade 1"], 
  [2, "rgba(143, 96, 72, 0.7)", "Grade 2"], 
  [3, "rgba(100, 68, 54, 0.7)", "Grade 3"], 
  [4, "rgba(126, 181, 214, 0.7)", "Grade 4"], 
  [5, "rgba(42, 117, 169, 0.7)", "Grade 5"], 
  [6, "rgba(39, 66, 87, 0.7)", "Grade 6"], 
  [7, "rgba(77, 55, 99, 0.7)", "Grade 7"]
];

var margin = {top: 20, right: 15, bottom: 40, left: 65}
      , width = 740 - margin.left - margin.right
      , height = 500 - margin.top - margin.bottom;
    
    var x = d3.scaleLinear()
              .domain([0, 2500])
              .range([ 0, width ]);
    
    var y = d3.scaleLinear()
            .domain([0, 6000])
            .range([ height, 0 ]);
 
    var chart = d3.select('#chart-ivn')
  .append('svg:svg')
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .attr('class', 'chart')

    var main = chart.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  .attr('width', width)
  .attr('height', height)
  .attr('class', 'main')   

  // var legend = chart.append("g")
  // .attr("class","legend")
  // .attr("transform","translate(50,30)")
  // .style("font-size","12px")
  // .call(d3.legend)

  var legend = chart.append("g")
    .attr("class", "legend")
    .attr("x", width - 65)
    .attr("y", 30)
    .attr("height", 100)
    .attr("width", 100);

    legend.selectAll("rect")
    .data(ivn_grades)
    .enter()
      .append("rect")
      .attr("x", width - 30)
      .attr("y", function(d, i){ return i * 15 + 10;})
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", function(d) { 
         return d[1];
      });

    legend.selectAll("text")
    .data(ivn_grades)
    .enter()
      .append("text")
      .attr("x", width - 17)
      .attr("y", function(d, i){ return i * 15 + 20;})
      .text(function(d) {
        return d[2];
      })
      .style("font-family", "Arial, sans-serif")
      .style("font-size", "12px");
        
    // draw the x axis
    var xAxis = d3.axisBottom(x);

    main.append('g')
  .attr('transform', 'translate(0,' + height + ')')
  .attr('class', 'main axis date')
  .call(xAxis);

    // draw the y axis
    var yAxis = d3.axisLeft(y);

    main.append('g')
  .attr('transform', 'translate(0,0)')
  .attr('class', 'main axis date')
  .call(yAxis);

  var tip = d3.select('#chart-ivn')
      .append('div')
      .attr('class', 'tip')
      .attr('class', 'kanji-graph-tooltip')
      .html('I am a tooltip...')
      // .html(function(d) {
      //   return x(d[0]);
      // })
      // .style('border', '1px solid steelblue')
      // .style('padding', '5px')
      // .style('position', 'relative')
      .style('display', 'none')
      .on('mouseover', function(d, i) {
        tip.transition().duration(0);
      })
      .on('mouseout', function(d, i) {
        tip.style('display', 'none');
      });

    var g = main.append("svg:g"); 

  chart.append("text")
    .attr("transform",
        "translate(" + ((margin.left - margin.right) + width / 2) + " ," +
        (height + margin.top + 35) + ")")
    .attr("class", "axis-label")
    .style("text-anchor", "middle")
    .text("n-rank");

  chart.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("class", "axis-label")
    .style("text-anchor", "middle")
    .text("i-rank");
    
  g.selectAll("scatter-dots-gr-1")
    .data(kanji_data_gr_1)
    .enter().append("svg:circle")
        .attr("cx", function (d,i) { return x(d[0]); } )
        .attr("cy", function (d) { return y(d[1]); } )
        .attr("r", 2)
        .attr("class", "kanji-circle-grade-1")
        .on('mouseover', function(d, i) {
          tip.transition().duration(0);
          tip.html(kanji_list_1[i] + ' : (' + d[0] + ', ' + d[1] + ')');
          tip.style('top', y(d[1]) - 20 + 'px');
          tip.style('left', x(d[0]) + 'px');
          tip.style('display', 'block');
        })
        .on("mousemove", function(){
          return tip.style("top", (event.pageY-10)+"px")
          .style("left",(event.pageX+10)+"px");
        })
        .on('mouseout', function(d, i) {
          tip.transition()
          .delay(20)
          .style('display', 'none');
        })

  g.selectAll("scatter-dots-gr-2")
    .data(kanji_data_gr_2)
    .enter().append("svg:circle")
        .attr("cx", function (d,i) { return x(d[0]); } )
        .attr("cy", function (d) { return y(d[1]); } )
        .attr("r", 2)
        .attr("class", "kanji-circle-grade-2")
        // .style("opacity", 0.6)
        .on('mouseover', function(d, i) {
          tip.transition().duration(0);
          tip.html(kanji_list_2[i] + ' : (' + d[0] + ', ' + d[1] + ')');
          // tip.style('top', y(d[1]) - 20 + 'px');
          // tip.style('left', x(d[0]) + 'px');
          tip.style('display', 'block');
        })
        // http://bl.ocks.org/biovisualize/1016860
        .on("mousemove", function(){return tip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
        .on('mouseout', function(d, i) {
          tip.transition()
          .delay(20)
          .style('display', 'none');
        });

  g.selectAll("scatter-dots-gr-3")
    .data(kanji_data_gr_3)
    .enter().append("svg:circle")
        .attr("cx", function (d,i) { return x(d[0]); } )
        .attr("cy", function (d) { return y(d[1]); } )
        .attr("r", 2)
        .attr("class", "kanji-circle-grade-3")
        // .style("opacity", 0.6)
        .on('mouseover', function(d, i) {
          tip.transition().duration(0);
          tip.html(kanji_list_3[i] + ' : (' + d[0] + ', ' + d[1] + ')');
          // tip.style('top', y(d[1]) - 20 + 'px');
          // tip.style('left', x(d[0]) + 'px');
          tip.style('display', 'block');
        })
        // http://bl.ocks.org/biovisualize/1016860
        .on("mousemove", function(){return tip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
        .on('mouseout', function(d, i) {
          tip.transition()
          .delay(20)
          .style('display', 'none');
        });

  g.selectAll("scatter-dots-gr-4")
    .data(kanji_data_gr_4)
    .enter().append("svg:circle")
        .attr("cx", function (d,i) { return x(d[0]); } )
        .attr("cy", function (d) { return y(d[1]); } )
        .attr("r", 2)
        .attr("class", "kanji-circle-grade-4")
        // .style("opacity", 0.6)
        .on('mouseover', function(d, i) {
          tip.transition().duration(0);
          tip.html(kanji_list_4[i] + ' : (' + d[0] + ', ' + d[1] + ')');
          // tip.style('top', y(d[1]) - 20 + 'px');
          // tip.style('left', x(d[0]) + 'px');
          tip.style('display', 'block');
        })
        // http://bl.ocks.org/biovisualize/1016860
        .on("mousemove", function(){return tip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
        .on('mouseout', function(d, i) {
          tip.transition()
          .delay(20)
          .style('display', 'none');
        });

  g.selectAll("scatter-dots-gr-5")
    .data(kanji_data_gr_5)
    .enter().append("svg:circle")
        .attr("cx", function (d,i) { return x(d[0]); } )
        .attr("cy", function (d) { return y(d[1]); } )
        .attr("r", 2)
        .attr("class", "kanji-circle-grade-5")
        // .style("opacity", 0.6)
        .on('mouseover', function(d, i) {
          tip.transition().duration(0);
          tip.html(kanji_list_5[i] + ' : (' + d[0] + ', ' + d[1] + ')');
          // tip.style('top', y(d[1]) - 20 + 'px');
          // tip.style('left', x(d[0]) + 'px');
          tip.style('display', 'block');
        })
        // http://bl.ocks.org/biovisualize/1016860
        .on("mousemove", function(){return tip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
        .on('mouseout', function(d, i) {
          tip.transition()
          .delay(20)
          .style('display', 'none');
        });

  g.selectAll("scatter-dots-gr-6")
    .data(kanji_data_gr_6)
    .enter().append("svg:circle")
        .attr("cx", function (d,i) { return x(d[0]); } )
        .attr("cy", function (d) { return y(d[1]); } )
        .attr("r", 2)
        .attr("class", "kanji-circle-grade-6")
        // .style("opacity", 0.6)
        .on('mouseover', function(d, i) {
          tip.transition().duration(0);
          tip.html(kanji_list_6[i] + ' : (' + d[0] + ', ' + d[1] + ')');
          // tip.style('top', y(d[1]) - 20 + 'px');
          // tip.style('left', x(d[0]) + 'px');
          tip.style('display', 'block');
        })
        // http://bl.ocks.org/biovisualize/1016860
        .on("mousemove", function(){return tip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
        .on('mouseout', function(d, i) {
          tip.transition()
          .delay(20)
          .style('display', 'none');
        });

  g.selectAll("scatter-dots-gr-7")
    .data(kanji_data_gr_7)
    .enter().append("svg:circle")
        .attr("cx", function (d,i) { return x(d[0]); } )
        .attr("cy", function (d) { return y(d[1]); } )
        .attr("r", 2)
        .attr("class", "kanji-circle-grade-7")
        // .style("opacity", 0.6)
        .on('mouseover', function(d, i) {
          tip.transition().duration(0);
          tip.html(kanji_list_7[i] + ' : (' + d[0] + ', ' + d[1] + ')');
          // tip.style('top', y(d[1]) - 20 + 'px');
          // tip.style('left', x(d[0]) + 'px');
          tip.style('display', 'block');
        })
        // http://bl.ocks.org/biovisualize/1016860
        .on("mousemove", function(){return tip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
        .on('mouseout', function(d, i) {
          tip.transition()
          .delay(20)
          .style('display', 'none');
        });

        //varicyon