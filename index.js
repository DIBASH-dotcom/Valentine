
const catGif = document.getElementById("catGif");
const question = document.getElementById("question");
const celebrateText = document.getElementById("celebrateText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const giftBtn = document.getElementById("giftBtn");
const mainSection = document.getElementById("mainSection");
const giftSection = document.getElementById("giftSection");

const happyCat = "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif";
const sadCat   = "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif";
const angryCat = "https://media.giphy.com/media/l1J9u3TZfpmeDLkD6/giphy.gif";

let noCount = 0;

noBtn.addEventListener("click", () => {
    noCount++;

    if (noCount === 1) {
        catGif.src = sadCat;
        question.textContent = "Think again 😢";
    } 
    else if (noCount === 2) {
        catGif.src = angryCat;
        question.textContent = "Are you REALLY sure? 😡";
    } 
    else if (noCount === 3) {
        catGif.src = happyCat;
        question.textContent = "Happy Valentine’s Day baby ❤️";
        noBtn.style.display = "none";

        celebrateText.innerHTML = `
            🎉 Every second is a celebration <br>
            ✨ You are the spark that makes my world so much better <br>
            💖 Love wins every time <br>
            💫 This moment is forever
        `;

        giftBtn.style.display = "inline-block";
    }
});

giftBtn.addEventListener("click", () => {
    mainSection.style.display = "none";   // HIDE EVERYTHING
    giftSection.style.display = "block";  // SHOW ONLY GIFTS
});

// placeholders
document.getElementById("gift1").onclick = () => alert("🎁 Gift 1 content here");
document.getElementById("gift2").onclick = () => alert("🎁 Gift 2 content here");
document.getElementById("gift3").onclick = () => alert("🎁 Gift 3 content here");

