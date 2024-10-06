// document.getElementById("submit-answer").addEventListener("click", checkAnswer);

// // Function to handle form submission
// function checkAnswer() {
//   // Function body
//   const correctAnswer = "4";
//   const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
//   if (selectedAnswer == undefined) {
//     alert("Please enter an answer!");
//     return;
//   }
//   const userAnswer = selectedAnswer.value;
//   const feedback = document.getElementById("feedback");
//   if (userAnswer === correctAnswer) {
//     feedback.textContent = "Correct! Well done.";
//     feedback.style.color = "green";
//   } else {
//     feedback.textContent = "That's incorrect. Try again";
//     feedback.style.color = "red";
//   }
//   console.log(userAnswer);
// }

function checkAnswer() {
  correctAnswer = "4";
  userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    // feedback.style.color = "green";
  } else {
    feedback.textContent = "That's incorrect. Try again";
    // feedback.style.color = "red";
  }
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);

// document
//   .getElementById("submit-answer")
//   .addEventListener("click", checkAnswer);
