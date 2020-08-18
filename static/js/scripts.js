var $body = $('body');
var logoDim = $body.width() > $body.height() ? $body.height() / 3 : $body.width() / 3;
$('#introLogo').attr('width', logoDim);
$('#introLogo').attr('height', logoDim);
$('#introLogo').css('transform', 'translate(' + ($body.width() / 2 - logoDim / 2) + 'px,' + ($body.height() / 2 - logoDim / 2) + 'px)');


setTimeout(function () {
    var x1 = d3.select('.main').transition().duration(4000).style('opacity', '1');
    var logoTranslate = d3.select('#introLogo')
    logoTranslate.transition().ease(d3.easeLinear).duration(1000)
        .style('transform', 'translate(15px,15px)')
        .attr('width', '70')
        .attr('height', '70');
    // setTimeout(function () {
    //     logoTranslate.style('opacity', '0');
    // }, 5000)
    setInterval(function () {
        changeData();
    }, 3000)
}, 4000);


var n = 12, // number of layers
    m = 300, // number of samples per layer
    k = 20; // number of bumps per layer
var stack = d3.stack().keys(d3.range(n)).offset(d3.stackOffsetSilhouette),
    layers0 = stack(d3.transpose(d3.range(n).map(function () { return bumps(m, k); }))),
    layers1 = stack(d3.transpose(d3.range(n).map(function () { return bumps(m, k); }))),
    layers = layers0.concat(layers1);
var svg = d3.select("svg"),
    width = $('svg').width(),
    height = $('svg').height();
svg.style('filter', 'blur(10px)')
var x = d3.scaleLinear()
    .domain([0, m - 10])
    .range([0, width]);
var y = d3.scaleLinear()
    .domain([d3.min(layers, stackMin), d3.max(layers, stackMax)])
    .range([height-100, 0]);
// var z = d3.interpolateInferno;
var z = d3.interpolateGreys;
var area = d3.area()
    .x(function (d, i) { return x(i); })
    .y0(function (d) { return y(d[0]); })
    .y1(function (d) { return y(d[1]); });
svg.selectAll("path")
    .data(layers0)
    .enter().append("path")
    .attr("d", area)
    .attr("fill", function () { return z(Math.random()); });
function stackMax(layer) {
    return d3.max(layer, function (d) { return d[1]; });
}
function stackMin(layer) {
    return d3.min(layer, function (d) { return d[0]; });
}
function changeData() {
    var t;
    d3.selectAll("path")
        .data(stack(d3.transpose(d3.range(n).map(function () { return bumps(m, k); }))))
        .transition()
        .ease(d3.easeQuad)
        .duration(3000)
        .attr("d", area);
}
// Inspired by Lee Byron’s test data generator.
function bumps(n, m) {
    var a = [], i;
    for (i = 0; i < n; ++i) a[i] = 0;
    for (i = 0; i < m; ++i) bump(a, n);
    return a;
}
function bump(a, n) {
    var x = 1 / (0.1 + Math.random()),
        y = 2 * Math.random() - 0.5,
        z = 10 / (0.1 + Math.random());
    for (var i = 0; i < n; i++) {
        var w = (i / n - y) * z;
        a[i] += x * Math.exp(-w * w);
    }
}