document.getElementById("blend-btn").addEventListener("click", function () {

    let surnameInput = document.getElementById("surname").value;
    let fontInput = document.getElementById("font").value;
    let colorInput = document.getElementById("color").value;
    let fontSize = document.getElementById("font-size").value;

    let sequential = document.getElementById("sequential");
    let random = document.getElementById("random");
    let reverse = document.getElementById("reverse");

    let splitSurname = surnameInput.split("")
    let output = document.getElementById("output");
    //let slider = document.getElementById("boxSize");

    output.textContent = "";

    if (reverse.checked) {
        splitSurname = splitSurname.reverse();
    }

    if (sequential.checked || reverse.checked) {

        for (let i = 0; i < splitSurname.length; i++) {

            let span = document.createElement("span");
            span.textContent = splitSurname[i];

            span.style.position = "absolute";
            span.style.left = (15 * (i + 1)) + "px";
            span.style.top = (15 * (i + 1)) + "px";

            span.style.fontFamily = fontInput;
            span.style.color = colorInput;
            span.style.fontSize = fontSize + "px";

            output.appendChild(span);
        }
    }

    else if (random.checked) {

        for (let i = 0; i < splitSurname.length; i++) {

            let span = document.createElement("span");
            span.textContent = splitSurname[i];

            span.style.position = "absolute";
            span.style.left = Math.floor(Math.random() * 300) + "px";
            span.style.top = Math.floor(Math.random() * 100) + "px";

            span.style.fontFamily = fontInput;
            span.style.color = colorInput;
            span.style.fontSize = fontSize + "px";

            output.appendChild(span);
        }
    }

    /*slider.addEventListener("input", function () {
        let width = slider.value;

        output.style.width = width + "px";

        output.style.height = (width / 3) + "px";
    });*/

    document.getElementById("boxSize").addEventListener("input", function () {
        let width = document.getElementById("boxSize").value;

        output.style.width = width + "px";

        output.style.height = (width / 3) + "px"
    })

    document.getElementById("surname").value = "";

})