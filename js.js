const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");
const clearButton = document.getElementById("clearButton");

btnInsert.onclick = function () {
    const key = inpKey.value;
    const value = inpValue.value;
    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }

}

for (let i = 0; i< localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    lsOutput.innerHTML += `${key} ${value}<br/>`;
}

clearButton.onclick = function () {
    localStorage.removeItem(key);
    localStorage.removeItem(value);
    location.reload();
}
