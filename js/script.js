const Main = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
        document.documentElement.style.setProperty('--shadow-color', 'rgba(255, 255, 255, 0.473)');
        setInterval(this.relogio.bind(this), 1000);
    },

    cacheSelectors: function () {
        this.hour = document.querySelector('.hour')
        this.minute = document.querySelector('.minute')
        this.second = document.querySelector('.second')
        this.time = document.querySelector('.time')
        this.date = document.querySelector('.date')
        this.toggle = document.querySelector('.toggle')
        this.HTML = document.querySelector('html')
        this.showNumbers = document.querySelector('.showNumbers')
        this.numbers = document.querySelectorAll('.number')
        this.shadows = document.querySelector('.shadows')
    },

    bindEvents: function () {
        this.showNumbers.addEventListener('click', this.Events.mostrarNumeros.bind(this));
        this.toggle.addEventListener('click', this.Events.switchMode.bind(this))
        this.shadows.addEventListener('click', this.Events.switchShadows.bind(this))
    },

    dia: function (x) {
        const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
        return `${diasDaSemana[x]}`
    },

    mes: function (x) {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return `${meses[x]}`
    },
    flag1: false,

    flag2: false,

    relogio: function () {
        const data = new Date()
        const diaSemana = data.getDay()
        const mesNumero = data.getMonth()
        const diaNumero = data.getDate()
        const hora = data.getHours()
        const minuto = data.getMinutes()
        const segundo = data.getSeconds()

        this.hour.style.transform = `translate(-50%, -100%) rotate(${hora * 30}deg)`
        this.minute.style.transform = `translate(-50%, -100%) rotate(${minuto * 6}deg)`
        this.second.style.transform = `translate(-50%, -100%) rotate(${segundo * 6}deg)`
        this.time.innerHTML = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`
        this.date.innerHTML = `<span class="circle">${diaNumero}</span> de ${this.mes(mesNumero)}, ${this.dia(diaSemana)} `
    },

    Events: {
        mostrarNumeros: function (e) {
            if (e.target.innerText === 'Mostrar Números') {
                e.target.innerText = 'Esconder Números'
            } else {
                e.target.innerText = 'Mostrar Números'
            }
            this.numbers.forEach((number, idx) => {
                number.style.transitionDelay = `${idx * 50}ms`
                number.classList.toggle('show')
            })
        },
        switchMode: function (e) {
            this.HTML.classList.toggle('dark')
            if (!this.flag1) {
                this.flag1 = true
                this.flag2 = false
                this.shadows.innerText = 'Desligar Sombras'
                e.target.innerText = 'Dark Mode'
                document.documentElement.style.setProperty('--primary-color', 'black');
                document.documentElement.style.setProperty('--secondary-color', 'white');
                document.documentElement.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.473)');
            } else {
                this.flag1 = false
                this.flag2 = false
                this.shadows.innerText = 'Desligar Sombras'

                e.target.innerText = 'Light Mode'
                document.documentElement.style.setProperty('--primary-color', 'white');
                document.documentElement.style.setProperty('--secondary-color', 'black');
                document.documentElement.style.setProperty('--shadow-color', 'rgba(255, 255, 255, 0.473)');
            }
        },
        switchShadows: function (e) {
            if (!this.flag2) {
                this.flag2 = true
                e.target.innerText = 'Ligar Sombras'
                document.documentElement.style.setProperty('--shadow-color', `${document.documentElement.style.getPropertyValue('--shadow-color').replace('0.473', '0.001')}`);
            } else if (this.flag2) {
                this.flag2 = false
                e.target.innerText = 'Desligar Sombras'
                document.documentElement.style.setProperty('--shadow-color', `${document.documentElement.style.getPropertyValue('--shadow-color').replace('0.001', '0.473')}`);
            }
        }
    }
}

Main.init();