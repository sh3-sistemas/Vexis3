export default {
  root: {
    class: [
      // Spacing
      "py-2 px-3",

      // Shape
      "rounded-md",

      // Color
      "bg-mercury-0 dark:bg-mercury-950 text-mercury-700 dark:text-mercury-0",
      "border border-mercury-200 dark:border-mercury-700",

      // Sizing & Overflow
      "h-72 overflow-auto",
    ],
  },
  container: {
    class: [
      // Flexbox
      "flex items-center",
    ],
  },
  prompt: {
    class: [
      // Color
      "text-mercury-700 dark:text-mercury-0",
    ],
  },
  response: {
    class: [
      // Color
      "text-mercury-700 dark:text-mercury-0",
    ],
  },
  command: {
    class: [
      // Color
      "text-mercury-700 dark:text-mercury-0",
    ],
  },
  commandtext: {
    class: [
      // Flexbox
      "flex-1 shrink grow-0",

      // Shape
      "border-0",

      // Spacing
      "p-0",

      // Color
      "bg-transparent text-inherit",

      // Outline
      "outline-none",
    ],
  },
};
