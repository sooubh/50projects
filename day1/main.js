const blocks = document.querySelectorAll(".blocks");

blocks.forEach(block => {
  block.addEventListener("click", () => {
    removeActiveClasses();
    block.classList.add("active");
  });
});

function removeActiveClasses() {
  blocks.forEach(panel => {
    panel.classList.remove('active');
  });
}