let open = $("#open");
let header = $(".header-block");
let h = $("header");
let nav = $("#nav");
let menu = $("#menu");
open.on("click", () => {
  header.attr("style", "display:none;");
  nav.attr("style", "display:none;");
  menu.attr("style", "display:flex;");
  menu.addClass("bg");
});
