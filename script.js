        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });


const marquee = document.getElementById("marquee");

  let position = 0;
  const speed = 0.4; // ubah kalau mau lebih cepat

  // karena konten diduplikasi 2x
  const singleSetWidth = marquee.scrollWidth / 2;

  let paused = false;

  marquee.addEventListener("mouseenter", () => paused = true);
  marquee.addEventListener("mouseleave", () => paused = false);

  function loop() {
    if (!paused) {
      position -= speed;

      if (Math.abs(position) >= singleSetWidth) {
        position += singleSetWidth;
      }

      marquee.style.transform = `translateX(${position}px)`;
    }

    requestAnimationFrame(loop);
  }

  loop();


  window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  setTimeout(() => {
    splash.classList.add("opacity-0");
    splash.style.pointerEvents = "none";

    setTimeout(() => {
      splash.style.display = "none";
    }, 500);
  }, 2000); // splash tampil 2 detik
});
