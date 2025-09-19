// Register JS logic will go here
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!fullName || !email || !password || !role) {
    alert("Please fill in all fields.");
    return;
  }

  // ✅ Simple registration simulation (replace with backend later)
  const user = { fullName, email, password, role };
  localStorage.setItem("registeredUser", JSON.stringify(user));

  alert("Registration successful! Please login.");
  window.location.href = "login.html";
});
