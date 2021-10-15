<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else class="fade-in">
    <h1>¿Quién es este Pokémon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions
      :pokemons-arr="pokemonsArr"
      :pokemon="pokemon"
      @selection-pokemon="checkAnswer"
    />
  </div>
  <template v-if="showPokemon" class="fade-in">
    <h2>{{ messageResult }}</h2>
    <button @click="newGame">Volver a jugar</button>
  </template>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonsOptions from "@/helpers/getPokemons.js";

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      messageResult: null,
    };
  },
  methods: {
    async mixPokemons() {
      this.pokemonsArr = await getPokemonsOptions();
      const randomInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonsArr[randomInt];
    },
    checkAnswer(id) {
      this.showPokemon = true;
      if (id === this.pokemon.id) {
        this.messageResult = `Correcto, ${this.pokemon.name} es el pokemon!`;
      } else {
        this.messageResult = `Oops.., era ${this.pokemon.name}. `;
      }
    },
    initialState() {
      this.pokemonsArr = [];
      this.pokemon = null;
      this.showPokemon = false;
      this.messageResult = null;
    },
    newGame() {
      this.initialState();
      this.mixPokemons();
    },
  },
  mounted() {
    this.mixPokemons();
  },
};
</script>

<style>
</style>