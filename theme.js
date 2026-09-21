// Fælles design-tokens for hele appen.
// Ved at samle farverne ét sted er det nemt at holde et ensartet,
// professionelt udtryk på tværs af alle screens og komponenter.
const theme = {
  colors: {
    accent: '#0A66C2', // Primær accentfarve - bruges til knapper og vigtige elementer
    accentText: '#FFFFFF',
    background: '#F3F2EF', // Lys grå baggrund
    surface: '#FFFFFF', // Baggrund på kort/bokse
    text: '#1D1D1D', // Mørk primær tekst
    textSecondary: '#5E5E5E', // Sekundær/grå tekst (fx labels)
    border: '#E0E0E0',
    success: '#057642', // Bruges til "Ansøgt"-status
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 6,
    md: 10,
  },
};

export default theme;
