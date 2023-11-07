const changeThemeBtn = document.querySelector("#change_theme");

// Toggle dark mode
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme(){
    const darkMode = localStorage.getItem("dark");

    if(darkMode){
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){
    toggleDarkMode();

    //Save or remove dark mode;
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
})

// Formulário

document.getElementById("questionnaire").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede que o formulário seja enviado normalmente

    // Perguntas
    const q1Score = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q2Score = parseInt(document.querySelector('input[name="q2"]:checked').value);
    const q3Score = parseInt(document.querySelector('input[name="q3"]:checked').value);
    const q4Score = parseInt(document.querySelector('input[name="q4"]:checked').value);
    const q5Score = parseInt(document.querySelector('input[name="q5"]:checked').value);
    const q6Score = parseInt(document.querySelector('input[name="q6"]:checked').value);
    const q7Score = parseInt(document.querySelector('input[name="q7"]:checked').value);
    const q8Score = parseInt(document.querySelector('input[name="q8"]:checked').value);
    const q9Score = parseInt(document.querySelector('input[name="q9"]:checked').value);
    const q10Score = parseInt(document.querySelector('input[name="q10"]:checked').value);

    // Calcule a pontuação total
    const totalScore = q1Score + q2Score + q3Score + q4Score + q5Score + q6Score + q7Score + q8Score + q9Score + q10Score;

    // Converte a pontuação em uma nota de 1 a 10
    const maxScore = 1; // Pontuação máxima possível
    const minNote = 1; // Nota mínima
    const maxNote = 10; // Nota máxima

    const note = ((totalScore / maxScore) * (maxNote - minNote)) + minNote;

    // Exiba a nota na tela
    document.getElementById("result").style.display = "block";
    document.getElementById("nota").textContent = note.toFixed(2); // Ajusta o número para 2 casas decimais
});