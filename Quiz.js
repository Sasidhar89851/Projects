const quizData =[
    {
        question: "Fastest snake in the world?",
        a: "King cobra",
        b: "Pit viper",
        c: "Black mamba",
        d: "Green mamba",
        correctanswer: "c",
    },
    {
        question: "World's ferocious Crocodile?",
        a: "Alligator",
        b: "Salt crocodile",
        c: "Fresh water crocodile",
        d: "Nile crocodile",
        correctanswer: "d",
    },
    {
        question: "Biggest country in the world?",
        a: "China",
        b: "Russia",
        c: "America",
        d: "Australia",
        correctanswer: "b",
    },
    {
        question: "Fastest animal on land?",
        a: "Tiger",
        b: "Cheetah",
        c: "Lion",
        d: "Leopard",
        correctanswer: "b",
    },
    {
        question: "Biggest bird in the World",
        a: "Ostrich",
        b: "Emu",
        c: "Golden Eagle",
        d: "Cassowaries",
        correctanswer: "a",
    }
];
const quiz =document.getElementById("quiz");
const resultEle =document.getElementById("result");


const answerEls= document.querySelectorAll('.answer');
const labelEls= document.querySelectorAll('.op_label');
const questionEle= document.getElementById("question");
const a_text =document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text =document.getElementById("d_text");
const previousBtn =document.getElementById("previous");
const nextBtn =document.getElementById("next");
const submitBtn =document.getElementById("submit");
const scoreEle =document.getElementById("score");

let currentQtn=0;
let answered=0;

let userSelected={}

loadQuiz();

function loadQuiz()
{

    questionEle.innerText=quizData[currentQtn].question;
    a_text.innerText=quizData[currentQtn].a;
    b_text.innerText=quizData[currentQtn].b;
    c_text.innerText=quizData[currentQtn].c;
    d_text.innerText=quizData[currentQtn].d;
    deSelectAnswer()

    if(userSelected[currentQtn]){
        let selected= userSelected[currentQtn];
        document.getElementById(selected).checked=true

    }
    if(currentQtn==quizData.length-1){
        nextBtn.style.display="none";
        submitBtn.style.display="block";
    }
}

function deSelectAnswer(){
    answerEls.forEach(
        ((answerEls)=>{
            answerEls.checked = false

        })
    )
}     

nextBtn.addEventListener(
    'click',() =>
    {
        let answer = getselected();
        if (answer){
            if (answer ==quizData[currentQtn].correctanswer){
                answered++
            }
            currentQtn++;
            if(currentQtn <  quizData.length)
            {
                loadQuiz()
            }
        }
    }
)

previousBtn.addEventListener(
    'click',()=>{
        if(currentQtn>0)
        {
            currentQtn--;
            loadQuiz()
        }
    }
)

submitBtn.addEventListener(
    'click',()=>{
        if(getselected()){
            let answer=getselected();
            if(answer)
            {
                if(answer==quizData[currentQtn].correctanswer)
                {
                    answered++;
                }
            }
            quiz.style.display ="none";
            resultEle.style.display ="block";
            scoreEle.innerText = +answered + "/" + quizData.length ;
    
        }
    }
)

function getselected()
{
    let answer;
    answerEls.forEach(
        (answerEls)=>
        {
            if(answerEls.checked){
                answer =answerEls.id
                 userSelected[currentQtn]=answer
            }
        }
    )
    return answer;
}
    