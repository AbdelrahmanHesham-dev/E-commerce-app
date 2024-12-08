<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3><span>Huge Saving</span> on UHD Televisions</h3>
              <p class="hint">sale up to 70% off on selected items*</p>
              <v-btn
                style="
                  border-radius: 30px;
                  background-color: #ffb547;
                  outline: none;
                  padding: 10px 25px;
                  color: white;
                "
                dark
                large
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 400px;
    background-image: url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position: left top;
    .cont {
      color: white;
      padding: 40px 0 0 100px;
      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: #ffb547;
        }
      }
      .hint {
        margin: 20px 0;
      }
    }
  }
}
</style>
