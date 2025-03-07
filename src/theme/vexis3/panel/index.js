export default {
  root: {
    class: [
      //Shape
      "rounded-md",

      //Colors
      "border border-mercury-200 dark:border-mercury-700",
      "bg-mercury-0 dark:bg-mercury-900",
    ],
  },
  header: ({ props }) => ({
    class: [
      // Flex
      "flex items-center justify-between",

      // Colors
      "text-mercury-700 dark:text-mercury-0/80",
      "bg-transparent",

      //Shape
      "rounded-tl-md rounded-tr-md",
      "border-0",

      // Conditional Spacing
      {
        "p-[1.125rem]": !props.toggleable,
        "py-3 px-[1.125rem]": props.toggleable,
      },
    ],
  }),
  title: {
    class: "leading-none font-semibold",
  },
  pctogglebutton: {
    root: {
      class: [
        // Positioning
        "relative",
        // Flexbox alignment
        "inline-flex items-center justify-center text-center",
        // Line height
        "leading-[normal]",
        // Size
        "w-10 h-10 px-0 py-2",
        // Shape
        "rounded-[50%] rounded-full",
        // Background and border
        "bg-transparent border-transparent",
        // Text color
        "text-mercury-500 dark:text-mercury-300",
        // Focus states
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-mercury-500 dark:focus:ring-mercury-400",
        // Hover effect
        "hover:bg-mercury-300/10",
        // Transition effects
        "transition duration-200 ease-in-out",
        // Cursor and overflow
        "cursor-pointer overflow-hidden select-none",
      ],
    },
  },

  content: {
    class: [
      // Spacing
      "p-[1.125rem] pt-0",

      // Shape
      "border-0 border-t-0 last:rounded-br-md last:rounded-bl-md",

      //Color
      "text-mercury-700 dark:text-mercury-0/80",
    ],
  },
  footer: {
    class: [
      // Spacing
      "p-[1.125rem] pt-0",

      // Shape
      "border-0 border-t-0 rounded-br-lg rounded-bl-lg",

      //Color
      "text-mercury-700 dark:text-mercury-0/80",
    ],
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass:
      "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass:
      "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0",
  },
};
