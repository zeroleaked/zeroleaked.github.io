dataset.edges = dataset.edges.filter(e => e.to < e.from)

var nodes = new vis.DataSet(dataset.nodes)
var edges = new vis.DataSet(dataset.edges.filter(
    e => e.label < 10
))


var data = {
    nodes, edges
}
// create a network
var container = document.getElementById("mynetwork");
var options = {
  nodes: {
      shape: "dot"
  }
};
var network = new vis.Network(container, data, options);

const handleEdgeChange = () => {
    const min = $('.controls #min').val()
    const max = $('.controls #max').val()
    edges = new vis.DataSet(dataset.edges.filter(
        e => (min < e.label) && (e.label < max)
    ))
    console.log(edges.length)
    data.edges = edges;
    network = new vis.Network(container, data, options);
    listener()
}

const listener = () => {
    network.on('click', prop => {
        var clickedNodes = nodes.get(prop.nodes);
        var clickedEdges = edges.get(prop.edges);
        if (clickedNodes.length) {
            $('.sidebar').width('400px');
            const name = clickedNodes[0].label;
            const desc = def[clickedNodes[0].id];
            $('.sidebar h1').html(name);
            $('.sidebar p').html(desc);
        }
        else if (clickedEdges.length) {
            $('.sidebar').width('400px');
            const name = 'Pasal ' + clickedEdges[0].label;
            const desc = pasals[clickedEdges[0].label-1]
            $('.sidebar h1').html(name);
            $('.sidebar p').html(desc);
        }
        else {
            $('.sidebar h1').html('');
            $('.sidebar p').html('');
            $('.sidebar').width('0');
        }

    })

    $('.controls button').click(handleEdgeChange);
    $('.controls #max').attr('max', def[0]+1);
    $('.controls #min').attr('max', def[0]+1);
}


$(function() {
    listener()
});
