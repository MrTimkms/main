$("#nopass").hide();
$("#yespass").hide();
$("#avtdiv").hide();
//При авторизации
$(function() {
  $(document).on("click", "#avtbtn", function() {
    $("#nopass").alert();
    var login = $("#inputlogin").val();
    var pass = $("#inputPassword").val();
    var login1 = "admin";
    var login2 = "Admin";
    if (pass == login1 && login == login1) {
      $("#yespass").show();
      setTimeout(function() {
        $("#avtdiv").hide();
      }, 2000);
    } else {
      $("#nopass").show();
      window.setTimeout(function() {
        $("#nopass").hide();
      }, 5000);
    }
  });
});
$(function() {
  $(document).on("click", "#Vertikalmenu", function() {
    var nopas = $("#Vertikalmenu").prop("checked");
    if (nopas == true) {
      $("#indexbutn").addClass("btn-group-vertical");
    } else {
      $("#indexbutn").removeClass("btn-group-vertical");
    }
  });
});
