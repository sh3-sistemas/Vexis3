<script setup lang="ts">
import Skeleton from "primevue/skeleton";
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
    <Skeleton
      height="35px"
      class="lg:col-span-1 col-span-1 md:col-span-1"
    ></Skeleton>
    <Skeleton
      height="35px"
      class="lg:col-span-1 col-span-1 md:col-span-1"
    ></Skeleton>
    <Skeleton
      height="35px"
      class="lg:col-span-1 col-span-1 md:col-span-1"
    ></Skeleton>
    <Skeleton
      height="35px"
      class="lg:col-span-3 col-span-1 md:col-span-2"
    ></Skeleton>
    <Skeleton
      height="35px"
      class="lg:col-span-2 col-span-1 md:col-span-1"
    ></Skeleton>
    <Skeleton
      height="35px"
      class="lg:col-span-1 col-span-1 md:col-span-2"
    ></Skeleton>
    <Skeleton
      height="35px"
      class="lg:col-span-3 col-span-1 md:col-span-1"
    ></Skeleton>
    <Skeleton
      height="120px"
      class="lg:col-span-3 col-span-1 md:col-span-3"
    ></Skeleton>
  </div>
</template>
