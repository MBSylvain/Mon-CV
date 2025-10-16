# Contexte pour optimisation de CV (pour chaque offre d'emploi)

## Objectif

Fournir un contexte standardisé que vous collerez ou partagerez avec chaque offre d'emploi afin que le CV soit adapté (mots-clés, priorités, formulation) sans modifier la structure du document ni inventer des compétences. La version finale doit rester compatible avec les ATS (Applicant Tracking Systems) des recruteurs.

## Règles strictes à respecter

- Ne jamais modifier la structure du CV (titres, sections, ordre des rubriques) : seules les formulations à l'intérieur des sections peuvent être ajustées.
- Ne jamais inventer de compétences, certifications, ou expériences que vous n'avez pas explicitement fournies ou approuvées.
- Préserver un rendu ATS-friendly : privilégier les balises sémantiques (titres, paragraphes, listes), pas d'images ou d'icônes essentiels au parsing, conserver des contact en clair (email, téléphone) dans le DOM.
- Effectuer des remplacements/distributeurs de mots-clés naturels : ajouter ou mettre en avant des mots-clés pertinents extraits de l'offre, reformuler des phrases existantes pour inclure ces mots-clés sans changer le sens.
- Ne pas abuser des répétitions / bourrage de mots-clés : conserver un texte naturel, lisible humainement et scannable par ATS.

## Que doit fournir le demandeur (vous)

À chaque optimisation, fournissez :

- La description complète de l'offre (copier-coller du texte de l'annonce ou le lien + texte) ;
- 3 à 8 mots-clés ou compétences prioritaires souhaitées (optionnel si l'annonce est fournie) ;
- Indication si vous voulez mettre l'accent sur : expérience, formation, compétences techniques, management, mobilité géographique, télétravail, salaire attendu (optionnel) ;
- Toute mention à éviter (ex : expériences sensibles, contrats temporaires que vous ne voulez pas mettre en avant).

## Processus que j'appliquerai

1. Analyse : je lis l'offre et j'extrais les mots-clés principaux (compétences techniques, outils, méthodes, qualités comportementales et termes métiers).
2. Cartographie : je mappe ces mots-clés sur votre CV existant et repère les sections où ils peuvent être mis en évidence (expériences, compétences, profil).
3. Proposition d'édition : je propose des modifications de texte ciblées (phrases, bullets, titres de réalisations) pour intégrer les mots-clés sans changer la structure ni inventer d'éléments.
4. Respect ATS : je vérifie que les changements restent dans des éléments textuels simples (H1/H2/H3, p, ul/li) et j'évite les images, tableaux ou éléments décoratifs qui nuisent à la lecture automatique.
5. Validation : je fournis les modifications proposées en diff ou patch HTML et un court résumé des changements (mots-clés ajoutés, phrases remaniées). Vous confirmez / refusez.

## Format de sortie attendu

- Proposition de texte modifié (extraits) et emplacement (section X → paragraphe Y).
- Un bref résumé : quels mots-clés ont été insérés et pourquoi.
- Un contrôle qualité rapide : ATS-friendly (Oui/Non), structure conservée (Oui/Non), nouvelles compétences inventées (Non).

## Exemples d'opérations sûres

- Remplacer "Réalisation d'essais de traction" par "Réalisation d'essais de traction, essais mécaniques" si l'offre cite explicitement "essais mécaniques".
- Mettre en tête d'une expérience une mention courte valorisée (ex : ajouter "(Projets R&D)" si c'est vrai et pertinent).

## Exemples d'opérations interdites

- Ajouter une certification non possédée (ex: mentionner "Certified Six Sigma" sans preuve).
- Supprimer une expérience ou inventer des réalisations.
- Transformer les dates ou employer des durées fausses.

## Checklist avant livraison

- [ ] Structure inchangée (titres/sections présents)
- [ ] Aucun nouveau skill inventé
- [ ] Mots-clés insérés uniquement dans des formulations existantes ou en remaniant des phrases
- [ ] Contact en clair présent
- [ ] Rendu compatible ATS (H-tags + lists + plain text)

## Comment démarrer

Collez ici le texte de l'offre et, si vous voulez, vos 3-8 mots-clés prioritaires. Je répondrai avec une proposition d'ajustements et le patch HTML prêt à appliquer à `SylvainMbeumouCV.html`.

Fin du document.
