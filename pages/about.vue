
<script setup>
import client1 from "../assets/image/about/client1.jpg"
import client2 from "../assets/image/about/client2.jpg"
import client3 from "../assets/image/about/client3.webp"
import client4 from "../assets/image/about/client4.avif"
</script>


<template>
  <section class="section1"></section>
  <v-container>
    <h6 class="my-10">Welcome to VisionCraft Eyewear, where fashion meets functionality and style blends seamlessly with clarity. At VisionCraft, we believe that eyewear is not just a necessity but an expression of individuality and personality. Our mission is to provide high-quality, stylish eyewear that not only enhances your vision but also complements your unique style.</h6>
    <v-row>
      <v-col cols="12" md="5">
        <img src="../assets/image/about/about-women3.webp" alt="" width="450">
      </v-col>
      <v-col>
<h3 class="mb-5" style="font-weight: bold; color: blue;">Our Story</h3>
<p>Established in 2010, VisionCraft Eyewear began with a simple vision: to revolutionize the way people perceive eyewear. Frustrated by the lack of fashionable options in the market, our founders set out to create a brand that offers trendy, affordable eyewear without compromising on quality. Over the years, VisionCraft has grown from a small startup to a globally recognized eyewear brand, serving customers in over 50 countries.</p>
<h3 class="mb-5" style="font-weight: bold; color: blue;">Quality Craftsmanship</h3>
<p>At VisionCraft, we are committed to excellence in craftsmanship. Each pair of glasses is meticulously crafted using premium materials such as high-grade acetate, lightweight metals, and scratch-resistant lenses. Our frames undergo rigorous quality control measures to ensure durability and comfort, so you can enjoy clear vision with confidence.</p>
<!-- <h3>Fashion-forward Designs</h3>
<p>Express your unique style with our diverse range of eyewear designs. From classic aviators to trendy cat-eye frames, we offer something for every taste and occasion. Our team of designers stays ahead of the latest trends to bring you fresh, innovative designs that elevate your look effortlessly.</p> -->
      </v-col>
    </v-row>
  <h3 class="text-center my-10" style="font-weight: bold; color: blue;">Our Satisfied Client</h3>
    <v-row>
    
     <v-col cols="12" md="6" lg="3">
          <v-card max-width="400">
            <v-img class="align-end text-black" height="200" :src="client1" cover>
              <v-card-title>James</v-card-title>
            </v-img>
          </v-card>
        </v-col>

           <v-col cols="12" md="6" lg="3">
          <v-card max-width="400">
            <v-img class="align-end text-black" height="200" :src="client2" cover>
              <v-card-title>Sophia</v-card-title>
            </v-img>
          </v-card>
        </v-col>

            <v-col cols="12" md="6" lg="3">
          <v-card max-width="400">
            <v-img class="align-end text-black" height="200" :src="client3" cover>
              <v-card-title>Amelia</v-card-title>
            </v-img>
          </v-card>
        </v-col>

            <v-col cols="12" md="6" lg="3">
          <v-card max-width="400">
            <v-img class="align-end text-black" height="200" :src="client4" cover>
              <v-card-title>William</v-card-title>
            </v-img>
          </v-card>
        </v-col>
    </v-row>

    <h3 class="mt-10" style="font-weight: bold; color: blue;" >Our Mission</h3>
    <p>At Satisfied Client, our mission is to empower you to express yourself through your eyewear. We believe that glasses are more than just a functional accessory – they are a reflection of your personality, style, and individuality. That's why we are dedicated to offering a diverse range of frames, lenses, and accessories to suit every taste and preference.</p>

    <h4 class="text-center" style="font-weight: bold; color: blue;">What Sets Us Apart</h4>
    <ul>
      <li class="my-2"><b>Premium Quality:</b> We partner with leading eyewear brands and designers to bring you the highest quality glasses made from premium materials.</li>

        <li class="my-2"><b>Premium Quality:</b> We partner with leading eyewear brands and designers to bring you the highest quality glasses made from premium materials.</li>

         <li class="my-2"><b>Customization Options:</b> Personalize your eyewear experience with our range of lens options, coatings, and frame colors to suit your unique needs.</li>

         <li class="my-2"><b>Exceptional Customer Service: </b> Our team of eyewear experts is here to assist you every step of the way, from choosing the perfect pair to ensuring a seamless shopping experience.</li>
    </ul>
  </v-container>
</template>

<style scoped>
.section1{
    background-image: url("../assets/image/about/banner-about.jpg");
     /* box-shadow: inset 0 0 0 1000px rgba(88, 88, 88, 0.7); */
    min-height: 600px;
    max-width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>