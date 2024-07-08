let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let div = document.querySelectorAll(".carreau");
console.log(div);

input1.addEventListener("input", function (e) {
  let input1Click = e.target.value;
  let active = document.getElementById("active");
  active.style.backgroundColor = input1Click;

  console.log(input1Click);
});

input2.addEventListener("input", function (e) {
  let input2Click = e.target.value;
  let active = document.getElementById("active");
  active.textContent = input2Click;  
  active.style.display = "flex";
  active.style.alignItems = "center";
  active.style.justifyContent = "center";
  console.log(input2Click);
});

//Pour pacourrir chaque élément du tableau qui sera cliqué
div.forEach((element) =>
  element.addEventListener("click", function (e) {

    let divClick = e.target;
    const precedent = document.getElementById("active");
   
    if (precedent) {
      precedent.id = "";
      divClick.id = "active";
    }

    divClick.id = "active";
    console.log(divClick);
  })
);
