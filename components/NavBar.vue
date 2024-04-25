<script setup>
let drawer = ref(false);
let router = useRouter()
function toggleDrawer() {
  drawer.value = !drawer.value;
}

function goto(url) {
  navigateTo(url);
}
let token = ref()
let path = ref(location.pathname)

onMounted(()=>{
  setInterval(()=>{
    path.value = location.pathname
    token.value = localStorage.getItem('token')
  }, 2000)
})

function logout(){
  goto('/admin')
localStorage.removeItem('token')
}

</script>

<template>
  <v-layout>
    <v-main style="height: 70px; background-color: #100324">
      <header
        class="d-flex justify-between align-center bg-theme-lighten-2 px-4"
      >
        <NuxtLink
          href="/"
          class="text-theme fw-bold fz-12 d-flex align-center home-link"
        >
          <img src="../assets/image/logo.jpg" alt="" width="70">
          <span class="ms-3 d-none d-md-inline logo-title"> Vasudev optical</span>
        </NuxtLink>

        <div class="menu h-100 d-flex align-center">
          <div class="align-center d-none d-lg-flex">
            <NuxtLink
              to="/contact"
              class="text-white text-decoration-none text ps-4"
              >Contact</NuxtLink
            >

            <NuxtLink
              to="/Shap-of-glasses"
              class="text-white text-decoration-none text ps-4"
              >Shape of glasses</NuxtLink
            >

            <NuxtLink
              to="/about"
              class="text-white text-decoration-none text ps-4 mr-3"
              >About</NuxtLink
            >


            <template v-if="path.startsWith('/admin')">
             <NuxtLink
              to="/admin/products"
              class="text-white text-decoration-none text ps-4 mr-3"
              >Glasses</NuxtLink
            >

              <NuxtLink
              to="/admin/orders"
              class="text-white text-decoration-none text ps-4 mr-3"
              >Order</NuxtLink
            >


           
                <NuxtLink
                v-if="token"
              to="/admin"
              class="text-white text-decoration-none text ps-4 mr-3"
              ><v-btn @click="logout()">Logout</v-btn></NuxtLink
            >
         
            </template>

            <!-- <NuxtLink
              to="/admin"
              class="text-white text-decoration-none text ps-2"
              >Login</NuxtLink
            > -->

           

           

            

            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  valiant="text"
                  class="text-black text-decoration-none text ps-4"
                >
                  Over Collection
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <NuxtLink
                      to="/over-collection/glasses?gender=male"
                      class="text-black text-decoration-none text ps-4"
                      >Men Sunglasses</NuxtLink
                    >
                    
                  </v-list-item-title>
                  <v-list-item-title>
                    <NuxtLink
                      to="/over-collection/glasses?gender=female"
                      class="text-black text-decoration-none text ps-4"
                      >Women Sunglasses</NuxtLink
                    >
                   
                  </v-list-item-title>
                  <v-list-item-title>
                    <NuxtLink
                      to="/over-collection/glasses?gender=kid"
                      class="text-black text-decoration-none text ps-4"
                      >Kid Sunglasses</NuxtLink
                    >
              
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>



          </div>
          <v-btn class="d-lg-none" @click="drawer = true" icon="mdi-menu">
          
          </v-btn>
        </div>
      </header>
    </v-main>
    <v-navigation-drawer v-model="drawer" temporary>
      <div class="mb-10"></div>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="About"
          value="about"
          @click="goto('/about')"
        />
        <v-list-item
          prepend-icon="mdi-login"
          title="Contact"
          value="contact"
          @click="goto('/contact')"
        />
        <v-list-item
          prepend-icon="mdi-account-plus"
          title="Shape of Glasses"
          value="shape of Glasses"
          @click="goto('/Shap-of-glasses')"
        />

        <v-list-item
          prepend-icon="mdi-chat-processing"
          title="Men Sunglasses"
          value="Men Sunglasses"
          @click="goto('/over-collection/glasses?gender=male')"
        />

           <v-list-item
          prepend-icon="mdi-chat-processing"
          title="Women Sunglasses"
          value="Women Sunglasses"
          @click="goto('/over-collection/glasses?gender=female')"
        />

           <v-list-item
          prepend-icon="mdi-chat-processing"
          title="Kid Sunglasses"
          value="Kid Sunglasses"
          @click="goto('/over-collection/glasses?gender=kid')"
        />

       <template v-if="path.startsWith('/admin')">

          <v-list-item
          prepend-icon="mdi-briefcase-outline"
          title="Orders"
          value="Orders"
          @click="goto('/admin/orders')"
        />

        <v-list-item
          prepend-icon="mdi-account-hard-hat"
          title="Glasses"
          value="Glasses"
          @click="goto('/admin/products')"
        />

       </template>

        <v-list-item
        v-if="token"
          prepend-icon="mdi-chat-processing"
          title="Logout"
          value="Logout"
          @click="logout('')"
        />




        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style scoped>
header {
  height: 70px;
}

.logo {
  width: auto;
  height: 42px;
}

.logo-title{
  color: white;
  text-decoration: none !important;
}

/* .menu a {
	color: black;
	text-decoration: none;
	padding: 3px 15px;
	margin-inline: 2px;
	font-weight: 500;
	font-size: 1.1rem;
	border: 5px solid transparent;
	border-radius: 50px;
	text-align: center;
	display: flex;
	align-items: center;
	transition: all 300ms;
  background-color: #23a7d7;
}

.menu a:hover {
	background-color: #71c9e9;
	color: white;
	border: 5px solid #216f8c;
}

a.active {
	background-color: #216f8c;
	color: white;
	border: 5px solid #216f8c;
} */

.home-link:hover {
  text-decoration: none !important;
  /* background-color: #216f8c; */
  color: #216f8c;
  border-color: transparent;
}
</style>
