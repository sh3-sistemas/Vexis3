export default {
    root: ({ props }) => ({
        class: [
            // Spacing and Shape
            'rounded-md',
            'outline',

            // Colors
            {
                'bg-primary-100/70 dark:bg-primary-500/20': props.severity == 'info',
                'bg-jade-100/70 dark:bg-jade-500/20': props.severity == 'success',
                'bg-surface-100/70 dark:bg-surface-500/20': props.severity == 'secondary',
                'bg-sulfur-100/70 dark:bg-sulfur-500/20': props.severity == 'warn',
                'bg-ruby-100/70 dark:bg-ruby-500/20': props.severity == 'error',
                'bg-surface-950 dark:bg-surface-0': props.severity == 'contrast'
            },
            {
                'outline-primary-200 dark:outline-primary-500/20': props.severity == 'info',
                'outline-jade-200 dark:outline-jade-500/20': props.severity == 'success',
                'outline-surface-200 dark:outline-surface-500/20': props.severity == 'secondary',
                'outline-sulfur-200 dark:outline-sulfur-500/20': props.severity == 'warn',
                'outline-ruby-200 dark:outline-ruby-500/20': props.severity == 'error',
                'outline-surface-950 dark:outline-surface-0': props.severity == 'contrast'
            },
            {
                'text-primary-700 dark:text-primary-300': props.severity == 'info',
                'text-jade-700 dark:text-jade-300': props.severity == 'success',
                'text-surface-700 dark:text-surface-300': props.severity == 'secondary',
                'text-sulfur-700 dark:text-sulfur-300': props.severity == 'warn',
                'text-ruby-700 dark:text-ruby-300': props.severity == 'error',
                'text-surface-0 dark:text-surface-950': props.severity == 'contrast'
            }
        ]
    }),
    content: {
        class: [
            // Flexbox
            'flex items-center h-full',

            // Spacing
            'py-2 px-3 gap-2'
        ]
    },
    icon: {
        class: [
            // Sizing and Spacing
            'shrink-0 w-[1.125rem] h-[1.125rem]'
        ]
    },
    text: {
        class: [
            // Font and Text
            'text-base leading-[normal]',
            'font-medium'
        ]
    },
    closeButton: ({ props }) => ({
        class: [
            // Flexbox
            'flex items-center justify-center',

            // Size
            'w-7 h-7',

            // Spacing and Misc
            'ml-auto relative',

            // Shape
            'rounded-full',

            // Colors
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:bg-surface-0/30 dark:hover:bg-[rgba(255,255,255,0.03)]',
            'focus:outline-none focus:outline-offset-0 focus:ring-1',
            {
                'focus:ring-primary-500 dark:focus:ring-primary-400': props.severity == 'info',
                'focus:ring-jade-500 dark:focus:ring-jade-400': props.severity == 'success',
                'focus:ring-surface-500 dark:focus:ring-surface-400': props.severity == 'secondary',
                'focus:ring-sulfur-500 dark:focus:ring-sulfur-400': props.severity == 'warn',
                'focus:ring-ruby-500 dark:focus:ring-ruby-4000': props.severity == 'error',
                'focus:ring-surface-0 dark:focus:ring-surface-950': props.severity == 'contrast'
            },

            // Misc
            'overflow-hidden'
        ]
    }),
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition-opacity duration-300',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
        leaveToClass: 'max-h-0 opacity-0 !m-0'
    }
};
