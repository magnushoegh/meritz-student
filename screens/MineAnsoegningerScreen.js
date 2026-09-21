import React, { useMemo } from 'react';
import { View } from 'react-native';
import opgaver from '../data/opgaver';
import { useAnsoegninger } from '../context/AnsoegningerContext';
import OpgaveListe from '../components/OpgaveListe';
import styles from './MineAnsoegningerScreen.styles';

// Viser kun de opgaver, brugeren har ansøgt på. Genbruger den samme
// OpgaveListe-komponent (og dermed OpgaveKort) som OpgaveListeScreen,
// så de to lister ser og opfører sig ens - vi filtrerer bare data'et
// før det sendes ind i komponenten.
export default function MineAnsoegningerScreen() {
  const { ansoegteIds } = useAnsoegninger();

  const ansoegteOpgaver = useMemo(
    () => opgaver.filter((opgave) => ansoegteIds.includes(opgave.id)),
    [ansoegteIds]
  );

  return (
    <View style={styles.container}>
      <OpgaveListe
        opgaver={ansoegteOpgaver}
        tomTekst="Du har endnu ikke ansøgt på nogen opgaver."
      />
    </View>
  );
}
