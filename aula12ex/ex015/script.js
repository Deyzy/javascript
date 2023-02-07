function verificar() {
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute ('src', 'criancaH.png')
            } else if (idade < 25){
                // jovem
                img.setAttribute ('src', 'jovemH.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute ('src', 'adultoH.png')
            } else {
                //idoso
                img.setAttribute ('src', 'velho.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute ('src', 'criancaM.png')
            } else if (idade < 25){
                //jovem
                img.setAttribute('src', 'jovemM.png')
            }else if (idade < 50){
                //adulto
               img.setAttribute('src', 'adultaM.png')
            } else {
                //idoso
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center' // centralizar o texto 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}