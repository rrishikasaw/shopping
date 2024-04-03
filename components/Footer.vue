<template>
  <div class="footer">
    <v-row class="pa-10">
      <v-col
        ><h4>Company</h4>
        <div class="d-flex">
          <Icon
            name="dashicons:arrow-right"
            style="font-size: 22px"
            class="mb-3"
          />
          <p class="mb-0">About Us</p>
        </div>
        <div class="d-flex">
          <Icon
            name="dashicons:arrow-right"
            style="font-size: 22px"
            class="mb-3"
          />
          <p class="mb-0">Contact Us</p>
        </div>

        <div class="d-flex">
          <Icon
            name="dashicons:arrow-right"
            style="font-size: 22px"
            class="mb-3"
          />
          <p class="mb-0">Privacy Policy</p>
        </div>
        <div class="d-flex">
          <Icon
            name="dashicons:arrow-right"
            style="font-size: 22px"
            class="mb-3"
          />
          <p class="mb-0">Terms and Condition</p>
        </div>

        <div class="d-flex">
          <Icon
            name="dashicons:arrow-right"
            style="font-size: 22px"
            class="mb-3"
          />
          <p class="mb-0">FAQs & Help</p>
        </div>
      </v-col>

      <v-col>
        <h4>Contact</h4>
        <div class="d-flex">
          <Icon name="mdi:location" style="font-size: 22px" class="mb-3 mr-2" />
          <p class="mb-0">332001 New Roshanganj Sikar Rajasthan</p>
        </div>
        <div class="d-flex">
          <Icon
            name="solar:phone-bold"
            style="font-size: 22px"
            class="mb-3 mr-2"
          />
          <p class="mb-0">+012 345 67890</p>
        </div>
        <div class="d-flex">
          <Icon name="mdi:email" style="font-size: 22px" class="mb-3 mr-2" />
          <p class="mb-0">Info@wisdominternationals.com</p>
        </div>

        <div class="d-flex">
          <Icon
            name="jam:twitter-circle"
            style="font-size: 30px"
            class="mb-3 mr-2"
          />
          <Icon
            name="ph:facebook-logo-bold"
            style="font-size: 30px"
            class="mb-3 mr-2"
          />
          <Icon
            name="iconoir:youtube"
            style="font-size: 30px"
            class="mb-3 mr-2"
          />
          <Icon
            name="mingcute:linkedin-line"
            style="font-size: 30px"
            class="mb-3 mr-2"
          />
        </div>
      </v-col>

      <v-col
        ><h4>Gallery</h4>
        <div>
          <div class="d-flex">
            <img
              src="../assets/image/image1.jpg"
              width="90"
              class="mr-1"
              alt=""
            />
            <img
              src="../assets/image/image2.avif"
              width="90"
              class="mr-1"
              alt=""
            />
            <img
              src="../assets/image/image3.jpg"
              width="90"
              class="mr-1"
              alt=""
            />
          </div>

          <div class="d-flex mt-1">
            <img
              src="../assets/image/image1.jpg"
              width="90"
              class="mr-1"
              alt=""
            />
            <img
              src="../assets/image/image2.avif"
              width="90"
              class="mr-1"
              alt=""
            />
            <img
              src="../assets/image/image3.jpg"
              width="90"
              class="mr-1"
              alt=""
            />
          </div>
        </div>
      </v-col>
      <v-col>
        <h4>Newsletter</h4>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <!-- <v-text-field label="Your Email" class="bg-white" variant="outlined"></v-text-field> -->
        <v-text-field
          hide-details
          label="Your Email"
          variant="solo"
          class="bg-white"
        ></v-text-field>
      </v-col>
    </v-row>

    <p class="text-center pb-16">
      © Your Site Name, All Right Reserved. Designed By Star marketing
    </p>
  </div>
</template>
<style scoped>
.footer {
  
  background-color: black;
  color: white;
}
.footer2 {
  color: white;
}
</style>
