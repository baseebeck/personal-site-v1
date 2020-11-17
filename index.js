function expand() {
  let hiddenCards = document.getElementsByClassName("hiddenCard");
  let expandText = document.querySelector("#expandText");
  let downArrow = document.querySelector(".downArrow");
  let upArrow = document.querySelector(".upArrow");

  if (expandText.innerHTML === "MORE PROJECTS") {
    for (let i = 0; i < hiddenCards.length; i++) {
      hiddenCards[i].classList.remove("hidden");
    }
    expandText.innerHTML = "LESS PROJECTS";
    downArrow.classList.add("hidden");
    upArrow.classList.remove("hidden");
  } else {
    for (let i = 0; i < hiddenCards.length; i++) {
      hiddenCards[i].classList.add("hidden");
    }
    expandText.innerHTML = "MORE PROJECTS";
    downArrow.classList.remove("hidden");
    upArrow.classList.add("hidden");
  }
}

document.querySelector(".portfolioExpand").onclick = function() {
  expand();
}
