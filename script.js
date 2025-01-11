document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service");
  services.forEach((service, index) => {
    service.style.opacity = 0;
    service.style.transform = "translateY(50px)";
    setTimeout(() => {
      service.style.transition = "all 0.5s ease-in-out";
      service.style.opacity = 1;
      service.style.transform = "translateY(0)";
    }, index * 200);
  });
});
