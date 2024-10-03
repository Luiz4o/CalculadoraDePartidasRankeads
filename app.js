

let personalRank = calculateRank(45,13)

function calculateRank(wins, loses){
    return discoverRank(wins-loses)
}

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

console.log(`O Herói tem de saldo de ${personalRank[0]} pontos e está no nível de ${personalRank[1]}`)