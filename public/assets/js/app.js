
  document.addEventListener('DOMContentLoaded', function () {
      const postalCodeSelect = document.getElementById('postalCode');

      function populateDropdown(postalCodes) {
          postalCodes.forEach(code => {
              const option = document.createElement('option');
              option.value = code;
              option.textContent = code;
              postalCodeSelect.appendChild(option);
          });
      }

      function fetchPostalCodes() {
          fetch('http://localhost:5000/api/energy_data/postal-codes') 
              .then(response => response.json())
              .then(data => {
                  if (data.postalCodes) {
                      populateDropdown(data.postalCodes);
                  } else {
                      console.error("Unexpected response structure:", data);
                  }
              })
              .catch(error => console.error('Error fetching postal codes:', error));
      }

      fetchPostalCodes();
  });

