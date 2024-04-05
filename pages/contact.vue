<template>
  <section class="section1 d-flex justify-center align-center">
<h1 style="font-weight: bold;" >Contact Us</h1>
  </section>
  <h3 class="text-center my-10">Let's Start  a Conversation</h3>
  <v-row justify="center" class="my-10">
    <v-col cols="12" md="4">
    <h4>Contact Us</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda quod perferendis necessitatibus, possimus eligendi voluptatibus magni amet eius vel excepturi ratione veniam quasi autem cupiditate. Exercitationem vitae labore, hic minus obcaecati deleniti odit molestias quo debitis eum ea quis officia dolore eos, atque, facere quia alias id voluptatum. Maxime.</p>
    <div class="d-flex">
       <Icon
                name="solar:phone-bold"
                style="font-size: 30px"
                class="mb-3 mr-7 icon"
                color="green"
              />
              <p>+91234567896757</p>
    </div>

       <div class="d-flex">
       <Icon
                name="ic:baseline-email"
                style="font-size: 30px"
                class="mb-3 mr-7 icon"
                color="blue"
              />
              <p>Test@gmail.com</p>
    </div>

       <div class="d-flex">
       <Icon
                name="carbon:location-filled"
                style="font-size: 30px"
                class="mb-3 mr-7 icon"
                color="red"
              />
              <p>hello world hello world</p>
    </div>
    </v-col>
    <v-col cols="12" md="4">
<v-card class="pa-10 card2">
  <v-text-field label="Enter First Name"   density="compact" variant="outlined"></v-text-field>
  <v-text-field label="Enter Last Name"  density="compact" variant="outlined"></v-text-field>
  <v-text-field label="Enter Email"  density="compact" variant="outlined"></v-text-field>
  <v-textarea label="Enter Message"  density="compact" variant="outlined"></v-textarea>
</v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.section1{
  background-image: url("../assets/image/contact/contact-banner.jpg");
     box-shadow: inset 0 0 0 1000px rgba(88, 88, 88, 0.7);
    min-height: 600px;
    max-width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}

.card2{
  /* background-color: rgb(225, 221, 221); */
}

.textarea{
  background-color: rgb(209, 52, 52);
}

</style>