export const ButtonSize = {
    Small: "small",
    Medium: "medium",
} as const;

export type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize];