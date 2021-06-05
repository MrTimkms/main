$("#nopass").hide();
$("#yespass").hide();
$("#avtdiv").hide();
$("#SonarQubesystem").hide();
$("#lunchConsole1c").show();
$("#testdiv").hide();
$("#GITposds").hide();
var numCheckArea=0;
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
    ws.Run("C:\\sonarqube\\bin\\windows-x86-64\\StartSonar.bat");
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
  $(document).on("click", "#indexbutnSonarLoad2", function () {
    window.location.href = "http://localhost:9000";
  });
});
//Заполнить параметры по умолчанию
$(function () {
  $(document).on("click", "#LOADstandart", function () {
    var now = new Date();
    var now2=addMinutes(now, 30);
    var time = fixhourse(now);
    var time2 = fixhourse(now2);
    var today = givedate(now)
    var today2 = givedate(now2)
    $("#datestart").val(today);
    $("#date-nostart").val(today2);
    $("#textsoobsh").val('Внимание! Работа 1С будет приостановлена до '+ time2);
    numCheckArea=numCheckArea+1;
    $("#logupluad").text($("#logupluad").text()+" \n "+numCheckArea+". Установлены параметры по умолчанию для времени и сообщения в "+time+".")
  });
});
//функция добавить минуты
function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}
//функция получить дату
function givedate(now) {
  var month     = (now.getMonth() + 1);
    var day     = now.getDate();
    var hours   = now.getHours();
    var minute  = now.getMinutes();
    if (month < 10)
    month = "0" + month;
    if (day < 10)
    day = "0" + day;
    if (hours < 10)
    hours = "0" + hours;
    if (minute < 10)
    minute = "0" + minute;
  return now.getFullYear() + '-' + month + '-' + day +'T'+ hours+':'+minute;
}
//функция исправить часы
function fixhourse(now) {
    var hours   = now.getHours();
    var minute  = now.getMinutes();
    if (hours < 10)
    hours = "0" + hours;
    if (minute < 10)
    minute = "0" + minute;
  return hours+':'+minute;
}
//При изменении selectbase
$(function () {
  $(document).on("change", "#selectBaseIB", function () {
    var selectBase =   $("#selectBaseIB").val();
    if(selectBase=1)
    {
      numCheckArea=numCheckArea+1;
      $("#logupluad").text($("#logupluad").text()+" \n "+numCheckArea+". Выбрана информационная база: DPU на сервере srv-kna-app-03. Параметры для хранилищ заполнены по умолчанию. При нажатии выполнить будут выполнены выбранные функции.") 
      $("#roadtobase").val('Внимание! Работа 1С будет приостановлена до '+ time2);
    }
  });
});
//При выборе перезапуск сервера
$(function () {
  $(document).on("change", "#RELOADib", function () {
    numCheckArea=numCheckArea+1;
    $("#logupluad").text($("#logupluad").text()+" \n "+numCheckArea+". При нажатии выполнить Сервер srv-kna-app-03 будет перезапущен."); 
  });
});
//При нажатии на выполнить подсистема обновление
$(function () {
  $(document).on("click", "#successuPLOAD", function () {
    var now = new Date();
    var time = fixhourse(now);
    numCheckArea=numCheckArea+1;
    $("#logupluad").text($("#logupluad").text()+" \n "+numCheckArea+". Рестарт сервера srv-kna-app-03  выполнен в "+time+".");
  });
});
//При нажатии на выполнить подсистема обновление
$(function () {
  $(document).on("click", "#successuPLOAD2", function () {
    var now = new Date();
    var time = fixhourse(now);
    numCheckArea=numCheckArea+1;
    $("#logupluad").text($("#logupluad").text()+" \n "+numCheckArea+". Рестарт сервера srv-kna-app-03  выполнен в "+time+".");
  });
});