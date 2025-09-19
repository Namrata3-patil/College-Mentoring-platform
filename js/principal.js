// Sidebar tab switching
function showPrincipalTab(tabId, event) {
  document.querySelectorAll('.principal-tab').forEach(tab => {
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
  showPrincipalTab("principalOverview");
});

// Assign HOD function
function assignHod() {
  const department = document.getElementById('departmentSelect').value;
  const hod = document.getElementById('hodSelect').value;
  
  if (!department || !hod) {
    alert('Please select both department and HOD');
    return;
  }
  
  // In a real application, you would send this data to a server
  console.log('Assigning HOD:', {department, hod});
  
  alert(`HOD ${hod} assigned to ${department} successfully!`);
  
  // Close the modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('assignHodModal'));
  modal.hide();
  
  // Reset the form
  document.getElementById('assignHodForm').reset();
}

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

// Update Mentor function
function updateMentor() {
  const name = document.getElementById('editMentorName').value;
  const email = document.getElementById('editMentorEmail').value;
  const department = document.getElementById('editMentorDepartment').value;
  const qualification = document.getElementById('editMentorQualification').value;
  const students = document.getElementById('editMentorStudents').value;
  
  if (!name || !email || !department || !qualification || !students) {
    alert('Please fill all fields');
    return;
  }
  
  // In a real application, you would send this data to a server
  console.log('Updating mentor:', {name, email, department, qualification, students});
  
  alert(`Mentor ${name} updated successfully!`);
  
  // Close the modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('editMentorModal'));
  modal.hide();
}

// When edit button is clicked, populate the form with mentor data
document.addEventListener('click', function(e) {
  if (e.target && e.target.closest('button') && e.target.closest('button').dataset.bsTarget === '#editMentorModal') {
    // Get the mentor row
    const row = e.target.closest('tr');
    
    // Get mentor data from the row
    const name = row.cells[0].textContent;
    const department = row.cells[1].textContent;
    const students = row.cells[2].textContent;
    
    // Populate the form (in a real app, you would fetch complete mentor data)
    document.getElementById('editMentorName').value = name;
    document.getElementById('editMentorEmail').value = 'example@college.edu'; // Example data
    document.getElementById('editMentorDepartment').value = department;
    document.getElementById('editMentorQualification').value = 'Ph.D'; // Example data
    document.getElementById('editMentorStudents').value = students;
  }
});