document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    // Redirect to main e-commerce site
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password. Try again!");
  }
});