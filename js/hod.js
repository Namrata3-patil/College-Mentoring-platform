// Sidebar tab switching
function showHodTab(tabId, event) {
  document.querySelectorAll('.hod-tab').forEach(tab => {
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
  showHodTab("hodOverview");
});

// Add Mentor function
function addMentor() {
  const name = document.getElementById('mentorName').value;
  const email = document.getElementById('mentorEmail').value;
  const department = document.getElementById('mentorDepartment').value;
  const qualification = document.getElementById('mentorQualification').value;
  
  if (!name || !email || !department || !qualification) {
    alert('Please fill all fields');
    return;
  }
  
  // In a real application, you would send this data to a server
  console.log('Adding mentor:', {name, email, department, qualification});
  
  alert(`Mentor ${name} added successfully!`);
  
  // Close the modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('addMentorModal'));
  modal.hide();
  
  // Reset the form
  document.getElementById('addMentorForm').reset();
}

// Add Student function
function addStudent() {
  const name = document.getElementById('studentName').value;
  const email = document.getElementById('studentEmail').value;
  const id = document.getElementById('studentId').value;
  const department = document.getElementById('studentDepartment').value;
  const mentor = document.getElementById('studentMentor').value;
  
  if (!name || !email || !id || !department || !mentor) {
    alert('Please fill all fields');
    return;
  }
  
  // In a real application, you would send this data to a server
  console.log('Adding student:', {name, email, id, department, mentor});
  
  alert(`Student ${name} added successfully!`);
  
  // Close the modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('addStudentModal'));
  modal.hide();
  
  // Reset the form
  document.getElementById('addStudentForm').reset();
}

// Update Student function
function updateStudent() {
  const name = document.getElementById('editStudentName').value;
  const email = document.getElementById('editStudentEmail').value;
  const id = document.getElementById('editStudentId').value;
  const department = document.getElementById('editStudentDepartment').value;
  const mentor = document.getElementById('editStudentMentor').value;
  const cgpa = document.getElementById('editStudentCGPA').value;
  const attendance = document.getElementById('editStudentAttendance').value;
  
  if (!name || !email || !id || !department || !mentor || !cgpa || !attendance) {
    alert('Please fill all fields');
    return;
  }
  
  // In a real application, you would send this data to a server
  console.log('Updating student:', {name, email, id, department, mentor, cgpa, attendance});
  
  alert(`Student ${name} updated successfully!`);
  
  // Close the modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('editStudentModal'));
  modal.hide();
}

// When edit button is clicked, populate the form with student data
document.addEventListener('click', function(e) {
  if (e.target && e.target.closest('button') && e.target.closest('button').dataset.bsTarget === '#editStudentModal') {
    // Get the student row
    const row = e.target.closest('tr');
    
    // Get student data from the row
    const name = row.cells[0].textContent;
    const mentor = row.cells[1].textContent;
    const cgpa = row.cells[2].textContent;
    const attendance = row.cells[3].textContent;
    
    // Populate the form (in a real app, you would fetch complete student data)
    document.getElementById('editStudentName').value = name;
    document.getElementById('editStudentEmail').value = 'example@college.edu'; // Example data
    document.getElementById('editStudentId').value = 'STU001'; // Example data
    document.getElementById('editStudentDepartment').value = 'Computer Science'; // Example data
    document.getElementById('editStudentMentor').value = mentor;
    document.getElementById('editStudentCGPA').value = cgpa;
    document.getElementById('editStudentAttendance').value = attendance.replace('%', '');
  }
});