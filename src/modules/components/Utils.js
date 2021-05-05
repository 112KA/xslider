export const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

export const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export const expoOut = t => 1 - Math.exp(-6.931471805599453 * t);
