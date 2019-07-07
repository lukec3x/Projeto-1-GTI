function abrir(n) {
    document.getElementById('light').innerHTML = "<img id='i' src='" + `img/img_trabalhos_${n}.jpg` + "'>" 

    var w = window.screen.width
    var h = window.screen.height //document.body.clientHeight
    //window.screen.height | Pega o tamanho da tela 
    //document.body.clientHeight | Pega o tamanho do conteudo na tela
    
    console.log(w, h, (h * 71 / 100))
    console.log((screen.width - document.body.clientWidth)/2)
    console.log(document.body.clientWidth, (document.body.clientWidth / 2) - (document.getElementById('i').width /2))
    
    // Pega o valor equivalente a 71% do tamanho da tela
    var larguraImg = (h * 71 / 100) + 'px'
    document.querySelector('img').style.height = larguraImg
    //document.querySelector('img').style.width = 'auto'

    // Adiciona oas botões de navegação na imagem
    document.getElementById('light').innerHTML += "<div id='esq' style='top: 0; background: blue;" + "width: 10%; height: " +
    larguraImg + "; position: absolute;'></div>" +
    "<div id='dir' style='left: 90%; top: 0; background: red;" + "width: 10%; height: " + larguraImg +
    "; position: absolute;'></div>"

    document.getElementById('light').style.display= 'block'
    document.getElementById('fade').style.display='block'

    //Centraliza o slide
    document.getElementById('light').style.left = ((document.body.clientWidth /2) - (document.getElementById('i').width) /2) + 'px'
}

function fechar() {
    document.getElementById('light').style.display='none'
    document.getElementById('fade').style.display='none'		
}

