// PORTFOLIO EXPAND
function expand() {
  let hiddenCards = document.querySelector(".hiddenCards");
  let expandText = document.querySelector("#expandText");
  let downArrow = document.querySelector(".downArrow");
  let upArrow = document.querySelector(".upArrow");

  if (expandText.innerHTML === "MORE PROJECTS") {
    // for (let i = 0; i < hiddenCards.length; i++) {
    //   hiddenCards[i].classList.remove("hidden");
    // }
    expandText.innerHTML = "LESS PROJECTS";
    downArrow.classList.add("hidden");
    upArrow.classList.remove("hidden");
    hiddenCards.classList.remove("hidden");
  } else {
    // for (let i = 0; i < hiddenCards.length; i++) {
    //   hiddenCards[i].classList.add("hidden");
    // }
    expandText.innerHTML = "MORE PROJECTS";
    downArrow.classList.remove("hidden");
    upArrow.classList.add("hidden");
    hiddenCards.classList.add("hidden");
  }
}

document.querySelector(".portfolioExpand").onclick = function() {
  expand();
}






// EXPAND/CONTRACT REVEAL SMOOTH ANIMATION

// function hiddenCards() {
//     let hiddenCards = document.querySelector('.hiddenCards');
//     if (hiddenCards.clientHeight) {
//       hiddenCards.style.height = 0;
//     } else {
//
//       hiddenCards.style.height = hiddenCards.scrollHeight + "px";
//     }
//
//     let moreBtn = document.querySelector("#more-button");
//     if (moreBtn.value == "LESS PROJECTS") {
//
//     }
//
// document.getElementById("more-button").value=document.getElementById("more-button").value=='MORE PROJECTS'?'LESS PROJECTS':'MORE PROJECTS';
// }
