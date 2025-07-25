export const ButtonState = {
    Default: "default",
    Hover: "hover",
    Active: "active",
} as const;

export type ButtonState = typeof ButtonState[keyof typeof ButtonState];