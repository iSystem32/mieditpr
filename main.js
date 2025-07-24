function runCode() {
  const code = document.getElementById("editor").value;
  const outputFrame = document.getElementById("output");
  outputFrame.srcdoc = code;
}