# CV - Mathias Meier (ASSIGNMENT 2)
## Donnée
  - Déployer votre siteweb en mode gh-pages (branch) dans le repository heg-web

  - Le site doit être minimifié (gulp build) utiliser bootstrap et au moins un plugin jQuery.
Le code source doit également se trouver dans le git master et inclure un fichier Readme.md qui décrit le processus et les outils utilisés c'est à dire. En bref, quel outil fait quoi et quelles commandes utiliser. Une sorte de mini guide pour que un nouveau collègue développeur puisse créer son propre cv de la même facon. (Github permet directement d'éditer le fichier ou sinon un editeur qui support markdown comme par exemple http://dillinger.io/ )
La version de votre code source évalué sera celle que vous aurez tagé/release avec le nom 2.0.0 (avant la date de rendu de ce devoir!)

## Ordinateur et informations
- MacBook Pro Retina 15'' fin 2013 
- Mac OS X El Capitane

## Logiciels/tools utilisés
| Nom | Description |
| ------:| -----------:|
| Terminal   | Exécution des commandes. |
| Yeoman | Outil qui va vous permettre de mettre en place le projet. |
| Gulp    | Task runner c’est à dire qu’il effectue des tâches pour vous. Dans le développement web, vous l’utiliserez pour des tâches front-end. |
| Bower | Il s'agit d'un autre gestionnaire de paquets, au même titre que npm. Ces deux gestionnaires de paquets ne gèrent pas les dépendances de la même manière. À titre d'explication, npm gère automatiquement les dépendances de vos paquets, alors qu'il incombe au développeur de décrire les dépendances lorsque vous utilisez bower. De ce fait, il est assez courant d'utiliser npm lorsque vous programmez votre serveur et bower pour vos projets front-end. |
| Intellij / Sublimtext | Logiciels utilisé pour coder. |
| Google chrome | Navigateur utilisé pour tester le rendu du site web. |
| Mozilla firefox | Navigateur utilisé pour tester le rendu du site web. |
| Safari | Navigateur utilisé pour tester le rendu du site web. |
| Internet explorer | Navigateur utilisé pour tester le rendu du site web. |
| ClipX | Outil pratique permettant de garder en sauvegarde dans le presse-papier plusieurs copier/coller.  |
| Git | Logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2. |
| GitHub | GitHub est un service web d'hébergement et de gestion de développement de logiciels, utilisant le programme Git. |
| PhotoFiltre | gratuiciel créé par Antonio Da Cruz. Outre les traitements classiques de l'image (recadrage, contraste, gamma, etc.), il dispose d'une centaine de filtres pour améliorer et transformer des photos numériques. Il permet également d'ajouter des fonctionnalités à PhotoFiltre grâce un système de plugins.  |
| NodeJS | Framework libre événementiel en JavaScript orienté vers les applications réseau. |
| color.adobe | Site internet comportant différentes palettes de couleur. https://color.adobe.com/ |
| Validateur W3c (html/css)   | Ce validateur vérifie la validité de balisage des documents Web en HTML , CSS... |

## Languages utilisés
| Nom | Description |
| ------:| -----------:|
| HTML   | C'est un langage dit de « marquage » (de « structuration » ou de « balisage ») dont le rôle est de formaliser l'écriture d'un document avec des balises de formatage. |
| CSS   | C'est un langage informatique utilisé sur l'internet pour mettre en forme les fichiers HTML ou XML. Ainsi, les feuilles de style, aussi appelé les fichiers CSS, comprennent du code qui permet de gérer le design d'une page en HTML. |
| JAVASCRIPT   | Langage de script orienté objet principalement utilisé dans les pages HTML. A l'opposé des langages serveurs (qui s'exécutent sur le site), Javascript est exécuté sur l'ordinateur de l'internaute par le navigateur lui-même. |
| JQUERY   | Framework Javascript sous licence libre qui permet de faciliter des fonctionnalités communes de Javascript. L'utilisation de cette bibliothèque permet de gagner du temps de développement lors de l'interaction sur le code HTML d'une page web, l'AJAX ou la gestion des évènements. |
| MARKDOWN   | langage de balisage léger créé par John Gruber et Aaron Swartz. Le but de la syntaxe Markdown est d'offrir une syntaxe facile à lire et à écrire. |

## Environnement de travail

