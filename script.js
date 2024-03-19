function calculateBMR() {
  var gender = document.getElementById("gender").value;
  var age = parseInt(document.getElementById("age").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var bmr;

  if (gender === "male") {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else if (gender === "female") {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  document.getElementById("result").innerHTML = "Your Basal Metabolic Rate (BMR) is: " + bmr.toFixed(2) + " calories/day.";
}
