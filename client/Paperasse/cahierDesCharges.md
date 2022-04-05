# STARDUST


## Application pour l'Astronomie

 - Observer les constellations et obtenir des infos sur l'astronomie

 - S'inscrire pour pouvoir participer au forum / chat et echanger des idees, des photos

 - Blog avec differents thematiques (astronomie, astrophoto, evenements, ...)

## Roles

- Scrum Master : Chloé
- Project Owner : Lucile
- Lead Back : Aziz
- Lead Front : Jean-Christophe

## MVP 

- Pouvoir avoir le nom des constellations selon notre position via une carte (consommer API)
- Un login pour acceder au forum et poster des messages
- Un forum avec une barre de recherche pour pouvoir filtrer les sujets
- Admin pour moderer
- Galerie photo (V2)
- Acceder au blog qui filtre les articles selon une recherche par theme (V2)
- Position geoloc precise en temps reel (V2)

## User strories :
Découvrir l'astronomie 
themes : astronomie / astrophoto 
Plusieurs pages (login, accueil, blog, observation, profil, forum)
### NEED :
structure bas de donnees
explication comment elle est faite
### ROLES :
- invité peux faire quoi
- user
- admin
### PAGES :
accueil :
- galerie photo
- differents liens vers les pages
- login
- widget meteo
login
inscription
profil user
blog :
- evenements
- informations astronomie
- informations astrophoto
forum :
- echanger sur l'astronomie, discuter
observation :
- carte qui montre les constellations selon la position gps
galerie photo
mentions legales & conditions d'utilisation
espace admin :
moderation et mise a jour du blog / forum
### ACTIONS SUR LES PAGES :
1. accueil : Visualiser la galerie photo, acceder au login, mettre en avant deux trois derniers articles du blog -> tout le monde a acces a la page accueil
2. login : Plugin modal se connecter, mdp, demande mdp oublié, s'inscrire , se deconnecter -> page accessible par tout le monde mais réagit differemment en fonction des utilisateurs :
    - les gens connectés resteront sur l'accueil (plugin modal "se connecter")
    - les gens qui veulent s'inscrire seront dirigés vers le formulaire
3. formulaire d'inscription : nom, prenom etc, case captcha, mail qui sera envoye pour confirmer l'inscription
4. page user : changer pseudo, definir avatar, changer mdp, fav messages, photos et articles, visualisation des sujets ouverts sur le forum -> prive accessible uniquement a l user
5. blog : acceder aux differents categories (evenement, infos astro et infos astrophoto) -> accessible par tout le monde
6. forum : poster et repondre a des messages, ouvrir un sujet, rechercher un sujet (barre de recherche) -> tout le contenu est accessible uniquement par les users inscrits, si pas inscrit petit message et redirige vers l accueil 
7. observation : carte geolocalisée, cliquer sur des constellations pour afficher les infos -> 
8. galerie photo : afficher les photos, soumettre une photo avec une legende et la localisation -> accessible a tout le monde sauf pour soumettre, user only
9. mentions legales & conditions d'utilisation -> visible dans le footer


| User   | Quelles pages | Action |
| :----: | :----:| ------ |
| Invite | Accueil - Observation | Voir accueil + carte etoiles |
| Inscrit| Accueil - Observation - Forum | Voir accueil + carte etoiles + consulter forum +poster messages |
| Admin  | Toutes pages | Voir accueil + carte etoiles + consulter forum +poster messages + moderation du forum |
### ESPACE ADMIN (accessible uniquement a l'admin)
page user classique avec des fonctionnalites en plus que les utilisateurs ne voient pas sur les autres pages
moderer messages du forum
fermer un sujet sur le forum
moderer photo galerie
### VISUELS :

-Accueil : Chloe
   -vue website et mobile : https://whimsical.com/Dz9xrb9Z3qoJA8rFQSPQBb
-Page user : Lucile
   -vue website : https://whimsical.com/WjxHiUenHuXYwPoYoWhKbH
   -vue mobile : https://whimsical.com/BY2TEguZt3eseuoofDA5Vx
-Forumulaire inscription : Lucile
   -vue website / mobile : https://whimsical.com/WjxHiUenHuXYwPoYoWhKbH
-Mot de passe oublié : Lucile :https://whimsical.com/WjxHiUenHuXYwPoYoWhKbH
-Blog : Jc
   -Blog vue mobile : https://whimsical.com/XVHvUpVu4eTrXB6AUmihwb
   -Blog vue website : https://whimsical.com/3f9FczrqxYRpqKCqNTgr7x
-Page article : Jc
   -Article vue mobile : https://whimsical.com/MEp5SZZW1mXii35fU2BgoJ
   -Article vue website : https://whimsical.com/CY8dEFjJR1nCDwtZbFVczA
-Forum : Aziz
   -vue mobile : https://whimsical.com/JjAieBeTp53aHXo4XwevVg
   -vue website : https://whimsical.com/Pspm32zPbAgu6SWT33H5Zr
-Page sujet : Aziz
   -vue mobile : https://whimsical.com/CoZRXPG9dpMy7WVTUigLUa
   -vue website : https://whimsical.com/4rUDhVLQF58xrxHR5ggi1e
-Observation : Lucile : https://whimsical.com/WjxHiUenHuXYwPoYoWhKbH
-Galerie photo : Chloe
   -vue website et mobile : https://whimsical.com/RyhFEKrNqt6QDrCMttpuFC


## Arborescence 

https://whimsical.com/MnEdB5cEzqAKNxXZ3ZS2rq


## Routes

- Accueil : stardust.com (ou fr)
- Login : stardust.com/login
- Forumulaire inscription : stardust.com/signup
- Mot de passe oublié : stardust.com/password
- Page user : stardust.com/user
- Page fav : stardust.com/user/fav
- Contact : stardust.com/contact
- Blog : stardust.com/blog
- Article : stardust.com/blog/article
- Forum : stardust.com/forum
- Sujet : stardust.com/forum/sujet
- New sujet : stardust.com/forum/newsujet
- Observation: stardust.com/map
- Galerie photo: stardust.com/pictures
- Admin : stardust.com/admin

## Technologies

**Back**
 - nodejs
 - mongoDB
 - mongoose
 - express

**Front**
- react
- webpack    
- babel
- styledComponent
- axios
- redux
- react-router

## MCD / MLD

https://whimsical.com/Qv3pkx7rU6ZQFoh2tx9Bdz

**Tables**
 
 - user :
    - id
    - name
    - email
    - password
    - date
    - role
  
 - constellation
    - description
    - coordonnées / carte
    - photo

 - articles
    - id
    - thème(s)
    - name
    - photos ?
    - description
    - résumé
  
 - forum
    - topic
    - id
    - title
      
      

 - sujets
     - id
     - description
     - messages
     - name
     - author
     - date
     - tags
     - status ( open/closed )


 - photos
    - id
    - author
    - description
    - geoloc
    - image

 - tag
   - id
   - text

- messages
  - id
  - sujet_id
  - user_id
  - text
  - date



**Relations**

- user 1 / N photos
- user 1 / N sujets
- user 1 / N messages

- sujets 1 / N messages

- tag N / N sujets
- tag N / N articles
- tag N / 1 photos 





rgpd => bandeau ?
stocker des donnees = pourquoi et combien de temps et demander autho a l user