/**
 * Converte uma instância de FormData em um objeto contendo todas as variáveis de chave-valor.
 *
 * @param {FormData} FormData - Uma instância de FormData contendo pares chave-valor que serão convertidos em um objeto.
 * @returns {Object} Um objeto onde cada chave é um campo do FormData e o valor correspondente é o valor do campo.
 *
 * @example
 * const formData = new FormData();
 * formData.append('name', 'John');
 * formData.append('age', '30');
 *
 * const variables = resolveFormDataVariables(formData);
 * console.log(variables);
 * // Saída: { name: 'John', age: '30' }
 */
export const resolveFormDataVariables = (FormData) => {
  let variables = {};
  for (const [key, value] of FormData.entries()) {
    variables = { ...variables, [key]: value };
  }

  return variables;
};
