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

const btnFeature = document.querySelector("#btnScrolltoFeature");
const features = document.querySelector("#features");

btnFeature.addEventListener("click", (e) => {
  features.scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#navBar").addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
});
