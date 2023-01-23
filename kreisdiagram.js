function diagram(parameter) {
var data = [30, 10, 43, 55, 13];

    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    var labelArc = d3.arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);

    var pie = d3.pie()
      .sort(null)
      .value(function(d) { return d; });

    var svg = d3.select(parameter).append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
      .data(pie(data))
      .enter().append("g")
      .attr("class", "arc");

    g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data); });

    g.append("text")
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.data; });

}