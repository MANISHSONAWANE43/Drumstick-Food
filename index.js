function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        mode.src = "sun.png";
    }
    else{
        mode.src = "moon.png";
    }
}
