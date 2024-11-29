type HighlightText = {
  title: string;
  name: string;
  extra: string;
};

type HighlightStyle = {
  main: string;
  name: string;
};

export type HightlightTitleProps = {
  highlightText?: HighlightText;
  highlightStyle: HighlightStyle;
};
