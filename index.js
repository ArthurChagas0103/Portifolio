function mudarCor() {
    if (window.scrollY > 420) {
        document.getElementById('navbar').style.backgroundColor = '#6759c2'
    }
    else{
        document.getElementById('navbar').style.backgroundColor = 'rgba(43, 66, 85, 0)'
    }
}
window.addEventListener('scroll', mudarCor)

