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
  const business = document.querySelector("#business");
  const balanced = document.querySelector("#balanced");
  const funny = document.querySelector("#funny");
  // const pic = document.querySelector("#proPic");
  const val = range.value;

  if (val > 66) { // business
    // pic.src = "img/profile/business.jpg";
    funny.style.display = "none";
    balanced.style.display = "none";
    business.style.display = "block";
  } else if (val > 33 && val <= 66) { // balanced
    // pic.src = "img/profile/balanced.jpg";
    business.style.display = "none";
    funny.style.display = "none";
    balanced.style.display = "block";
  } else {  // funny
    // pic.src = "img/profile/funny.jpg";
    business.style.display = "none";
    balanced.style.display = "none";
    funny.style.display = "block";
  }
}

// 🇪🇺