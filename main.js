const readButton = document.getElementById("read");

readButton.addEventListener("click", () => {
  document.getElementById("num").innerText = "0";
  document.querySelectorAll(".unseen").forEach((e) => {
    e.classList.remove("unseen");
  });
  document.querySelectorAll(".dot").forEach((e) => {
    e.classList.remove("dot");
  });
});
