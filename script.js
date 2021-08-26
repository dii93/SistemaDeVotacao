function btn() {

    let nome = document.getElementById('nome').value;
    let anoNac = parseInt(document.getElementById('anoNac').value);
    let anoAtu = parseInt(document.getElementById('anoAtu').value);
    let res = document.getElementById('resposta');

    let classificacao = '';

    let idade = anoAtu - anoNac;

    if (idade < 16) {
        classificacao = 'Voçê não tem a idade para votar ainda'
    } else if (idade < 18 || idade >= 65) {
        classificacao = 'Voçê tem a opção para votar ou não'
    } else {
        classificacao = 'Voçê tem que votar! obrigatoriamente'
    }

    res.textContent = `Óla ${nome}, ${classificacao}, sua idade é de ${idade} anos.`
}