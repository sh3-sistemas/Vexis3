export default {
  root: ({ props, state }) => ({
    class: [
      // Font
      "leading-none",

      // Display and Position
      "inline-flex",
      "relative",

      // Shape
      "rounded-md",

      // Color and Background
      { "bg-mercury-0 dark:bg-mercury-950": !props.disabled },
      "border",
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
        "hover:border-mercury-400 dark:hover:border-mercury-700":
          !props.invalid,
      },
      {
        "outline-none outline-offset-0 z-10 ring-1 ring-primary-500 dark:ring-primary-400":
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
  labelContainer: "overflow-hidden flex flex-auto cursor-pointer",
  label: ({ props, parent }) => ({
    class: [
      "text-base leading-2",

      // Spacing
      {
        "py-2 px-3":
          props.display === "comma" ||
          (props.display === "chip" && !props?.modelValue?.length),
        "py-1 px-1": props.display === "chip" && props?.modelValue?.length > 0,
      },

      // Color
      {
        "text-mercury-800 dark:text-white/80": props.modelValue?.length,
        "text-mercury-400 dark:text-mercury-500": !props.modelValue?.length,
      },
      {
        "placeholder:text-transparent dark:placeholder:text-transparent":
          parent.instance?.$name == "FloatLabel",
        "!text-transparent dark:!text-transparent":
          (parent.instance?.$name == "FloatLabel" &&
            props.modelValue == null) ||
          props.modelValue?.length == 0,
      },

      // Filled State *for FloatLabel
      {
        filled:
          parent.instance?.$name == "FloatLabel" && props.modelValue !== null,
      },

      // Transitions
      "transition duration-200",

      // Misc
      "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis",
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
      "mt-[2px]",
    ],
  },
  header: {
    class: [
      //Flex
      "flex items-center justify-between",

      // Spacing
      "pt-2 px-4 pb-0 gap-2",
      "m-0",

      //Shape
      "border-b-0",
      "rounded-tl-md",
      "rounded-tr-md",

      // Color
      "text-mercury-700 dark:text-white/80",
      "bg-mercury-0 dark:bg-mercury-900",
      "border-mercury-300 dark:border-mercury-700",

      "[&_[data-pc-name=pcfiltercontainer]]:!flex-auto",
      "[&_[data-pc-name=pcfilter]]:w-full",
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
      "m-0 px-3 py-2 gap-2",
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
