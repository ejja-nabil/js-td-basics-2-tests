/*****************************
* CODING CHALLENGE 2
*/

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, L'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
	et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
	N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen)
4. BONUS : Mary jour aussi au basket, et son équipe a marqué 97, 134 et 105 points.
	Comme avant, imprimez le gagnant en moyenne dans la console.
	INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision. 
5. Changez là aussi les scores pour générer différents gagnants,
	en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus

const scoreJohn1 =89;
const scoreJohn2 =120;
const scoreJohn3 =103;

const scoreMike1 =116;
const scoreMike2 =94;
const scoreMike3 =123;

const averageJohn=(scoreJohn1+scoreJohn2+scoreJohn3)/3;
const averageMike=(scoreMike1+scoreMike2+scoreMike3)/3;

if (averageJohn > averageMike) {
    gagnant = 'John';
} else if (averageMike > averageJohn) {
    gagnant = 'Mike';
} else {
    gagnant = 'Match nul';
}

// avec bonus

const scoreMary1 =97;
const scoreMary2 =134;
const scoreMary3 =105;

const averageMary = (scoreMary1+scoreMary2+scoreMary3)/3

if (averageJohn > averageMike && averageJohn > moyenneMary) {
    console.log(`John a gagné avec un score moyen de ${averageJohn}.`);
} else if (averageMike > averageJohn && moyenneMike > moyenneMary) {
    console.log(`Mike a gagné avec un score moyen de ${averageMike}.`);
} else if (moyenneMary > averageJohn && moyenneMary > averageMike) {
    console.log(`Mary a gagné avec un score moyen de ${moyenneMary}.`);
} else {
    console.log('Match nul');
}