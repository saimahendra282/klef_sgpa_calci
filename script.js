const courseForm = document.getElementById("course-form");
const courseCountInput = document.getElementById("course-count");
const popup = document.getElementById("popup");

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const courseCount = parseInt(courseCountInput.value);
  window.location.href = `score-input.html?courses=${courseCount}`;
});
