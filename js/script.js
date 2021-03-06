// FOOTER GENERATOR

function init_footer() {
  const body = document.querySelector("body");
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="centerquote">
      <blockquote class="quote">
        <h3>"Always try to be nice. Never fail to be kind."</h3>
        <h4>- The 12th Doctor</h4>
      </blockquote>
    </div>
    <div class="social-links">
      <a href="https://github.com/andreaiaia">
        <img src="img\\icons\\github.webp" alt="My Github Page">
      </a>
      <a href="https://linkedin.com/in/andreaiaia">
        <img src="img\\icons\\linkedin.webp" alt="My LinkedIn Page">
      </a>
      <a href="mailto:andreaiaia@pm.me">
        <img src="img\\icons\\mail.webp" alt="Send me an Email">
      </a>
      <a href="https://t.me/andreaiaia">
        <img src="img\\icons\\telegram.webp" alt="Text me on Telegram">
      </a>
      <a href="https://instagram.com/andreaiaia">
        <img src="img\\icons\\instagram.webp" alt="My Instagram Page">
      </a>
    </div>
    <div class="credits">
      Created by me in plain HTML, CSS, JS.
      <a href="https://github.com/andreaiaia/andreabianchi.me">See the source code.</a>
      <div class="hr"></div>
        Special thanks to:
        <ul>
          <li><a href="https://illlustrations.co/">@realvjy</a>, <a href="https://delesign.com/free-designs/graphics/">delesign.com</a> and <a href="https://lukaszadam.com/illustrations">lukaszadam</a> for the illustrations.</li>
          <li><a href="https://css.gg">css.gg</a> and <a href="https://delesign.com/free-designs/graphics/">delesign.com</a> for the icons.</li>
        </ul>
    </div>
  `;
  body.appendChild(footer);
}

init_footer();

// NAV SHRINK ANIMATION

window.onscroll = function() {
  if (document.documentElement.clientWidth > 320 && document.documentElement.clientWidth < 768) {
    scrollFunction();
  }
};

function scrollFunction() {
  const title = document.querySelector("#title");
  const head = document.querySelector("HEADER");
  const navp = document.querySelectorAll(".navp");

  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    title.style.fontSize = "1.7rem";
    title.style.marginTop = "1.1rem";
    title.style.marginBottom = ".6rem";

    navp.forEach(element => {
      element.style.opacity = "0";
    });
    navp.forEach(element => {
      element.style.display = "none";      
    });
  } else {
    title.style.fontSize = "2.2rem";
    title.style.marginTop = "1.5rem";
    title.style.marginBottom = "1rem";

    navp.forEach(element => {
      element.style.opacity = "1";
    });
    navp.forEach(element => {
      element.style.display = "block";      
    });
  }
}