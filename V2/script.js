window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const title = document.querySelector("#title");
  const head = document.querySelector("HEADER");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    head.style.height = "16%";

    title.style.fontSize = "1.7rem";
    title.style.marginTop = "1.1rem";
    title.style.marginBottom = ".6rem";
  } else {
    head.style.height = "20%";

    title.style.fontSize = "2.1rem";
    title.style.marginTop = "1.8rem";
    title.style.marginBottom = "1rem";
  }
}