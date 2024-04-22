function updateTimeStatus() {
    const now = new Date();
    const hour = now.getHours();
  
    let status = "";
    var h2Element = document.querySelector('.materials-type h2');
  
    if (hour >= 6 && hour < 12) {
      status = "morning";
      h2Element.textContent = "Morning: Natural Materials";
    } else if (hour >= 12 && hour < 17) {
      status = "afternoon";
      h2Element.textContent = "Afternoon: Metals";
    } else if (hour >= 17 && hour < 21) {
      status = "evening";
      h2Element.textContent = "Evening: Carbon-Based Materials";
    } else {
      status = "night";
      h2Element.textContent = "Night: Polymers";
    }
  
    document.body.setAttribute("data-status", status);
  }
  
  updateTimeStatus(); // Call the function to set initial status
  
  // Update status every second
  setInterval(updateTimeStatus, 1000);