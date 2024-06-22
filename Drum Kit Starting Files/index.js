
//detecting button press

var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i = 0 ; i < numberOfButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

        // when button got pressed i check the
        // innerhtml of the button got pressed
        // and send that to makesound in order
        // to play the relevant sound

        var buttonInnerHtml =  this.innerHTML;
        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    }); 
}

//detecting keyboard press

// and if a keypress is detected instead
// so i send event.key i.e, key property of event

document.addEventListener("keydown" , function(event){
    // alert("key was pressed");
    // console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
    }
}


function buttonAnimation(currentKey){
    //access ke lie through class
    var ele = document.querySelector("." + currentKey);
    ele.classList.add("pressed");

    //set time to remove animation
    setTimeout(function(){
        ele.classList.remove("pressed");
    } ,  100);    
}