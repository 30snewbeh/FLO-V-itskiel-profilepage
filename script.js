// === 1. Animated Floating Bubbles Generator with Rainbow Colors ===
const bubbleContainer = document.getElementById('bubbles');

// Warna gradient untuk bubble
const bubbleColors = [
  { start: '255, 180, 180', end: '255, 200, 200' },
  { start: '173, 216, 230', end: '200, 230, 250' },
  { start: '200, 150, 255', end: '230, 200, 255' },
  { start: '255, 200, 150', end: '255, 230, 180' },
  { start: '150, 255, 200', end: '180, 255, 220' },
];

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 10 + 10; // Ukuran antara 10px - 20px
  const left = Math.random() * 100; // Posisi horizontal acak (0 - 100%)
  const duration = Math.random() * 6 + 6; // Durasi animasi (6 - 12 detik)
  const delay = Math.random() * 5; // Delay acak (0 - 5 detik)

  const randomColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
  const gradient = `radial-gradient(circle at center, rgba(${randomColor.start}, 0.7), rgba(${randomColor.end}, 0.2))`;

  // Set style bubble
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${left}%`;
  bubble.style.bottom = '-30px';
  bubble.style.background = gradient;
  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `${delay}s`;

  // Tambahkan ke DOM
  bubbleContainer.appendChild(bubble);

  // Hapus bubble setelah selesai animasi
  setTimeout(() => {
    bubble.remove();
  }, (duration + delay) * 1000);
}

// Buat bubble baru setiap 300ms
setInterval(createBubble, 300);

// === 2. Bubble Hover Effect ===
bubbleContainer.addEventListener('mouseover', (e) => {
  if (e.target && e.target.classList.contains('bubble')) {
    e.target.style.transform = 'scale(1.4)';
    e.target.style.opacity = '0.9';
    e.target.style.animationPlayState = 'paused';
  }
});

bubbleContainer.addEventListener('mouseout', (e) => {
  if (e.target && e.target.classList.contains('bubble')) {
    e.target.style.transform = 'scale(1)';
    e.target.style.opacity = '0.7';
    e.target.style.animationPlayState = 'running';
  }
});