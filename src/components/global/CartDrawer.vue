<template>
  <div class="app-drawer">
    <v-navigation-drawer location="right" app v-model="drawer">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        itaque dolorum quibusdam quidem adipisci. Dolore quos architecto
        voluptatibus neque omnis!
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.emitter.on("toggleCart", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
