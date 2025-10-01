const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const name = prompt("Enter your name:");
  const age = prompt("Enter your age:");
  const city = prompt("Enter your city:");

  if (!name || !age || !city) {
    resultDiv.style.display = "inline-block";
    resultDiv.innerHTML = "<p>⚠️ You must fill all fields!</p>";
    return;
  }

  const user = {
    name: name.trim(),
    age: age.trim(),
    city: city.trim(),
    getInfo: function() {
      return `<p><strong>Name:</strong> ${this.name}</p>
              <p><strong>Age:</strong> ${this.age}</p>
              <p><strong>City:</strong> ${this.city}</p>`;
    }
  };

  resultDiv.style.display = "block";
  resultDiv.innerHTML = user.getInfo();
});
