
window.onload = function () {

    var quizContainer = document.getElementById("quizContainer");
    var resultsContainer = document.getElementById("resultsContainer");
    var submitButton = document.getElementById("submit");
    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = "";
    var numCorrect = 0;

    var output = [];
    var answers = [];

    var myQuestions = [
        {
            question: "How much wood could a woodchuck chuck, if a woodchuck could chuck wood?",
            answers: {
                a: "about a cord and a half",
                b: "three sticks if you're lucky",
                c: "woodchucks are too lazy to chuck wood", 
                d: "as much wood as a woodchuck would chuck",
            },
            correctAnswer: "d"
        },
        {
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


        for (letter in myQuestions[i].answers) {

            answers.push(
                '<label>'
                + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                + letter + ': '
                + myQuestions[i].answers[letter]
                + '</label>'
            )
        }
    


    output.push(
        '<div class="question">' + myQuestions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>')
    }    

    quizContainer.innerHTML = output.join('');


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


