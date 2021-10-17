var vg_1 = "map.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
}).catch(console.error);

var vg_2 = "streaming.json";
vegaEmbed("#streaming_chart", vg_2).then(function(result) {
}).catch(console.error);

var vg_3 = "movieperyear.json";
vegaEmbed("#area_chart", vg_3).then(function(result) {
}).catch(console.error);

var vg_4 = "alluvial.json";
vegaEmbed("#alluvial", vg_4).then(function(result) {
}).catch(console.error);

var vg_5 = "steam.json";
vegaEmbed("#steam", vg_5).then(function(result) {
}).catch(console.error);