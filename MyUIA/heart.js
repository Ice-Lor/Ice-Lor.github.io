document.getElementById('heartBtn').addEventListener('click', function() {
    const container = document.getElementById('heartContainer');
    const heartImages = [
        'images/heart1.png',
        'images/heart2.png',
        // Thêm các hình trái tim khác vào đây
    ];
    const duration = 15000; // Thời gian hiệu ứng (ms)
    const interval = 200;  // Khoảng cách giữa các lần thả (ms)

    let elapsed = 0;
    const heartInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * heartImages.length);
        const heart = document.createElement('img');
        heart.src = heartImages[randomIndex];
        heart.className = 'heart';

        heart.style.left = Math.random() * 90 + '%';
        container.appendChild(heart);

        setTimeout(() => {
            heart.style.bottom = '1000px';
        }, 100);

        setTimeout(() => {
            if (container.contains(heart)) {
                container.removeChild(heart);
            }
        }, 3100);

        elapsed += interval;
        if (elapsed >= duration) {
            clearInterval(heartInterval);
        }
    }, interval);
});