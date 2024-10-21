function getvalue() {
    const c = document.getElementById("inputc").value;
    console.log(c);

    if (isNaN(c) || c <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    const mainDiv = document.getElementsByClassName("maindiv")[0];
    mainDiv.innerHTML = '<h1>Enter the number of bulbs</h1>';

    for (let i = 0; i < c; i++) {
        let img = document.createElement("img");
        img.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
        img.alt = "Light Bulb";
        img.style.width = "50px";
        img.style.margin = "5px";
        img.addEventListener('click', function() {
            this.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
        });

        mainDiv.appendChild(img);
    }
}
