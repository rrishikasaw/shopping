<script setup>
let name = ref('')
let email = ref('')
let password  = ref('')
let confirmPassword = ref('')



</script>


<template>
	<v-card class="mx-auto mb-10" max-width="800">
		<v-img class="align-end text-white mx-auto" max-height="400" max-width="700" :src="registerImage" cover>
		</v-img>
		
		<v-card-title class="text-black fw-bold pt-4 text-center text-blue">REGISTER</v-card-title>
		<v-card-subtitle class="text-center">Create a new account</v-card-subtitle>

		<v-card-text>
			<v-sheet max-width="600" class="mx-auto">
				<v-form validate-on="submit lazy" @submit.prevent ref="form">
				

					<v-text-field
						prepend-inner-icon="mdi-account"
						v-model="name"
						variant="outlined"
						color="blur"
						hint="enter your name"
					
						label="name"
						placeholder="name"
					></v-text-field>

					<v-text-field
						prepend-inner-icon="mdi-email"
						v-model="email"
						variant="outlined"
						color="var(--theme)"
						hint="enter your email"
						:rules="emailRules"
						label="email"
						placeholder="email"
					></v-text-field>

					<v-text-field
						:type="passwordVisible ? 'text' : 'password'"
						v-model="password"
						variant="outlined"
						color="var(--theme)"
						prepend-inner-icon="mdi-lock"
						:append-inner-icon="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
						@click:append-inner="passwordVisible = !passwordVisible"
						:rules="passwordRules"
						hint="enter your password"
						label="password"
						placeholder="password"
					></v-text-field>

					<v-text-field
						:type="confirmPasswordVisible ? 'text' : 'password'"
						v-model="confirmPassword"
						variant="outlined"
						color="var(--theme)"
						prepend-inner-icon="mdi-lock"
						:append-inner-icon="confirmPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
						@click:append-inner="confirmPasswordVisible = !confirmPasswordVisible"
						:rules="confirmPasswordRules"
						hint="re-enter your password"
						label="password confirmation"
						placeholder="password confirmation"
					></v-text-field>

					<div class="d-flex justify-space-between align-center">
						<NuxtLink to="/login" class="fw-semibold fz-15">Login</NuxtLink>
						<v-btn
							@click="register"
							type="submit"
							color="blue"
							class="px-10 d-block ms-auto text-white bg-theme mt-2"
						>
							Register
						</v-btn>
					</div>
				</v-form>
			</v-sheet>
		</v-card-text>
	</v-card>

	<div>&nbsp;</div>
</template>