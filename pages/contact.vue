<script setup>
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore();
let env = useRuntimeConfig().public.backend

let name = ref('')
let email= ref('')
let subject = ref('')
let message = ref('')



async function sendMail() {
  try {
    let res = await fetch(`${env}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
      })
    });

    if (res.ok) {
     snack.success('Email sent successfully');
    } else {
      snack.error('Failed to send email');
    }
  } catch (error) {
    snack.error('Error sending email',);
  }

  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
}

</script>



<template>
  <!-- <section class="section1 d-flex justify-center align-center">
   
  </section> -->
  <h3 class="text-center my-10">Let's Start a Conversation</h3>
  <v-row justify="center" class="my-10 pa-4">
    <v-col cols="12" md="4">
      <h4>Contact Us</h4>
      <p>
       We love hearing from you! Whether you have a question, feedback, or just want to say hello, we're here and ready to assist. Reach out to us via the options below:
      </p>
      <div class="d-flex">
        <Icon
          name="solar:phone-bold"
          style="font-size: 30px"
          class="mb-3 mr-7 icon"
          color="green"
        />
        <p>+9426566320</p>
      </div>

      <div class="d-flex">
        <Icon
          name="ic:baseline-email"
          style="font-size: 30px"
          class="mb-3 mr-7 icon"
          color="blue"
        />
        <p>Vasudevoptical@gmail.com</p>
      </div>

      <div class="d-flex">
        <Icon
          name="carbon:location-filled"
          style="font-size: 30px"
          class="mb-3 mr-7 icon"
          color="red"
        />
        <p>
          Add.atmiya complex maneja crossing.maneja Vadodara 390 013. Gujrat
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="pa-10 card2">
        <v-text-field
          label="Enter Name"
          density="compact"
          variant="outlined"
          v-model="name"
        ></v-text-field>
     
        <v-text-field
          label="Enter Email"
          density="compact"
          variant="outlined"
          v-model="email"
        ></v-text-field>
        <v-textarea
          label="Enter Subject"
          density="compact"
          variant="outlined"
          v-model="subject"
        ></v-textarea>

            <v-textarea
          label="Enter Message"
          density="compact"
          variant="outlined"
          v-model="message"
        ></v-textarea>
        
        <v-btn class="bg-success" style="width: 420px" @click="sendMail">SEND</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.section1 {
  background-image: url('../assets/image/contact/contact-banner.jpg');
  box-shadow: inset 0 0 0 1000px rgba(88, 88, 88, 0.7);
  min-height: 600px;
  max-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.card2 {
  /* background-color: rgb(225, 221, 221); */
}

.textarea {
  background-color: rgb(209, 52, 52);
}
</style>
