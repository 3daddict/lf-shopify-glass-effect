$(document).ready(InitApp);

let crackSize = 100;
let crackRadius = 300;

function InitApp() {
  glassCrack();
  if ( $(window).width() > 768) {      
    document.getElementById("target-img").src="./assets/img/glassTexture.png";
    crackSize = 100;
    crackRadius = 300;
  } 
  else {
    document.getElementById("target-img").src="./assets/img/glassTextureMd.png";
    crackSize = 40;
    crackRadius = 100;
  }
}

function glassCrack() {
  let crackCount = 0;
  let preLoad = document.getElementsByClassName("preload")[0];
  preLoad.style.display = "none";

  function createCrack(top, left) {
    let className = "crack" + crackCount;
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", className + " crack-container");
    crackCount++;

    let innerCrack = document.createElement("div");
    if (crackCount === 1) {
      innerCrack.setAttribute("class", "crack");
    }
    if (crackCount === 2) {
      innerCrack.setAttribute("class", "crack-2");
    }
    if (crackCount === 3) {
      $(".crack-container").remove();
      explode();
      $('.title-container').remove();
      $(".explode-wrapper").fadeOut(2000);
	}
	if (crackCount === 4) {
		return;
	}
    newDiv.appendChild(innerCrack);
    document.getElementById("target").appendChild(newDiv);
    newDiv.style.top = top + "px";
    newDiv.style.left = left + "px";
  }

  window.addEventListener("click", function(e) {
    createCrack(e.pageY, e.pageX);
  });

}

/* Function to explode the glassTexture.png */
function explode() {
  $("#target-img").explodeRestore();
  $("#target-img").explode({
    maxWidth: 12,
    minWidth: crackSize,
    radius: crackRadius,
    release: false,
    recycle: false,
    explodeTime: 30,
    canvas: true,
    maxAngle: 360,
    gravity: true
  });
}
