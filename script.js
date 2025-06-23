// Open and Close Modal

const modal = document.querySelector(".modal");

document.querySelectorAll(".openModal").forEach((close) => {
  // console.log(close);

  close.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
});

document.querySelectorAll("#closeModal").forEach((close) => {
  // console.log(close);

  close.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  });
});

// Learn More Scroll to Feature

const btnFeature = document.querySelector("#btnScrolltoFeature");
const features = document.querySelector("#features");

btnFeature.addEventListener("click", (e) => {
  features.scrollIntoView({ behavior: "smooth" });
});

// Navigate To Each Section
const navBar = document.querySelector("#navBar");
navBar.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
});

// Display Tabs Section

const clickTabs = document.querySelector("#clicktabs");
const tabs = document.querySelectorAll(".tab");
const tabsContents = document.querySelectorAll(".tabsContent");

clickTabs.addEventListener("click", (e) => {
  // alert(e.target.tagName)
  const clicked = e.target.closest(".tab");
  // console.log(clicked.textContent);
  if (!clicked) return;

  tabs.forEach((tab) => tab.classList.remove("translate-y-[-26%]"));
  clicked.classList.add("translate-y-[-26%]");

  const activeTabContent = document.querySelector(
    `.tabsContent-${clicked.dataset.tab}`
  );

  tabsContents.forEach((tab) => {
    if (tab === activeTabContent) {
      tab.classList.remove("hidden");
      tab.classList.add("flex");
    } else {
      tab.classList.remove("flex");
      tab.classList.add("hidden");
    }
  });
});

// reduce Nav links opacity

const opacityFunc = function (e) {
  arrayLinks.forEach((link) => {
    link.classList.add("opacity-60")
    if (link === e.target) {
      link.classList.remove(`${this}`);
    }
  })
}

const arrayLinks = navBar.querySelectorAll("a")
navBar.addEventListener("mouseover", opacityFunc.bind( `opacity-60`))

navBar.addEventListener("mouseout", (e) => {
  arrayLinks.forEach((link) => {
    link.classList.remove("opacity-60")
  })
})

// Sticky NavBar ONscroll

const navContainer = document.querySelector("#nav-container");
// features is already selected = feature
const heroSection = document.querySelector("#hero-section");
const navHeight = navContainer.getBoundingClientRect().height;

const obsOption = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const obsCallback = function (obsOption) {
  const [threshold] = obsOption;
  // console.log(threshold);

  if (threshold.isIntersecting === false) {
    navContainer.classList.add("sticky");
    // console.log(navHeight);
  } else {
    navContainer.classList.remove("sticky");
  }
};

const observerNav = new IntersectionObserver(obsCallback, obsOption);

observerNav.observe(heroSection);
