$('#js-interaction').bind('rated', function(t, e) {
    $('#jsvalue').text("You've rated it: " + e);
}),
    $('#js-interaction').bind('reset', function() {
        $('#jsvalue').text('Rating reset');
    }),
    $('#js-interaction').bind('over', function(t, e) {
        $('#jshover').text('Hovering over: ' + e);
    });
