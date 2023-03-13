
function clicar(){
    var ano_de_nascimento = document.getElementById('ano_de_nascimento')
    var ano_de_nascimento = Number(ano_de_nascimento.value)
    var idade = 2023-ano_de_nascimento

    var sexoM = document.getElementById('Masculino').checked
    var sexoF = document.getElementById('Feminino').checked

    var foto = document.getElementById('foto')
    foto.style.width = '200px';
    foto.style.height = '200px';
    foto.style.borderRadius = '50%';
    foto.style.backgroundColor = 'black';
    foto.style.margin = 'auto'
    var status = document.getElementById('idade')
    
/*Caso seja homem*/
if (ano_de_nascimento > 2023 || ano_de_nascimento == 0){
    alert(`[Erro] Dados inválidos! porfavor, verifique os dados e tente novamente!`)
    foto.style.width = '0px';
    foto.style.height = '0px';
} else if (sexoM == true && idade >= 50){
        foto.style.backgroundImage = "url('https://janegoodall.at/wp-content/uploads/2021/01/WalterKoehler_Ehrenbotschafter_cHelmutTremmel-768x1088.jpg')"
        status.innerHTML = `Detectamos: Homem de ${idade} anos.`

    } else if (sexoM == true && idade >= 18 && idade < 50){
        foto.style.backgroundImage = "url('https://i.pinimg.com/originals/b0/e6/41/b0e64177d74dfb8d72b0c279334e6b4d.jpg')"
        foto.style.backgroundPosition = 'center top' 
        status.innerHTML = `Detectamos: Homem de ${idade} anos.`
    } else if (sexoM == true && idade >= 13 && idade < 18){
        foto.style.backgroundImage = "url('https://img.quizur.com/f/img5c0ed3812db672.13696380.jpg?lastEdited=1544475532')"
        status.innerHTML = `Detectamos: Adolescente homem de ${idade} anos.`
    } else if (sexoM == true && idade >= 3 && idade < 13){
        foto.style.backgroundImage = "url('https://th.bing.com/th/id/R.ba41075e19c6e43281895b795b35ca95?rik=SvdUnOzOsmjZXQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-TahvRCjQN-w%2fULXig2VyGfI%2fAAAAAAAAI7E%2fvhVXXflkG3Y%2fs320%2fIMG_0169.JPG&ehk=IfnIkv1emlEzrotIPGiq4Tkhk%2bFY70XjFkuUgjAVkzU%3d&risl=&pid=ImgRaw&r=0')"
        status.innerHTML = `Detectamos: Menino de ${idade} anos.`
    } else if (sexoM == true && idade >= 1 && idade < 3){
        foto.style.backgroundImage = "url('https://th.bing.com/th/id/R.e02f16290502197c134d1c967f7d6c13?rik=G1VtfopPWvybHQ&pid=ImgRaw&r=0')"
        foto.style.backgroundPosition = 'center top'
        status.innerHTML = `Detectamos: Bebê menino de ${idade} anos.`
    } 

/*Caso seja mulher*/
    if (sexoF == true){
        if (idade >= 50){
            foto.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/mulher-idosa-feliz-bonita-88121523.jpg')"
            foto.style.backgroundPosition = 'center top'
            status.innerHTML = `Detectamos: Mulher de ${idade} anos`
        } else if (idade >= 18 && idade < 50){
            foto.style.backgroundImage = "url('https://th.bing.com/th/id/R.952e0ec20f91d7d99a88a223f79ae6ec?rik=RryS1UbxoP3lHQ&pid=ImgRaw&r=0')"
            foto.style.backgroundPosition = 'center top'
            status.innerHTML = `Detectamos: Mulher de ${idade} anos`
        } else if (idade >=13 && idade < 18){
            foto.style.backgroundImage = "url('https://th.bing.com/th/id/R.c53b9b90da88369f8d44007ab787b4ea?rik=gJaHjTAW9KQyUg&pid=ImgRaw&r=0')"
            foto.style.backgroundPosition = 'center top'
            status.innerHTML = `Detectamos: Adoleceste mulher de ${idade} anos`
        } else if (idade >= 3 && idade < 13){
            foto.style.backgroundImage = "url('https://artesanato.dicasereviews.com/wp-content/uploads/2019/01/1547035236_975_preCortes-de-cabelo-meninas-2019-e-tudo-sobre-cuidados-com-os-cabelos-de-crian%C3%A7as.jpg')"
            foto.style.backgroundPosition = 'center top'
            status.innerHTML = `Detectamos: Menina de ${idade} anos.`
        } else if (idade >= 1 && idade < 3){
            foto.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.6-0gchCH0U6x1aqUGAjUzAAAAA?pid=ImgDet&rs=1')"
            foto.style.backgroundPosition = 'center top'
            status.innerHTML = `Detectamos: Bebê menina de ${idade} anos.`
        } 
    }

} 
