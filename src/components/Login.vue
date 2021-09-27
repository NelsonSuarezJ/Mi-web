<template>
    <v-container>
        <v-row align="center">
            <v-col>
                <v-card max-width="500" class="mx-auto pa-10" elevation="10">
                    <v-card-title primary-title>
                        <div class="pb-10">
                            <h3 class="display-3 mb-0">Sign up</h3>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-text-field
                                label="Email"
                                hint="Correo con el que se registro"
                                v-model="email"
                            ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field
                                label="Enter your password"
                                type="password"
                                hint="No comparta sus contraseñas"
                                v-model="password"
                            ></v-text-field>
                        </v-row>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            color="primary"
                            block
                            @click="ingreso"
                            :href="url"
                            >Login</v-btn
                        >
                    </v-card-actions>
                    <v-alert type="error" :value="error">
                        Los datos ingresados no corresponden con un usuario
                        valido
                    </v-alert>
                    <v-alert type="warning" :value="true" class="mt-10 pt-5">
                        <p>
                            Para ingresar como Administrador ingrese
                            <strong>admin</strong> como usuario y contraseña.
                        </p>
                        <p>
                            Para ingresar como Conductor ingrese
                            <strong>user</strong> como usuario y contraseña.
                        </p>
                    </v-alert>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>



<script>
export default {
    name: "Login",
    data: () => ({
        email: "",
        password: "",
        error: false,
        url: "#",
    }),
    methods: {
        ingreso() {
            if (this.email == "admin" && this.password == "admin") {
                console.log("Es Admin");
                this.error = false;
                this.url = "http://localhost:8080/";
            } else if (this.email == "user" && this.password == "user") {
                console.log("Es User");
                this.error = false;
                this.url = "http://localhost:8080/Conductor";
            } else {
                this.error = true;
            }
            this.email = "";
            this.password = "";
        },
    },
};
</script>

<style>
</style>

