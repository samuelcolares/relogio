<h1 align="center"> Theme Clock </h1>
<h6 align="center">Project <a href="https://relogio-samuelcolares.vercel.app/">Link</a></h6>
<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="html5" width="60" height="40"/>

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="html5" width="60" height="40"/>
</div>

<details>

<summary  align="center" style="background-color: #ffff00; padding: 10px;">English</summary>

<h3>Description</h3>

An analog clock made in CSS that updates in real-time with JavaScript.


<hr>
<h3>Explaining the logic</h3>
After the CSS is done, we now have a stopped clock, and to make it work, we need a function that emits information about hours, minutes, and seconds and applies it inside a setInterval to be called every second and thus continuously update the clock.

The main function we will call 'Clock' needs to get the data about the hours, minutes, etc. To achieve this, we need to create an object Date() and to do this, we use the constructor (prefix new), giving us access to various properties of this object.

```JavaScript
function Clock() {
  const data = new Date() // Example Output -> Mon Apr 10 2023 02:30:51 GMT-0300 (Brasilia Standard Time)
  const weekday = data.getDay() // Returns the weekdays in numbers 0-6, 0 = Sunday and 6 = Saturday;
  const monthNumber = data.getMonth() // Returns the month in numbers 0-11, 0 = January and 11 = December;
  const dateNumber = data.getDate() // Returns the day of the month 1-31;
  const hour = data.getHours() // Returns the hour from 0 to 23
  const minute = data.getMinutes() // Returns the minutes 0 to 59
  const second = data.getSeconds() //  Returns the seconds 0 to 59
}
```
With all this data, we can then rotate the clock's hands, but to make it precise and save time without having to do trigonometric calculations, we need another function, one that can make a precise scale between two different number intervals.

```Javascript
scale: function (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
```
In the scale function, the parameters are as follows:

Number -> the number that will be constantly changing
inMin -> minimum input value
inMax -> maximum input value
outMin -> minimum output value
outMax -> maximum output value

Putting the calculation into practical application, the calculation for minutes and seconds would be: scale(minute, 0, 59, 0, 360), for hours, it's a bit different. Since the clock only has 1 to 12, we just need to subtract -1 from the input values, becoming: scale(hour, 0, 11, 0, 360).

With this data, we can apply it to the clock function and complete it:
```JavaScript
function Clock() {
  const data = new Date() // Example Output -> Mon Apr 10 2023 02:30:51 GMT-0300 (Brasilia Standard Time)
  const weekday = data.getDay() // Returns the weekdays in numbers 0-6, 0 = Sunday and 6 = Saturday;
  const monthNumber = data.getMonth() // Returns the month in numbers 0-11, 0 = January and 11 = December;
  const dateNumber = data.getDate() // Returns the day of the month 1-31;
  const hour = data.getHours() // Returns the hour from 0 to 23
  const minute = data.getMinutes() // Returns the minutes 0 to 59
  const second = data.getSeconds() //  Returns the seconds 0 to 59
  hourHand.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 11, 0, 360)}deg)`
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
  secondHand.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`
  digitalClock.innerHTML = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`

```

<hr>
<h3>Licença</h3>

Este projeto foi inspirado no projeto número 19 do repositório público 50 projects 50 days (https://github.com/bradtraversy/50projects50days)

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
  const data = new Date() // Exemplo de Saída -> Mon Apr 10 2023 02:30:51 GMT-0300 (Brasilia Standard Time)
  const diaSemana = data.getDay() // Retorna os dias da semana em números 0-6, 0 = domingo e 6 = sábado;
  const mesNumero = data.getMonth() // Retorna o mês em número 0-11, 0 = janeiro e 11 = dezembro;
  const diaNumero = data.getDate() // Retorna o dia do Mês 1-31;
  const hora = data.getHours() // Retorna a hora de 0 até 23
  const minuto = data.getMinutes() // Retorna os minutos 0 até 59
  const segundo = data.getSeconds() //  Retorna os minutos 0 até 59
}
```
com todos esses dados podemos então rotacionar os ponteiros do relógio, mas para ficar de forma precisa e economizar o tempo sem ter que fazer contas trigonométricas, precisamos de uma outra função, uma que consiga fazer uma escala precisa entre dois interavalos de números diferentes

```Javascript
scale: function (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
```
Na função scale,
Number -> número que vai ser constantemente alterado
inMin -> valor mínimo de entrada
inMax -> valor máximo de entrada
outMin -> valor mínimo de saída
outMax -> valor máximo de saída

botando numa aplicação pratica o cálculo para minutos e segundos seria assim: scale(minuto, 0, 59, 0, 360)
para hora é um pouco diferente, como no relógio só tem de 1 a 12, basta diminuir -1 dos valores de entrada, ficando: scale(hora, 0, 11, 0, 360)

com esses dados podemos aplicar na função relógio e completá-la
```JavaScript
function Relogio(){
  const data = new Date() // Exemplo de Saída -> Mon Apr 10 2023 02:30:51 GMT-0300 (Brasilia Standard Time)
  const diaSemana = data.getDay() // Retorna os dias da semana em números 0-6, 0 = domingo e 6 = sábado;
  const mesNumero = data.getMonth() // Retorna o mês em número 0-11, 0 = janeiro e 11 = dezembro;
  const diaNumero = data.getDate() // Retorna o dia do Mês 1-31;
  const hora = data.getHours() // Retorna a hora de 0 até 23
  const minuto = data.getMinutes() // Retorna os minutos 0 até 59
  const segundo = data.getSeconds() //  Retorna os minutos 0 até 59
  ponteiroHora.style.transform = `translate(-50%, -100%) rotate(${scale(hora, 0, 11, 0, 360)}deg)`
  ponteiroMinuto.style.transform = `translate(-50%, -100%) rotate(${scale(minuto, 0, 59, 0, 360)}deg)`
  ponteiroSegundo.style.transform = `translate(-50%, -100%) rotate(${scale(segundo, 0, 59, 0, 360)}deg)`
  relogioDigital.innerHTML = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`
}
```

<hr>
<h3>Licença</h3>

Este projeto foi inspirado no projeto número 19 do repositório público 50 projects 50 days (https://github.com/bradtraversy/50projects50days)


---
