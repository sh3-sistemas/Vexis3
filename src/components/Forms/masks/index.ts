export const realMask = {
  mask: "R$ REAL",
  blocks: {
    REAL: {
      mask: "number",
      thousandsSeparator: ".",
      scale: 2,
      padFractionalZeros: true,
      radix: ",",
      mapToRadix: [","],
      min: 0,
      max: "999999999999.99",
      autofix: true,
    },
  },
};

export const cnpjMask = { mask: "00.000.000/0000-00", placeholder: true };
export const cpfMask = { mask: "000.000.000-00", placeholder: true };

export const telMask = { mask: "(00) `0000-0000", placeholder: true };
export const celMask = { mask: "(00) `0 0000-0000", placeholder: true };

export const cepMask = { mask: "00000-000", placeholder: true };

const TIME = {
  mask: "range",
  from: 0,
  to: 59,
  autofix: true,
};

export const horaMask = {
  mask: "00:MM:SS",
  placeholder: true,
  blocks: { MM: TIME, SS: TIME },
};

export const horaMinutoMask = {
  mask: "000:TIME",
  placeholder: true,
  blocks: { TIME },
};
