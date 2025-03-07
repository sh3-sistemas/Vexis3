export default {
  root: ({ context }) => ({
    class: [
      "flex items-center justify-between bg-mercury-0 dark:bg-mercury-900 text-mercury-600 dark:text-mercury-0/70 p-[1.125rem] font-semibold outline-transparent",
      {
        "focus-visible:outline-offset-2 focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
          !context.disabled,
      },
      {
        "hover:text-mercury-700 dark:hover:text-mercury-0": !context.disabled,
      },
    ],
  }),
  toggleIcon: "inline-block text-mercury-900 dark:text-mercury-0 w-4 h-4",
};
