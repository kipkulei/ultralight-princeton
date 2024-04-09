// Function to calculate time left until the library opens or closes
function calculateTimeLeft() {
    const now = new Date();
    const openingTime = new Date(now);
    openingTime.setHours(8, 30, 0); // Adjust opening time as needed (e.g., 9 AM)
  
    const closingTime = new Date(now);
    closingTime.setHours(23, 59, 59); // Adjust closing time as needed (e.g., 6 PM)
  
    let timeLeft;
  
    if (now < openingTime) {
      timeLeft = openingTime - now; // Library is currently closed, calculate time till opening
      return { timeLeft: timeLeft, isOpen: false };
    } else if (now < closingTime) {
      timeLeft = closingTime - now; // Library is currently open, calculate time till closing
      return { timeLeft: timeLeft, isOpen: true };
    } else {
      openingTime.setDate(openingTime.getDate() + 1); // Library has closed for the day, calculate time till next opening
      timeLeft = openingTime - now;
      return { timeLeft: timeLeft, isOpen: false };
    }
  }
  
  // Function to update the countdown timer and progress bar
  function updateCountdown() {
    const { timeLeft, isOpen } = calculateTimeLeft();
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    const libraryStatusElement = document.getElementById("library-status");
    if (isOpen) {
      libraryStatusElement.innerHTML = `Library closes in ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    } else {
      libraryStatusElement.innerHTML = `Library opens in ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    }
  
    let progress;
    const totalOpeningHours = 9; // Total hours the library is open
    if (isOpen) {
      progress = ((timeLeft) / (totalOpeningHours * 60 * 60 * 1000)) * 100; // Calculate progress based on time left until closing
    } else {
      progress = 100; // Library is closed, progress bar is full
    }
    document.getElementById("progress-bar-fill").style.width = progress + "%";
  
    if (timeLeft > 0) {
      setTimeout(updateCountdown, 1000); // Update every second
    }
  }
  
  // Initial call to start the countdown
  updateCountdown();
  