### Télécharger et installer "NodeJS"
  - Lien pour le téléchargement : https://nodejs.org/ (version v4.4.5 LTS (version stable))
  
    **Windows**     
    L'installation installe réellement deux programmes : 
    - Node.js
    - Node.js command prompt
            
   **Node.js :** C'est l'intepréteur de commandes de Node.js (dont nous parlerons à la fin de ce chapitre). Nous l'utiliserons assez peu en pratique. Il sert à tester des commandes JavaScript.

   **Node.js command prompt :** C'est une console de Windows configurée pour reconnaître Node.js. C'est par là que vous passerez pour lancer vos programmes Node.js, c'est donc ce que nous utiliserons le plus souvent.
   
   **Mac OSX**   
   Installation (fichier.pkg)
            Pour vérifier si "Node.js" est correctement installé exécuter la commande:
            
`Node`
            

### Installer "Yeoman", "Bower", "Gulp"
En une seul fois avec cette commande :
            
`npm install -g yo bower gulp`

Séparément comme ceci :
            
`npm install -g yo`

`npm install -g bower`

`npm install -g gulp`
    
-g permet d'installer le package de façon global (https://docs.npmjs.com/getting-started/installing-npm-packages-globally)    
Pour plus d'information voir la documentation NPM : https://docs.npmjs.com/

   **Yo :** Il s'agit de l'outil qui va vous permettre de mettre en place le projet.  
   
   **Bower :** Il s'agit d'un autre gestionnaire de paquets, au même titre que npm. Ces deux gestionnaires de paquets ne gèrent pas les dépendances de la même manière. À titre d'explication, npm gère automatiquement les dépendances de vos paquets, alors qu'il incombe au développeur de décrire les dépendances lorsque vous utilisez bower. De ce fait, il est assez courant d'utiliser npm lorsque vous programmez votre serveur et bower pour vos projets front-end.
   
**Gulp :** Gulp est un task runner c’est à dire qu’il effectue des tâches pour vous. Dans le développement web, vous l’utiliserez pour des tâches front-end telles que :
    
- créer un serveur web local
- rafraîchir le navigateur automatiquement à chaque fois qu’un fichier est modifié
- Utiliser des préprocesseurs comme Sass ou LESS
- Optimiser des ressources comme CSS, JavaScript et les images.
    
    
**package.json :** Contient la liste des plugins gulp (ou autres) nécessaires à vos tâches    
**gulpfile.js :** Contient la liste des tâches à réaliser
    

### Installer avec yeoman le generator : "generator-webapp"
`npm install -g generator-webapp`

Template generator-webapp : https://github.com/yeoman/generator-webapp

### Création du projet "mathiasCV" et vérification
**Commande a effectuer dans le terminal :**
            
1. Créer le repertoire vierge du projet :

    `mkdir mathiasCV`
2. Ce diriger dans le dossier "mathiasCV" :

    `cd mathiasCV`
3. Crée une arborescence de base pour notre application :

    `yo webapp`

    Déselectionner Saas avec le bouton espace (il restera de sélectionné uniquement : "Bootstrap" et "Modernizr")

    `cd mathiasCV`
    
4. Vérifier si notre projet s'affiche correctement en lancant le serveur

    `gulp serve`

Un projet de base est en effet visible (réalisé par yo webapp). On peut également constater que les modifications apportés au projet pendant que le serveur tourne sont immédiatement rafraichi très pratique! (CTRL+C pour arrêter le serveur)

