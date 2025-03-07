export default {
  pcinputtext: {
    root: ({ context, props, parent }) => ({
      class: [
        // Font
        "leading-none",

        // Spacing
        "m-0 py-2 px-3",

        // Colors
        "text-mercury-800 dark:text-white/80",
        { "bg-mercury-0 dark:bg-mercury-950": !context.disabled },

        "border",
        { "border-mercury-300 dark:border-mercury-700": !props.invalid },

        // Invalid State
        "invalid:focus:ring-red-200",
        "invalid:hover:border-red-500",
        { "border-red-500 dark:border-red-400": props.invalid },

        // States
        {
          "hover:border-mercury-400 dark:hover:border-mercury-600":
            !context.disabled && !props.invalid,
          "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10":
            !context.disabled,
          "bg-mercury-200 dark:bg-mercury-700 select-none pointer-events-none cursor-default":
            context.disabled,
        },

        // Filled State *for FloatLabel
        {
          filled:
            (parent.instance?.$name == "FloatLabel" && context.filled) ||
            (parent.instance?.$parentInstance?.$name == "FloatLabel" &&
              parent.props.modelValue !== null &&
              parent.props.modelValue?.length !== 0),
        },
        parent.instance?.$name == "FloatLabel" ||
        parent.instance?.$parentInstance?.$name == "FloatLabel"
          ? "placeholder:text-transparent dark:placeholder:text-transparent"
          : "placeholder:text-mercury-400 dark:placeholder:text-mercury-500",

        // Misc
        "rounded-md",
        "appearance-none",
        "transition-colors duration-200",
      ],
    }),
  },
};
