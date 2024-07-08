function Enviar(){
    let NomeAlimento1 = document.getElementById('NomeAlimento1').value
    let NomeAlimento2 = document.getElementById('NomeAlimento2').value
    let NomeAlimento3 = document.getElementById('NomeAlimento3').value
    let Usuario = document.getElementById('Usuario').value
    let data = document.getElementById('data').value

    let fruta = document.querySelector("input[name='fruta']:checked").value
    let cor = document.querySelector("input[name='cor']:checked").value
    let qualidade = document.querySelector("input[name='qualidade']:checked").value
    let estresse = document.querySelector("input[name='estresse']:checked").value


    alert('Seu primeiro alimento favorito é: '+NomeAlimento1+
    '\n '+'Seu segunndo alimento favorito é: '+NomeAlimento2+
    '\n'+'Seu terceiro alimento favorito é: '+NomeAlimento3+
    '\n'+'Seu usuário é: '+Usuario+
    '\n'+'A data de envio é: '+data+
    '\n'+'A fruta que você se identifica é: '+fruta+
    '\n'+'Sua cor faorita é: '+cor+
    '\n'+'Sua principal qualidade é: '+qualidade+
    '\n'+'O que mais te estressa é: '+estresse)

    window.location.href='Autoconhecendo2.html'
}

function voltar(){

    window.location.href='Autoconhecendo.html'

}