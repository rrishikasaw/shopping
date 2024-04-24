<script setup>
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore();
let email = ref('')
let password = ref('')
const remember = ref(false)

async function login() {
	
try {
		let res = await fetch('http://localhost:5000/api/auth/login', {
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value,
				password: password.value,
			}),
			method: 'POST',
		});
		if (!res.ok) {
			snack.error('Authorization failed');
			return;
		}
		let json = await res.json();
		console.log(json);
	
		localStorage.setItem('token', json.token);
	
		navigateTo('/orders');
} catch (error) {
	snack.error(error)
}
}

</script>


<template>
	<v-card class="mx-auto mb-10 pt-16" max-width="800">
		<v-img class="align-end text-white mx-auto" max-height="400" max-width="500" :src="loginImage" cover>
		</v-img>

		<v-card-title class="text-blue fw-bold pt-4 text-center">LOGIN</v-card-title>
		<v-card-subtitle class="text-center">Sign in to your account</v-card-subtitle>

		<v-card-text>
			<v-sheet max-width="600" class="mx-auto">
				<v-form validate-on="submit lazy" @submit.prevent ref="form">
					<v-text-field
						prepend-inner-icon="mdi-account"
						v-model="email"
						variant="outlined"
						color="blue"
						hint="enter your email"				
						label="email"
						placeholder="email"
					></v-text-field>

					<v-text-field
						:type="visible ? 'text' : 'password'"
						v-model="password"
						variant="outlined"
						color="blue"
						prepend-inner-icon="mdi-lock"
						:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
						@click:append-inner="visible = !visible"
						:rules="passwordRules"
						hint="enter your password"
						label="password"
						placeholder="password"
					></v-text-field>

					<v-checkbox v-model="remember" label="Stay logged in" color="blue" hide-details></v-checkbox>

					<div class="d-flex justify-space-between align-center mb-4">
						<!-- <NuxtLink to="/forget-password" class="fz-15 me-4 mt-2">Forget Password</NuxtLink>
						<NuxtLink to="/register">Click here to Register</NuxtLink> -->
						<v-btn
							@click="login"
							type="submit"
							color="blue"
							class="px-10 d-block ms-auto text-white bg-theme mt-2"
						>
							Login
						</v-btn>
					</div>

					<div class="mb-8">
						<p class="text-center fz-15">
							
						</p>
					</div>
				</v-form>
			</v-sheet>
		</v-card-text>
	</v-card>

	<div>&nbsp;</div>
</template>