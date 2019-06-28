var firebaseConfig = {
    apiKey: "AIzaSyCZm_55Cl2DFror0efHEmyRRaJWblUDRk4",
    authDomain: "portifolio-a74bc.firebaseapp.com",
    databaseURL: "https://portifolio-a74bc.firebaseio.com",
    projectId: "portifolio-a74bc",
    storageBucket: "",
    messagingSenderId: "889584705371",
    appId: "1:889584705371:web:f167dc230a4da877"
};

firebase.initializeApp(firebaseConfig);

document.getElementById('btn').addEventListener('click', function(x){
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var desc = document.getElementById('msg').value
    var dt = new Date

    var y = document.getElementsByClassName('alert')[1]
    var x = document.getElementsByClassName('alert')[0]
    x.style.display = 'none'
    y.style.display = 'none'
    document.getElementById('confirm').style.display = 'none'

    if (email == "") {
        y.style.display = 'block'
    }
    if (nome == "") {
        x.style.display = 'block'
    }
    if (!(email == "" || nome == "")) {
    /////////////////////////////////////////////////////////////////////////
/*
        var ref = firebase.database().ref("dados/");
        ref.once("value")
        .then(function(snapshot) {
            var a = snapshot.exists();  // true
            //var b = snapshot.child("name").exists(); // true
            var b = snapshot.child("lucas").exists(); // true
            var c = snapshot.child("name/first").exists(); // true
            var d = snapshot.child("name/middle").exists(); // false
            alert(a + " " + b + " " + c + " " + d)
        });*/
        
        var entrada = {}
        entrada.nome = nome
        entrada.email = email
        entrada.data = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear() + " | " + 
        dt.getHours() + ":" + dt.getMinutes()
        entrada.mensagem = desc

        firebase.database().ref('dados').push(entrada).then(function(data){
            //caso queira que faça alguma ação
        }).catch(function(error){
            alert(error)
            console.error(error)
        })
        document.getElementById('nome').value = ''                                                                                                                   
        document.getElementById('email').value = ''
        document.getElementById('msg').value = ''
        //window.location.href = 'contato.html'
        setTimeout(function(){
            document.getElementById('confirm').style.display = 'block'
        }, 500)
    }
})       
