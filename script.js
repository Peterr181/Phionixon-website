const btnNavEl = document.querySelector(".btn-mobile-nav");
const HeaderEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  HeaderEl.classList.toggle("nav-open");
});

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) document.body.classList.add("sticky");

    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
