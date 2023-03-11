/*Configurando Horas*/
var agora = new Date()
var hora = agora.getHours()
var horas = document.getElementById('hora')
horas.innerHTML = `Agora são ${hora} horas.`

var fundo = document.getElementById('fundo')
if( hora >= 5 && hora < 13){
    fundo.style.backgroundColor = '#F2E8B8'
    var dia = document.getElementById('img')
    dia.style.backgroundImage = "url('https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
} else if( hora >=13 && hora < 18){
    fundo.style.backgroundImage= "linear-gradient(to right, orange, #FE4B08)"
    var tarde = document.getElementById('img')
    tarde.style.backgroundImage = "url('https://th.bing.com/th/id/R.6b0d1c2ddd30c70680d73f6e78b53163?rik=xarVqoiv6Y3kHw&pid=ImgRaw&r=0')"
}
if(hora >= 18 || hora < 5){
fundo.style.backgroundColor= 'rgba(0, 0, 0, 0.655)'
var noite = document.getElementById('img')
noite.style.backgroundImage = "url('https://th.bing.com/th/id/R.1137e720b23e2da6613980b6be22fd97?rik=3Oc662De2YfuQA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-hEgpgz9rpOc%2fUtiAYlswwxI%2fAAAAAAAADFo%2fgoR1WSyLdZo%2fs1600%2fnoite-azul.jpg&ehk=TB0Ae4OE1rUyvFgAJxEFYx24OmgoN8ujoOE%2bAoWx1eM%3d&risl=&pid=ImgRaw&r=0')"
}
