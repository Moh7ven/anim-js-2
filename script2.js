let currentButton = "null";
function setButton(event) {
  let constButton = document.querySelector("div.active");
  if (constButton) {
    constButton.classList.remove("active");
  }
  event.target.classList.add("active");
  input1.value = event.target.getAttribute("backgroundColor") || "";
  input2.value = event.target.textContent || "";
  currentButton = event.target;
}

let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

input1.addEventListener("input", function(e) {
  currentButton.style.backgroundColor = input1.value;
  currentButton.setAttribute("backgroundColor", input1.value);
})

input2.addEventListener("input", function(e) {
  currentButton.textContent = input2.value;
})