import { StyleSheet } from 'react-native';
import theme from '../theme';

// Styling for det enkelte opgave-kort. Ligger i sin egen fil, adskilt
// fra komponentens logik, som ønsket i opgavebeskrivelsen.
const styles = StyleSheet.create({
  kort: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    marginHorizontal: theme.spacing.md,
    marginVertical: theme.spacing.sm,
    // Let skygge så kortet fremstår "løftet" og tillidsvækkende.
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  titel: {
    fontSize: 17,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  virksomhed: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  detaljeRække: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  honorar: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.accent,
  },
  deadline: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
  ansoegtBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9F5EE',
    borderRadius: theme.radius.sm,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    marginBottom: theme.spacing.sm,
  },
  ansoegtBadgeTekst: {
    color: theme.colors.success,
    fontSize: 12,
    fontWeight: '600',
  },
  knap: {
    backgroundColor: theme.colors.accent,
    borderRadius: theme.radius.sm,
    paddingVertical: theme.spacing.sm,
    alignItems: 'center',
  },
  knapTekst: {
    color: theme.colors.accentText,
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;
