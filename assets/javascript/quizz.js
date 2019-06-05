

var resultsContainer = document.getElementById("resultsContainer");
var submitButton = document.getElementById("submit");

function showQuestion(myQuestions, quizContainer) {

    var quizContainer = document.getElementById("quizContainer");

    var output = [];
    var answers;

    var myQuestions = [{
        question: "How much wood could a woodchuck chuck, if a woodchuck could chuck wood?",
        answers: {
            a: "about a cord and a half",
            b: "three sticks if you're lucky",
            c: "woodchucks are too lazy to chuck wood",
            d: "as much wood as a woodchuck would chuck",
        correctAnswer: "d"
    },
    
        question: "where does the rain in Spain fall?",
        answers: {
            a: "mainly down the drain",
            b: "mainly on the plain",
            c: "on zombies eating brains",
            d: "on oragamiists folding cranes",
        },
        correctAnswer: "b"
    },
    {
        question: "if a tree falls in the forest, and no-one hears it, did it fall?",
        answers: {
            a: "trees are too vain to fall when there is no-one to watch",
            b: "yes, they are always drunk and fall over all the time",
            c: "only if they fall on Schrodinger's cat",
            d: "yes, they are too lazy to stand up",
        },
        correctAnswer: "c"
    }
    ];

    for (var i = 0; i < myQuestions.length; i++) {
        answers = [];
        output = [];

        for (letter in myQuestions[i].answers) {

            answers.push(
                '<label>'
                + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                + letter + ': '
                + myQuestions[i].answers[letter]
                + '</label>'
            );

        }

        output.push(
            '<div class="question">' + myQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        )
    }

    quizContainer.innerHTML = output.join('');

};

function showResults(questions, quizContainer, resultsContainer) {

    var myQuestions = [{
        question: "How much wood could a woodchuck chuck, if a woodchuck could chuck wood?",
        answers: {
            a: "about a cord and a half",
            b: "three sticks if you're lucky",
            c: "woodchucks are too lazy to chuck wood",
            d: "as much wood as a woodchuck would chuck",
        correctAnswer: "d"
    },
    
        question: "where does the rain in Spain fall?",
        answers: {
            a: "mainly down the drain",
            b: "mainly on the plain",
            c: "on zombies eating brains",
            d: "on oragamiists folding cranes",
        },
        correctAnswer: "b"
    },
    {
        question: "if a tree falls in the forest, and no-one hears it, did it fall?",
        answers: {
            a: "trees are too vain to fall when there is no-one to watch",
            b: "yes, they are always drunk and fall over all the time",
            c: "only if they fall on Schrodinger's cat",
            d: "yes, they are too lazy to stand up",
        },
        correctAnswer: "c"
    }
    ];

    var resultsContainer = document.getElementById("resultsContainer");
    var quizContainer = document.getElementById("quizContainer");

    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = "";
    var numCorrect = 0;

    for (var j = 0; j < myQuestions.length; j++) {

        userAnswer = answerContainers[j].querySelector('input[name=question' + j + ']:checked') || {}.value;
        if (userAnswer === myQuestions[j].correctAnswer) {

            numCorrect++;

            answerContainers[j].style.color = 'lightgreen';
        }
        else {
            answerContainers[j].style.color = 'red';
        }
    }

    resultsContainer.innerHTML = numCorrect + 'out of: ' + questions.length;
}

function buildQuiz() {
    showQuestion();
    showResults();
}
submitButton.onClick = function () {
    showResults(myQuestions, quizContainer, resultsContainer);
}



window.onload = buildQuiz();