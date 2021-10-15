<template>
  <div class="options-container">
    <ul>
      <li
        v-for="poke in pokemonsArr"
        :key="poke.id"
        @click="$emit('selection-pokemon', poke.id)"
      >
        {{ poke.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemonsArr: {
      type: Array,
      require: true,
    },
    pokemon: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>