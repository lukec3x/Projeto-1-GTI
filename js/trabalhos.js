function abrir(n) {
    // Faz a validação no número da imagem
    var qntN = n.toString().length
    var x = 0
    if (qntN == 1) {
        x = '00' + n
    } else if (qntN == 2) {
        x = '0' + n
    } else if (qntN == 3) {
        x = n
    }

    // valor da ultima imagem no site em trabalhos
    var ultImag = 9

    document.getElementById('light').innerHTML = "<img id='i' src='" + `img/img_trabalhos_${x}.jpg` + "'>" 

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
    document.getElementById('light').innerHTML += "<div id='esq' style='top: 0; width: 10%; height: " +
    larguraImg + "; position: absolute;'>" +
    "<img onclick='ant("+ n +")' id='ant' src='img/ant.png'>" +
    "</div>" +
    "<div id='dir' style='left: 90%; top: 0; width: 10%; height: " + larguraImg +
    "; position: absolute;'>" +
    "<img onclick='prox(" + n +", " + ultImag +")' id='prox' src='img/prox.png'>" +
    "</div>"

    document.getElementById('light').style.display= 'block'
    document.getElementById('fade').style.display='block'

    //Centraliza o slide
    document.getElementById('light').style.left = ((document.body.clientWidth /2) - (document.getElementById('i').width) /2) + 'px'

    //Centralizar os botões de passar e voltar
    document.getElementById('prox').style.position = 'relative'
    document.getElementById('ant').style.position = 'relative'

    var x = ((document.getElementById('i').height /2) - (45 /2)) + 'px'
    document.getElementById('prox').style.top = x
    document.getElementById('ant').style.top = x
    console.log((45 /2) + 'px')
    console.log((larguraImg /2))

    if (n == 1) {
        document.getElementById('ant').style.display = 'none'
    }
    if (n == ultImag) {
        document.getElementById('prox').style.display = 'none'
    }
}

function ant(n) {
    if (!(n == 1)){
        n--
        abrir(n)
    }
}

function prox(n, u) {
    if (!(n == u)) {
        n++
        abrir(n)
    }
}

function fechar() {
    document.getElementById('light').style.display='none'
    document.getElementById('fade').style.display='none'		
}

