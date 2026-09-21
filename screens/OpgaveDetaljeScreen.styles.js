import { StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  indhold: {
    padding: theme.spacing.md,
  },
  kort: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.lg,
  },
  titel: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  virksomhed: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  infoRække: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    paddingVertical: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  infoBoks: {
    alignItems: 'flex-start',
  },
  infoLabel: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
    textTransform: 'uppercase',
  },
  infoVærdi: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  infoVærdiAccent: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.accent,
  },
  beskrivelseLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  beskrivelseTekst: {
    fontSize: 15,
    lineHeight: 22,
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
  },
  knap: {
    backgroundColor: theme.colors.accent,
    borderRadius: theme.radius.sm,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
  },
  knapDeaktiveret: {
    backgroundColor: theme.colors.success,
  },
  knapTekst: {
    color: theme.colors.accentText,
    fontSize: 16,
    fontWeight: '700',
  },
  ikkeFundetTekst: {
    fontSize: 15,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
});

export default styles;
