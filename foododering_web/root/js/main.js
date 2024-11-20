window.onload = function () {
  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");

  // Initially hide screen2
  gsap.set(screen2, { display: "none" });

  // Initially hide all elements of screen1
  gsap.set(screen1.querySelector("nav"), { opacity: 0, y: -50 });
  gsap.set(screen1.querySelector("footer"), { opacity: 0, y: 50 });
  gsap.set(screen1.querySelector(".middle"), { opacity: 0, scale: 0.8 });

  // Create a timeline for the initial animation
  const initialTl = gsap.timeline();

  initialTl
    .to(screen1.querySelector("nav"), {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    })
    .to(
      screen1.querySelector("footer"),
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .to(
      screen1.querySelector(".middle"),
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );

  // Add click event listener to screen1
  screen1.addEventListener("click", function () {
    const tl = gsap.timeline();

    tl.to(screen1, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        screen1.style.display = "none";
        screen2.style.display = "flex";
      },
    }).from(screen2, {
      opacity: 0,
      duration: 0.5,
    });

    const nav = screen2.querySelector("nav");
    const middleContent = screen2.querySelectorAll(".middle h1");
    const footer = screen2.querySelector("footer");

    tl.from(nav, {
      y: -50,
      opacity: 0,
      duration: 0.5,
    })
      .from(
        middleContent,
        {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.5,
        },
        "-=0.3"
      )
      .from(
        footer,
        {
          y: 50,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3"
      );
  });

  const images = screen2.querySelectorAll(".image-second-page");
  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      window.location.href = `resturant${index + 1}.html`;
    });
  });
};
