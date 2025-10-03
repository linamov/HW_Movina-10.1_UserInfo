const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const name = prompt("Enter your name (letters only):");
  const age = prompt("Enter your age (numbers only):");
  const city = prompt("Enter your city (letters only):");
  const skillsInput = prompt("Enter your skills separated by commas:");

  const nameCityRegex = /^[A-Za-zА-Яа-яёЁ\s'-]+$/;
  const ageRegex = /^\d+$/;

  if (!name || !age || !city || !skillsInput) {
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
    skills: skillsInput.split(",").map(s => s.trim()),
    getInfo: function() {
      return `<p><strong>Name:</strong> ${this.name}</p>
              <p><strong>Age:</strong> ${this.age}</p>
              <p><strong>City:</strong> ${this.city}</p>
              <p><strong>Skills:</strong> ${this.skills.join(", ")}</p>`;
    }
  };

  resultDiv.style.display = "block";
  resultDiv.innerHTML = user.getInfo();
});
