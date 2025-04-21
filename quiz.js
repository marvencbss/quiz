function medalha(respostas) {
    let pontuacao = 0;

    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i]) {
            pontuacao++;
        }
    }

    if (pontuacao === 5) {
        return "Ouro";
    } else if (pontuacao >= 3) {
        return "Prata";
    } else {
        return "Bronze";
    }
}
