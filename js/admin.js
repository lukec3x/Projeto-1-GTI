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
//var db = firebase.databaseooo(); não tou utilizando

var tb = document.getElementById('tb')
var tbs = tb.style
var query = firebase.database().ref("dados").orderByKey();
query.once("value").then(function(snapshot) {
    var s = `<tr class="tr"><td><span>Nome</span></td><td><span>Email</span></td><td><span>Mensagem</span></td></tr>`
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
/*
var query = firebase.database().ref("dados").orderByKey();
query.once("value")
    .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        // key will be "ada" the first time and "alan" the second time
        var key = childSnapshot.key;
        // childData will be the actual contents of the child
        var childData = childSnapshot.val();
        alert(key + "     " + childData.nome + "    " + childData.email + "    " + childData.mensagem + "     " +childData.data)
    });
});
*/
 /* STYLE */
tbs.color = 'white'
tbs.width = '75%'
tbs.margin = '0 auto'

var tpl = [
    '<div class="popover clockpicker-popover">',
        '<div class="arrow"></div>',
        '<div class="popover-title">',
            '<span class="clockpicker-span-hours text-primary"></span>',
            ' : ',
            '<span class="clockpicker-span-minutes"></span>',
            '<span class="clockpicker-span-am-pm"></span>',
        '</div>',
        '<div class="popover-content">',
            '<div class="clockpicker-plate">',
                '<div class="clockpicker-canvas"></div>',
                '<div class="clockpicker-dial clockpicker-hours"></div>',
                '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',
            '</div>',
            '<span class="clockpicker-am-pm-block">',
            '</span>',
        '</div>',
    '</div>'
].join('');