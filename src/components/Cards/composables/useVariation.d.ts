import { ComputedRef } from "vue";

export interface CardVariations {
    cardStyle: ComputedRef<string>;
    circleStyle: ComputedRef<string>;
    iconVariation: ComputedRef<string>;
    iconColor: ComputedRef<string>;
}

export declare function useVariation(ariation: string): CardVariations;