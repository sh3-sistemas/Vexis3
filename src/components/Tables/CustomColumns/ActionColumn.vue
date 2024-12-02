<template>
  <Column v-if="actions.length > 0" header="Ações" :exportable="false">
    <template #body="slotProps">
      <div class="actions-wrapper">
        <Button
          v-for="{ icon, color, action, disabled } of actions.filter((action) =>
            action.permission(slotProps.data),
          )"
          :key="icon"
          :disabled="disabled(slotProps.data)"
          @click="action(slotProps.data)"
        >
          <Icon :icon="icon" :class="twMerge('w-5 h-auto text-sm', color)" />
        </Button>
      </div>
    </template>
  </Column>
</template>

<script lang="ts" setup>
import Column from "primevue/column";
import { Icon } from "@iconify/vue";
import Button from "primevue/button";

import { twMerge } from "tailwind-merge";
import type { PropType } from "vue";

type Action = {
  color: string;
  icon: string;
  action: (item: any) => void;
  permission: (item: any) => boolean | true;
  disabled: (item: any) => boolean | false;
};

defineProps({
  actions: {
    type: Array as PropType<Array<Action>>,
    default: () => <Action[]>[],
  },
});
</script>
