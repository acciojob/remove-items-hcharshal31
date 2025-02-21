let colorSelect = document.getElementById("colorSelect");
let targetOption = colorSelect.options[colorSelect.selectedIndex]; 

colorSelect.addEventListener("change", (event) => {
  targetOption = event.target.options[event.target.selectedIndex];
});

document.getElementById("remove").addEventListener("click", () => {
  if (targetOption) {
    targetOption.remove();
    targetOption = colorSelect.options[0];
  }
});