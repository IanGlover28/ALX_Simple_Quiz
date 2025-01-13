// Function to check the user's answer
function checkAnswer() {
    const correctAnswer = "4"; // Correct answer for the quiz question

    // Retrieve the user's selected answer
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedbackElement = document.getElementById('feedback');

    // Check if an answer was selected
    if (!selectedAnswer) {
        feedbackElement.textContent = "Please select an answer."; // Provide feedback if no answer is selected
        return; // Exit the function if no answer is selected
    }

    // Store the user's selected answer
    const userAnswer = selectedAnswer.value; // Retrieve the value of the selected radio button

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // Provide feedback for the correct answer
        feedbackElement.textContent = "Correct! 2 + 2 equals 4.";
    } else {
        // Provide feedback for the incorrect answer
        feedbackElement.textContent = "Incorrect. Try again!";
    }
}

// Check for the retrieval of the "submit-answer" button
const submitButton = document.getElementById('submit-answer');

// Add event listener to the "Submit Answer" button
if (submitButton) {
    submitButton.addEventListener('click', checkAnswer);
} else {
    console.error("Submit button not found."); // Log an error if the button is not found
}