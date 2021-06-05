const input = require('readline-sync');
let candidateName = '';
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = [
                'Who was the first American woman in space? ',
                'True or false: 5 kilometer == 5000 meters? ',
                '(5 + 3)/2 * 10 = ? ',
                'Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ',
                'What is the minimum crew size for the ISS? '
];
let correctAnswers = [
                'Sally Ride',
                'true',
                '40',
                'Trajectory',
                '3'
];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question('What\'s your name? ');
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++){
    let ans = input.question(questions[i]);
    candidateAnswers.push(ans);
  }

}

function gradeQuiz(candidateAnswers) {
  let correctNum = 0;
  console.log('\n' + `Candidate Name: ${candidateName}`);
  for (let i = 0; i < correctAnswers.length; i++) {
    console.log(i + 1 + `) ${questions[i]}
Your Answer: ${candidateAnswers[i]}.` + '\n' + 
`Correct Answer: ${correctAnswers[i]} \n`);
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
    correctNum++;
    }
  }
  let percentage = correctNum / 5 * 100
  console.log(`>>> Overall Grade: ${percentage}% (${correctNum} of 5 responses correct) <<<`);
  if (percentage >= 80) {
    console.log('>>> Status: PASSED <<<');
  } else {
    console.log('>>> Status: FAILED <<<')
  }
}

function runProgram() {
  askForName();
  console.log("Howdy, " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};