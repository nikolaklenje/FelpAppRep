
function openForm() {
  document.getElementById("myPopUp").style.display = "block";
}

function closeForm() {
  document.getElementById("myPopUp").style.display = "none";
  document.getElementById("form2").style.display = "none";
}

function openRegister() {
  document.getElementById("form2").style.display = "block";
}

function Burger() {
  x = document.getElementById("burgerPopUp");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function openForm2() {
  document.getElementById("myPopUp2").style.display = "block";
}

function closeForm2() {
  document.getElementById("myPopUp2").style.display = "none";
  document.getElementById("form3").style.display = "none";
}

function openRegister2() {
  document.getElementById("form3").style.display = "block";
}

function OpenQuestion() {
  y = document.getElementById("myPopUp3");
  if (y.style.display === "block") {
      y.style.display = "none";
  } else {
      y.style.display = "block";
  }
}
const cat = document.getElementsByClassName("dropButton");
let i = 0;
for (i = 0; i < cat.length; i++) {
  cat[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let dropMenu = this.nextElementSibling;
      if (dropMenu.style.display === "block") {
          dropMenu.style.display = "none";
      } else {
          dropMenu.style.display = "block";
      }
  });
}