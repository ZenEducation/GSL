<script setup>
  import PremAsideMenuItem from '@/components/AfterAuth/Asidemenu/AsideMenuItem.vue'

  defineProps({
    isDropdownList: Boolean,
    isCompact: Boolean,
    menu: {
      type: Array,
      default: () => [],
    },
    activeSecondaryMenuKey: {
      type: String,
      default: null,
    },
  })

  const emit = defineEmits(['menu-click'])

  const menuClick = (event, item) => {
    emit('menu-click', event, item)
  }
</script>

<template>
  <ul>
    <PremAsideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-dropdown-list="isDropdownList"
      :is-compact="isCompact"
      :active-secondary-menu-key="activeSecondaryMenuKey"
      @menu-click="menuClick"
    />
  </ul>
</template>
