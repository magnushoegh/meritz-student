import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import opgaver from '../data/opgaver';
import { useAnsoegninger } from '../context/AnsoegningerContext';
import styles from './OpgaveDetaljeScreen.styles';

// Detaljesiden modtager opgavens id via navigation-parametrene
// (se navigation.navigate('OpgaveDetalje', { id }) i OpgaveListe.js)
// og slår selv den fulde opgave op i data/opgaver.js.
export default function OpgaveDetaljeScreen({ route }) {
  const { id } = route.params;
  const { erAnsoegt, ansoegPaaOpgave } = useAnsoegninger();

  const opgave = opgaver.find((o) => o.id === id);
  const allereedeAnsoegt = opgave ? erAnsoegt(opgave.id) : false;

  // Defensivt tjek - burde ikke kunne ske i praksis, da id altid kommer
  // fra en gyldig opgave i listen, men det gør komponenten robust.
  if (!opgave) {
    return (
      <View style={styles.container}>
        <Text style={styles.ikkeFundetTekst}>Opgaven blev ikke fundet.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.indhold}>
      <View style={styles.kort}>
        <Text style={styles.titel}>{opgave.titel}</Text>
        <Text style={styles.virksomhed}>{opgave.virksomhed}</Text>

        <View style={styles.infoRække}>
          <View style={styles.infoBoks}>
            <Text style={styles.infoLabel}>Honorar</Text>
            <Text style={styles.infoVærdiAccent}>{opgave.honorar}</Text>
          </View>
          <View style={styles.infoBoks}>
            <Text style={styles.infoLabel}>Deadline</Text>
            <Text style={styles.infoVærdi}>{opgave.deadline}</Text>
          </View>
        </View>

        <Text style={styles.beskrivelseLabel}>Beskrivelse</Text>
        <Text style={styles.beskrivelseTekst}>{opgave.beskrivelse}</Text>

        <TouchableOpacity
          style={[styles.knap, allereedeAnsoegt && styles.knapDeaktiveret]}
          onPress={() => ansoegPaaOpgave(opgave.id)}
          disabled={allereedeAnsoegt}
          accessibilityRole="button"
        >
          <Text style={styles.knapTekst}>
            {allereedeAnsoegt ? 'Du har ansøgt' : 'Ansøg'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
