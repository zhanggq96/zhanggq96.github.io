// var chart_krm = d3.select("#chart-krm")
// .append('svg:svg')
// .attr('width', 692)
//   .attr('height', 420)
//   .attr('class', 'chart')
//     margin_krm = {
//         top: 20,
//         right: 20,
//         bottom: 40,
//         left: 40
//     },
//     // width = +chart_krm.attr("width") - margin.left - margin.right,
//     // height = +chart_krm.attr("height") - margin.top - margin.bottom;
//     width_krm = 740 - margin_krm.left - margin_krm.right,
//     height_krm = 420 - margin_krm.top - margin_krm.bottom;

// var x_krm = d3.scale.ordinal().rangeRoundBands([0, width_krm]), //.padding(0.1),
//     y_krm = d3.scale.linear().range([height_krm, 0]);

// // Required for D3-tip lib
// // var tip = d3.tip()
// //     .append('div')
// //     .attr('class', 'd3-tip')
// //     .offset([-10, 0])
// //     .html(function(d) {
// //         return "<div><span>Kanji:</span> <span style='color:inherit;'>" + d[0] + "</span></div>" + "<div><span>n-rank:</span> <span style='color:inherit;'>" + d[2] + "</span></div>" + "<div><span>i-rank:</span> <span style='color:inherit;'>" + d[3] + "</span></div>" + "<div><span>g-ratio:</span> <span style='color:inherit;'>" + d[1] + "</span></div>";
// //     })

// var tip_krm = d3.select("#chart-krm")
//     .append('div')
//     .attr('class', 'tip')
//     .html('')
//     // .html(function(d) {
//     //     return "<div><span>Kanji:</span> <span style='color:inherit;'>" + d[0] + "</span></div>" + "<div><span>n-rank:</span> <span style='color:inherit;'>" + d[2] + "</span></div>" + "<div><span>i-rank:</span> <span style='color:inherit;'>" + d[3] + "</span></div>" + "<div><span>g-ratio:</span> <span style='color:inherit;'>" + d[1] + "</span></div>";
//     // })
//     .style('display', 'none')
//       .on('mouseover', function(d, i) {
//         tip_krm.transition().duration(0);
//       })
//       .on('mouseout', function(d, i) {
//         tip_krm.style('display', 'none');
//       });

// // Required for D3-tip lib
// // chart_krm.call(tip);

// //var yAxis = d3.axisLeft()
// //    .scale(y)
// //    .ticks(10);

// var g_krm = chart_krm.append("g")
//     .attr("transform", "translate(" + margin_krm.left + "," + margin_krm.top + ")");

// x_krm.domain(kanji_data_krm_max.map(function(d) {
//     return d[0];
// }));
// y_krm.domain([0, d3.max(kanji_data_krm_max, function(d) {
//     return d[1];
// })]);

// g_krm.append("g")
//     .attr("class", "axis axis--x")
//     .attr("transform", "translate(0," + height_krm + ")")
//     // .call(d3.axisBottom(x_krm))
//     .call(d3.svg.axis()
//         .scale(x_krm)
//         .orient("bottom"))
//     .style("font-family", '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif')
//     .style("font-size", "12px");

// g_krm.append("g")
//     .attr("class", "axis axis--y")
//     // .call(d3.axisLeft(y_krm).ticks(10))
//     .call(d3.svg.axis()
//         .scale(x_krm)
//         .orient("bottom")
//         .ticks(10))
//     .append("text")
//     .attr("transform", "rotate(-90)")
//     //      .attr("y", 6)
//     //      .attr("dy", "0.71em")
//     //      .attr("text-anchor", "end")
//     .text("Frequency");

// g_krm.selectAll(".bar")
//     .data(kanji_data_krm_max)
//     .enter().append("rect")
//     // .attr("class", "bar")
//     .attr("x", function(d) {
//         return x_krm(d[0]);
//     })
//     .attr("y", function(d) {
//         return y_krm(d[1]);
//     })
//     .attr("width", x_krm.rangeBand())
//     .attr("height", function(d) {
//         return height_krm - y_krm(d[1]);
//     })
//     .attr("class", function(d) {
//         return "bar bar-grade-" + d[4];
//     })
//     .on('mouseover', function(d, i) {
//         tip_krm.html(
//         "<div><span>Kanji:</span> <span style='color:inherit;'>" + d[0] + "</span></div>" + "<div><span>n-rank:</span> <span style='color:inherit;'>" + d[2] + "</span></div>" + "<div><span>i-rank:</span> <span style='color:inherit;'>" + d[3] + "</span></div>" + "<div><span>g-ratio:</span> <span style='color:inherit;'>" + d[1] + "</span></div>"
//         )
    
