function getParameterByName(target) {
    // Retrieve URL from browser window
    let url = window.location.href;

    //Escape special characters
    target = target.replace(/[\[\]]/g, "\\$&");

    // Build and execute regular expression
    let regex = new RegExp("[?&]" + target + "(=([^&#]*)|&|#|$)");
    let results = regex.exec(url);

    // Handle no matches and empty values
    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2]);
}

function handleResult(resultData) {
    $('title').text(resultData["name"]);
    $('h3').text(resultData["name"] + ' (' + (resultData["birthYear"] ?? "N/A") + ')');

    let movieTable = jQuery("#movie_table_body");

    resultData["movies"].forEach(movie => {
        let row = `
            <tr>
                <td>
                    <a href="single-movie.html?id=${movie['id']}">${movie["title"]}</a>
                </td>
                <td>${movie["year"]}</td>
                <td>${movie["director"]}</td>
            </tr>
        `;

        movieTable.append(row);
    });
}

function buildUrl() {
    let genre = getParameterByName("genre");
    let prefix = getParameterByName("prefix");

    return (genre != null) ? `api/browse?genre=${genre}` : `api/browse?prefix=${prefix}`;
}

jQuery.ajax({
    dataType: "json",
    method: "GET",
    url: buildUrl(),
    success: (resultData) => handleResult(resultData)
});