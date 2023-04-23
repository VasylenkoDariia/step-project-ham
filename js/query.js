//----Work---

function loadImage(categoryName, maxItems = 12) {
  $(".example-item").addClass("invisible");

  let classNameString = ".example-item." + categoryName;
  $(classNameString).slice(0, maxItems).removeClass("invisible");

  if ($(classNameString).length > maxItems) {
    $("#load-filter").removeClass("invisible");
  } else {
    $("#load-filter").addClass("invisible");
  }
}

loadImage("all");

$(function () {
  $(".filter-example li").on("click", function () {

    $(".filter-example li").removeClass("active");
    $(this).addClass("active");

    let category = $(this).data("filter");
    loadImage(category);
  });

  $("#load-filter").on("click", function () {
    $(".example-item").removeClass("invisible");
    $(this).addClass("invisible");
  });
});
