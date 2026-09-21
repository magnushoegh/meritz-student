import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

// Context'en holder styr på hvilke opgave-id'er brugeren har ansøgt på.
// Den er "delt state" på tværs af alle screens, så OpgaveDetalje kan
// markere en opgave som ansøgt, og MineAnsoegninger kan se det med det samme.
const AnsoegningerContext = createContext(undefined);

export function AnsoegningerProvider({ children }) {
  // Vi gemmer kun id'erne på de opgaver, der er ansøgt på - ikke selve
  // opgaverne. Den fulde opgave-info slås op i data/opgaver.js når det skal bruges.
  const [ansoegteIds, setAnsoegteIds] = useState([]);

  const ansoegPaaOpgave = useCallback((id) => {
    setAnsoegteIds((tidligere) => {
      // Undgå dubletter, hvis brugeren skulle trykke "Ansøg" flere gange.
      if (tidligere.includes(id)) {
        return tidligere;
      }
      return [...tidligere, id];
    });
  }, []);

  const erAnsoegt = useCallback(
    (id) => ansoegteIds.includes(id),
    [ansoegteIds]
  );

  // useMemo sikrer at value-objektet kun laves på ny, når ansoegteIds ændrer sig,
  // så vi ikke trigger unødvendige re-renders hos alle, der bruger context'en.
  const value = useMemo(
    () => ({ ansoegteIds, ansoegPaaOpgave, erAnsoegt }),
    [ansoegteIds, ansoegPaaOpgave, erAnsoegt]
  );

  return (
    <AnsoegningerContext.Provider value={value}>
      {children}
    </AnsoegningerContext.Provider>
  );
}

// Hjælpe-hook så man slipper for at importere og bruge useContext direkte
// i hvert screen. Kaster en fejl hvis den bruges uden for Provider'en,
// så fejl opdages tidligt under udvikling.
export function useAnsoegninger() {
  const context = useContext(AnsoegningerContext);
  if (context === undefined) {
    throw new Error('useAnsoegninger skal bruges inden i en AnsoegningerProvider');
  }
  return context;
}
