import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './OpgaveKort.styles';

// OpgaveKort viser et enkelt "preview" af en opgave i listerne.
// Selve kort-komponenten ved ikke noget om navigation - den får bare en
// funktion udefra (onSeDetaljer), som den kalder når knappen trykkes.
// Det gør komponenten nem at genbruge, uanset hvilken liste den vises i.
export default function OpgaveKort({ opgave, erAnsoegt, onSeDetaljer }) {
  return (
    <View style={styles.kort}>
      {erAnsoegt && (
        <View style={styles.ansoegtBadge}>
          <Text style={styles.ansoegtBadgeTekst}>Ansøgt</Text>
        </View>
      )}

      <Text style={styles.titel}>{opgave.titel}</Text>
      <Text style={styles.virksomhed}>{opgave.virksomhed}</Text>

      <View style={styles.detaljeRække}>
        <Text style={styles.honorar}>{opgave.honorar}</Text>
        <Text style={styles.deadline}>Deadline: {opgave.deadline}</Text>
      </View>

      <TouchableOpacity
        style={styles.knap}
        onPress={() => onSeDetaljer(opgave.id)}
        accessibilityRole="button"
      >
        <Text style={styles.knapTekst}>Se detaljer</Text>
      </TouchableOpacity>
    </View>
  );
}
