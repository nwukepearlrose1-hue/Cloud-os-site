const button = document.getElementById("update");
const input = document.getElementById("done");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const done = Number(input.value);
  const percent = (done / 5) * 100;
  result.textContent = "You have finished " + percent + "% of the assignment.";
});
