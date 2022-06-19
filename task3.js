window.addEventListener('load', function () {
    egg = this.document.querySelector('.egg');
    basket = this.document.querySelector('.basket');

    //generate random value of x of pixel and display it
    let xIndex = Math.floor(Math.random() * (window.innerWidth - 100))
    egg.style.top = '0px';
    egg.style.left = xIndex + 'px'
    egg.classList.remove('hide')

    let i = 20;
    let timerId = setInterval(function () {
        egg.style.top = i + 'px'
        i += 20;
        if (i >= window.innerHeight - 100 && Math.abs(getPositionNumber(egg.style.left) - getPositionNumber(basket.style.left)) < 100) {
            egg.remove();
            clearInterval(timerId)
        }
        if (i >= window.innerHeight - 100
            && (getPositionNumber(egg.style.left) >= getPositionNumber(basket.style.left)
                || window.innerWidth - getPositionNumber(egg.style.left) <= window.innerWidth - getPositionNumber(basket.style.left) - 100)) {
            egg.src = './crackedEgg.png';
            clearInterval(timerId)
        }

    }, 100)

    window.addEventListener('keydown', function (event) {
        if (event.key == 'ArrowRight') {
            let leftPosition = basket.style.left.slice(0, -2);
            leftPosition = +leftPosition + 50;
            if (leftPosition > window.innerWidth - basket.width) {
                basket.style.left = window.innerWidth - basket.width + 'px';
                return
            }
            basket.style.left = leftPosition + 'px';
        }
        else if (event.key == 'ArrowLeft') {
            let leftPosition = basket.style.left.slice(0, -2);
            leftPosition = +leftPosition - 50;
            if (leftPosition < 0) {
                basket.style.left = '0px';
                return
            }
            basket.style.left = leftPosition + 'px';
        }
    })
})

function getPositionNumber(text) {
    return text.slice(0, -2)
}
