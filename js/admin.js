// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZm_55Cl2DFror0efHEmyRRaJWblUDRk4",
    authDomain: "portifolio-a74bc.firebaseapp.com",
    databaseURL: "https://portifolio-a74bc.firebaseio.com",
    projectId: "portifolio-a74bc",
    storageBucket: "",
    messagingSenderId: "889584705371",
    appId: "1:889584705371:web:f167dc230a4da877"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//var db = firebase.database(); não tou utilizando

var tb = document.getElementById('tb')
var tbs = tb.style
tb.innerHTML = `
<table>
    <tr class='tr'>
        <td>Nome</td>
        <td>Email</td>
        <td>Mensagem</td>
    </tr>
    <tr class='tr'>
        <td><input readonly="readonly" value="salknfasklfna" type="text"></td>
        <td><input readonly="readonly" value="salknfasklfnasnfakfl" type="text"></td>
        <td><textarea row="2" readonly="readonly">Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </textarea></td>
    </tr>
    <tr class='tr'>
        <td>4</td>
        <td>5</td>
        <td>6</td>
    </tr>
</table>
`
var query = firebase.database().ref("dados").orderByKey();
query.once("value")
    .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        // key will be "ada" the first time and "alan" the second time
        var key = childSnapshot.key;
        // childData will be the actual contents of the child
        var childData = childSnapshot.val();
        alert(key + "     " + childData.nome + "    " + childSnapshot)
    });
});

 /* STYLE */
tbs.color = 'white'
tbs.width = '75%'
tbs.margin = '0 auto'