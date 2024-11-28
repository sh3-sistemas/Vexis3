// mouse.js
import { computed } from 'vue'
import { variations } from './constants';

// by convention, composable function names start with "use"
export function useVariation(variation: string) {
    const tagColor = computed(() => {
        return variations[variation].tagColor;
    });

    const tagLabel = computed(() => {
        return variations[variation].tagLabel;
    });
    return { tagColor, tagLabel }
}