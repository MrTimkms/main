$("#nopass").hide();
$("#yespass").hide();
$("#avtdiv").hide();
$("#SonarQubesystem").hide();
$("#lunchConsole1c").show();
$("#testdiv").hide();
$("#GITposds").hide(); 
//При авторизации
$(function () {
  $(document).on("click", "#avtbtn", function () {
    $("#nopass").alert();
    var login = $("#inputlogin").val();
    var pass = $("#inputPassword").val();
    var login1 = "admin";
    if (pass == login1 && login == login1) {
      $("#yespass").show();
      setTimeout(function () {
        $("#avtdiv").hide();
      }, 2000);
    } else {
      $("#nopass").show();
      window.setTimeout(function () {
        $("#nopass").hide();
      }, 5000);
    }
  });
});
//Горизонтально или вертикально меню
/* $(function() {
  $(document).on("click", "#Vertikalmenu", function() {
    var nopas = $("#Vertikalmenu").prop("checked");
    if (nopas == true) {
      $("#indexbutn").addClass("btn-group-vertical");
    } else {
      $("#indexbutn").removeClass("btn-group-vertical");
    }
  });
}); */
//Назад в общее меню
/* $(function() {
  $(document).on("click", "#goback", function() {
    $("#indexbutn").show();
  });
}); */
//Открытие подсистемы Тестирование
$(function () {
  $(document).on("click", "#indexbutnTest", function () {
    $("#SonarQubesystem").hide();
    $("#testdiv").show();
    $("#lunchConsole1c").hide();
    $("#GITposds").hide(); 
  });
});
//Открытие подсистемы сонар
$(function () {
  $(document).on("click", "#indexbutnSonar", function () {
    $("#SonarQubesystem").show();
    $("#testdiv").hide();
    $("#lunchConsole1c").hide();
    $("#GITposds").hide(); 
  });
});
//Открытие подсистемы Обновление 1с
$(function () {
  $(document).on("click", "#indexbutOnload", function () {
    $("#SonarQubesystem").hide();
    $("#testdiv").hide();
    $("#lunchConsole1c").show();
    $("#GITposds").hide(); 
  });
});
//Открытие подсистемы GIT
$(function () {
  $(document).on("click", "#indexbutnGIT", function () {
    $("#SonarQubesystem").hide();
    $("#testdiv").hide();
    $("#lunchConsole1c").hide();
    $("#GITposds").show(); 
  });
});
//Окрытие 1с 
$(function () {
  $(document).on("click", "#lunch1c", function () {
    var ws = new ActiveXObject("Wscript.Shell");
    ws.Run("1с.bat", 0);
  });
});
//Запуск сонаркуба 
$(function () {
  $(document).on("click", "#indexbutnSonarLoad", function () {
    var ws = new ActiveXObject("Wscript.Shell");
    ws.Run("C:\\sonarqube\\bin\\windows-x86-64\\StartSonar.bat", 0);
  });
});
//Запуск сканирования базы
$(function () {
  $(document).on("click", "#SonarQubescaner", function () {
    var selectBase = $("#selectBase").val();
    if (selectBase == 1) {
      var adress = "C:\\dpu\\project1c\\check.bat";
    }
    else if (selectBase == 3) {
      var adress = "C:\\project1c\\check.bat";
    }
    else { var adress = "C:\\WINDOWS\\system32\\calc.exe"; }
    var ws = new ActiveXObject("Wscript.Shell");
    ws.Run(adress, 0);
  });
});
//Открытие адресса проекта
$(function () {
  $(document).on("click", "#indexbutnSonarLoad", function () {
    window.location.href = "http://localhost:9000";
  });
});