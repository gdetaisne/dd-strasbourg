'use client';

import { env } from '@/lib/env';
import { getCityDataFromUrl } from '@/lib/cityData';

export default function StructuredData() {
  // Résoudre les données de ville dynamiquement
  const city = getCityDataFromUrl(env.SITE_URL);
  
  // HowTo uniquement (la partie Organization/LocalBusiness est rendue site-wide)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${city.siteUrl}/#howto`,
    "name": "Comment obtenir 5 devis comparables",
    "description": "Process simple en 3 étapes pour recevoir vos devis de déménagement comparables",
    "totalTime": "PT30M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Prenez vos photos",
        "text": "3 à 5 photos par pièce. Uploadez-les en quelques clics. Notre IA analyse automatiquement.",
        "image": `${city.siteUrl}/images/how-it-works/step-1-photos.jpg`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "IA calcule votre volume",
        "text": "Notre IA calcule le volume exact en m³ (précision 90%). Génération automatique du cahier des charges.",
        "image": `${city.siteUrl}/images/how-it-works/step-2-estimation.jpg`
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Recevez 5 devis comparables",
        "text": "Sous 7 jours, 5 devis sur le même cahier des charges. Comparez facilement, choisissez le meilleur.",
        "image": `${city.siteUrl}/images/how-it-works/step-3-loading.jpg`
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
