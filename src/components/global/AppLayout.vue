<template>
  <div class="layout">
    <v-Layout>
      <!-- Navigation Drawer -->
      <CartDrawer />
      <!-- Main Content -->
      <v-main>
        <slot></slot>
      </v-main>
      <!-- App Bar -->
      <AppNav />
      <FixedNav />
    </v-Layout>
  </div>
</template>

<script>
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
import CartDrawer from "./CartDrawer.vue";

export default {
  data: () => ({
    drawer: false,
  }),
  components: {
    AppNav,
    FixedNav,
    CartDrawer,
  },
};
</script>
