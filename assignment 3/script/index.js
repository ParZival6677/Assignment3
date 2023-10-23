// To-Do List
const taskList = document.getElementById("taskList");

// Add a task to the to-do list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
              <button class="btn btn-success btn-sm mr-2" onclick="completeTask(this)">✓</button>
              <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">✖</button>
            </div>
            `;
        taskList.appendChild(li);

        taskInput.value = ""; // Clear the input field
    }
}

// Delete a task from the list
function deleteTask(element) {
    const li = element.parentElement.parentElement;
    taskList.removeChild(li);
}

// Mark a task as complete or incomplete
function completeTask(element) {
    const taskText = element.parentElement.parentElement.querySelector("span");
    taskText.classList.toggle("completed");
}

// Form Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    let isValid = true;

    if (name.trim() === "") {
        alert("Name is required");
        isValid = false;
    }

    if (email.trim() === "") {
        alert("Email is required");
        isValid = false;
    } else if (!validateEmail(email)) {
        alert("Invalid email format");
        isValid = false;
    }

    if (message.trim() === "") {
        alert("Message is required");
        isValid = false;
    }

    if (isValid) {
        alert("Thank you for submitting the form!");
    }

    return isValid;
}

// Validate email format using a regular expression
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}


// Animated Countdown Timer
const durationInput = document.getElementById("duration");
const startButton = document.getElementById("startButton");
const timer = document.getElementById("timer");
let countdownInterval;

startButton.addEventListener("click", function () {
    const duration = parseInt(durationInput.value);

    if (duration > 0) {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        timer.classList.remove("hidden");
        startCountdown(duration);
    }
});

// Start the countdown timer
function startCountdown(duration) {
    let remainingTime = duration;
    timer.innerText = remainingTime;

    countdownInterval = setInterval(function () {
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(countdownInterval);
            timer.innerText = "Time's up!";
        } else {
            timer.innerText = remainingTime;
        }
    }, 1000);
}
