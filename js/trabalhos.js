function abrir(n) {
    document.getElementById('img').innerHTML = "<img src='" + `img/img_trabalhos_${n}.jpg` + "'>"
    document.getElementById('light').style.display= 'block'
    document.getElementById('fade').style.display='block'
}

function fechar() {
    document.getElementById('light').style.display='none'
    document.getElementById('fade').style.display='none'		
}