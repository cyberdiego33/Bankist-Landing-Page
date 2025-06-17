const modal = document.querySelector(".modal");

document.querySelectorAll(".openModal").forEach((close) => {
    console.log(close);
  close.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
});


document.querySelectorAll("#closeModal").forEach((close) => {
    console.log(close);
  close.addEventListener("click", () => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  });
});
