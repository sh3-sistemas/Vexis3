// mouse.js
import { computed, type ComputedRef } from "vue";
import { variations } from "../constants";

export interface CardVariations {
  cardStyle: ComputedRef<string>;
  circleStyle: ComputedRef<string>;
  iconVariation: ComputedRef<string>;
  iconColor: ComputedRef<string>;
}
// by convention, composable function names start with "use"
export function useVariation(variation: string): CardVariations {
  const cardStyle = computed(() => {
    return variations[variation].cardStyle;
  });

  const circleStyle = computed(() => {
    return variations[variation].circleStyle;
  });

  const iconVariation = computed(() => {
    return variations[variation].iconVariation;
  });

  const iconColor = computed(() => {
    return variations[variation].iconColor;
  });

  return { cardStyle, circleStyle, iconVariation, iconColor };
}
