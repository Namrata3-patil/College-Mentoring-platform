// Student JS logic will go here
// Sidebar tab switching
function showStudentTab(tabId, event) {
  document.querySelectorAll('.student-tab').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';

  document.querySelectorAll('.sidebar .nav-link').forEach(link => {
    link.classList.remove('active');
  });
  if (event) event.target.classList.add('active');
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

// Default tab
document.addEventListener("DOMContentLoaded", () => {
  showStudentTab("studentOverview");
});
