<script setup>
  import { computed } from 'vue'
  import { controlTextColor } from '@/configs/colorsPremium.js'

  const props = defineProps({
    help: {
      type: String,
      default: null,
    },
    error: {
      type: [Boolean, String],
      default: null,
    },
    success: {
      type: [Boolean, String],
      default: null,
    },
  })

  const computedHelp = computed(() =>
    props.error && typeof props.error === 'string' ? props.error : props.help
  )

  const textColor = computed(() => {
    const color = controlTextColor(props.error, props.success)

    return color ?? 'text-gray-500 dark:text-gray-400'
  })
</script>

<template>
  <div v-if="computedHelp" class="text-xs" :class="[textColor]">
    {{ computedHelp }}
  </div>
</template>
