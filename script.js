let tbody = document.querySelector(".details-container");
let text = document.querySelector("button span")
console.log(text);
let data = [
  { name: "Nelle Chambers", country: "Russian Federation" },
  { name: "Aretha Adkins", country: "Sweden" },
  { name: "Chester Molina", country: "United States" },
  { name: "Valentine Berry", country: "Russian Federation" },
  { name: "Dolan Griffith", country: "Spain" },
  { name: "Timothy Buck", country: "Australia" },
  { name: "Violet Mckenzie", country: "Philippines" },
  { name: "Imani James", country: "Spain" },
  { name: "Amos Hammond", country: "Spain" },
  { name: "Vivien George", country: "Brazil" },
];
for (let i = 0; i < data.length; i++) {
  let newRow = document.createElement("TR");
  newRow.innerHTML = `
    <td>${data[i].name}</td>
    <td>${data[i].country}</td>
    `;
  tbody.appendChild(newRow);
}
let tableData = [...document.querySelectorAll(".details-container tr")];
function sortDec() {
  tableData.sort((a, b) =>
    b.firstElementChild.innerText > a.firstElementChild.innerText ? 1 : -1
  );
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  for (let i = 0; i < tableData.length; i++) {
    let newRow = document.createElement("TR");
    newRow.innerHTML = `
        <td>${tableData[i].firstElementChild.innerText}</td>
        <td>${tableData[i].lastElementChild.innerText}</td>
        `;
    tbody.appendChild(newRow);
    text.style.transition = "all 0.5s ease-in-out"
    text.innerText = "A-Z"
  }
}
function sortInc() {
  tableData.sort((a, b) =>
    b.firstElementChild.innerText < a.firstElementChild.innerText ? 1 : -1
  );
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  for (let i = 0; i < tableData.length; i++) {
    let newRow = document.createElement("TR");
    newRow.innerHTML = `
        <td>${tableData[i].firstElementChild.innerText}</td>
        <td>${tableData[i].lastElementChild.innerText}</td>
        `;
    tbody.appendChild(newRow);
  }
  text.style.transition = "all 2s ease-in-out"
  text.innerText = "Z-A"
}
let btn = document.querySelector("button");
let order = false;
btn.addEventListener("click", ()=>{
  if (!order){
    sortInc();
    order = true;
  }
  else{
    sortDec()
    order = false;
  }
})
