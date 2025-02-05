
<template>
    <div class="input-container mt-6  bg-white rounded-[5px]">
      <div class="flex ani ">
        <input
          :type="type"
          :oninput="oninput"
          :accept="file"
          :disabled="disabled"
          :minlength="minlength"
          :placeholder="placeholder"
          :value="inputValue"
          @input="updateValue"
          ref="input"
          :required="required"
          class="w-full input-field focus:shadow-primary shadow-sm focus:border focus:border-primary bg-white h-[2.6rem] px- border  rounded-[5px]"
        />
        <label :for="labelId" class="input-label  text-slate-600">
          <span class="py-0 px-1 bg-white">{{ label }}</span>
        </label>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, computed } from 'vue';
  
     
   
  
  const props = defineProps({
    extraClass: String,
    error: Boolean,
    label: String,
    required: {
      type: Boolean,
      default: true,
    },
    file: String,
    oninput: Function,
    type: String,
    disabled: Boolean,
    placeholder: String,
    inputValue: String,
    minlength:  {
      type: Number,
      default: 1,
    },
  });
  
  const emit = defineEmits(['update:inputValue']); // Emit event definition
  const inputRef = ref(null);
  
  const labelId = computed(() => props.label.replace(/\s+/g, '-').toLowerCase());
  
  const updateValue = (event) => {
    props.oninput?.(event);
    emit('update:inputValue', event.target.value); // Emit directly without using inputRef
  };
  </script>
  
  <style>
  .input-container {
    position: relative;
  }
  
  .input-field {
    background: transparent;
    outline: none;
    padding: 0px 12px;
  }
  
  .input-field:focus + .input-label,
  .input-field:not(:placeholder-shown) + .input-label {
    transform: translateY(-1.3rem);
    font-weight: 600;
  
    color: rgb(3, 3, 3);
  }
  
  .input-label {
    position: absolute;
    bottom: -15px;
    left: 0;
    height: 3rem;
    pointer-events: none;
    padding-left: 0.5rem;
    transform-origin: left;
    transition: all 0.3s ease;
  }
  </style>