export const InputDataTypes = {
    Text: "text",
    Email: "email",
    Phone: "tel",
    URL: "url",
} as const;

export type InputDataTypes = typeof InputDataTypes[keyof typeof InputDataTypes];