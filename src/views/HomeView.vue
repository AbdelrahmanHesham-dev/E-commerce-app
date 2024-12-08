<template>
  <div class="home" style="padding-top: 160px">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <FlashDeals :products="flashDeals" title="Flash Deals" />
    <TopCategories />
    <NewProduct :products="newProducts" />
    <QualityFeatures />
    <img src="@/assets/images/tv-banner.webp" class="w-100" alt="" />
    <FlashDeals :products="foods" title="Foods" />
    <WhyShop />
    <AppFooter />
  </div>
</template>

<script>
import TheFeatures from "@/components/home-page/TheFeatures.vue";
import TopOffers from "@/components/home-page/TopOffers.vue";
import FlashDeals from "@/components/home-page/FlashDeals.vue";
import UpperBanner from "@/components/home-page/UpperBanner.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import TopCategories from "@/components/home-page/TopCategories.vue";
import NewProduct from "@/components/home-page/NewProduct.vue";
import QualityFeatures from "@/components/home-page/QualityFeatures.vue";
import WhyShop from "@/components/home-page/WhyShop.vue";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    AppFooter,
    FlashDeals,
    TopCategories,
    NewProduct,
    QualityFeatures,
    WhyShop,
  },
  computed: {
    ...mapState(productsModule, ["flashDeals", "newProducts", "foods"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
