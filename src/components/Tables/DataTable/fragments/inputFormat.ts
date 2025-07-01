/**
 * Converte um valor para booleano seguindo regras específicas.
 *
 * @param  {string | number | null | undefined} value - O valor a ser convertido para booleano.
 *
 * @returns A representação booleana do valor de acordo com estas regras:
 * - Se o valor já for booleano, retorna o próprio valor
 * - Se for string, retorna `true` apenas para "true" (case insensitive)
 * - Para outros valores, usa a conversão padrão do JavaScript (truthy/falsy)
 *
 * @example
 * // Retorna true
 * formatBoolean(true);
 * formatBoolean("True");
 * formatBoolean("TRUE");
 *
 * @example
 * // Retorna false
 * formatBoolean(false);
 * formatBoolean("false");
 * formatBoolean(0);
 * formatBoolean(null);
 * formatBoolean(undefined);
 */
export const formatBoolean = (value: string | number | null | undefined) => {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value.toLowerCase() === "true";
  return Boolean(value);
};

/**
 * Converte um valor para string booleano "Sim" ou "Não".
 *
 * @param {string | number | null | undefined} value - O valor a ser convertido para string booleana.
 *
 * @returns {"Sim" | "Não"} A string da representação do valor como string booleana.
 *
 * @example
 * // Retorna "Sim"
 * formatBoolean(true);
 * formatBoolean("True");
 * formatBoolean("TRUE");
 * // Retorna "Não"
 * formatBoolean(false);
 * formatBoolean("false");
 * formatBoolean(0);
 * formatBoolean(null);
 * formatBoolean(undefined);
 */
export const formatBooleanToString = (
  value: string | number | null | undefined,
) => (formatBoolean(value) ? "Sim" : "Não");
