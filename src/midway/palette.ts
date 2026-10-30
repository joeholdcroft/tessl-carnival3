import { theme } from '../carnival';

const { colors } = theme;

/**
 * The midway map's daytime palette, for a carnival of tortoises and lizards.
 * Tent greens, creams and golds come from the carnival theme; the sky, grass, paths and other scenery shades only the map
 * uses live here.
 */
export const palette = {
  sky: '#38b4e6',
  skyHigh: '#1f9bd6',
  cloud: '#bfeafc',
  cloudShade: '#94d8f4',
  haze: '#5fc3b8',

  grass: '#a5c43a',
  grassDark: '#8aab2a',
  grassEdge: '#7a9a22',
  grassLight: '#b6d24c',
  path: '#f3e28e',
  pathShade: '#e2cd70',
  hedge: '#6f9a2c',
  hedgeDark: '#5a8122',
  hedgeLight: '#86b236',
  shadow: 'rgba(60, 90, 10, 0.28)',

  leaf: colors.stripeA,
  leafShade: '#3a752b',
  cream: colors.stripeB,
  creamShade: '#e3d9c2',
  gold: colors.accent,
  goldShade: '#c08f2c',
  teal: '#2f9e8f',
  tealShade: '#237a6e',
  sky2: colors.water,
  shell: '#a4743e',
  shellShade: '#7f5730',
  wood: colors.wood,
  woodDark: '#6b4429',
  woodLight: '#b7834f',
  board: '#c8955b',
  metal: '#e9e4f2',
  metalShade: '#b9b0cc',
  ink: colors.background,
  opening: '#4a2a28',
  closed: '#a99cc4',
  closedShade: '#8a7daa',
  white: '#ffffff',

  // Visitors are lizards: scales in greens and sand, with a crest on top.
  skins: ['#7bc043', '#5fa34a', '#a3c94a', '#4f8f5a', '#c2b26a'],
  hairs: ['#e8b54a', '#e2553f', '#2f9e8f', '#a4743e', '#f4ecd0'],
  // The player is a tortoise.
  tortoiseSkin: '#9aa86a',
  shirts: [colors.water, '#e8b54a', '#b48ee0', colors.danger, '#2f9e8f', colors.stripeB],
  bunting: [colors.stripeA, colors.accent, '#2f9e8f', colors.stripeB],
  balloons: [colors.stripeA, colors.accent, '#2f9e8f', colors.water, '#a4743e'],
} as const;
