const hideDelay = {
  showDelay: 50,
  hideDelay: 50,
};

export const cancelTooltip = {
  value: "Cancelar",
  pt: { text: "bg-slate-300 text-xs rounded-md p-1.5" },
  ...hideDelay,
};

export const saveTooltip = {
  value: "Esta ação irá salvar o registro",
  pt: {
    arrow: {
      style: {
        // única forma funcional de passar a cor
        borderTopColor: "#4ade80",
      },
    },
    text: "bg-grass-400 text-white text-xs rounded-md p-1.5",
  },
  ptOptions: { mergeProps: true },
  ...hideDelay,
};
