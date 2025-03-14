<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <!-- Header contém breadcrumbs -->
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <p class="m-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
      consequuntur error repudiandae numquam deserunt quisquam repellat libero
      asperiores earum nam nobis, culpa ratione quam perferendis esse,
      cupiditate neque quas!
    </p>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Cancel" severity="secondary" outlined class="w-full" />
        <Button label="Save" class="w-full" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
//import { twMerge } from "tailwind-merge";
import type { Sh3ListCardProps } from "./types";
//import Sh3Divider from "@/components/Typography/Sh3Divider.vue";

withDefaults(defineProps<Sh3ListCardProps>(), {
  cardStyle: "bg-white",
});
</script>
