import type { CategoryId } from '../../../constants/categories'

export const METHODOLOGY_DATA: Record<CategoryId, { id: string; title: string; desc: string }[]> = {
  web: [
    { id: '01', title: 'Découverte & Stratégie', desc: "Analyse approfondie de votre modèle d'affaires, compréhension de vos objectifs et définition d'une roadmap technique claire." },
    { id: '02', title: 'Prototypage UX/UI', desc: "Création de wireframes et de maquettes haute-fidélité pour concevoir une architecture d'information sans friction." },
    { id: '03', title: 'Développement Front-End', desc: "Intégration d'interfaces dynamiques et réactives avec des technologies modernes (React, Next.js) et des animations fluides." },
    { id: '04', title: 'Architecture Back-End', desc: "Conception de bases de données robustes, développement d'API sécurisées et architecture cloud scalable." },
    { id: '05', title: 'Assurance Qualité (QA)', desc: "Batterie de tests automatisés (unitaires, e2e), optimisation des performances Web Vitals et audits d'accessibilité." },
    { id: '06', title: 'Déploiement & Évolution', desc: "Mise en production orchestrée, intégration continue (CI/CD) et maintenance applicative pour accompagner votre croissance." },
  ],
  mobile: [
    { id: '01', title: 'Cadrage & Faisabilité', desc: "Définition des spécifications techniques et choix des technologies (Natif ou Cross-platform) adaptées à votre cible." },
    { id: '02', title: 'Design Natif UX/UI', desc: "Conception d'interfaces fluides respectant les guidelines strictes d'Apple (Human Interface) et de Google (Material Design)." },
    { id: '03', title: 'Ingénierie Mobile', desc: "Développement des fonctionnalités, intégration des API tierces et utilisation avancée des capteurs natifs (GPS, Caméra, etc.)." },
    { id: '04', title: 'Tests Multi-Devices', desc: "Vérification de la compatibilité sur une multitude d'écrans, optimisation de l'utilisation de la batterie et tests hors-ligne." },
    { id: '05', title: 'Soumission aux Stores', desc: "Gestion administrative complète pour la publication sur l'App Store et Google Play, avec optimisations ASO." },
    { id: '06', title: 'Support Post-Lancement', desc: "Suivi des analytics utilisateurs, correction de bugs éventuels et déploiement régulier de nouvelles fonctionnalités." },
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
