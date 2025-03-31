<template>
  <div class="input-container mt-6 dark:text-black  rounded-[5px]"  :class="disabled ? 'bg-gray-200  cursor-not-allowed' : ' dark:bg-white dark:text-black bg-white'" >
    <div class="flex a">
      <input :type="type" :oninput="oninput" :accept="file" :disabled="disabled"
        :minlength="type === 'password' ? 6 : minlength"
        :pattern="type === 'tel' || type === 'number' ? '^[0-9]{11}$' : pattern" :placeholder="placeholder"
        :value="inputValue" @input="updateValue" ref="input" :required="required"
        :title="passwordError ? 'Password must be at least 6 characters' : ''" :class="[
          addStyleBorder ? 'border-2 focus:border-2 border-preprimary' : 'border focus:border',
          passwordError ? 'border-red-500' : '',
          disabled ? 'bg-gray-700 text-gray-600 cursor-not-allowed' : ' ',
        ]" class="w-full input-field focus:shadow-preprimary shadow-sm focus:border focus:border-preprimary  h-[2.6rem] px-2 border rounded-[5px]" />
      <label :for="labelId" class="input-label text-slate-600" :class="nolabel ? 'hidden' : 'block'">
        <span class="py-0 px-1 bg-white">{{ label }}</span>
      </label>
    </div>
    <p v-if="passwordError" class="text-red-500 absolute text-sm mt-1">Password must be at least 6 characters</p>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  extraClass: String,
  error: Boolean,
  label: String,
  pattern: String,
  nolabel: {
    type: Boolean,
    default: false
  },
  addStyleBorder: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: true,
  },
  file: String,
  oninput: Function,
  type: String,
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: String,
  inputValue: String,
  minlength: {
    type: Number,
    default: 3,
  },
});

const emit = defineEmits(['update:inputValue']);
const inputRef = ref(null);

const labelId = computed(() => props.label.replace(/\s+/g, '-').toLowerCase());

const updateValue = (event) => {
  props.oninput?.(event);
  emit('update:inputValue', event.target.value);
};

// Check if password is too short
const passwordError = computed(() => {
  return props.type === 'password' && props.inputValue && props.inputValue.length < 6;
});
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

.input-field:focus+.input-label,
.input-field:not(:placeholder-shown)+.input-label {
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
