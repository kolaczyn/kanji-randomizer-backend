export const normalizeArray = <T>(input: T | T[]): T[] => (Array.isArray(input) ? input : [input])
