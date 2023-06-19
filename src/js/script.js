window.addEventListener('DOMContentLoaded', () => {
    
    let count = document.querySelector('[data-count]');

    const inc = document.querySelectorAll('[data-inc]')
    const dec = document.querySelectorAll('[data-dec]')
    let number = document.querySelectorAll('[data-number]')

    const total = document.querySelector('[data-total]')
    const price = document.querySelectorAll('[data-price]')

    let allNumber = 0
    let sum = 0

    let totalSum = 1279;
    total.textContent = totalSum + '₽'

    inc.forEach((el,i) => {
        el.addEventListener('click', () => {
            if(number[i].textContent > 0) {
                number[i].textContent = --number[i].textContent
                count.textContent = +count.textContent - 1
                totalSum = totalSum - +price[i].textContent.slice(0, 3)
                total.textContent = totalSum + '₽'
            }
        })
    })

    dec.forEach((el,i) => {
        el.addEventListener('click', () => {
            number[i].textContent = ++number[i].textContent
            count.textContent = +count.textContent + 1
            totalSum = totalSum + +price[i].textContent.slice(0, 3)
            total.textContent = totalSum + '₽'
        })
    })


})