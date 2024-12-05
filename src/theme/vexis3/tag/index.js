export default {
  root: ({ props }) => ({
    class: [
      //Font
      "text-xs font-bold",

      //Alignments
      "inline-flex items-center justify-center",

      //Spacing
      "px-[0.4rem] py-1",

      //Shape
      {
        "rounded-md": !props.rounded,
        "rounded-full": props.rounded,
      },

      //Colors
      {
        "bg-highlight": props.severity === null || props.severity === "primary",
        "text-jade-700 dark:text-jade-300 bg-jade-100 dark:bg-jade-500/20":
          props.severity === "success",
        "text-surface-700 dark:text-surface-300 bg-surface-100 dark:bg-surface-500/20":
          props.severity === "secondary",
        "text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-500/20":
          props.severity === "info",
        "text-sulfur-700 dark:text-sulfur-300 bg-sulfur-100 dark:bg-sulfur-500/20":
          props.severity === "warn",
        "text-ruby-700 dark:text-ruby-300 bg-ruby-100 dark:bg-ruby-500/20":
          props.severity === "danger",
        "text-surface-0 dark:text-surface-900 bg-surface-900 dark:bg-surface-0":
          props.severity === "contrast",
      },
    ],
  }),
  value: {
    class: "leading-normal",
  },
  icon: {
    class: "mr-1 text-sm",
  },
};
