
      function openForm() {
        document.getElementById("myPopUp").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myPopUp").style.display = "none";
        document.getElementById("form2").style.display = "none";
      }
      
      function openRegister(){
        document.getElementById("form2").style.display= "block";
      }

      function Burger(){
       x = document.getElementById("burgerPopUp");
       if (x.style.display==="block"){
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
      function openRegister2(){
        document.getElementById("form3").style.display= "block";
      }
    