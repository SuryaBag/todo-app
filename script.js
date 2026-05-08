const inpBox = document.getElementById("inp-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inpBox.value === "") {
    alert("You must write someting!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inpBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inpBox.value = "";
  saveData();
}

inpBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
