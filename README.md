# TrelloDriveChat  #

Réalisé par Filatre Claire, Delaporte Vincent et Yung François.

Il s'agit d'une application web pour le module s7p CAI.

## Comment lancer ##

Pour lancer le serveur :

+ Lancer Node JS command prompt.
+ Se déplacer dans le répertoire du projet.
+ & node scripts\web-servers.js

Le serveur est lancé, le port est indiqué dans la console. ( 8000 par défaut ).

+ Lancer votre navigateur favori Chrome.
+ Se rendre sur http://localhost:8000/TrelloDriveChat/index.html

## Fonctionnalités ##

L'application peut être utilisée à de nombreuses fins.

+ Upload de fichiers à travers la page "Drive".
+ Gestion de Projets grâce au service Trello inclus.
+ Un Chat entre utilisateurs.
+ Un service d'enregistrement et d'authentification.
+ Et plein d'autres fonctionnalités à venir ! ( Gestion des tâches par projet, réalisation de diagramme de Gantt, etc... )

## Pour le serveur Go ##

Pour une utilisation optimale du Chat, l'installation de Go est nécessaire.
Une fois l'archive téléchargée et installée, il faut importer websocket et go.uuid.

+ go get github.com/gorilla/websocket
+ go get github.com/gorilla/go.uuid

Puis se déplacer à la racine du projet et lancer Go:

+ go run server/main.go

## La Base de Donnée MongoDB ##

Pour pouvoir utiliser le service d'authentification, une base de donnée côté serveur doit être installée.

Sous Linux: 

+ https://docs.mongodb.com/manual/administration/install-on-linux/

Sous Windows:

+ https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

Une fois celle-ci installée, il faut s'y connecter et créer une nouvelle db "TrelloDriveChat"

+ Lancer mongo
+ use TrelloDriveChat

+ show dbs







