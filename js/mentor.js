// Mentor JS logic will go here
// Sidebar tab switching
function showMentorTab(tabId, event) {
  document.querySelectorAll('.mentor-tab').forEach(tab => {
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
  showMentorTab("mentorOverview");
});
// Add Student Form Submission
document.getElementById("addStudentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const studentId = document.getElementById("studentId").value;
  const department = document.getElementById("department").value;
  const phone = document.getElementById("phone").value;
  const semester = document.getElementById("semester").value;
  
  // Here you would typically send this data to a server
  console.log("New student data:", {fullName, email, studentId, department, phone, semester});
  
  alert(`Student ${fullName} added successfully!`);
  this.reset();
});

// Student Search Functionality
const studentSearch = document.getElementById("studentSearch");
const searchResults = document.getElementById("searchResults");

// Sample student data for search
const allStudents = [
  { id: 1, name: "John Doe", department: "Computer Science", email: "john@example.com" },
  { id: 2, name: "Jane Smith", department: "Electronics", email: "jane@example.com" },
  { id: 3, name: "Michael Brown", department: "Mechanical", email: "michael@example.com" },
  { id: 4, name: "Sarah Johnson", department: "Computer Science", email: "sarah@example.com" },
  { id: 5, name: "Robert Wilson", department: "Civil", email: "robert@example.com" }
];

studentSearch.addEventListener("input", function() {
  const searchTerm = this.value.toLowerCase();
  
  // Clear previous results
  searchResults.innerHTML = "";
  
  if (searchTerm.length < 2) {
    searchResults.style.display = "none";
    return;
  }
  
  // Filter students based on search term
  const filteredStudents = allStudents.filter(student => 
    student.name.toLowerCase().includes(searchTerm) || 
    student.email.toLowerCase().includes(searchTerm) ||
    student.department.toLowerCase().includes(searchTerm)
  );
  
  if (filteredStudents.length > 0) {
    filteredStudents.forEach(student => {
      const resultItem = document.createElement("div");
      resultItem.className = "search-result-item";
      resultItem.innerHTML = `
        <strong>${student.name}</strong> - ${student.department}<br>
        <small>${student.email}</small>
      `;
      resultItem.addEventListener("click", () => {
        studentSearch.value = student.name;
        searchResults.style.display = "none";
        
        // Here you would typically add the student to the mentor's list
        alert(`Student ${student.name} added to your list!`);
      });
      searchResults.appendChild(resultItem);
    });
    searchResults.style.display = "block";
  } else {
    const noResults = document.createElement("div");
    noResults.className = "search-result-item";
    noResults.textContent = "No students found";
    searchResults.appendChild(noResults);
    searchResults.style.display = "block";
  }
});

// Hide search results when clicking outside
document.addEventListener("click", function(e) {
  if (!studentSearch.contains(e.target) && !searchResults.contains(e.target)) {
    searchResults.style.display = "none";
  }
});

// Feedback submission
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const student = document.getElementById("studentSelect").value;
  const feedback = document.getElementById("feedbackText").value.trim();

  if (!student || !feedback) {
    alert("Please select a student and provide feedback.");
    return;
  }

  alert("Feedback submitted successfully for " + student + "!");
  this.reset();
});
