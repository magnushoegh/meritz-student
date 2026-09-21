import React from 'react';
import { View } from 'react-native';
import opgaver from '../data/opgaver';
import OpgaveListe from '../components/OpgaveListe';
import styles from './OpgaveListeScreen.styles';

// Forsiden i appen: viser alle tilgængelige opgaver.
// Selve rendering af listen er uddelegeret til OpgaveListe-komponenten,
// så dette screen bare er ansvarlig for at levere det rigtige data-sæt.
export default function OpgaveListeScreen() {
  return (
    <View style={styles.container}>
      <OpgaveListe
        opgaver={opgaver}
        tomTekst="Der er ingen opgaver tilgængelige lige nu."
      />
    </View>
  );
}
