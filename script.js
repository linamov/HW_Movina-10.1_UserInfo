const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const name = prompt("Enter your name (letters only):");
  const age = prompt("Enter your age (numbers only):");
  const city = prompt("Enter your city (letters only):");

  const nameRegex = /^[A-Za-zА-Яа-яёЁ\s'-]+$/;
  const cityRegex = /^[A-Za-zА-Яа-яёЁ\s'-]+$/;
  const ageRegex = /^\d+$/;

  if (!name || !age || !city) {
    resultDiv.style.display = "inline-block";
    resultDiv.innerHTML = "<p>⚠️ You must fill all fields!</p>";
    return;
  }

  if (!nameRegex.test(name.trim())) {
    resultDiv.style.display = "inline-block";
    resultDiv.innerHTML = "<p>⚠️ Name must contain only letters!</p>";
    return;
  }

  if (!cityRegex.test(city.trim())) {
    resultDiv.style.display = "inline-block";
    resultDiv.innerHTML = "<p>⚠️ City must contain only letters!</p>";
    return;
  }

  if (!ageRegex.test(age.trim())) {
    resultDiv.style.display = "inline-block";
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
