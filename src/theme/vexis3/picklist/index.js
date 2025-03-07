export default {
  root: "flex [&_[data-pc-name=pclist]]:h-full",
  sourceControls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",

      // Spacing
      "p-[1.125rem]",
    ],
  },
  sourceListContainer: {
    class: [
      // Flexbox
      "grow shrink basis-2/4",

      // Shape
      "rounded-md",

      // Color
      "bg-mercury-0 dark:bg-mercury-900",
      "border border-mercury-200 dark:border-mercury-700",
      "outline-none",
    ],
  },
  transferControls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",

      // Spacing
      "p-[1.125rem]",
    ],
  },
  targetListContainer: {
    class: [
      // Flexbox
      "grow shrink basis-2/4",

      // Shape
      "rounded-md",

      // Color
      "bg-mercury-0 dark:bg-mercury-900",
      "border border-mercury-200 dark:border-mercury-700",
      "outline-none",
    ],
  },
  targetControls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",

      // Spacing
      "p-[1.125rem]",
    ],
  },
  transition: {
    enterFromClass: "!transition-none",
    enterActiveClass: "!transition-none",
    leaveActiveClass: "!transition-none",
    leaveToClass: "!transition-none",
  },
};
