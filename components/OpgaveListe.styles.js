import { StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listeIndhold: {
    paddingVertical: theme.spacing.sm,
  },
  tomTilstand: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 2,
  },
  tomTilstandTekst: {
    fontSize: 15,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
});

export default styles;
