<script setup>
let items = ref([
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
  },
]);
</script>

<template>
  <!-- <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel> -->

  <section class="section1">
    <!-- <v-banner>
  <img src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" alt="">
</v-banner> -->
  </section>

  <v-container>
    <section class="section2">
      <v-row class="my-10">
        <v-col>
          <div
            class="card2 pa-10"
          
          >
            <div class="d-flex justify-center align-center circle">
              <Icon
                name="bx:phone-call"
                style="font-size: 30px"
                class="mb-3 icon"
              />
            </div>
            <p class="text-center mb-1 head">CALL US ANY TIME</p>
            <p class="text-center">Contact us 24/7 hours a day</p>
          </div>
        </v-col>

        <v-col>
          <div
            class="card2 pa-10"
  
          >
            <div class="d-flex justify-center align-center circle">
              <Icon
                name="streamline:transfer-van"
                style="font-size: 30px"
                class="mb-3 icon"
              />
            </div>
            <p class="text-center mb-1 head">PICKUP AT ANY STORE</p>
            <p class="text-center">Free shipping on orders over $65</p>
          </div>
        </v-col>

        <v-col>
          <div
            class="card2 pa-10"
      
          >
            <div class="d-flex justify-center align-center circle">
              <Icon
                name="fluent:payment-32-regular"
                style="font-size: 30px"
                class="mb-3 icon"
              />
            </div>
            <p class="text-center mb-1 head">SECURED PAYMENT</p>
            <p class="text-center">We accept all major credit cards</p>
          </div>
        </v-col>

        <v-col>
          <div
            class="card2 pa-10"
           
          >
            <div class="d-flex justify-center align-center circle">
              <Icon
                name="bi:arrow-repeat"
                style="font-size: 30px"
                class="mb-3 icon mb-1"
              />
            </div>
            <p class="text-center mb-0 mt-4 head">FREE RETURNS</p>
            <p class="text-center">30-days free return policy</p>
          </div>
        </v-col>
      </v-row>
    </section>

    <section class="section3 my-10">
      <v-row>
        <v-col class="card1">
         <div class="d-flex justify-content-end align-items-end mt-16 mr-10">
           <div>
            <p class="mb-1">Trending Now</p>
          <h5>WOMAN WERE</h5>
          <v-btn>SHOP NOW</v-btn>
           </div>
         </div>
        </v-col>
        <v-col class="mr-10">
          <div class="card2">

              <div class="d-flex justify-content-start align-items-end pl-16">
           <div>
             <p class="mb-1">Tailor-made with-passion</p>
             <h5>MEANS WEAR</h5>
          <v-btn>SHOP NOW</v-btn>
           </div>
         </div>

          </div>
          <div class="card3 mt-5">
  <div class="d-flex justify-content-end align-items-end mt-16">
           <div>
            <p class="mb-1">Buy one get one free</p>
          <h5>KIDS WEAR</h5>
          <v-btn>SHOP NOW</v-btn>
           </div>
         </div>

          </div>
        </v-col>
      </v-row>
    </section>

    <section class="section4 my-10">
<p class="text-center mb-0">Shop by category</p>
<h3 class="text-center" style="font-weight: bold;">POPULAR COLLECTIONS</h3>

<v-row class="mt-10">
  <v-col cols="12" md="6" lg="3">
    <v-card>
      <img src="../assets/image/home/section3/image1.webp" height="250" class="w-full" alt="">
      <p class="text-center mb-0">Shorts</p>
      <p class="text-center">24 Product</p>
    </v-card>
  </v-col>

  <v-col cols="12" md="6" lg="3">
    <v-card>
      <img src="../assets/image/home/section3/image2.webp" height="250" class="w-full" alt="">
      <p class="text-center mb-0">Shorts</p>
      <p class="text-center">24 Product</p>
    </v-card>
  </v-col>

  <v-col cols="12" md="6" lg="3">
    <v-card>
      <img src="../assets/image/home/section3/image3.jpg" class="w-full" height="250" alt="">
      <p class="text-center mb-0">Shose</p>
      <p class="text-center">30 product</p>
    </v-card>
  </v-col>

  <v-col cols="12" md="6" lg="3">
    <v-card>
      <img src="../assets/image/home/section3/image5.jpg" class="w-full" height="250" alt="">
      <p class="text-center mb-0">Watch</p>
      <p class="text-center">24 Product</p>
    </v-card>
  </v-col>

</v-row>
    </section>
  </v-container>
</template>

<style>

.section1{
     background-image: url("../assets/image/home/banner.jpg");
    /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4); */
    min-height: 500px;
    max-width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}


.circle {
  width: 60px;
  display: block;
  margin-inline: auto;
  height: 60px;
  background: rgb(237, 235, 235);
  border-radius: 50%;
}

.head {
  font-size: 15px;
  font-weight: bold;
}

.card1 {
  background-image: url('../assets/image/home/section2/section2-girl.jpg');
  height: 600px;
  	/* box-shadow: 0px 0px 5px rgb(109, 108, 108); */
	object-fit: cover;
}
.card1:hover {
	transform: scale(1.05);
	transition: 0.5s;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
}

.card2 {
  background-image: url('../assets/image/home/section2/section2-boy1.jpg');
  height: 250px;
}
.card2:hover {
	transform: scale(1.05);
	transition: 0.5s;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
}

.card3 {
  background-image: url('../assets/image/home/section2/section2-boy2.jpg');
  height: 270px;
}
.card3:hover {
	transform: scale(1.05);
	transition: 0.5s;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
}

.w-full {
  width: 100%;
  max-width: 600px;
  display: block;
  margin-inline: auto;
}
</style>
