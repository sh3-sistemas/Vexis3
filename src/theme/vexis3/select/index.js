export default {
  root: ({ props, state, parent }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",
      // Shape
      { "rounded-md": parent.instance.$name !== "InputGroup" },
      {
        "first:rounded-l-md rounded-none last:rounded-r-md":
          parent.instance.$name == "InputGroup",
      },
      {
        "border-0 border-y border-l last:border-r":
          parent.instance.$name == "InputGroup",
      },
      {
        "first:ml-0 ml-[-1px]":
          parent.instance.$name == "InputGroup" && !props.showButtons,
      },

      // Color and Background
      { "bg-mercury-0 dark:bg-mercury-950": !props.disabled },

      "border",
      { "dark:border-mercury-700": parent.instance.$name != "InputGroup" },
      { "dark:border-mercury-600": parent.instance.$name == "InputGroup" },
      { "border-mercury-300 dark:border-mercury-600": !props.invalid },

      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": props.invalid },

      // Transitions
      "transition-all",
      "duration-200",

      // States
      {
        "hover:border-mercury-400 dark:hover:border-mercury-600":
          !props.invalid,
      },
      {
        "outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400 z-10":
          state.focused,
      },

      // Misc
      "cursor-pointer",
      "select-none",
      {
        "bg-mercury-200 dark:bg-mercury-700 select-none pointer-events-none cursor-default":
          props.disabled,
      },
    ],
  }),
  label: ({ props, parent }) => ({
    class: [
      //Font
      "leading-[normal]",

      // Display
      "block",
      "flex-auto",

      // Color and Background
      "bg-transparent",
      "border-0",
      {
        "text-mercury-800 dark:text-white/80": props.modelValue != undefined,
        "text-mercury-400 dark:text-mercury-500": props.modelValue == undefined,
      },
      "placeholder:text-mercury-400 dark:placeholder:text-mercury-500",

      // Sizing and Spacing
      "w-[1%]",
      "py-2 px-3",
      { "pr-7": props.showClear },

      //Shape
      "rounded-none",

      // Transitions
      "transition",
      "duration-200",

      // States
      "focus:outline-none focus:shadow-none",

      // Filled State *for FloatLabel
      {
        filled:
          parent.instance?.$name == "FloatLabel" && props.modelValue !== null,
      },

      // Misc
      "relative",
      "cursor-pointer",
      "overflow-hidden overflow-ellipsis",
      "whitespace-nowrap",
      "appearance-none",
    ],
  }),
  dropdown: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",

      // Color and Background
      "bg-transparent",
      "text-mercury-500",

      // Size
      "w-12",

      // Shape
      "rounded-r-md",
    ],
  },
  overlay: {
    class: [
      // Colors
      "bg-mercury-0 dark:bg-mercury-900",
      "text-mercury-700 dark:text-white/80",

      // Shape
      "border border-mercury-300 dark:border-mercury-700",
      "rounded-md",
      "shadow-md",
    ],
  },
  listContainer: {
    class: [
      // Sizing
      "max-h-[200px]",

      // Misc
      "overflow-auto",
    ],
  },
  list: {
    class: "p-1 list-none m-0",
  },
  option: ({ context }) => ({
    class: [
      "relative",
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
        "bg-highlight": context.selected,
      },

      //States
      {
        "hover:bg-mercury-100 dark:hover:bg-[rgba(255,255,255,0.03)]":
          !context.focused && !context.selected,
      },
      { "hover:bg-highlight-emphasis": context.selected },
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
  optionBlankIcon: "w-4 h-4",
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
    ],
  },
  clearIcon: {
    class: [
      // Color
      "text-mercury-400 dark:text-mercury-500",

      // Position
      "absolute",
      "top-1/2",
      "right-12",

      // Spacing
      "-mt-2",
    ],
  },
  loadingIcon: {
    class: "text-mercury-400 dark:text-mercury-500 animate-spin",
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass:
      "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0",
  },
};
