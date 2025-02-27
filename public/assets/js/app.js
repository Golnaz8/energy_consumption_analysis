document.addEventListener("DOMContentLoaded", function () {
  const postalCodeSelect = document.getElementById("postalCode");
  const dateInput = document.getElementById("date");
  const startButton = document.querySelector(".btn-primary");

  // Function to populate the postal code dropdown
  function populateDropdown(postalCodes) {
    postalCodes.forEach((code) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = code;
      postalCodeSelect.appendChild(option);
    });
  }

  // Fetch and populate postal codes from the API
  function fetchPostalCodes() {
    fetch("http://localhost:5000/api/energy_data/postal-codes")
      .then((response) => response.json())
      .then((data) => {
        if (data.postalCodes) {
          populateDropdown(data.postalCodes);
        } else {
          console.error("Unexpected response structure:", data);
        }
      })
      .catch((error) => console.error("Error fetching postal codes:", error));
  }

  // Function to adjust the date to 2024 and map to specific months
  function adjustDate(inputDate) {
    const date = new Date(inputDate);
    let month = date.getMonth() + 1;

    // Map the month to one of the valid months based on user rules
    if ([12, 1, 2].includes(month)) {
      month = 11;
    } else if ([10, 9, 3].includes(month)) {
      month = 4;
    } else {
      month = 7;
    }

    // Return the adjusted date string in YYYY-MM-DD format
    return `2024-${month
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  }

  // Function to fetch electricity consumption data
  function fetchEnergyData() {
    const selectedPostalCode = postalCodeSelect.value;
    const selectedDate = adjustDate(dateInput.value);

    if (!selectedPostalCode || !selectedDate) {
      alert("Please select a postal code and a date.");
      return;
    }

    // API URL with adjusted date values
    const apiUrl = `http://localhost:5000/api/energy_data?postalcode=${selectedPostalCode}&date=${selectedDate}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error("Error fetching data:", data.error);
          alert("No data found for this selection.");
        } else {
          console.log("Data fetched successfully:", data);
          displayData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching electricity data:", error);
        alert("Failed to retrieve data. Please try again.");
      });
  }

  // Function to display fetched data on the page
  function displayData(data) {
    let output = `<h4>Electricity Consumption Data</h4>`;
    output += `<table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Actual Consumption</th>
                        <th>Predicted Consumption</th>
                    </tr>
                </thead>
                <tbody>`;

    data.forEach((row) => {
      output += `<tr>
                    <td>${row.TOTAL_CONSUMPTION} kWh</td>
                    <td>${row.PREDICTED_CONSUMPTION} kWh</td>
                </tr>`;
    });

    output += `</tbody></table>`;

    // Get the results container and update its content
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ""; 
    resultsContainer.insertAdjacentHTML("beforeend", output);
  }

  // Ensure this function is part of the event listener for the Start button.
  startButton.addEventListener("click", function () {
    fetchEnergyData();
  });

  // Load postal codes on page load
  fetchPostalCodes();

  // Event listener for the "Start" button
  startButton.addEventListener("click", fetchEnergyData);
});
