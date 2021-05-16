function firstAssignment(x) {
  document.write(`${x}` + " variables assigned and displayed on screen..");
  // create x amount of variables printing each one on screen on a new line <br>
  var printedVariables;
  for (i = 0; i < x; i++) {
    var printedVariables = "variable number" + `${i + 1}`;
    document.write("<br>" + printedVariables);
  }
}
firstAssignment(20);
