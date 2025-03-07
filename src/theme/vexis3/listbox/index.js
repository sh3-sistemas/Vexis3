export default {
  root: ({ props }) => ({
    class: [
      "rounded-md",

      // Colors
      { "bg-mercury-0 dark:bg-mercury-900": !props.disabled },
      "text-mercury-700 dark:text-white/80",
      "border",
      { "border-mercury-300 dark:border-mercury-700": !props.invalid },

      // Disabled State
      {
        "bg-mercury-200 dark:bg-mercury-700 select-none pointer-events-none cursor-default":
          props.disabled,
      },

      // Invalid State
      { "border-red-500 dark:border-red-400": props.invalid },
    ],
  }),
  listContainer: "overflow-auto",
  list: {
    class: "p-1 list-none m-0 outline-none",
  },
  option: ({ context, props }) => ({
    class: [
      "relative",

      // Flex
      "flex items-center",

      // Font
      "leading-none",

      // Spacing
      "m-0 px-3 py-2",
      "first:mt-0 mt-[2px]",

      // Shape
      "border-0 rounded",

      // Colors
      {
        "text-mercury-700 dark:text-white/80":
          !context.focused && !context.selected,
        "bg-mercury-200 dark:bg-mercury-600/60":
          context.focused && !context.selected,
        "text-mercury-700 dark:text-white/80":
          context.focused && !context.selected,
        "bg-highlight": context.selected && !props.checkmark,
        "bg-mercury-0 dark:bg-mercury-900": props.checkmark && context.selected,
      },

      //States
      {
        "hover:bg-mercury-100 dark:hover:bg-[rgba(255,255,255,0.03)]":
          (!context.focused && !context.selected) ||
          (props.checkmark && context.selected),
      },
      { "hover:bg-highlight-emphasis": context.selected && !props.checkmark },
      {
        "hover:text-mercury-700 hover:bg-mercury-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]":
          context.focused && !context.selected,
      },

      // Transition
      "transition-shadow duration-200",

      // Misc
      "cursor-pointer overflow-hidden whitespace-nowrap",
    ],
  }),
  optionGroup: {
    class: [
      "font-semibold",

      // Spacing
      "m-0 py-2 px-3",

      // Colors
      "text-mercury-400 dark:text-mercury-500",

      // Misc
      "cursor-auto",
    ],
  },
  optionCheckIcon:
    "relative -ms-1.5 me-1.5 text-mercury-700 dark:text-white/80 w-4 h-4",
  emptyMessage: {
    class: [
      // Font
      "leading-none",

      // Spacing
      "py-2 px-3",

      // Color
      "text-mercury-800 dark:text-white/80",
      "bg-transparent",
    ],
  },
  header: {
    class: [
      // Spacing
      "pt-2 px-2 pb-0",
      "m-0",

      //Shape
      "border-b-0",
      "rounded-tl-md",
      "rounded-tr-md",

      // Color
      "text-mercury-700 dark:text-white/80",
      "bg-mercury-0 dark:bg-mercury-900",
      "border-mercury-300 dark:border-mercury-700",

      "[&_[data-pc-name=pcfilter]]:w-full",
    ],
  },
};
