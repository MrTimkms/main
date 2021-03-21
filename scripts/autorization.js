/* Авторизация */
$("#buttongetp").click(function () {
    var login = $("#inputlogin").val();
    var pass = $("#inputPassword").val();
    var login1 = "admin";
    var login2 = "Admin";
    if (pass == login1 & login == login1 && login == login2) {
        buttonGetPass.hidden = true,
            buttonSignin.hidden = false,
            buttonback.hidden = false,
            textboxmail.hidden = true;
        TextBoxPass.style.visibility = 'visible';
        if ($.cookie("passIsSend") == "true") {
            $("#info").text("Временный пароль уже сгенерирован и отправлен. Пожалуйста, воспользуйтесь им!");
        }
        else {
            var avtListjson = {
                nameProc: "getPass",
                login: $("#login").val().trim(),
            };
            let json = JSON.stringify(avtListjson);
            $.ajax({
                url: "AppAdress/hs/main/proc",
                type: "POST",
                data: json,
                dataType: "html",
                beforeSend: funcBefore("getPass"),
                success: funcSu
            });
        }
    }
    else {
        $("#login").notify("E-mail введён не корректно", "error");
    }
});

window.onload = function () { TextBoxPass.style.visibility = 'hidden'; }