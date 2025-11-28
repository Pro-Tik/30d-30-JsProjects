const questions= [
    {
        questions: "Which Is The Largest Animal In The World",
        answers: [
            {text: "Shark", correct: false},
            {text: "Elephant", correct: false},
            {text: "Lion", correct: false},
            {text: "Blue Whale", correct: true}
        ]
    },
    {
        questions: "Which Is The Capital Of Bangladesh",
        answers: [
            {text: "Dhaka", correct: false},
            {text: "Noakhali", correct: true},
            {text: "Barishal", correct: false},
            {text: "Gulshan", correct: false}
        ]
    },
    {
        questions: "Who Do You Want To See As the PM of BD",
        answers: [
            {text: "Salman Muqtadir", correct: false},
            {text: "Md Yunus", correct: false},
            {text: "Miraz Afridi", correct: false},
            {text: "Gulshan er Unsatisfied Aunty", correct: true}
        ]
    }

];

const questionElement= document.querySelector(".question h2");
const answersbtn= document.getElementById("answers");
const nxtbtn =document.querySelector(".submit-button button");


let crntQuestionIdx= 0;
let score = 0;

function startQuiz(){
    crntQuestionIdx= 0;
    score = 0;
    nxtbtn.innerHTML= "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestions = questions[crntQuestionIdx];
    let questionNo= crntQuestionIdx +1;
    questionElement.innerText= questionNo + "." + currentQuestions.questions;

    currentQuestions.answers.forEach(answer =>{
        const options= document.createElement("li");
        options.innerText = answer.text;
        options.classList.add("options");
        answersbtn.appendChild(options);
        if(answer.correct){
            options.dataset.correct = answer.correct;
        }
        options.addEventListener("click",selectAnswer);

    });


}


function resetState(){
    nxtbtn.style.display = "none";
    while(answersbtn.firstChild){
        answersbtn.removeChild(answersbtn.firstChild);
    }
}


function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct==="true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answersbtn.children).forEach( button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.removeEventListener("click", selectAnswer);

        
    });
    nxtbtn.style.display= "block";
}


function showscore(){
    resetState();
    questionElement.innerText = `Your Score ${score} out of ${questions.length}`;
    nxtbtn.innerText="Play Again";
    nxtbtn.style.display= "block";
}
function handlenxt(){
    crntQuestionIdx++;
    if(crntQuestionIdx<questions.length){
        showQuestion();
    }else{
        showscore();
    }
}


nxtbtn.addEventListener("click",()=>{
    if(crntQuestionIdx < questions.length){
        handlenxt();
    }
    else{
        startQuiz();
    }
})
startQuiz();