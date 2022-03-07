const container = document.querySelector('.container')
const btnBlack = document. createElement('button')
const btnGray = document. createElement('button')
const btnRGB = document. createElement('button')
const btnSize = document. createElement('button')
const section = document.querySelector('.section')
const resetButton = document. createElement('button')
const buttonsContainer = document.querySelector('.buttons')


function creatDivs(col,rows) {
    for (let i = 0; i < (col * rows); i++){
        const div = document.createElement('div')
        div.style.border = `1px solid red`;
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }


}

creatDivs(4,4)

function grayColor() {
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = 'GRAY'
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let RNum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`;
            box.style.background = GrayScale; 

        }))
    
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}
grayColor()

function blackColor() {
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = 'black'
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';

        }))
    
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}

blackColor()

function rgbColor() {
    const boxs = container.querySelectorAll('.box')
    btnRGB.textContent = 'RGB'
    btnRGB.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${R},${G},${B})`
        }))
    
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}

rgbColor()


function reset() {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => {
        box.remove();
    })
}

function resize() {
    btnSize.textContent = 'Gride Size'
    btnSize.addEventListener('click', () => {
        let user = prompt ('define size of grid')
        if (user === null || user < 1) {
            reset()
            creatDivs(16,16)
            blackColor()
            grayColor()
            rgbColor()
        } 
        else {
            reset()
            creatDivs(user, user)
            blackColor()
            grayColor()
            rgbColor()
        }
        
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}

resize()



function resetBtn(){
    resetButton.textContent = 'Reset Grid'
    resetButton.addEventListener('click', () => {
        reset()
        creatDivs(16,16)
        blackColor()
        grayColor()
        rgbColor()

    } )


    buttonsContainer.appendChild(resetButton).classList.add('btn')
    
}

resetBtn()