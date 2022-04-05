import React from 'react';
import { Link } from 'react-router-dom';

import TermesStyled from './TermesStyled';
import Button from 'src/components/Button';

const Termes = () => {
  return (
    <TermesStyled>
      <div className='termes'>
        <h1 id='title'> Conditions générales d'utilisation du site.</h1>

        <Button color='primary'>
          <Link to='/register'>S'inscrire</Link>
        </Button>

        <h2> ARTICLE 1 : Objet </h2>

        <p>
          {' '}
          Les présentes « conditions générales d'utilisation » ont pour objet
          l'encadrement juridique de l’utilisation du site et de ses services{' '}
        </p>

        <p> Ce contrat est conclu entre :</p>

        <p> - Le gérant du site internet, ci-après désigné « l’Éditeur »,</p>

        <p>
          {' '}
          - Toute personne physique ou morale souhaitant accéder au site et à
          ses services, ci-après appelé « l’Utilisateur ».
        </p>

        <p>
          {' '}
          - Les conditions générales d'utilisation doivent être acceptées par
          tout Utilisateur, et son accès au site vaut acceptation de ces
          conditions.
        </p>

        <h2>ARTICLE 2 : accès aux services</h2>

        <p>
          {' '}
          Tout Utilisateur ayant accès a internet peut accéder gratuitement et
          depuis n’importe où au site. Les frais supportés par l’Utilisateur
          pour y accéder (connexion internet, matériel informatique, etc.) ne
          sont pas à la charge de l’Éditeur.
        </p>

        <p>
          {' '}
          Les services ne sont pas accessible pour l’Utilisateur que s’il est
          membre du site (c’est-à-dire qu’il s'est identifié à l’aide de ses
          identifiants de connexion) :{' '}
        </p>

        <p>
          {' '}
          Le site et ses différents services peuvent être interrompus ou
          suspendus par l’Éditeur, notamment à l’occasion d’une maintenance,
          sans obligation de préavis ou de justification.{' '}
        </p>

        <h2>ARTICLE 3 : Responsabilité de l’Utilisateur</h2>

        <p>
          L'Utilisateur est responsable des risques liés à l’utilisation de son
          identifiant de connexion et de son mot de passe.{' '}
        </p>

        <p>
          Le mot de passe de l’Utilisateur doit rester secret. En cas de
          divulgation de mot de passe, l’Éditeur décline toute responsabilité.
        </p>

        <p>
          L’Utilisateur assume l’entière responsabilité de l’utilisation qu’il
          fait des informations et contenus présents sur le site.
        </p>

        <p>
          Le membre s’engage à tenir des propos respectueux des autres et de la
          loi et accepte que ces publications soient modérées ou refusées par
          l’Éditeur, sans obligation de justification.
        </p>

        <p>
          En publiant sur le site, l’Utilisateur cède à la société éditrice le
          droit non exclusif et gratuit de représenter, reproduire, adapter,
          modifier, diffuser et distribuer sa publication, directement ou par un
          tiers autorisé.
        </p>

        <p>
          L’Éditeur s'engage toutefois à citer le membre en cas d’utilisation de
          sa publication
        </p>

        <h2>ARTICLE 4 : Responsabilité de l’Éditeur</h2>

        <p>
          Tout dysfonctionnement du serveur ou du réseau ne peut engager la
          responsabilité de l’Éditeur.
        </p>

        <p>
          De même, la responsabilité du site ne peut être engagée en cas de
          force majeure ou du fait imprévisible et insurmontable d'un tiers.
        </p>

        <p>
          Le site s'engage à mettre en œuvre tous les moyens nécessaires pour
          garantir la sécurité et la confidentialité des données. Toutefois, il
          n’apporte pas une garantie de sécurité totale.
        </p>

        <p>
          L’Éditeur se réserve la faculté d’une non-garantie de la fiabilité des
          sources, bien que les informations diffusées su le site soient
          réputées fiables.
        </p>

        <h2>ARTICLE 5 : Propriété intellectuelle</h2>

        <p>
          Les contenus du site (logos, textes, éléments graphiques, vidéos,
          etc.)son protégés par le droit d’auteur, en vertu du Code de la
          propriété intellectuelle.
        </p>

        <p>
          L’Utilisateur devra obtenir l’autorisation de l’éditeur du site avant
          toute reproduction, copie ou publication de ces différents contenus.
        </p>

        <p>
          Ces derniers peuvent être utilisés par les utilisateurs à des fins
          privées ; tout usage commercial est interdit.
        </p>

        <p>
          L’Utilisateur est entièrement responsable de tout contenu qu’il met en
          ligne et il s’engage à ne pas porter atteinte à un tiers.
        </p>

        <p>
          L’Éditeur du site se réserve le droit de modérer ou de supprimer
          librement et à tout moment les contenus mis en ligne par les
          utilisateurs, et ce sans justification.
        </p>

        <h2>ARTICLE 6 : Données personnelles</h2>

        <p>
          L’Utilisateur doit obligatoirement fournir des informations
          personnelles pour procéder à son inscription sur le site.
        </p>

        <p>
          L’adresse électronique (e-mail) de l’utilisateur pourra notamment être
          utilisée par le site pour la communication d’informations diverses et
          la gestion du compte.
        </p>

        <p>
          Nous garantisons le respect de la vie privée de l’utilisateur,
          conformément à la loi n°78-17 du 6 janvier 1978 relative à
          l'informatique, aux fichiers et aux libertés.
        </p>

        <p>
          {' '}
          En vertu des articles 39 et 40 de la loi en date du 6 janvier 1978,
          l'Utilisateur dispose d'un droit d'accès, de rectification, de
          suppression et d'opposition de ses données personnelles. L'Utilisateur
          exerce ce droit via son espace personnel sur le site ,un formulaire de
          contact ou par mail.
        </p>

        <h2> ARTICLE 7 : Évolution des conditions générales d’utilisation</h2>

        <p>
          Le site se réserve le droit de modifier les clauses de ces conditions
          générales d’utilisation à tout moment et sans justification.
        </p>

        <h2>ARTICLE 8 : Durée du contrat</h2>

        <p>
          La durée du présent contrat est indéterminée. Le contrat produit ses
          effets à l'égard de l'Utilisateur à compter du début de l’utilisation
          du service.
        </p>

        <h2> ARTICLE 9 : Droit applicable et juridiction compétente</h2>

        <p>Le présent contrat dépend de la législation française.</p>

        <p>
          En cas de litige non résolu à l’amiable entre l’Utilisateur et
          l’Éditeur, les tribunaux francais sont compétents pour régler le
          contentieux.
        </p>

        <h1> Règlement général sur la protection des données (RGPD) </h1>

        <h2> Collecte d’informations personnelles </h2>

        <p>
          {' '}
          Les types d’informations personnelles suivants peuvent collectés,
          stockés et utilisés :{' '}
        </p>

        <ol>
          <li>
            {' '}
            - Des informations comme votre adresse e-mail, que vous nous
            fournissez lors de votre inscription au site{' '}
          </li>
          <li>
            {' '}
            - Des informations que vous saisissez quand vous créez un profil sur
            notre site web comme votre nom, votre photo de profil, votre ville{' '}
          </li>
          <li>
            {' '}
            - Des informations comme votre nom et votre adresse e-mail, que vous
            saisissez pour souscrire à nos e-mails et/ou newsletters{' '}
          </li>
          <li>
            {' '}
            - Des informations que vous saisissez quand vous utilisez les
            services de notre site web{' '}
          </li>
          <li>
            {' '}
            - Des informations que vous publiez sur notre site web dans
            l’intention de les publier sur internet, et qui incluent votre
            identifiant, vos photos de profil et le contenu de vos publications{' '}
          </li>
        </ol>

        <p>
          {' '}
          Vos informations ne sont collectés que dans le cadre de l'utilisation
          du site. Aucune informations ne sera communiquée à des tiers.{' '}
        </p>
        <p>
          {' '}
          Vous disposez d'un droit d'accès, modification ou suppression sur
          simple demande.
        </p>
      </div>
    </TermesStyled>
  );
};

export default Termes;
