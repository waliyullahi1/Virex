<template>
    <button @click="$emit('clicked')" class="font-medium   text-tertiary hover:text-primary ease-in-out duration-500 border-b-2 border-transparent hover:border-primary select-none outline-none">
      <slot />
    </button>
  </template>