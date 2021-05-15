let slideIndex = 1
showSlides(slideIndex)


function nextSlide() {
    showSlides(slideIndex += 1)
}

function previousSlide() {
    showSlides(slideIndex -= 1)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}
function showSlides(n) {
    
    let slides = document.getElementsByClassName("item")
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    let selected = document.getElementsByClassName("el" + slideIndex)
    document.getElementsByClassName("el1")[0].style.backgroundColor = "red"
    document.getElementsByClassName("el2")[0].style.backgroundColor = "red"
    document.getElementsByClassName("el3")[0].style.backgroundColor = "red"
    selected[0].style.backgroundColor = "blue"

    for (let slide of slides) {
        slide.style.display = "none"
    }

    slides[slideIndex - 1].style.display = "flex"
}
setInterval(function() {
    nextSlide()
}, 3000)
