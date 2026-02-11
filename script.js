const text = "Agnia Nazwan Rahmatunnisa";
const speed = 120;
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-name").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.addEventListener("load", typeEffect);

// === TAMBAHAN WA  ===
document.getElementById("btn").addEventListener("click", function () {
  window.open(
    "https://wa.me/6283101609541?text=Halo%20Agnia,%20saya%20melihat%20portofolio%20Anda",
    "_blank",
  );
});
