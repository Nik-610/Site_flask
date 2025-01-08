const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const snowflakes = [];
const snowflakeCount = 150; // Количество снежинок

class Snowflake {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 4 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.wind = Math.random() * 1 - 0.5;
    }

    update() {
        this.y += this.speed;
        this.x += this.wind;

        // Возвращаем снежинку сверху, если она упала ниже экрана
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }

        // Перемещаем снежинку вправо/влево, если она вышла за границы
        if (this.x > canvas.width || this.x < 0) {
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
}

// Создаем снежинки
function createSnowflakes() {
    for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push(new Snowflake());
    }
}

// Анимация снежинок
function animateSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach((snowflake) => {
        snowflake.update();
        snowflake.draw();
    });

    requestAnimationFrame(animateSnowflakes);
}

// Запускаем процесс
createSnowflakes();
animateSnowflakes();
