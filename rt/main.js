for (d of data) {
  d.from = d.average - d.std;
  d.to = d.average + d.std;
}

   var margin = {top: 50, right: 50, bottom: 50, left: 50},
       width = 1200 - margin.left - margin.right,
       height = 500 - margin.top - margin.bottom;

   var x = d3.scale.ordinal()
       .rangeRoundBands([0, width], .08);

   var y = d3.scale.linear()
       .range([height,0]);

   x.domain(data.map(function(d) { return d.singkatan; }));
   y.domain([d3.min(data,function(d){return d.from;}), d3.max(data,function(d){return d.to;})]);

   var xAxis = d3.svg.axis()
       .scale(x)
       .orient("top");

   var yAxis = d3.svg.axis()
       .scale(y)
       .orient("left")
       // .ticks(15);

   var svg = d3.select("body").append("svg")
       .attr("width", width + margin.left + margin.right)
       .attr("height", height + margin.top + margin.bottom)
       .append("g")
       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

     svg.append("g")
         .attr("class", "y axis")
         // .attr("transform", "translate(0," + height + ")")
         .call(yAxis)
         .append("text")
         .attr("x", width-75)
         .attr("dx", ".71em")
         .attr("dy", "-.71em");

     svg.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return x(d.singkatan) + x.rangeBand()/4; })
         .attr("width", x.rangeBand()/2)
         .attr("y", function(d) { return y(d.to); })
         .attr("height", function(d) { return y(d.from)-y(d.to) });

     svg.selectAll(".inisial-box")
         .data(data)
         .enter().append("rect")
         .attr("class", "inisial-box")
         .attr("x", function(d) { return x(d.singkatan); })
         .attr("width", x.rangeBand())
         .attr("y", function(d) { return y(d.average) - x.rangeBand()/4; })
         .attr("height", x.rangeBand()/2);

     svg.selectAll(".inisial")
         .data(data)
         .enter().append("text")
         .attr("class", "inisial")
         .attr("x", function(d) { return x(d.singkatan) + x.rangeBand()/2; })
         // .attr("height", y.rangeBand())
         .attr("y", function(d) { return y(d.average) +  x.rangeBand()/6; })
         .text( function(d) {return d.singkatan})
         .style("font-size", x.rangeBand()/2)
         // .attr("height", function(d) { return y(d.to)-y(d.from) });

     svg.append("line")
         .attr("class", "zero")
         .attr("y1", y(1))
         .attr("x1", 0)
         .attr("y2", y(1))
         .attr("x2", width);

       // add legend
       var tooltip = d3.select("body")
       .append('div')
       .attr('class', 'tooltip');

       tooltip.append('div')
       .attr('class', 'singkatan');
       tooltip.append('div')
       .attr('class', 'rerata');
       tooltip.append('div')
       .attr('class', 'tempRange');

       svg.selectAll(".inisial-box, .inisial")
       .on('mouseover', function(d) {
         d3.select(this).style("cursor", "pointer");

           tooltip.select('.singkatan').html("<b>" + d.nama + "</b>");
           tooltip.select('.rerata').html("estimasi " + d.average);
           tooltip.select('.tempRange').html("range " + d.from + "-" + d.to);

           tooltip.style('display', 'block');
           tooltip.style('opacity',2);

       })
       .on('mousemove', function(d) {
           tooltip.style('top', (d3.event.layerY + 10) + 'px')
           .style('left', (d3.event.layerX - 25) + 'px');
       })
       .on('mouseout', function() {
           tooltip.style('display', 'none');
           tooltip.style('opacity',0);
       });
