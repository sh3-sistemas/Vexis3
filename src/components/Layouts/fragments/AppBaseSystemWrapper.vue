<template>
  <div
    class="system--wrapper overflow-auto h-auto md:!h-[calc(100dvh-73px)] flex flex-row gap-2 bg-surface-100 p-4"
  >
    <div
      class="system--content-wrapper grow bg-inherit pl-0 flex flex-col gap-4 overflow-auto"
    >
      <slot></slot>
    </div>
  </div>
</template>