![Image of Yaktocat](http://igor-randjelovic.com/assets/_img/blog/yo-webapp-default-page.0abc.png)





### Installation des dependences
**Commande a effectuer dans le terminal :**
1. Installation de font-awesome (**CSS**)
 
    `bower install font-awesome-bower --save`

    En exécutant cette commande une ligne a été ajouté dans le fichier index.html entre les commentaires (<!-- bower:css --> et <!-- endbower -->) voici la ligne :

     <link rel="stylesheet" href="/bower_components/font-awesome-bower/css/font-awesome.css" />


2. Installation de bootswatch (**CSS**)
 
    `bower install bootswatch --save`

    Pareil pour bootswatch une ligne a été ajouté dans le fichier index.html etc..

3. Installation de jquery-smooth-scroll (**JS**)
 
    `bower install jquery-smooth-scroll --save`

    En exécutant cette commande une ligne a été ajouté dans le fichier index.html entre les commentaires (<!-- bower:js --> et <!-- endbower -->) voici la ligne :

    <script src="/bower_components/jquery-smooth-scroll/jquery.smooth-scroll.js"></script>

4. Installation de touche (**JS**)
 
    `bower install touche --save`

    Pareil pour jquery-smooth-scroll une ligne a été ajouté dans le fichier index.html etc..

5. Installation de Chart (**JS**)
 
    `bower install Chart.js --save`

    Pareil pour jquery-smooth-scroll une ligne a été ajouté dans le fichier index.html etc..
    
6. Forcer la modification (Si les dependances n'ont pas été ajouté dans "index.html")
 
    `gulp wiredep`
    
### Utilisation de GIT

1. Création du depot "GIT" dans le projet "mathiasCV" (Crée un nouveau sous-répertoire nommé .git) 
 
    `cd mathiasCV`/ `git init`

2. Ajouter les fichiers dans le dépot préalablement crée
 
    `git add .`

3. Commit/valide les fichiers changé en local
 
    `git commit -m 'msg`

    En enlevant le paramètre (-m) cela permet d'inscrire le texte du commit dans un fichier texte. Plus facile pour rédiger un bon texte lors du commit ce qui est très important.

4. Envoi/push les fichiers validé (par un commit en local) sur le "serveur" distant
 
    `git push`

5. Télécharge en local les fichiers validé situé sur le "serveur" distant 
 
    `git pull`

6. Permet de copier un depot distant
 
    `git clone`

7. Permet de copier un depot distant
 
    `git clone`

8. Déterminer l'état des fichiers
 
    `git status`

9. Permet d'ignorer certains fichiers (ne les commits pas)
 
    `.gitignore`


### Les commentaires dans les commits
La mise en place de règles de commit va apporter plusieurs choses à votre projet :

- Premièrement : un message homogène dans les commits (et pas un contenu qui dépend de la personne et de sa motivation)

- Ensuite : la capacité d’être analysé ou extrait plus facilement car le message va suivre une certaine « grammaire »

- Enfin : cela permet aussi d’aider les nouveaux sur le projet pour les guider et leur expliquer quelles tournures il faut utiliser

Voici un exemple de règles souvent appliqué :
- Numero de ticket (exemple ticket jira)
- Suivi pas l'un des titres suivant :
    - Added
    - Fixed
    - Upped
    - Removed
    - Switched
    - Improved
    - Updated
    - Renamed

Exemple : **CVMEIER-17** : Added a new component "Chart"


### Déploiement
1. Construction du rendu final dans le repertoire : /dist (de façon minimifié)
 
    `gulp build`

2. Verification du rendu finale avant deploiement
 
    `gulp serve:dist`

3. Déplacement dans le répertoire (mathiasCV/dist)
 
    `cd mathias/dist`

4. Initialiser le dépôt GIT (pour la branche "gh-pages")
 
    `git init`

5. Créer notre nouvelle branche "gh-pages" et bascule du master à cette branche
 
    `git checkout -b gh-pages`

6. Ajouter tous les fichiers
 
    `git add .`

7. Commiter tous les fichiers
 
    `git commit -m 'Create git'`

8. Lier le dépôt Git local avec le dépôt Github distant
 
    `git remote add origin git@github.com:heg-web/moncv-meiermathias.git`

9. Envoyer tous les fichiers du dépôt local GIT dans le dépôt distant Github
 
    `git push --set-upstream origin gh-pages`

10. Installer "git deploy" pour automatiser le deploiement
 
    `npm install --save-dev gulp-deploy-git`

11. Ajouter une fonction javascript à la fin du fichier "gulpfile.js"
 
    `var deploy = require('gulp-deploy-git');
gulp.task('deploy', function() {
  return gulp.src('**/*',  { read: false, cwd: 'dist'  })
    .pipe(deploy({
      repository: 'git@github.com:heg-web/moncv-meiermathias.git',
      remoteBranch:   'gh-pages'
    }))
});`

12. Effectuer un deploiement rapide/automatique
 
    `gulp deploy`

### Redirection sur mon domaine
1. Ajouter dans le répertoire un fichier "CNAME"
2. Ajouter comme contenu le lien sur lequel sera redirigé le site

    `cv.speedtracker.ch`
3. Aller sur le site "hebergeur" --> Infomagniak en l'occurence
4. Sous "Zone DNS" ajouter : 
    `cv.speedtracker.ch
    CNAME
    heg-web.github.io`
