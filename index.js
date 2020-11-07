const followMouse = () => {
    const reveal = document.querySelector('.reveal')
    const reveal__el = document.querySelectorAll('.reveal__el')
    const mouse = { x: 0.5, y: 1 }
    let isHover = false
    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX - (reveal.offsetLeft + (reveal.offsetWidth / 2)));
        mouse.y = (event.clientY - (reveal.offsetTop +(reveal.offsetHeight / 2)));
        reveal__el.forEach((element, key) => {
            if(isHover) {
                element.style.transform = `translate3d(${mouse.x / (1 + ((key + 1) / 10))}px, ${mouse.y / (1 + ((key + 1) / 10))}px, 0)`
            }
        });
    })

    reveal.addEventListener('mouseenter', () => { isHover = true })
    reveal.addEventListener('mouseleave', () => {
        isHover = false
        reveal__el.forEach(element => {
            element.style.transform = 'translate3d(0px, 0px, 0)'
        });
    })
    
}

window.onload = followMouse()