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

var tb = document.getElementById('tb')

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (user.uid == 'EkRvCmLZSRde5HYHl50IQSlgQ0I2') {
            //alert('Logado')
            var tbs = tb.style
            var query = firebase.database().ref("dados").orderByKey();
            query.once("value").then(function(snapshot) {
                var s = `<tr class="tr"><td class='titulo'><span>Nome</span></td><td class='titulo'><span>Email</span></td><td class='titulo'><span>Mensagem</span></td></tr>`
                snapshot.forEach(function(childSnapshot) {
                    // Valor da chave
                    var key = childSnapshot.key
                    var childData = childSnapshot.val()
                    s += "<tr class=\"tr\">" + 
                    "<td><input readonly=\"readonly\" value=\"" + childData.nome + "\" type=\"text\"></td>" + 
                    "<td><input readonly=\"readonly\" value=\"" + childData.email + "\" type=\"email\"></td>" +
                    "<td><textarea row=\"1\" readonly=\"readonly\">" + childData.mensagem + "</textarea></td>" +
                    "</tr>"
                })
            
                //alert(s)
                tb.innerHTML = "<table>" + s + "</table>"
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
            var s = `<tr class="tr"><td class='titulo'><span>Nome</span></td><td class='titulo'><span>Email</span></td><td class='titulo'><span>Mensagem</span></td></tr>`
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key
                var db = childSnapshot.val()
                
                if(camp == db.nome.toUpperCase() || camp == db.email.toUpperCase() || camp == db.mensagem.toUpperCase()){
                    //console.log(key + " " + db.nome.toUpperCase())
                    
                    s += "<tr class=\"tr\">" + 
                    "<td><input readonly=\"readonly\" value=\"" + db.nome + "\" type=\"text\"></td>" + 
                    "<td><input readonly=\"readonly\" value=\"" + db.email + "\" type=\"email\"></td>" +
                    "<td><textarea row=\"1\" readonly=\"readonly\">" + db.mensagem + "</textarea></td>" +
                    "</tr>"
    
                }
            })
            if(s == `<tr class="tr"><td class='titulo'><span>Nome</span></td><td class='titulo'><span>Email</span></td><td class='titulo'><span>Mensagem</span></td></tr>`){
                s = '<p>Não Encontrado!</p>'
            }
            tb.innerHTML = "<table>" + s + "</table>"
        })
    }
}