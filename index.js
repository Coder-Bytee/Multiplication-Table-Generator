document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("generate")
    .addEventListener("click", generateTableNo);
});
function generateTableNo() {
    document.getElementById("generate-container").innerHTML="";
  var noofRows = Number(document.getElementById("rows").value);
  var num = Number(document.getElementById("num").value);
  console.log(noofRows);
  console.log(num);
  if (noofRows===0) {
    alert("Please provide Info Correctly!!");
  } else {
    console.log("clicked");
    var content = "";
    for (i = 1; i <= noofRows; i++) {
      content += htmlRender(num, i);
    }
    var div = document.createElement("table");
    div.setAttribute("class", "multiply");
    div.setAttribute("border", "1");
    div.innerHTML = content;
    document.getElementById("generate-container").appendChild(div);
    clearAll();
  }
}
function htmlRender(num, i) {
  return (
    '<tr class="row"><td>' +
    num +
    "</td><td>*</td><td>" +
    i +
    "</td><td>=</td><td>" +
    num * i +
    "</td></tr>"
  );
}
function clearAll() {
  document.getElementById("rows").value = "";
  document.getElementById("num").value = "";
}
