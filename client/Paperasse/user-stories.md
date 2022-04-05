# STARDUST

## Stardust :
Découvrir l'astronomie 
themes : astronomie / astrophoto 
Plusieurs pages (login, accueil, blog, observation, profil, forum)


### NEED :
structure bas de donnees
explication comment elle est faite
### ROLES :
invité
user
admin
## PAGES :
accueil :
- galerie photo
- differents liens vers les pages
- login
- widget meteo
login
inscription
profil user
contact
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



## ACTIONS SUR LES PAGES :

1. accueil : Visualiser la galerie photo, acceder au login, mettre en avant deux trois derniers articles du blog -> tout le monde a acces a la page accueil
2. login : Plugin modal se connecter, mdp, demande mdp oublié, s'inscrire , se deconnecter -> page accessible par tout le monde mais réagit differemment en fonction des        utilisateurs :
    - les gens connectés resteront sur l'accueil (plugin modal "se connecter")
    - les gens qui veulent s'inscrire seront dirigés vers le formulaire
3. formulaire d'inscription : nom, prenom etc, case captcha, mail qui sera envoye pour confirmer l'inscription
4. page user : changer pseudo, definir avatar, changer mdp, visualisation des sujets ouverts sur le forum -> prive accessible uniquement a l user
5. contact : envoi de formulaire -> accessible a tout le monde
6. blog : acceder aux differents categories (evenement, infos astro et infos astrophoto) -> accessible par tout le monde
7. forum : poster et repondre a des messages, ouvrir un sujet, rechercher un sujet (barre de recherche) -> tout le contenu est accessible uniquement par les users inscrits, si pas inscrit petit message et redirige vers l accueil 
8. observation : carte geolocalisée, cliquer sur des constellations pour afficher les infos -> 
9. galerie photo : afficher les photos, soumettre une photo avec une legende et la localisation -> accessible a tout le monde sauf pour soumettre, user only
10. mentions legales & conditions d'utilisation -> visible dans le footer


## ESPACE ADMIN (accessible uniquement a l'admin)

moderer messages du forum
fermer un sujet sur le forum
moderer photo galerie

## VISUELS :
wireframe.cc

Accueil : 
Login : 
Forumulaire inscription :
Page user :
Contact :
Blog :
Forum :
Observation:
Galerie photo: