$(document).on("click", ".nav-tabs a", function (e) {
  e.preventDefault();
  $(this).tab("show");
});

//effect input when focus

$(document).on("focus", "#form_login input", function () {
  $(this).prev("label").addClass("focus");
});

$(document).on("blur", "#form_login input", function () {
  $(this).prev("label").removeClass("focus");
});

//show control table
$(document).on("click", "#show_control", function (e) {
  e.preventDefault();
  $(this).closest("#navbar_detail").next("#control_content").addClass('open')
});

$(document).on("click", "#btn_control", function () {
  $(this).closest("#control_content").removeClass('open')
});

//show notification
$(document).on("click", "#show_notification", function (e) {
  e.preventDefault();
  $(this).closest("#notification_parent").children("#notification_content").slideToggle();
});

$(document).on("click", "#support_btn", function () {
  $(this).next("#support_content").toggleClass('open');
});

$(document).on("click", "#forgot_pw", function (e) {
  e.preventDefault();
  $(this).closest("#form_login").hide();
  $(this).closest("#form_login").next("#form_forgotpw").show();

});

$(document).on("click", "#return_login", function (e) {
  e.preventDefault();
  $(this).closest("#form_forgotpw").hide();
  $(this).closest("#form_forgotpw").prev("#form_login").show();
});



