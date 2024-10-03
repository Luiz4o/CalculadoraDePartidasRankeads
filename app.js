

let heroRank = calculatePoints(57,1)


// Função para calcular os pontos do heroi
function calculatePoints(wins, loses){
    return discoverRank(wins-loses)
}

// Função com base nos pontos descobertos do herói defome sua classificação, retorna um vetor com primeiro elemento sendo os pontos(Number) e segundo sendo a classificação (String)
function discoverRank(points){
    let rank = [points]
    if(points<=10){
        rank[1]="Ferro"
    } else if (points<=20){
        rank[1]="Bronze"
    }else if (points<=50){
        rank[1]="Prata"
    }else if (points<=80){
        rank[1]="Ouro"
    }else if (points<=90){
        rank[1]="Diamante"
    }else if (points<=100){
        rank[1]="Lendário"
    }else if (points>100){
        rank[1]="Imortal"
    }else{
        rank[1]="Sem classificação"
    }
    return rank
}

console.log(`O Herói tem de saldo de ${heroRank[0]} pontos e está no nível de ${heroRank[1]}`)
