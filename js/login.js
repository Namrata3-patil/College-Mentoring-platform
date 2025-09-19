// Login JS logic will go here
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = localStorage.getItem("selectedRole"); // from dashboard.js

  if (email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  // ✅ Simple login simulation (replace with real authentication later)
  if (email && password) {
    switch (role) {
      case "student":
        window.location.href = "student.html";
        break;
      case "mentor":
        window.location.href = "mentor.html";
        break;
      case "hod":
        window.location.href = "hod.html";
        break;
      case "principal":
        window.location.href = "principal.html";
        break;
      default:
        alert("Invalid role. Please go back to dashboard.");
        window.location.href = "dashboard.html";
    }
  } else {
    alert("Invalid credentials. Try again.");
  }
});
