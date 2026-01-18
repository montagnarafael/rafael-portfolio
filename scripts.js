const text = "Rafael Montagna";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

/* ANIMAÇÃO DAS SKILLS */
const skills = document.querySelectorAll(".bar div");

function animateSkills() {
  skills.forEach(skill => {
    const value = skill.getAttribute("data-skill");
    skill.style.width = value + "%";
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const position = skillsSection.getBoundingClientRect().top;
  if (position < window.innerHeight) {
    animateSkills();
  }
});

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