//       .transition().duration(0)
//       .style('top', y_krm(d[1]) - 20 + 'px')
//       .style('left', x_krm(d[0]) + 'px')
//       .style('display', 'block');
//       // .style('height', '20px');
//     })
//     .on('mouseout', function(d, i) {
//       tip_krm.transition()
//       .delay(20)
//       .style('display', 'none');
//     });
//     // .style("fill", function(d) {
//     //     return colormap_grades[d[4]];
//     // })
//     // .style("bar:hover", function(d) {
//     //     return colormap_grades[d[4] + 20];
//     // })
    
//     // .on('mouseover', tip.show)
//     // .on('mouseout', tip.hide);

// chart_krm.append("text")
//     .attr("transform",
//         "translate(" + ((margin_krm.left - margin_krm.right) + width_krm / 2) + " ," +
//         (height_krm + margin_krm.top + 35) + ")")
//     .attr("class", "axis-label")
//     .style("text-anchor", "middle")
//     .text("Kanji");

// chart_krm.append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 0)
//     .attr("x", 0 - (height_krm / 2))
//     .attr("dy", "1em")
//     .attr("class", "axis-label")
//     .style("text-anchor", "middle")
//     .text("G-ratio");

var krm_grades = [
  [1, "rgba(223, 193, 132, 0.7)", "Grade 1"], 
  [2, "rgba(143, 96, 72, 0.7)", "Grade 2"], 
  [3, "rgba(100, 68, 54, 0.7)", "Grade 3"], 
  [4, "rgba(126, 181, 214, 0.7)", "Grade 4"], 
  [5, "rgba(42, 117, 169, 0.7)", "Grade 5"], 
  [6, "rgba(39, 66, 87, 0.7)", "Grade 6"], 
  [7, "rgba(77, 55, 99, 0.7)", "Grade 7"]
];

var chart_krm = d3.select("#chart-krm")
.append('svg:svg')
.attr('width', 695)
  .attr('height', 420)
  .attr('class', 'chart')
    margin_krm = {
        top: 20,
        right: 15,
        bottom: 40,
        left: 65
    },
    // width = +chart_krm.attr("width") - margin.left - margin.right,
    // height = +chart_krm.attr("height") - margin.top - margin.bottom;
    width_krm = 740 - margin_krm.left - margin_krm.right,
    height_krm = 420 - margin_krm.top - margin_krm.bottom;

var x_krm = d3.scaleBand().rangeRound([0, width_krm]).padding(0.1),
    y_krm = d3.scaleLinear().rangeRound([height_krm, 0]);

var legend = chart_krm.append("g")
    .attr("class", "legend")
    .attr("x", width_krm - 65)
    .attr("y", 30)
    .attr("height", 100)
    .attr("width", 100);

    legend.selectAll("rect")
    .data(krm_grades)
    .enter()
      .append("rect")
      .attr("x", width_krm - 30)
      .attr("y", function(d, i){ return i * 15 + 10;})
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", function(d) { 
         return d[1];
      });

    legend.selectAll("text")
    .data(krm_grades)
    .enter()
      .append("text")
      .attr("x", width_krm - 17)
      .attr("y", function(d, i){ return i * 15 + 20;})
      .text(function(d) {
        return d[2];
      })
      .style("font-family", "Arial, sans-serif")
      .style("font-size", "12px");
// Required for D3-tip lib
// var tip = d3.tip()
//     .append('div')
//     .attr('class', 'd3-tip')
//     .offset([-10, 0])
//     .html(function(d) {
//         return "<div><span>Kanji:</span> <span style='color:inherit;'>" + d[0] + "</span></div>" + "<div><span>n-rank:</span> <span style='color:inherit;'>" + d[2] + "</span></div>" + "<div><span>i-rank:</span> <span style='color:inherit;'>" + d[3] + "</span></div>" + "<div><span>g-ratio:</span> <span style='color:inherit;'>" + d[1] + "</span></div>";
//     })

