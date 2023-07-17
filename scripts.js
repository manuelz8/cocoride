// Array con las palabras que cambiarán
const words = ["Económico", "Rápido", "Puntual", "Seguro"];
let currentWordIndex = 0; // Índice de la palabra actual

// Función para cambiar la palabra
function changeWord() {
  const changingWord = document.querySelector(".changing-word");
  changingWord.textContent = words[currentWordIndex];
  currentWordIndex = (currentWordIndex + 1) % words.length;
}

// Cambiar la palabra cada 2 segundos (puedes ajustar el tiempo si lo deseas)
setInterval(changeWord, 4000);