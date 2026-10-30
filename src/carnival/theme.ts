/**
 * The carnival's colours, fonts and sizes, themed on tortoises and lizards. Games draw with these rather than
 * their own values, so every booth on the midway looks like it belongs.
 */
export const theme = {
  colors: {
    // Swamp greens, a tortoise shell's gold and brown, and lizard green stripes.
    background: '#14261a',
    surface: '#1f3a26',
    text: '#fbf6e4',
    muted: '#a9c4a0',
    accent: '#e8b54a',
    danger: '#e2553f',
    stripeA: '#4f9a3a',
    stripeB: '#f4ecd0',
    water: '#5ec8c2',
    wood: '#7a5a3a',
  },
  font: {
    family: '"Trebuchet MS", "Segoe UI", system-ui, sans-serif',
    small: 14,
    body: 18,
    title: 32,
  },
  radius: 12,
  canvas: {
    width: 800,
    height: 500,
  },
} as const;

/** Canvas font string, e.g. canvasFont('title') → 'bold 32px "Trebuchet MS", …'. */
export function canvasFont(size: 'small' | 'body' | 'title', weight: 'normal' | 'bold' = 'normal') {
  return `${weight} ${theme.font[size]}px ${theme.font.family}`;
}

/** Exposes the theme to CSS as custom properties, e.g. --color-accent. */
export function applyTheme(root: HTMLElement = document.documentElement) {
  for (const [name, value] of Object.entries(theme.colors)) {
    root.style.setProperty(`--color-${name}`, value);
  }
  root.style.setProperty('--font-family', theme.font.family);
  root.style.setProperty('--radius', `${theme.radius}px`);
}
