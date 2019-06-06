
window.onload = function () {

    var quizContainer = document.getElementById("quizContainer");
    var resultsContainer = document.getElementById("resultsContainer");
    var submitButton = document.getElementById("submit");
    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = "";
    var numCorrect = 0;

    var output = [];
    var theAnswers=[];

    var myQuestions = [
        {
            question: "How much wood could a woodchuck chuck, if a woodchuck could chuck wood?",
            answers: [
                "about a cord and a half",
                "three sticks if you're lucky",
                "woodchucks are too lazy to chuck wood",
                "as much wood as a woodchuck would chuck",
            ],
            correctAnswer: 3
        },
        {
            question: "where does the rain in Spain fall?",
            answers: [
                "mainly down the drain",
                "mainly on the plain",
                "on zombies eating brains",
                "on oragamiists folding cranes",
            ],
            correctAnswer: 1
        },
        {
            question: "if a tree falls in the forest, and no-one hears it, did it fall?",
            answers: [
                "trees are too vain to fall when there is no-one to watch",
                "yes, they are always drunk and fall over all the time",
                "only if they fall on Schrodinger's cat",
                "yes, they are too lazy to stand up",
            ],
            correctAnswer: 2
        }
    ];

    for (var i = 0; i < myQuestions.length; i++) {


        theAnswers.push(
            '<label>'
            + '<input type="radio">'
            + myQuestions[i].answers +
            '</label>'
        )

        output.push(
            '<div class="question">' + myQuestions[i].question + '</div>'
            + '<div class="answers">' + theAnswers.join('') + '</div>'
        )


        quizContainer.innerHTML = output.join('');
    }

    submitButton.onClick = function () {

        userAnswer = answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}.value;

        if (userAnswer === myQuestions[i].correctAnswer) {

            numCorrect++;

            answerContainers[i].style.color = 'lightgreen';
        }
        else {
            answerContainers[i].style.color = 'red';
        }

        resultsContainer.innerHTML = numCorrect + 'out of: ' + questions.length;
    }



};
