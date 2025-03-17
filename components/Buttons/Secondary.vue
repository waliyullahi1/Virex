<template>
    <button @click="$emit('clicked')" class="font-medium   text-tertiary hover:text-preprimary ease-in-out duration-500 border-b-2 border-transparent hover:border-preprimary select-none outline-none">
      <slot />
    </button>
  </template>