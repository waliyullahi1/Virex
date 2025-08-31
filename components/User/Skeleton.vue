<template>
 <div 
            class="md:grid grid-cols-3 block   bg-gray-100  animate-pulse group overflow-hidden shadow-sm border-l-4 rounded-lg  items-center justify-between gap-2    h-fit w-full border py-1 px-2">
            <!-- Number Info -->
            <div class="sm:block gap-1 space-y-2 flex justify-between font-semibold">
                <div class=" h-6 w-1/2  duration-300 bg-gray-300 rounded animate-pulse"></div>
                <div class=" h-6 w-3/5  p-1  flex gap-3 duration-300 bg-gray-300 rounded animate-pulse">
                    <div class=" w-1/2  h-4 duration-300 bg-gray-100 rounded animate-pulse"></div>
                      <div class=" w-1/2  h-4   duration-300 bg-gray-100 rounded animate-pulse"></div>
                </div>
             
            </div>

            <!-- Message Info -->
            <div class="text-left pt-3 space-y-1 md:text-center font-semibold">
               <div class=" h-6 w-1/2  duration-300 bg-gray-300 rounded animate-pulse"></div>
              <div class=" h-6 w-3/5  duration-300 bg-gray-300 rounded animate-pulse"></div>
            </div>



            <div class=" flex flex-col sm:items-end gap-1">
              <div class=" h-6 w-1/2  duration-300 bg-gray-300 rounded animate-pulse"></div>
              <div  class="  w-full flex gap-1 ">
                 <div class=" h-6 w-1/2  duration-300 bg-gray-300 rounded animate-pulse"></div>
               <div class=" h-6 w-1/2  duration-300 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
</template>

<style>
.glass-skeleton {
  position: relative;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  overflow: hidden;
}

/* Shimmer overlay */
.glass-skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: randomShine var(--shine-duration) infinite linear;
  animation-delay: var(--shine-delay);
}

/* Randomize timings for less uniform effect */
.glass-skeleton:nth-child(1) { --shine-duration: 1.2s; --shine-delay: 0s; }
.glass-skeleton:nth-child(2) { --shine-duration: 1.6s; --shine-delay: 0.4s; }
.glass-skeleton:nth-child(3) { --shine-duration: 1.4s; --shine-delay: 0.8s; }

@keyframes randomShine {
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
}
</style>
