window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const title = document.querySelector("#title");
  const head = document.querySelector("HEADER");
  const navp = document.querySelectorAll(".navp");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    head.style.height = "13%";

    title.style.fontSize = "1.7rem";
    title.style.marginTop = "1.1rem";
    title.style.marginBottom = ".6rem";

    navp.forEach(element => {
      element.style.opacity = "0";
      // element.style.display = "none";      
    });
    navp.forEach(element => {
      element.style.display = "none";      
    });
  } else {
    head.style.height = "20%";

    title.style.fontSize = "2.1rem";
    title.style.marginTop = "1.8rem";
    title.style.marginBottom = "1rem";

    navp.forEach(element => {
      element.style.opacity = "1";
    });
    navp.forEach(element => {
      element.style.display = "block";      
    });
  }
}