/// <reference path="references.d.ts"/>

// Default language is English so you don't have to add English strings here. Nevertheless when using
// variables inside translated strings we need to specify in the template a system reference to the string with the variable.
// In this case, you can add it here.
let english = {
};

let french = {
    "This is Sebastien Dan's boilerplate for webapps based on Angular 1.5 with Typescript and Material Design": "Voici un boilerplate develope par Sebastien Dan pour builder une webapp sur fond d'Angular 1.5 avec Typescript et Material Design",
    'English': 'Anglais',
    'French': 'Francais',
    'Home': "Page d'accueil",
    'Data table': 'Tableau de donnees',
    'Add data': 'Ajouter une donnee',
    'Brand': 'Marque',
    'Model': 'Modele',
    'Colour': 'Couleur',
    'Save new data': 'Sauver la nouvelle donnee'
};

export =[
    "$translateProvider", ($translateProvider: any) => {
        $translateProvider
            .useSanitizeValueStrategy('sanitizeParameters')
            .translations('en', english)
            .translations('fr', french)
            .preferredLanguage('en');
    }
];
