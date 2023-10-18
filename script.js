$(document).ready(function() {
    var URL = "https://static.codehs.com/api/12345/movies/all";

    $('#search').click(function() {
        var movieName = $('#movie').val();

        $.getJSON(URL, function(data) {
           
            function findReleaseDate(movie) {
                return data.find(function(i) {
                    
                });
            }

    });
});
});


