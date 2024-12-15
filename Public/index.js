function addSound(buttonId, soundId, key){
    const button = document.getElementById(buttonId);
    const sound = document.getElementById(soundId);

    button.addEventListener("click", function(){
        sound.play();
    });

    document.addEventListener("keypress", function (event) {
        if (event.key.toLowerCase() === key.toLowerCase()) {
            sound.currentTime = 0; // Reset sound to the beginning
            sound.play();

            // Optional: Add a visual effect to the button
            button.classList.add("active");
            setTimeout(() => button.classList.remove("active"), 100);
        }
    });
}

addSound("btn1", "sound1", "a");
addSound("btn2", "sound2", "s");
addSound("btn3", "sound3", "d");
addSound("btn4", "sound4", "f");
addSound("btn5", "sound5", "j");
addSound("btn6", "sound6", "k");
addSound("btn7", "sound7", "l");