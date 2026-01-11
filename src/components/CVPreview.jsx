import React from "react";

// Props pour personnaliser le CV
const defaultSkills = {
  expertise: [
    "Matériaux métalliques",
    "Matériaux Polymères (Thermoplastiques, Elastomère)",
    "Caractérisation mécanique",
  ],
  outils: [
    "Analyse des données",
    "Excel - Analyse et exploitation de données",
    "Catia",
    "Office 360",
  ],
  gestion: [
    "Gestion de projets",
    "Travail en équipe et en Autonomie",
    "Planification d'essais",
  ],
  langues: [
    "Français (langue maternelle)",
    "Anglais (intermédiaire)",
  ],
  interets: [
    "Informatique : HTML, React JS, PHP",
    "Jardinage : Bouturage de rosiers, plantation de fleurs et de fruits",
  ],
};

const defaultKeywords = [
  "Ingénieur Matériaux",
  "R&D",
  "Aéronautique",
  "Automobile",
  "Gestion de projets",
];

export default function CV({
  skills = defaultSkills,
  keywords = defaultKeywords,
}) {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-2">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-blue-900 text-white w-full md:w-64 p-8 flex-shrink-0">
          <h2 className="text-2xl font-bold mb-2">Sylvain Mbeumou</h2>
          <ul className="mb-6 text-sm">
            <li>✉️ : sylvain.mbeumou@gmail.com</li>
            <li>📞 : +33 7 52 40 96 93</li>
            <li>📍 77500 Chelles</li>
          </ul>
          <h3 className="font-semibold mb-2">Compétences</h3>
          <h4 className="text-xs text-white mt-4 mb-2 font-semibold">EXPERTISE MATÉRIAUX</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.expertise.map((s, i) => (
              <span key={i} className="bg-blue-100 text-blue-900 rounded-full px-3 py-1 text-xs font-medium border border-blue-200">{s}</span>
            ))}
          </div>
          <h4 className="text-xs text-white mt-4 mb-2 font-semibold">OUTILS & MÉTHODES</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.outils.map((s, i) => (
              <span key={i} className="bg-blue-100 text-blue-900 rounded-full px-3 py-1 text-xs font-medium border border-blue-200">{s}</span>
            ))}
          </div>
          <h4 className="text-xs text-white mt-4 mb-2 font-semibold">GESTION & ORGANISATION</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.gestion.map((s, i) => (
              <span key={i} className="bg-blue-100 text-blue-900 rounded-full px-3 py-1 text-xs font-medium border border-blue-200">{s}</span>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="text-xs text-white mb-2 font-semibold">Langues</h4>
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.langues.map((s, i) => (
                <span key={i} className="bg-blue-100 text-blue-900 rounded-full px-3 py-1 text-xs font-medium border border-blue-200">{s}</span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-xs text-white mb-2 font-semibold">CENTRES D'INTÉRÊT</h4>
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.interets.map((s, i) => (
                <span key={i} className="bg-blue-100 text-blue-900 rounded-full px-3 py-1 text-xs font-medium border border-blue-200">{s}</span>
              ))}
            </div>
          </div>
        </aside>
        {/* Main */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Ingénieur Matériaux</h1>
          <div className="mb-6 text-justify text-gray-700">
            Je mets ma rigueur et ma polyvalence au service de projets de R&D, avec une forte appétence pour la transformation de défis complexes en solutions concrètes, notamment dans les domaines de l’aéronautique et de l’automobile.
          </div>
          <div className="mb-8">
            <div className="text-lg font-semibold text-blue-900 border-b-2 border-blue-900 inline-block mb-2">Expérience professionnelle</div>
            {/* ... Expériences à personnaliser ... */}
            <div className="mb-4">
              <div className="font-bold text-blue-900">Support administratif, achats et support conducteurs de travaux</div>
              <div className="text-blue-700 font-medium">CF SERVICES, Courtry (77) - août 2022 - aujourd'hui</div>
              <div className="text-gray-700 text-sm">
                • Gestion administrative interne et des sous-traitants <br />
                • Réalisation des dossiers d'agréments, rédaction de PPSPS, cautions bancaires<br />
                • Gestion des locations d'engins de chantier, retours et litiges<br />
                • Réalisation des situations de travaux et contrôle des factures sous-traitants <br />
                • Relations avec nos fournisseurs et sous-traitants<br />
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold text-blue-900">Ingénieur Matériaux</div>
              <div className="text-blue-700 font-medium">CONSEPT INGENIERIE, Île-de-France - mars 2021 - mars 2022</div>
              <div className="text-gray-700 text-sm">
                • Adaptation et disponibilité lors d’une période d’intercontrat, maintien de la veille technologique et réglementaire.
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold text-blue-900">Ingénieur Matériaux</div>
              <div className="text-blue-700 font-medium">Nexans, Bohain-en-Vermandois (02) - mai 2017 - novembre 2017</div>
              <div className="text-gray-700 text-sm">
                • Réalisation de rapports de validation de matières et de leurs caractéristiques (définition de critères de sélection de nouvelles matières et fournisseurs).<br />
                • Réalisation d'une études de reformulation de mélanges d’élastomères (anticipation REACh).<br />
                • Réalisation d’essais de traction, vieillissement, mesures de viscosité Mooney, essais de rhéologie.<br />
                • Planification et coordination de campagnes de formulations et essais.<br />
                • Création de critères de sélection de nouvelles matières et de fournisseurs.<br />
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold text-blue-900">Assistant Ingénieur Matériaux au laboratoire matériaux polymères</div>
              <div className="text-blue-700 font-medium">Renault Trucks Volvo Vénissieux, Vénissieux (69) - avril 2013 - septembre 2013</div>
              <div className="text-gray-700 text-sm">
                • Analyse des propriétés des élastomères thermoplastiques et veille technologique.<br />
                • Réalisation d’essais de caractérisation (traction, abrasion, compression set, résistance aux fluides).<br />
                • Rédaction de rapports d'essais des échantillons de thermoplastiques<br />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="text-lg font-semibold text-blue-900 border-b-2 border-blue-900 inline-block mb-2">Formation</div>
            <div className="mb-3">
              <div className="font-bold text-blue-900">Master 2 Matériaux</div>
              <div className="text-blue-700 font-medium">Université Paris Sud Orsay - CNAM Paris, Paris (75) - octobre 2016 - septembre 2017</div>
            </div>
            <div className="mb-3">
              <div className="font-bold text-blue-900">Master 1 Synthèses des matériaux polymères et caractérisation des métaux</div>
              <div className="text-blue-700 font-medium">Université Lyon 1, Lyon - 2012 - 2014</div>
            </div>
            <div className="mb-3">
              <div className="font-bold text-blue-900">Licence Sciences pour l'ingénieur parcours matériaux (Physique et chimie des matériaux)</div>
              <div className="text-blue-700 font-medium">Université d'Evry, Évry (91) - 2011 - 2012</div>
            </div>
            {/* <div className="mb-3">
              <div className="font-bold text-blue-900">DUT Mesures Physiques</div>
              <div className="text-blue-700 font-medium">IUT de Créteil, Créteil (94) - 2008 - 2011</div>
            </div> */}
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold text-blue-900 border-b-2 border-blue-900 inline-block mb-2">Mots-clés</div>
            <div className="flex flex-wrap gap-2">
              {keywords.map((k, i) => (
                <span key={i} className="bg-blue-100 text-blue-900 rounded-full px-3 py-1 text-xs font-medium border border-blue-200">{k}</span>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
