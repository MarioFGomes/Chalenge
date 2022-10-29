function CriaCalculadora() {
return {
    display: document.querySelector('.display'),

    Inicia() {
        this.clickButton();
        this.PressEntre();
        this.Keypress();
    },

    clickButton() {
        document.addEventListener('click', (e) => {
            const el = e.target;
            
            if (el.classList.contains('btn-num')) {
                
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                
                this.ClearDisplay();
            }

             if (el.classList.contains('btn-del')) {
                
                this.ClearOne();
             }
            
             if (el.classList.contains('btn-eq')) {
                
                this.Calc();
            }
        })
    },
    btnParaDisplay(valor) {
        this.display.value+=valor
    },

    ClearDisplay() {
        this.display.value = '';
    },

    ClearOne() {
        this.display.value = this.display.value.slice(0, -1);
    },

    Calc() {
        let value = this.display.value;
        try {
            value = eval(value);

            if (isNaN(value)) {
                alert('Invalid Operation');
                this.display.value=''
                return;
            }

            this.display.value = String(value);
        } catch (e) {
            alert('Invalid Operation');
            this.display.value=''
                return;
        }
    },
    PressEntre() {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.Calc();
            }
        })
    },
    Keypress() {
        this.display.addEventListener('keypress', e => {
            let button = document.querySelectorAll('button');
            button.forEach((value,index) => {
                if (e.key == value.innerText) {
                    value.style.backgroundColor = "#7A7FD6";
                    setTimeout(() => {
                    value.style.backgroundColor = "#e7e4e4";
                    },140)
                }
                
            })
            
            
        })
    }
};
}

const Calculadora = CriaCalculadora();
Calculadora.Inicia();
