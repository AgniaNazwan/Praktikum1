document.addEventListener("DOMContentLoaded", function () {
  const text = "Agnia Nazwan Rahmatunnisa";
  const speed = 120;
  let index = 0;

  const typing = document.getElementById("typing-name");
  const btn = document.getElementById("btn");

  function typeEffect() {
    if (typing && index < text.length) {
      typing.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, speed);
    }
  }

  typeEffect();

  if (btn) {
    btn.addEventListener("click", function () {
      window.open(
        "https://wa.me/6283101609541?text=Halo%20Agnia,%20saya%20melihat%20portofolio%20Anda",
        "_blank"
      );
    });
  }
});
