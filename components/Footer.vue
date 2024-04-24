<template>
  <div class="footer">
    <v-row class="pa-10" justify ="evenly">
      <v-col cols="12" md="2"
        ><h4>Company</h4>
        <div class="d-flex">
          <Icon
            name="dashicons:arrow-right"
            style="font-size: 22px"
            class="mb-3"
          />
          <p class="mb-0" @click="navigateTo('/about')">About Us</p>
        </div>
        <div class="d-flex">
          <Icon
            name="dashicons:arrow-right"
            style="font-size: 22px"
            class="mb-3"
          />
          <p class="mb-0" @click="navigateTo('/contact')">Contact Us</p>
        </div>

       
      </v-col>

      <v-col cols="12" md="3">
        <h4>Contact</h4>
        <div class="d-flex">
          <Icon name="mdi:location" style="font-size: 22px" class="mb-3 mr-2" />
          <p class="mb-0">Add.atmiya complex maneja crossing.maneja Vadodara 390 013. Gujrat</p>
        </div>
        <div class="d-flex">
          <Icon
            name="solar:phone-bold"
            style="font-size: 22px"
            class="mb-3 mr-2"
          />
          <p class="mb-0">+9426566320</p>
        </div>
        <div class="d-flex">
          <Icon name="mdi:email" style="font-size: 22px" class="mb-3 mr-2" />
          <p class="mb-0">Vasudevoptical@gmail.com</p>
        </div>

       
      </v-col>

      <v-col cols="12" md="3"
        ><h4>Gallery</h4>
        <div>
          <div class="d-flex">
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              width="90"
              class="mr-1"
              alt=""
            />
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              width="90"
              class="mr-1"
              alt=""
            />
            <img
              src="../assets/image/women-lens/women2.jpg"
              width="90"
              class="mr-1"
              alt=""
            />
          </div>

          <div class="d-flex mt-1">
            <img
              src="../assets/image/women-lens/lens3.jpg"
              width="90"
              class="mr-1"
              alt=""
            />
            <img
              src="../assets/image/women-lens/women7.jpg"
              width="90"
              class="mr-1"
              alt=""
            />
            <img
              src="../assets/image/women-lens/women6.avif"
              width="90"
              class="mr-1"
              alt=""
            />
          </div>
        </div>
      </v-col> 
    
    </v-row>
<hr class="hr">
    <p class="text-center pb-16">
      ©All Right Reserved. Designed By Star marketing
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

.hr{
  color: white;
}
</style>
