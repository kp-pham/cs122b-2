function handleResult(resultData) {
    let itemsTable = $("#items-table");

    resultData["items"].forEach(item => {
        let row = `
            <tr>
                <td>
                    <a href="single-movie.html?id=${item['id']}">${item['title']}</a>
                </td>
                <td>
                   <button>-</button>
                   ${item['quantity']}
                   <button>+</button>
                </td>
                <td>
                    <button>Remove</button>
                </td>
                <td>${item['price']}</td>
                <td>${item['subtotal']}</td>
            </tr>
        `;

        itemsTable.append(row);
    });
}

jQuery.ajax({
    dataType: "json",
    method: "GET",
    url: "api/cart",
    success: (resultData) => handleResult(resultData)
});