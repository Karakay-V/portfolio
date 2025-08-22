export const Align = {
    Top: "top",
    Right: "right",
    Bottom: "bottom",
    Left: "left",
} as const;

export type Align = typeof Align[keyof typeof Align];