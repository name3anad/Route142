var map = new Mapbox('#map');

function search(query) {
    request(endpoints.information_query, {
        query: query
    }, function(data) {
        map._searching = true;
        if (data.length === 1) {
            map.display(data[0])
        } else {
            map.display(data);
        }
    });
}

function path(source, destination) {
    request(endpoints.shortest_path, {
        source: source,
        destination: destination
    }, function(data) {
        map._searching = true;
        map.display(data, true, undefined, true);
    });
}