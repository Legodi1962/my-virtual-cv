function showMessage() {
  const el = document.getElementById("message");
  el.innerText = "Welcome to my Virtual CV!";
  setTimeout(() => el.innerText = "", 3000);
}
