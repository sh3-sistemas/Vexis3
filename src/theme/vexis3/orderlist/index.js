export default {
  root: "flex",
  controls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",

      // Spacing
      "p-[1.125rem]",
    ],
  },
  container: {
    class: [
      "flex-auto",

      // Shape
      "rounded-md",

      // Color
      "bg-mercury-0 dark:bg-mercury-900",
      "border border-mercury-200 dark:border-mercury-700",
      "outline-none",
    ],
  },
};
