<script setup lang="ts">
import type { PrimitiveProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { cn } from "@/utils/cn";
import { Primitive } from "radix-vue";

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      size?: "sm" | "md";
      isActive?: boolean;
      class?: HTMLAttributes["class"];
    }
  >(),
  {
    as: "a",
    size: "md",
  },
);
</script>

<template>
  <Primitive
    data-sidebar="menu-sub-button"
    :as="as"
    :as-child="asChild"
    :data-size="size"
    :data-active="isActive"
    :class="
      cn(
        'flex h-auto min-h-7 min-w-0 -translate-x-px items-center gap-2 cursor-pointer overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-white-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-white-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
        'data-[active=true]:bg-white-accent data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-base',
        'group-data-[collapsible=icon]:hidden',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
