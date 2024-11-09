let score = 0;
let level = 1;

const username = document.getElementById('username');
const levelInfo = document.getElementById('level');
const scoreInfo = document.getElementById('score');
const clickableImage = document.getElementById('clickable-image');

// Varsayılan kullanıcı adını ayarla (Kullanıcı adını Telegram API ile botta dinamik yapabilirsiniz)
username.textContent = "Kullanıcı Adı";

// Görseller listesi
const images = [
    "gorsel1.jpg",
    "gorsel2.jpg",
    "gorsel3.jpg",
    "gorsel4.jpg",
    "gorsel5.jpg",
    "gorsel6.jpg",
    "gorsel7.jpg",
    "gorsel8.jpg",
    "gorsel9.jpg"
];

// Tıklama işlevi
clickableImage.addEventListener('click', () => {
    score++;
    scoreInfo.textContent = score;

    // Her 10 puanda bir seviye atlansın
    if (score % 10 === 0) {
        level++;
        levelInfo.textContent = level;
        
        // Seviye arttıkça görseli değiştir
        const imageIndex = (level - 1) % images.length;
        clickableImage.src = images[imageIndex];
    }
});
