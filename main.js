let resultButton = document.querySelector("#check"); 

let radioButtons = document.querySelectorAll('[type="radio"]'); // Radio buttons.
let checkboxButtons = document.querySelectorAll('[type="checkbox"]'); //Checkbox button.

let container = document.querySelector("#result"); // Element för att skriva ut resultat.

let changeColorButton = document.querySelector("#changeColor");
let body = document.querySelector("body");


// Ändrar bakgrunds-och textfärg.
changeColorButton.addEventListener("click", () => {

    if (body.style.background === "teal") {
        body.style.background = "lightblue";
        body.style.color = "darkslategrey";
        document.getElementById("changeColor").innerHTML = "Dark mode";
    } else {
        body.style.background = "teal";
        body.style.color = "lightgrey";
        document.getElementById("changeColor").innerHTML = "Light mode";
    }
});

let totalCorrectAmount = 10; 

resultButton.addEventListener("click", () => {
    container.innerHTML = "";
    let pointsRadio = 0;
    let pointsCheckbox = 0;

    radioButtons.forEach(btn => {
        if (btn.checked && btn.value === "correct") {
            pointsRadio++;
        }
    });


    
    checkboxButtons.forEach(button => {
        let correctAnswer1 = document.querySelector("input[name='answer1']:checked");
        let correctAnswer2 = document.querySelector("input[name='answer2']:checked");
        let wrongAnswer1 = document.querySelector("input[name='answer3']:checked");
        let wrongAnswer2 = document.querySelector("input[name='answer4']:checked");

        if((correctAnswer1 && correctAnswer2) && (!wrongAnswer1 && !wrongAnswer2)) {
            console.log(correctAnswer1);
            pointsCheckbox = 1;
        }
    })

    //Plusar ihop radiobutton och checkbox poäng.
    let totalPoints = pointsRadio + pointsCheckbox;


    // Räknar ut hur många rutor som är ifyllda. 
    let buttonsId = document.querySelectorAll("input"); 
    let arr = [];
    for(let i = 0; i < buttonsId.length; i++){
        let buttonsChecked = buttonsId[i].checked;
        let count = arr.push(buttonsChecked);
        console.log("buttons checked: " + buttonsChecked);
    }
    let boxesChecked = arr.filter(Boolean).length;
    console.log("Array: " + arr);
    console.log("Boxes checked: " + boxesChecked);
    



    // Skriver ut poängen i DOMen och ser till att alla frågor är svarade på.
    if(boxesChecked < 10){
        alert("checka i alla rutor");
    } else if (totalPoints > 7){
        let result = document.createElement("p");
        result.innerText = `Du fick ${totalPoints} rätt`;
        result.style.color = "green";
        container.appendChild(result);
    } else if (totalPoints > totalCorrectAmount/2) {
        let result = document.createElement("p");
        result.innerText = `Du fick ${totalPoints} rätt`;
        result.style.color = "orange";
        container.appendChild(result);
    } else {
        let result = document.createElement("p");
        result.innerText = `Du fick ${totalPoints} rätt`; 
        container.appendChild(result);
    }
});
