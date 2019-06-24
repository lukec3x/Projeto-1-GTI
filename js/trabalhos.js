function abrir(n) {
    document.getElementById('light').innerHTML = "<img id='i' src='" + `img/img_trabalhos_${n}.jpg` + "'>"
    document.getElementById('light').style.display= 'block'
    document.getElementById('fade').style.display='block'
    

    var w = window.screen.width
    var h = document.body.clientHeight //window.screen.height
    
    console.log(w, h, (h * 71 / 100))
    console.log((screen.width - document.body.clientWidth)/2)
    console.log(document.body.clientWidth, (document.body.clientWidth / 2) - (document.getElementById('i').width /2))
    
    document.querySelector('img').style.height = (h * 71 / 100) + 'px'
    //document.querySelector('img').style.width = 'auto'

    document.getElementById('light').style.left = ((document.body.clientWidth/2) - (document.getElementById('i').width)/2) + 'px'
}

function fechar() {
    document.getElementById('light').style.display='none'
    document.getElementById('fade').style.display='none'		
}

