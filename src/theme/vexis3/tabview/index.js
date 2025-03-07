export default {
  // For PrimeVue version 3
  navContainer: ({ props }) => ({
    class: [
      // Position
      "relative",

      // Misc
      { "overflow-hidden": props.scrollable },
    ],
  }),
  navContent: ({ instance }) => ({
    class: [
      // Overflow and Scrolling
      "overflow-y-hidden overscroll-contain",
      "overscroll-auto",
      "scroll-smooth",
      "[&::-webkit-scrollbar]:hidden",
    ],
  }),
  previousButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",

      // Position
      "!absolute",
      "top-0 left-0",
      "z-20",

      // Size and Shape
      "h-full w-10",
      "rounded-none",

      // Colors
      "bg-mercury-0 dark:bg-mercury-900",
      "text-mercury-700 dark:text-mercury-0/80",
      "shadow-sm",
    ],
  },
  nextButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",

      // Position
      "!absolute",
      "top-0 right-0",
      "z-20",

      // Size and Shape
      "h-full w-10",
      "rounded-none",

      // Colors
      "text-mercury-700 dark:text-mercury-0/80",
      "bg-mercury-0 dark:bg-mercury-900",
      "shadow-sm",
    ],
  },
  nav: {
    class: [
      // Flexbox
      "flex flex-1",

      // Spacing
      "list-none",
      "p-0 m-0",

      // Colors
      "bg-mercury-0 dark:bg-mercury-900",
      "border-b border-mercury-200 dark:border-mercury-700",
      "text-mercury-900 dark:text-mercury-0/80",
    ],
  },
  tabpanel: {
    header: ({ props }) => ({
      class: [
        // Spacing
        "mr-0",

        // Misc
        "outline-none",
        {
          "opacity-60 cursor-default user-select-none select-none pointer-events-none":
            props?.disabled,
        },
      ],
    }),
    headerAction: ({ parent, context }) => ({
      class: [
        "relative",

        // Font
        "font-semibold",

        // Flexbox and Alignment
        "flex items-center",

        // Spacing
        "py-4 px-[1.125rem]",
        "-mb-px",

        // Shape
        "border-b-2",
        "rounded-t-md",

        // Colors and Conditions
        {
          "border-mercury-200 dark:border-mercury-700":
            parent.state.d_activeIndex !== context.index,
          "bg-mercury-0 dark:bg-mercury-900":
            parent.state.d_activeIndex !== context.index,
          "text-mercury-700 dark:text-mercury-0/80":
            parent.state.d_activeIndex !== context.index,

          "bg-mercury-0 dark:bg-mercury-900":
            parent.state.d_activeIndex === context.index,
          "border-primary": parent.state.d_activeIndex === context.index,
          "text-primary": parent.state.d_activeIndex === context.index,
        },

        // States
        "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
        {
          "hover:bg-mercury-0 dark:hover:bg-mercury-800/80":
            parent.state.d_activeIndex !== context.index,
          "hover:text-mercury-900 dark:hover:text-mercury-0":
            parent.state.d_activeIndex !== context.index,
        },

        // Transitions
        "transition-all duration-200",

        // Misc
        "cursor-pointer select-none text-decoration-none",
        "overflow-hidden",
        "user-select-none",
      ],
    }),
    headerTitle: {
      class: [
        // Text
        "leading-none",
        "whitespace-nowrap",
      ],
    },
  },
  panelcontainer: {
    class: [
      // Spacing
      "p-[1.125rem] pt-[0.875rem]",

      // Shape
      "border-0 rounded-none",
      "border-br-md border-bl-md",

      // Colors
      "bg-mercury-0 dark:bg-mercury-900",
      "text-mercury-900 dark:text-mercury-0/80",
    ],
  },
};
