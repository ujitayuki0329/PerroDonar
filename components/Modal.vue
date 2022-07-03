<template>
  <client-only>
  <transition name="modal" appear>
    <div class="modal__overlay" @click.self="$emit('close')">
      <div class="modal__window">
        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
  </client-only>
</template>

<script>
export default {}
</script>
