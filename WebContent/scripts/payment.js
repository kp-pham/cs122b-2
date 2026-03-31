function handleResult(resultData) {
    $("#total").text(`Order Total: $${resultData["total"].toFixed(2)}`);
}

jQuery.ajax({
    dataType: "json",
    method: "GET",
    url: "api/transactions",
    success: (resultData) => handleResult(resultData)
});