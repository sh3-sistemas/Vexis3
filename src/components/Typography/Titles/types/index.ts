type HighlightText = {
  title: string;
  name: string;
  extra: string;
};

type HighlightStyle = {
  main: string;
  name: string;
};

export type HightlightTextProps = {
  highlightText: HighlightText;
  highlightStyle: HighlightStyle;
};
