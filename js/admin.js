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

// Fiz a instancia dessa var global para resolver problemas de escopo
var tb = document.getElementById('tbody')
var th = document.getElementById('thead')

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (user.uid == 'EkRvCmLZSRde5HYHl50IQSlgQ0I2') {
            //alert('Logado')
            var query = firebase.database().ref("dados").orderByKey();
            query.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var childData = childSnapshot.val()
                    tb.innerHTML += "<tr class=\"tr\">" + 
                    "<td><input readonly=\"readonly\" value=\"" + childData.nome + "\" type=\"text\"></td>" + 
                    "<td><input readonly=\"readonly\" value=\"" + childData.email + "\" type=\"email\"></td>" +
                    "<td><textarea row=\"1\" readonly=\"readonly\">" + childData.mensagem + "</textarea></td>" +
                    "</tr>"
                })
            
                //alert(s)
            })
        } else {
            alert('Você não tem permissão para acessar essa página')
        }
    } else {
        console.log('Deslogando...')
        window.location.href = 'login.html'
    }
})

// Função para deslogar
function clk() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });
}

function busca(){
    var camp = document.getElementById('camp').value.toUpperCase()
    console.log(camp)
    if (!(camp == '')){
        var query = firebase.database().ref("dados").orderByKey();
        query.once("value").then(function(snapshot) {
            var s = ''
            snapshot.forEach(function(childSnapshot) {
                var db = childSnapshot.val()
                
                if (camp == db.nome.toUpperCase() || camp == db.email.toUpperCase() || camp == db.mensagem.toUpperCase()) {
                    //console.log(key + " " + db.nome.toUpperCase())
                    
                    s += "<tr class=\"tr\">" + 
                    "<td><input readonly=\"readonly\" value=\"" + db.nome + "\" type=\"text\"></td>" + 
                    "<td><input readonly=\"readonly\" value=\"" + db.email + "\" type=\"email\"></td>" +
                    "<td><textarea row=\"1\" readonly=\"readonly\">" + db.mensagem + "</textarea></td>" +
                    "</tr>"
                }
            })
            if(s == ''){
                s = '<p>Não Encontrado!</p>'
            }
            tb.innerHTML = s
        })
    }
}