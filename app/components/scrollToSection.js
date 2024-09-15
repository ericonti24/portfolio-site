export const scrollToSection = (section, offset = 0) => {
  let target = document.getElementById(`${section}-section`);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: "smooth",
    });
  }
};
