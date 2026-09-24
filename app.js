let score = 0; //registro de preguntas correctas
let total = 0;
let currentQuestion; //el objeto, instancia actual de l;a pregunta 
let gameActive = true; //sirve como switche, cuando estre en true el juego sigue, cuando 




//elementos del dom
let question = document.querySelector('.question');
let buttons = document.querySelector('.answer-button');
let results = document.querySelector('.result');


function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) = 1

}

function operatorSelect(){
    const signos = ['+','-','x','/'];
    return signos[randomInt(0,3)]
} // esto es para seleccionar lo que va a salir, aleatoriamente, podemos hacerlo con las preguntas 

console.log(randomInt(1,5));

// clase base

class Question {
    constructor(){
        let numberOne = randomInt(1,30);
        let numberTwo = randomInt(1,30);
        let operator = operatorSelect();

        this.questionName = `${numberOne} ${operator} ${numberTwo}`

        if (operator === '+'){this.correctAnswer = numberOne + numberTwo}
        else if (operator === '-'){this.correctAnswer = numberOne - numberTwo}
        else if (operator === 'x'){this.correctAnswer = numberOne * numberTwo}
        else if (operator === '/'){this.correctAnswer = Math.round(numberOne / numberTwo)}

        const choices = [this.correctAnswer];
        while (choices.length < 5) {

            let wrongAnswer = randomInt(randomInt(this.correctAnswer -10, this.correctAnswer +10));
            if(!choices.includes(wrongAnswer)){
                choices.push(wrongAnswer)
            }

        }

    this.answerArray = choices;
    this.shuffleArray(this.answerArray);

    }

    shuffleArray(array){
        for (let i = array.length -1; i > 0; i--){
            const j = randomInt(0, i);
            [array[i], array[j]] = [array[j], array[i]]
        }
    }

    displayQuestion(){
        question.textContent = this.questionName;
        for (let i = 0; i < this.answerArray.length; i++){
            buttons[i].textContent = this.answerArray[i];
        }

    }
}

//logicaaaaa

currentQuestion = new Question();
currentQuestion.displayQuestion();
setTimeout (()=> {
    gameActive = false;
    //displayResult() esta es la funcion cuando se cacaba me imagino que es la estadistica del usuario, con display none creo
}, 15000)

//manejo y procesamiento de eventos
buttons.forEach(btn => {
    btn.addEventListener('.click', () =>{
        if (!gameActive) return;

        total++;

        const correct = currentQuestion.correctAnswer === Number(btn.textContent);

        if (correct) {
            score++;
            console.log('Correcto!')
            btn.style.backgroundColor = 'green';
        } else {
            console.log('incoorrectooo')
            btn.style.backgroundColor = 'red';

        }

        setTimeout(() =>){
            
        }
        }
    })
});