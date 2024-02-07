const questions = [
    // Defini que a constante "questions" é o que eu inseri dentro dela
    {
      question: "O que é JavaScript?",
    // defini o que uma "question"
      answers: [
        "Uma linguagem de programação de servidor",
        "Uma linguagem de marcação",
        "Uma linguagem de programação de front-end",
        "Uma linguagem de script para tornar páginas web interativas",
      ],
      //defini quais são as "answers"
      correct: 3
      // defini que a correta é a 3
    },
    {
      question: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      answers: [
        "var",
        "int",
        "string",
        "declare",
      ],
      correct: 0
    },
    {
      question: "Qual é o operador de igualdade estrita em JavaScript?",
      answers: [
        "==",
        "===",
        "!=",
        "!==",
      ],
      correct: 1
    },
    {
      question: "O que é o DOM em JavaScript?",
      answers: [
        "Documento de Objeto de Modelo",
        "Declaração de Operações Múltiplas",
        "Data de Objeto Móvel",
        "Documento de Orientação Móvel",
      ],
      correct: 0
    },
    {
      question: "Como se chama a função usada para imprimir algo no console em JavaScript?",
      answers: [
        "print()",
        "console.log()",
        "log()",
        "display()",
      ],
      correct: 1
    },
    {
      question: "Qual é a estrutura de controle de fluxo usada para tomar decisões em JavaScript?",
      answers: [
        "if-else",
        "for",
        "while",
        "switch",
      ],
      correct: 0
    },
    {
      question: "Qual é o significado de NaN em JavaScript?",
      answers: [
        "Não é um Número",
        "Novo Array Numérico",
        "Nada a Notar",
        "Nova Atribuição Numérica",
      ],
      correct: 0
    },
    {
      question: "O que é um closure em JavaScript?",
      answers: [
        "Um tipo de loop",
        "Um tipo de função",
        "Um tipo de objeto",
        "Um tipo de array",
      ],
      correct: 1
    },
    {
      question: "Como se faz um comentário de linha única em JavaScript?",
      answers: [
        "//",
        "/*",
        "–",
        "#",
      ],
      correct: 0
    },
    {
      question: "Qual é a função do método `addEventListener` em JavaScript?",
      answers: [
        "Adicionar um elemento ao DOM",
        "Adicionar um evento a um elemento",
        "Adicionar uma variável global",
        "Adicionar uma condição ao código",
      ],
      correct: 1
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  
  const correct = new Set()
  const totalquestions = questions.length
  const showtotal = document.querySelector('#acertos span')
  
  
  for(const item of questions) {
    const quizElement = template.content.cloneNode(true)
    quizElement.querySelector("h3").textContent = item.question 
  
    for( let answer of item.answers) {
      const dt = quizElement.querySelector("dl dt").cloneNode(true)
      dt.querySelector('span').textContent = answer
      dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item))
      dt.querySelector('input').value = item.answers.indexOf(answer)
      dt.querySelector('input').onchange = (event) => {
        const is_correct = event.target.value == item.correct
  
        correct.delete(item)
        if(is_correct) {
          correct.add(item)
        }
        showtotal.textContent = correct.size + ' de ' + totalquestions
      }
      quizElement.querySelector('dl').appendChild(dt)
    }
    quizElement.querySelector('dl dt').remove()
    quiz.appendChild(quizElement)
  }
  
  