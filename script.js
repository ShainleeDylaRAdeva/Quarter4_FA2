document.getElementById("generateBtn").addEventListener("click", generateTable);

function generateTable() {
  var start = parseInt(document.getElementById("startVal").value);
  var end = parseInt(document.getElementById("endVal").value);

  if (isNaN(start) || isNaN(end) || start < 2 || start > 10 || end < 2 || end > 10) {
    alert("Please enter numbers between 2 and 10");
    return;
  }

  var output = "<table>";
  for (var row = 1; row <= start; row++) {
    output += "<tr>";
    for (var col = 1; col <= end; col++) {
      output += "<td>" + (row * col) + "</td>";
    }
    output += "</tr>";
  }
  output += "</table>";

  document.getElementById("output").innerHTML = output;
}
