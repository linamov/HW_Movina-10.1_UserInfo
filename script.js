const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const name = prompt("Enter your name (letters only):");
  const age = prompt("Enter your age (numbers only):");
  const city = prompt("Enter your city (letters only):");

  const nameCityRegex = /^[A-Za-zА-Яа-яёЁ\s'-]+$/;
  const ageRegex = /^\d+$/;

  if (!name || !age || !city) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "<p>⚠️ All fields are required!</p>";
    return;
  }

  if (!nameCityRegex.test(name.trim())) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "<p>⚠️ Name must contain only letters!</p>";
    return;
  }

  if (!nameCityRegex.test(city.trim())) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "<p>⚠️ City must contain only letters!</p>";
    return;
  }

  if (!ageRegex.test(age.trim())) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "<p>⚠️ Age must contain only numbers!</p>";
    return;
  }

  const user = {
    name: name.trim(),
    age: age.trim(),
    city: city.trim(),
    getInfo: function() {
      return `<table>
                <tr><td>Name</td><td>${this.name}</td></tr>
                <tr><td>Age</td><td>${this.age}</td></tr>
                <tr><td>City</td><td>${this.city}</td></tr>
              </table>`;
    }
  };

  resultDiv.style.display = "block";
  resultDiv.innerHTML = user.getInfo();
});
