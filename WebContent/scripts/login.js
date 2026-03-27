let login_form = $("#login_form");
let error_message = $("#login_error_message")

function handleLoginResult(resultData) {
    if (resultData["status"] === "success") {
        window.location.replace("index.html");
    } else {
        error_message.removeClass("d-none");
        error_message.text(resultData["message"]);
    }
}

function submitLoginForm(formSubmitEvent) {
    formSubmitEvent.preventDefault();

    $.ajax(
        "api/login", {
            method: "POST",
            data: login_form.serialize(),
            success: handleLoginResult
        }
    );
}

login_form.submit(submitLoginForm);