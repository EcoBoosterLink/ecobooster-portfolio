export const METHODOLOGY_DATA = {
  web: [
    { id: '01', title: 'Audit & Maquettage', desc: "Nous analysons vos besoins et concevons des prototypes interactifs pour valider l'ergonomie avant toute ligne de code." },
    { id: '02', title: 'Développement Sur-mesure', desc: "Nos ingénieurs créent une architecture robuste, rapide et sécurisée, en utilisant les meilleurs frameworks modernes (React, Node.js)." },
    { id: '03', title: 'Tests & Déploiement', desc: "Phase de recette rigoureuse pour garantir l'absence de bugs, suivie d'une mise en production fluide." },
  ],
  mobile: [
    { id: '01', title: 'UX/UI Design Natif', desc: "Conception d'interfaces fluides respectant les guidelines strictes d'Apple (Human Interface) et de Google (Material Design)." },
    { id: '02', title: 'Développement iOS/Android', desc: "Programmation des fonctionnalités avec une attention maniaque aux performances, à la fluidité et à la gestion de la batterie." },
    { id: '03', title: 'Lancement sur les Stores', desc: "Gestion des soumissions App Store et Google Play, avec optimisations ASO pour une visibilité immédiate." },
  ],
  marketing: [
    { id: '01', title: "Stratégie d'Acquisition", desc: "Identification de vos cibles, définition des canaux rentables et budgétisation précise de vos futures campagnes." },
    { id: '02', title: 'Création de Contenu', desc: "Production de visuels, vidéos et copywriting percutants conçus spécifiquement pour maximiser le taux de clic." },
    { id: '03', title: 'Optimisation du ROI', desc: "Suivi quotidien des métriques, itérations en temps réel et scaling budgétaire des campagnes qui performent le mieux." },
  ],
  formation: [
    { id: '01', title: 'Évaluation des Besoins', desc: "Audit des compétences actuelles de vos équipes pour concevoir un programme de formation ultra-personnalisé." },
    { id: '02', title: 'Ateliers Pratiques', desc: "Apprentissage basé sur le \"learning-by-doing\" avec des cas concrets applicables immédiatement à votre entreprise." },
    { id: '03', title: 'Suivi & Ancrage', desc: "Accompagnement post-formation pour valider les acquis et ancrer les nouvelles méthodologies sur le long terme." },
  ]
}

export type TabType = keyof typeof METHODOLOGY_DATA

export const TABS: { id: TabType; label: string }[] = [
  { id: 'web', label: 'Développement Web' },
  { id: 'mobile', label: 'Applications Mobiles' },
  { id: 'marketing', label: 'Marketing Digital' },
  { id: 'formation', label: 'Formation & Conseil' },
]
