<template>
  <div> 
    <div>
      <div class=" text-left  input-containers ani bite ">

        

        <select
        :value="inputValue" @input="$emit('update:inputValue', $event.target.value)"
          ref="inputRef"
          required
          :disabled="disabled"
          class="w-full px-2 h-[2.6rem] focus:shadow-primary shadow-sm focus:border-2 rounded-lg bg-white   focus:border-primary  mt-1  text-[15px] outline-none fy border-primary border-2 py-[.3rem]"
        >
          <option class="px-3 text-[15px] font-semibold" v-for="(option, index) in field" :key="index" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <!-- Uncomment for error message -->
      <!-- <p v-if="error" class="text-red-700 text-sm mt-1">Please enter your email properly</p> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define props
const props = defineProps({
  inputValue: String,
  error: Boolean,
  field: Array,
  disabled: Boolean,
  placeholder: String,
  min: Number,
  max: Number,
  label: String
})

// Create a reference to the input field
const inputRef = ref(null)

// Define methods
const focus = () => {
  inputRef.value.focus()
}
</script>

<style scoped>

</style>