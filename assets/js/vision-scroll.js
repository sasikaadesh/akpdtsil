document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;

  // Initialize first slide with animation
  showSlide(0);

  // Add progress indicator for auto-scrolling
  let progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  document.querySelector(".navigation").appendChild(progressBar);

  // Start progress animation
  setTimeout(() => {
    progressBar.style.width = "100%";
  }, 100);

  // Navigate to slide when dot is clicked
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"));
      if (currentSlide !== slideIndex) {
        showSlide(slideIndex);
      }
    });
  });

  function showSlide(index) {
    // Update slider position
    slider.style.transform = `translateX(-${index * 50}%)`;

    // Update active dot
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    // Update active slide
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        // Optionally remove active class from other slides
        // slide.classList.remove('active');
      }
    });

    currentSlide = index;
  }

  // Auto-animation for first load
  setTimeout(() => {
    slides[0].classList.add("active");

    // Add periodic switch for auto-play (optional)
    // setInterval(() => {
    //     const nextSlide = (currentSlide + 1) % slides.length;
    //     showSlide(nextSlide);
    // }, 8000);
  }, 500);
});
