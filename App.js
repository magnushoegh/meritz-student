import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AnsoegningerProvider } from './context/AnsoegningerContext';
import OpgaveListeScreen from './screens/OpgaveListeScreen';
import OpgaveDetaljeScreen from './screens/OpgaveDetaljeScreen';
import MineAnsoegningerScreen from './screens/MineAnsoegningerScreen';
import theme from './theme';

// Lille header-knap, der bruges på OpgaveListe-skærmen til at navigere
// videre til "Mine ansøgninger". Ligger her i App.js, da den er tæt
// knyttet til selve navigations-opsætningen (screenOptions/headerRight).
function MineAnsoegningerKnap({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('MineAnsoegninger')}>
      <Text style={headerKnapStyles.tekst}>Mine ansøgninger</Text>
    </TouchableOpacity>
  );
}

const headerKnapStyles = StyleSheet.create({
  tekst: {
    color: theme.colors.accentText,
    fontSize: 14,
    fontWeight: '600',
  },
});

const Stack = createNativeStackNavigator();

// App-roden:
// 1. AnsoegningerProvider gør den delte "hvilke opgaver er der ansøgt på"-state
//    tilgængelig for alle screens (Context API).
// 2. NavigationContainer + Stack.Navigator sætter de tre screens op med
//    React Navigation (native-stack), så man kan navigere mellem dem
//    og få en tilbage-knap "gratis".
export default function App() {
  return (
    <AnsoegningerProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator
          initialRouteName="OpgaveListe"
          screenOptions={{
            headerStyle: { backgroundColor: theme.colors.accent },
            headerTintColor: theme.colors.accentText,
            headerTitleStyle: { fontWeight: '700' },
          }}
        >
          <Stack.Screen
            name="OpgaveListe"
            component={OpgaveListeScreen}
            options={({ navigation }) => ({
              title: 'Ledige opgaver',
              headerRight: () => <MineAnsoegningerKnap navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="OpgaveDetalje"
            component={OpgaveDetaljeScreen}
            options={{ title: 'Opgavedetaljer' }}
          />
          <Stack.Screen
            name="MineAnsoegninger"
            component={MineAnsoegningerScreen}
            options={{ title: 'Mine ansøgninger' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AnsoegningerProvider>
  );
}
