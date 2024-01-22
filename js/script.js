const form = document.getElementById("dataForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const playerCount = document.getElementById("playerCount").value;

  // Проверка наличия корректного значения playerCount
  if (playerCount >= 8 && playerCount <= 16) {
    localStorage.setItem("playerCount", playerCount); // Сохранение количества игроков в локальное хранилище
    window.location.href = "Game.html"; // Переход на страницу Game.html
  } else {
    alert("Пожалуйста, введите корректное количество игроков (8-16).");
  }
});