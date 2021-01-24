// INTERACTIVE BIO HANDLERS

const wrap = document.querySelector("#range_wrap");
const range = wrap.querySelector(".slider");
const bubble = wrap.querySelector(".bubble");

range.addEventListener("input", () => {
  setBubble(range, bubble);
  setBio(range);
});
setBubble(range, bubble);

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 1;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  if (val > 66) {
    bubble.innerHTML = "business";
  } else if (val > 33 && val <= 66) {
    bubble.innerHTML = "balanced";
  } else {
    bubble.innerHTML = "funny";
  }
  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

function setBio(range) {
  const bio = document.querySelector("#bio");
  const val = range.value;

  if (val > 66) {
    bio.innerHTML = `<p>I am a 24 years old developer from Italy.</p>
            <p>I am proficient with <em>HTML, CSS, JS</em> and I know how to use softwares like Adobe <em>Photoshop</em> and <em>Lightroom</em>, VS Code, various <em>Linux</em> distros, <em>Git</em> and Github and, for all my notes and docs, I use Notion.</p>
            <p>I always liked coding and photography and I graduated in 2019 in Communication Science at the Alma Mater Studiorum - University of Bologna.</p>
            <p>I prefered to proceed and get a new degree in Computer Science - for which I am currently studying - and in the meanwhile I got a job at a law firm in Matera; <em>my current task</em> here is to take care of the social account and make a website of my employer.</p>
            `;
  } else if (val > 33 && val <= 66) {
    bio.innerHTML = `<p>Hi, I'm a 24 years old CS student and web developer from <em>Italy</em>, Europe! 🇪🇺 </p>
            <p>I graduated in 2019 in Communication Science at the Alma Mater Studiorum - University of Bologna. </p>
            <p>Instead of continue with a master's degree (I didn't like the ones available) I choose to take a new degree in Computer Science, for which I currently am studying.</p>
            <p>In the meanwhile I learned HTML, CSS and JS and I create websites, like this one! I love photography and I'm good with Adobe Photoshop and Lightroom.</p>
            <!-- <p>I take my privacy very seriously and I like to help others protect their as well, that's why I started my own podcast privacy-focused: INSERT_NAME_HERE.</p> -->
            `;
  } else {
    bio.innerHTML = `<p>I'm a 24 years old man from <em>Italy</em>, 🇪🇺</p>
            <p>I absolutely love putting my party in awful situations in <em>Dungeons & Dragons</em>, I enjoy reading and binge-watching my favourite TV shows.</p>
            <p>I always loved <em>Photography</em> and <em>Coding</em>. Now I study CS science at the University of Bologna and I create websites in my free time. Oh, almost forgot, <em>I shoot film!</em> (apparently I am legally obliged to say it, it's part of some kind of film shooters code).</p>
            <p>Anyway the slider says this is the funny bio, so here is a <em>joke</em>:</p>
            <p>A doctor, an architect and a programmer talk about their professions. "Mine is the oldest", says the doctor, "as everybody knows God created Eve from the rib of Adam, and that's definitely a medical operation". "Right", says the architect, "but in fact architect is even older - it's definitely an architectural project to create the world from chaos". At this point the programmer kicks back in the chair and gives friends a mysterious look. "Who, do you think, <em>created the chaos?</em>".</p>
            `;
  }
}
