const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável que não pode ser alterada posteriormente?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um novo elemento no final de um array?",
      respostas: [
        "push()",
        "pop()",
        "shift()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "toFixed()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para comparar o valor e o tipo de duas variáveis em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "slice()",
        "splice()",
        "pop()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual estrutura de controle é usada para executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
      respostas: [
        "if-else",
        "for",
        "while"
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "display()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para concatenar dois arrays em JavaScript?",
      respostas: [
        "join()",
        "merge()",
        "concat()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual operador é usado para atribuir um valor a uma variável em JavaScript?",
      respostas: [
        "=",
        "==",
        "==="
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para retornar o número de elementos em um array em JavaScript?",
      respostas: [
        "length()",
        "size()",
        "count()"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        console.log(mostrarTotal)
  
  
  for(const item of perguntas ) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector("input").setAttribute('name', 'pergunta' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)
  }
  