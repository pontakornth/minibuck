<template>
  <div class="budget">
    <h1>Budget</h1>
    <ul class="item-list">
      <li class="item" v-for="item in items" :key="item">
        <h2>Item</h2>
        <ul>
          <li>Price: xxx</li>
          <li>Saved: xxx</li>
          <li>Left: xxx</li>
        </ul>

      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const items = ref([1, 2, 3, 4, 5]);
    return {
      items,
    };
  },
});
</script>
