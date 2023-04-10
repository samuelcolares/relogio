<h1 align="center"> Theme Clock </h1>
<h6 align="center">Project <a href="https://relogio-samuelcolares.vercel.app/">Link</a></h6>
<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="html5" width="60" height="40"/>

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="html5" width="60" height="40"/>
</div>

<details>

<summary  align="center" style="background-color: #ffff00; padding: 10px;">English</summary>

</details>
<br>
<h3>Descrição</h3>

Um relógio analógico feito em CSS que se atualiza em tempo real com JavaScript


<hr>
<h3>Explicando a lógica</h3>
Após o CSS feito, temos agora um relógio parado

e para fazer funcionar precisamos de uma função que emita as informações sobre as horas, minutos e segundos e aplicá-la dentro de um setInterval para ser chamada a cada segundo e assim atualizar o relógio de forma contínua

a função principal vamos chama de 'Relogio' precisa pegar os dados sobre as horas, minutos..., para conseguirmos fazer isso precisamos criar um objeto <a href="https://www.w3schools.com/js/js_dates.asp">Date()</a> e para fazer isso usamos o construtor (prefixo `new`) e assim temos acesso à varias propriedades desse objeto

```JavaScript
function Relogio(){
  const data = new Date() // output -> Mon Apr 10 2023 02:30:51 GMT-0300 (Brasilia Standard Time)
  const diaSemana = data.getDay() // Retorna os dias da semana em números 0-6, 0 = domingo e 6 = sábado; output -> 1
  const mesNumero = data.getMonth() // Retorna o mês em número 0-11, 0 = janeiro e 11 = dezembro; output-> 3
  const diaNumero = data.getDate() // Retorna o dia do Mês 1-31; output -> 10
  const hora = data.getHours() // Retorna a hora de 0 até 23
  const minuto = data.getMinutes() // Retorna os minutos 0 até 59
  const segundo = data.getSeconds() //  Retorna os minutos 0 até 59
}
```

----- novidades

<hr>
<h3>Licença</h3>

--- licença
Este projeto foi inspirado no projeto número 29 do repositório público 50 projects 50 days (https://github.com/bradtraversy/50projects50days)


---
