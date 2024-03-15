document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Process form data here
    
    alert("Form submitted successfully!");
    this.reset(); // Reset the form after submission
  });
  