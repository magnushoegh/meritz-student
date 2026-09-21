import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OpgaveKort from './OpgaveKort';
import { useAnsoegninger } from '../context/AnsoegningerContext';
import styles from './OpgaveListe.styles';

// OpgaveListe er selve list-komponenten, som både OpgaveListeScreen og
// MineAnsoegningerScreen genbruger. Den får en liste af opgaver udefra
// (enten alle opgaver, eller kun de ansøgte) og står selv for at rendere
// dem i en FlatList samt navigere til detaljesiden.
export default function OpgaveListe({ opgaver, tomTekst }) {
  const navigation = useNavigation();
  const { erAnsoegt } = useAnsoegninger();

  const goTilDetaljer = (id) => {
    navigation.navigate('OpgaveDetalje', { id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={opgaver}
        keyExtractor={(opgave) => opgave.id}
        contentContainerStyle={styles.listeIndhold}
        renderItem={({ item }) => (
          <OpgaveKort
            opgave={item}
            erAnsoegt={erAnsoegt(item.id)}
            onSeDetaljer={goTilDetaljer}
          />
        )}
        ListEmptyComponent={
          <View style={styles.tomTilstand}>
            <Text style={styles.tomTilstandTekst}>{tomTekst}</Text>
          </View>
        }
      />
    </View>
  );
}
