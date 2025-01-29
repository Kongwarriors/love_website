// Initialize AOS animations
AOS.init();
document.getElementById('myAudio').volume = 1;
// Handle button clicks
document.getElementById("yes").addEventListener("click", () => {
  alert("Anh biết ngay mà, nhanh lớn nhé nàng! Daisuki desu ❤️");
});

document.getElementById("no").addEventListener("click", () => {
  alert("Khong sao :> người lạc quan luôn tin rằng em sẽ chọn lại! 😅");
});

// Tạo hiệu ứng pháo hoa khi click
document.addEventListener("click", (event) => {
    triggerFireworks(event);
  });
  
  function triggerFireworks(event) {
    const fireworksContainer = document.getElementById("fireworks-container");
    const x = event.clientX;
    const y = event.clientY;
  
    // Tạo pháo hoa
    for (let i = 0; i < 50; i++) { // Tăng số lượng hạt
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.left = `${x}px`;
      firework.style.top = `${y}px`;
  
      // Ngẫu nhiên hướng và kích thước
      const angle = Math.random() * 360;
      const distance = Math.random() * 200 + 50; // Tăng khoảng cách di chuyển
      const size = Math.random() * 5 + 2; // Ngẫu nhiên kích thước hạt
      const colors = ["#FF5678", "#FFD700", "#FF8EA3", "#00FFCC", "#FF5733"];
      firework.style.background = colors[Math.floor(Math.random() * colors.length)];
      firework.style.width = `${size}px`;
      firework.style.height = `${size}px`;
  
      firework.style.transform = `translate(${Math.cos(angle) * distance}px, ${
        Math.sin(angle) * distance
      }px)`;
      firework.style.animationDelay = `${Math.random() * 0.2}s`;
  
      // Thêm vào container
      fireworksContainer.appendChild(firework);
  
      // Xóa pháo hoa sau khi nổ xong
      setTimeout(() => {
        firework.remove();
      }, 1500); // Hiệu ứng lâu hơn
    }
  }

  //Tạo hiệu ứng trái tim khi di chuyển
  document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    heart.id = "heart-move";
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    body.appendChild(heart);
    setTimeout(function(){
        heart.remove();
    },1000)
  })


function showContent(element) {
    const textElement = element.querySelector(".text");

    if (!textElement) {
        console.error("Không tìm thấy phần tử .text");
        return;
    }

    // Kiểm tra nếu hiệu ứng đã chạy
    if (textElement.classList.contains("active")) return;

    // Thêm lớp active
    textElement.classList.add("active");

    // Tính độ dài text
    const textLength = textElement.textContent.length;

    // Tính thời gian dựa trên số ký tự
    const duration = textLength * 0.05; // 0.2s mỗi ký tự, có thể điều chỉnh

    // Cập nhật animation và width động
    textElement.style.animation = `typing ${duration}s steps(${textLength}), blink 0.5s step-end infinite alternate`;
    textElement.style.width = `${textLength}ch`; // Đặt width khớp với số ký tự

    // Sau khi hiệu ứng hoàn thành, tắt con trỏ nhấp nháy
    setTimeout(() => {
        textElement.style.borderRight = "none"; // Tắt con trỏ
        textElement.style.animation = "none"; // Xóa animation để tránh lặp lại
    }, duration * 1000);
}
