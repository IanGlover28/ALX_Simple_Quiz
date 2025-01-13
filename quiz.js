function checkAnswer() {
    const correctAnswer = "4"; // Correct answer for the quiz question
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedbackElement = document.getElementById('feedback');

    if (!selectedAnswer) {
        feedbackElement.textContent = "Please select an answer.";
        return; // Exit the function if no answer is selected
    }

    // Check if the selected answer is correct
    if (selectedAnswer.value === correctAnswer) {
        feedbackElement.textContent = "Correct! 2 + 2 equals 4.";
    } else {
        feedbackElement.textContent = "Incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);