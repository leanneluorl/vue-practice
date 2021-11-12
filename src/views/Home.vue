<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <counter />
    <div class="counter-square">
      {{ $store.state.counter }}
      <sup>2</sup> = 
      {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
    <div>
      <input 
        v-model="colorCode"
        placeholder="Enter the color"
        type="text">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    'counter': require('@/components/counter').default
  },
  computed: {
    colorCode: {
        get(){
          return this.$store.state.colorCode
        },
        set(newValue){
          this.$store.dispatch('setColorCode', newValue)
        }
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
  div{
    margin-bottom: 10px;
  }
  .counter {
    font-size: 80px;
  }

  .buttons button{
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }
</style>
