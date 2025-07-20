export const ButtonIconPosition = {
    None: "none",
    Right: "right",
    Left: "left",
    LeftAndRight: "left-and-right",
    Center: "center",
} as const;

export type ButtonIconPosition = typeof ButtonIconPosition[keyof typeof ButtonIconPosition];