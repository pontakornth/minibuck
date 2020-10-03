<template>
  <div class="budget">
    <h1>Budget</h1>
    <ul class="item-list">
      <li class="item" v-for="item in items" :key="item">
        <h2 class="item-name">Item</h2>
        <ul class="item-properties">
          <li>Price: xxx</li>
          <li>Saved: xxx</li>
          <li>Left: xxx</li>
        </ul>

      </li>
    </ul>
    <div class="menu">
      <button class="menu-button">Add item</button>
    </div>
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

<style lang="stylus">
.item-list
  list-style none
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-gap 16px
  padding 1rem
.item
  border: 1px solid lighten(#000, 30%)
  padding 1rem
.item-properties
  list-style none
  text-align right
.menu-button
  border 1px solid lighten(rgba(0,0,0,.75), 30%)
  padding 0.333em
  font-size 1.3rem
  background red
  color white
</style>
