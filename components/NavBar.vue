<script setup>
let drawer = ref(false)
function toggleDrawer() {
	drawer.value = !drawer.value
}

function goto(url){
  navigateTo(url)
}
</script>

<template>
	<v-layout>
		<v-main style="height: 70px">
			<header class="d-flex justify-between align-center bg-theme-lighten-2 px-4">

				<NuxtLink href="/" class="text-theme fw-bold fz-12 d-flex align-center home-link">
					    <!-- <img src="../assets/image/logo/logo.jpg" alt="" width="70"> -->
					<span class="ms-3 d-none d-md-inline">Logo</span>
				</NuxtLink>

				<div class="menu h-100 d-flex align-center">
					<div class="align-center  d-none d-lg-flex">
						  <NuxtLink to="/login" class="text-white text-decoration-none text ps-2  "
            >login</NuxtLink
          >
					
				 <NuxtLink
        
            to="/register"
            class="text-white text-decoration-none text ps-4"
            >register</NuxtLink
          >
					
				 
					
     
					</div>
                <v-btn class="d-lg-none" @click="drawer=true">Click</v-btn>
				</div>
			</header>
		</v-main>
		<v-navigation-drawer v-model="drawer"   temporary>
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
					title="Package"
					value="package"
					@click="goto('/package')"
				/>
				<v-list-item
					prepend-icon="mdi-briefcase-outline"
					title="Tours and Travels"
					value="tours and Travels"
					@click="goto('/tours')"
				/>
				<v-list-item
					prepend-icon="mdi-account-hard-hat"
					title="HR Consultancy"
					value="hR Consultancy"
					@click="goto('/hr')"
				/>
				<v-list-item
					prepend-icon="mdi-chat-processing"
					title="Hajj Yatra"
					value="hajj Yatra"
					@click="goto('/hajj')"
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

.menu a {
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
}

.home-link:hover {
	text-decoration: none !important;
	/* background-color: #216f8c; */
	color:#216f8c;
	border-color: transparent;
}
</style>
