jQuery.ajax({
   dataType: "json",
   method: "GET",
   url: "api/",
   success: (resultData) => handleResult(resultData)
});