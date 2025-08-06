async function fetchQuestions() {
  await new Promise(res => setTimeout(res, 500));
  return [
    {
      question: "¿Cuál es el planeta más grande del sistema solar?",
      options: ["Marte", "Júpiter", "Venus", "Tierra"],
      answer: "Júpiter"
    },
    {
      question: "¿Quién escribió 'Cien años de soledad'?",
      options: ["Mario Vargas Llosa", "Julio Cortázar", "Gabriel García Márquez", "Pablo Neruda"],
      answer: "Gabriel García Márquez"
    },
    {
      question: "¿Cuántos continentes hay en el mundo?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    }
  ];
}

class QuizGame {
  constructor() {
    this.score = 0;
    this.questions = [];
    this.current = 0;

    this.qElem = document.getElementById("question");
    this.aElem = document.getElementById("answers");
    this.fElem = document.getElementById("feedback");
    this.sElem = document.getElementById("score");
    this.nextBtn = document.getElementById("next-btn");

    this.nextBtn.addEventListener("click", () => this.next());
  }

  async start() {
    this.questions = await fetchQuestions();
    this.shuffle(this.questions);
    this.showQuestion();
  }

  showQuestion() {
    this.clear();
    const { question, options } = this.questions[this.current];
    this.qElem.textContent = question;

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.addEventListener("click", () => this.checkAnswer(opt));
      this.aElem.appendChild(btn);
    });
  }

  checkAnswer(selected) {
    const { answer } = this.questions[this.current];
    const correct = selected === answer;
    this.fElem.textContent = correct ? "✅ ¡Correcto!" : `❌ Incorrecto. Respuesta: ${answer}`;
    if (correct) this.score++;

    this.sElem.textContent = this.score;
    Array.from(this.aElem.children).forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === answer) btn.style.backgroundColor = "#a8f0a5";
      else if (btn.textContent === selected) btn.style.backgroundColor = "#f8c4c4";
    });

    this.nextBtn.style.display = "inline-block";
  }

  next() {
    this.current++;
    if (this.current < this.questions.length) {
      this.showQuestion();
    } else {
      this.qElem.textContent = "🏁 ¡Juego terminado!";
      this.aElem.innerHTML = '';
      this.fElem.textContent = `Puntaje final: ${this.score}`;
      this.nextBtn.style.display = "none";
    }
  }

  clear() {
    this.aElem.innerHTML = '';
    this.fElem.textContent = '';
    this.nextBtn.style.display = "none";
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const game = new QuizGame();
  game.start();
});
