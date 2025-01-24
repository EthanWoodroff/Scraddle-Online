const form = document.getElementById('submitBoard');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  // Perform any form validation or data manipulation here

  const formData = new FormData(form); // Create a FormData object with the form data

  fetch("http://localhost/serverSide/checkWord.php", {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      const testText = document.getElementById("TEST");
      testText.innerHTML = response.text;
    } else {
      // Handle the error
    }
  })
  .catch(error => {
    // Handle the error
  });
});

//https://html.form.guide/php-form/submit-form-without-reloading-page-php/ 09:21 24/01/2025