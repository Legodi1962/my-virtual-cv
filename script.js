function showMessage() {
  const message = document.getElementById("message");
  message.innerText = "Welcome to my Virtual CV!";
  
  // Optional: auto-hide the message after 3 seconds
  setTimeout(() => {
    message.innerText = "";
  }, 3000);
}
