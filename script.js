let tbody = document.querySelector(".details-container")
let data = [
    {name: "Nelle Chambers" , country: "Russian Federation"},
    {name: "Aretha Adkins" , country: "Sweden"},
    {name: "Chester Molina" , country: "United States"},
    {name: "Valentine Berry" , country: "Russian Federation"},
    {name: "Dolan Griffith" , country: "Spain"},
    {name: "Timothy Buck" , country: "Australia"},
    {name: "Violet Mckenzie" , country: "Philippines"},
    {name: "Imani James" , country: "Spain"},
    {name: "Amos Hammond" , country: "Spain"},
    {name: "Vivien George" , country: "Brazil"}
];
for(let i=0; i<data.length; i++){
    let newRow = document.createElement("TR");
    newRow.innerHTML = `
    <td>${data[i].name}</td>
    <td>${data[i].country}</td>
    `
    tbody.appendChild(newRow);
}
function sortDec() {
    data.sort((a,b)=> b.name>a.name ? 1 : -1)
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    for(let i=0; i<data.length; i++){
        let newRow = document.createElement("TR");
        newRow.innerHTML = `
        <td>${data[i].name}</td>
        <td>${data[i].country}</td>
        `
        tbody.appendChild(newRow);
    }
}
function sortInc() {
    data.sort((a,b)=> b.name>a.name ? -1 : 1)
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    for(let i=0; i<data.length; i++){
        let newRow = document.createElement("TR");
        newRow.innerHTML = `
        <td>${data[i].name}</td>
        <td>${data[i].country}</td>
        `
        tbody.appendChild(newRow);
    }
}
let btns =[...document.querySelectorAll("button")]

btns[0].addEventListener("click", sortInc);
btns[1].addEventListener("click", sortDec);