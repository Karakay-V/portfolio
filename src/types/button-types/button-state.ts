export const ButtonState = {
    Default: 0,
    Hover: 1,
    Active: 2,
} as const;

export type ButtonState = typeof ButtonState[keyof typeof ButtonState];