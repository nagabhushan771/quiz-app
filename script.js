const questions = [
    {
        question: "JavaScript is which side programming language.",
        opt_a: "Client",
        opt_b: "Server",
        opt_c: "Both",
        opt_d: "None",
        correct: "c"
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        opt_a: "min(x,y);",
        opt_b: "Math.min(x,y)",
        opt_c: "Math.min(xy)",
        opt_d: "min(xy);",
        correct: "b"
    },
    {
        question: "Which of the following is the correct syntax to print a page using JavaScript?",
        opt_a: "window.print();",
        opt_b: "browser.print();",
        opt_c: "navigator.print();",
        opt_d: "document.print();",
        correct: "a"
    },
    {
        question: "Output of 'console.log(1 +  '2' + '2')'",
        opt_a: "122",
        opt_b: "32",
        opt_c: "NaN2",
        opt_d: "NaN",
        correct: "a"
    },
    {
        question:"Which language runs in a web browser?",
           opt_a: "Java",
            opt_b: "C",
            opt_c: "Python",
            opt_d: "JavaScript",
            correct: "d",
        },
        {
            question: "What does CSS stand for?",
            opt_a: "Central Style Sheets",
            opt_b: "Cascading Style Sheets",
            opt_c: "Cascading Simple Sheets",
            opt_d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            question: "What does HTML stand for?",
            opt_a: "Hypertext Markup Language",
            opt_b: "Hypertext Markdown Language",
            opt_c: "Hyperloop Machine Language",
            opt_d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            opt_a: "1996",
            opt_b: "1995",
            opt_c: "1994",
            opt_d: "none of the above",
            correct: "b",
      }
    
];

const question = document.getElementById('question');
const opt_a = document.getElementById('a_text');
const opt_b = document.getElementById('b_text');
const opt_c = document.getElementById('c_text');
const opt_d = document.getElementById('d_text');
const options = document.getElementsByName('answer');
const reset = document.getElementById('reset');

options.forEach(option => option.addEventListener('click', () => {
    reset.style.display = 'inline-block';
}))

const submit = document.getElementById('submit');

var currentQuestion = 0;
var correctAnswers = 0;

function loadQuestion(){
    resetAnswer();
    submit.innerText = 'Submit';
    var currQuestion = questions[currentQuestion];
    question.innerText = currQuestion.question;
    opt_a.innerText = currQuestion.opt_a;
    opt_b.innerText = currQuestion.opt_b;
    opt_c.innerText =  currQuestion.opt_c;
    opt_d.innerText = currQuestion.opt_d;
}

submit.addEventListener('click', () =>{
    if(submit.innerText == 'Reload'){
        document.location.reload();
    } else {
        var options = document.getElementsByName('answer');
        var givenAnswer = 'e';
        options.forEach(option => {
            if(option.checked){
                givenAnswer = option.id;
            }
        })
        // console.log(givenAnswer);
        if(givenAnswer == questions[currentQuestion].correct)
            correctAnswers++;
        if(givenAnswer !== 'e')
            currentQuestion++;

        if(currentQuestion < questions.length)
            loadQuestion();
        else
            loadResult();
    }
})

function resetAnswer(){
    reset.style.display = 'none';
    options.forEach(option => {
        option.checked = false;
    })
}

function loadResult(){
    resetAnswer();
    var result = document.querySelector('.quiz-header');
    result.innerHTML = '<h2>You have scored '+ correctAnswers +'/'+ questions.length+ '</h2>';
    result.style.textAlign = 'center';
    submit.innerText = 'Reload';

}

reset.addEventListener('click', () => {
    resetAnswer();
})

loadQuestion();



