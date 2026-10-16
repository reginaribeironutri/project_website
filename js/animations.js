(() => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const animatedElements = document.querySelectorAll(
    ".approach-heading, .approach-text, .women-image, .women-content, " +
    ".instagram-head, .insta-grid, .journal-head, .article, .contact"
  );

  if (reducedMotion || !("IntersectionObserver" in window)) {
    animatedElements.forEach(element => {
      element.classList.add("is-visible");
    });
  } else {
    animatedElements.forEach(element => element.classList.add("reveal"));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });

    animatedElements.forEach(element => observer.observe(element));
  }

  /* Percurso */
  const path = document.querySelector(".route path");
  const runner = document.querySelector(".route-runner");
  const route = document.querySelector(".route-wrap");

  if (!path || !route) return;

  const length = path.getTotalLength();

  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  const drawRoute = () => {
    const rect = route.getBoundingClientRect();
    const total = rect.height + window.innerHeight;
    const progress = Math.min(
      1,
      Math.max(0, (window.innerHeight - rect.top) / total)
    );

    path.style.strokeDashoffset = length * (1 - progress);

    if (runner) {
      runner.style.setProperty(
        "--route-y",
        `${progress * Math.max(0, rect.height - 10)}px`
      );
    }
  };

  window.addEventListener("scroll", drawRoute, { passive: true });
  window.addEventListener("resize", drawRoute);
  drawRoute();
})();