var tip_krm = d3.select("#chart-krm")
    .append('div')
    .attr('class', 'tip')
    .attr('class', 'tip')
    .attr('class', 'kanji-graph-tooltip')
    .html('')
    // .html(function(d) {
    //     return "<div><span>Kanji:</span> <span style='color:inherit;'>" + d[0] + "</span></div>" + "<div><span>n-rank:</span> <span style='color:inherit;'>" + d[2] + "</span></div>" + "<div><span>i-rank:</span> <span style='color:inherit;'>" + d[3] + "</span></div>" + "<div><span>g-ratio:</span> <span style='color:inherit;'>" + d[1] + "</span></div>";
    // })
    .style('display', 'none')
      .on('mouseover', function(d, i) {
        tip_krm.transition().duration(0);
      })
      .on('mouseout', function(d, i) {
        tip_krm.style('display', 'none');
      });

// Required for D3-tip lib
// chart_krm.call(tip);

//var yAxis = d3.axisLeft()
//    .scale(y)
//    .ticks(10);

var g_krm = chart_krm.append("g")
    .attr("transform", "translate(" + margin_krm.left + "," + margin_krm.top + ")");

x_krm.domain(kanji_data_krm_max.map(function(d) {
    return d[0];
}));
y_krm.domain([0, d3.max(kanji_data_krm_max, function(d) {
    return d[1];
})]);

g_krm.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height_krm + ")")
    .call(d3.axisBottom(x_krm))
    .style("font-family", '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif')
    .style("font-size", "12px");

g_krm.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y_krm).ticks(10))
    .append("text")
    .attr("transform", "rotate(-90)")
    //      .attr("y", 6)
    //      .attr("dy", "0.71em")
    //      .attr("text-anchor", "end")
    .text("Frequency");

g_krm.selectAll(".bar")
    .data(kanji_data_krm_max)
    .enter().append("rect")
    // .attr("class", "bar")
    .attr("x", function(d) {
        return x_krm(d[0]);
    })
    .attr("y", function(d) {
        return y_krm(d[1]);
    })
    .attr("width", x_krm.bandwidth())
    .attr("height", function(d) {
        return height_krm - y_krm(d[1]);
    })
    .attr("class", function(d) {
        return "bar bar-grade-" + d[4];
    })
    .on('mouseover', function(d, i) {
        tip_krm.html(
        "<div><span>Kanji:</span> <span style='color:inherit;'>" + d[0] + "</span></div>" + "<div><span>n-rank:</span> <span style='color:inherit;'>" + d[2] + "</span></div>" + "<div><span>i-rank:</span> <span style='color:inherit;'>" + d[3] + "</span></div>" + "<div><span>g-ratio:</span> <span style='color:inherit;'>" + d[1] + "</span></div>"
        )
    
      .transition().duration(0)
      .style('top', y_krm(d[1]) - 20 + 'px')
      .style('left', x_krm(d[0]) + 'px')
      .style('display', 'block');
      // .style('height', '20px');
    })
    .on("mousemove", function(){return tip_krm.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
    .on('mouseout', function(d, i) {
      tip_krm.transition()
      .delay(20)
      .style('display', 'none');
    });
    // .style("fill", function(d) {
    //     return colormap_grades[d[4]];
    // })
    // .style("bar:hover", function(d) {
    //     return colormap_grades[d[4] + 20];
    // })
    
    // .on('mouseover', tip.show)
    // .on('mouseout', tip.hide);

chart_krm.append("text")
    .attr("transform",
        "translate(" + ((margin_krm.left - margin_krm.right) + width_krm / 2) + " ," +
        (height_krm + margin_krm.top + 35) + ")")
    .attr("class", "axis-label")
    .style("text-anchor", "middle")
    .text("Kanji");

chart_krm.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (height_krm / 2))
    .attr("dy", "1em")
    .attr("class", "axis-label")
    .style("text-anchor", "middle")
    .text("g-ratio");