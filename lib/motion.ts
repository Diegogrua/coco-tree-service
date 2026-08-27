export const MOTION_DURATION = {
  micro: 0.25,
  ui: 0.4,
  reveal: 0.8,
  heroEntrance: 1.4,
} as const;

export const MOTION_EASE = {
  default: "power2.out",
  cinematic: "power3.out",
} as const;

export const MOTION_DISTANCE = {
  revealY: 30,
} as const;

export const MOTION_SCALE = {
  reveal: 0.96,
  hover: 1.02,
  cardImage: 1.05,
  camera: 1.12,
} as const;

export const MOTION_PARALLAX = {
  background: 4,
  midground: 8,
  foreground: 14,
  content: 5,
} as const;

export const HERO_CAMERA_ZOOM = MOTION_SCALE.camera;
export const HERO_MIDGROUND_Y_PERCENT = -MOTION_PARALLAX.midground;
export const HERO_FOREGROUND_Y_PERCENT = -MOTION_PARALLAX.foreground;
