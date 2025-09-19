// Dashboard JS logic will go here
// Redirect to login with role info
function redirectToLogin(role) {
  // Save selected role in localStorage
  localStorage.setItem("selectedRole", role);
  // Move to login page
  window.location.href = "login.html";
}
