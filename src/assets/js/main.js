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