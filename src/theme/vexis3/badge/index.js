export default {
  root: ({ props }) => ({
    class: [
      // Font
      "font-bold",

      {
        "text-xs leading-[1.5rem]": props.size === null,
        "text-[0.625rem] leading-[1.25rem]": props.size === "small",
        "text-lg leading-[2.25rem]": props.size === "large",
        "text-2xl leading-[3rem]": props.size === "xlarge",
      },

      // Alignment
      "text-center inline-block",

      // Size
      "p-0 px-1",
      {
        "w-2 h-2": props.value === null,
        "min-w-[1.5rem] h-[1.5rem]":
          props.value !== null && props.size === null,
        "min-w-[1.25rem] h-[1.25rem]": props.size === "small",
        "min-w-[2.25rem] h-[2.25rem]": props.size === "large",
        "min-w-[3rem] h-[3rem]": props.size === "xlarge",
      },

      // Shape
      {
        "rounded-full": props.value?.length === 1,
        "rounded-[0.71rem]": props.value?.length !== 1,
      },

      // Color
      "text-primary-contrast",
      {
        "bg-primary": props.severity == null || props.severity === "primary",
        "bg-mercury-500 dark:bg-mercury-400": props.severity === "secondary",
        "bg-jade-500 dark:bg-jade-400": props.severity === "success",
        "bg-selenium-500 dark:bg-selenium-400": props.severity === "info",
        "bg-sulfur-500 dark:bg-sulfur-400": props.severity === "warn",
        "bg-purple-500 dark:bg-purple-400": props.severity === "help",
        "bg-ruby-500 dark:bg-ruby-400": props.severity === "danger",
        "text-mercury-0 dark:text-mercury-900 bg-mercury-900 dark:bg-mercury-0":
          props.severity === "contrast",
      },
    ],
  }),
};
