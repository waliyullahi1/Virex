<template>
  <button  :type="type" :class="[
    'py-1 px-2   group justify-center flex b text-white  duration-500 ease-in-out rounded-md  active:bg-preprimary outline-none hover:bg-opacity-70 bg-preprimary',
    { 'zoom-animation': isClicked },
    loading ? 'bg-preprimary text-white' : '', width === 'full' ? 'w-full' : 'fit',
  ]" :disabled="loading || disabled" @click="handleClick">
    <div class="flex items-center justify-center capitalize">
      <div v-if="loading" class="flex items-center text-white">
        <div class="mr-2">

          <!-- Loading Spinner SVG -->
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="5" r="38"
              stroke-dasharray="179.0707812546182 61.690260418206066">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
                values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
          </svg>
        </div>
        {{ loadingText }}
      </div>
      <div v-if="!loading">
        <TypographyP>
          <slot />
        </TypographyP>
      </div>
    </div>

    <div v-if="!loading">
      <div v-if="arrow" class=" w-8 h-full flex justify-center items-center rotate-180  text-white">
        <svg fill="currentColor" class="w-3 group-hover:-translate-x-1 duration-700  " version="1.1" id="Capa_1"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.771 29.771"
          xml:space="preserve">
          <g>
            <path d="M29.771,14.886c0,1.657-1.344,3-3,3H11.486l4.506,4.505c1.172,1.172,1.172,3.071,0,4.243
		c-0.586,0.586-1.354,0.879-2.122,0.879s-1.534-0.293-2.12-0.878L0,14.885L11.745,3.138c1.173-1.172,3.071-1.171,4.243,0
		c1.172,1.172,1.172,3.071,0,4.243l-4.505,4.506h15.289C28.427,11.886,29.771,13.229,29.771,14.886z" />
          </g>
        </svg>
      </div>
    </div>

  </button>
</template>

<script>
export default {
  name: 'LoadingButton',
  props: {
    loading: Boolean,
    disabled: Boolean,
    loadingText: {
      default: 'Loading',
      type: String
    },
    type: {
      default: 'button',
      type: String
    },
    width: {
      type: String,
      default: 'fit' // Default width class
    },

    arrow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    handleClick() {
      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false;
        this.$emit('clicked'); // Emit the event after animation completes
      }, 200); // Match the animation duration (0.2s)
    }
  }
};
</script>

<style>
@keyframes zoomEffect {
  0% {
    transform: scale(0.97);
  }

  100% {
    transform: scale(1);
  }
}

.zoom-animation {
  animation: zoomEffect 0.2s ease-in-out;
}
</style>