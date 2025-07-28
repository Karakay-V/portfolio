export const InputState = {
    Default: "default",
    Hover: "hover",
    Focused: "focused",
    Filled: "filled",
    Error: "error",
    Disabled: "disabled",
} as const;

export type InputState = typeof InputState[keyof typeof InputState];