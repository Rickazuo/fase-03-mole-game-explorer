
    setInterval(function() {
    let randomNumber = Math.floor(Math.random() * 12) + 1;
       let hole = document.getElementById(`hole${randomNumber}`)
       hole.classList.add("hole-mole")
       setTimeout(function(){

           let removeVariable = hole
           removeVariable.classList.remove("hole-mole")
       },5000)

       console.log("oi")
      }, 2000);

  