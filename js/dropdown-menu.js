// Function to toggle dropdown visibility when the button is clicked
function dropdownToggle() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

// Event listener to close dropdown if user clicks outside of it
window.addEventListener('click', function(e) {
  var dropdownContent = document.getElementById("dropdownContent");

  // Check if the clicked element is not the dropdown toggle button
  if (!e.target.matches('.dropdown-toggle')) {
    // Check if the dropdown content is currently visible
    if (dropdownContent.classList.contains('show')) {
      // Hide the dropdown
      dropdownContent.classList.remove('show');
    }
  }
});
