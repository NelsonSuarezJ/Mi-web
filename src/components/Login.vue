<template>
    <v-container>
        <v-img src="../assets/fondo.png" alt="fondo-login" contain>
            <v-row align="center" class="mt-10">
                <v-col>
                    <v-card
                        max-width="500"
                        class="mx-auto pa-10"
                        elevation="10"
                    >
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
                                    @change="cambiarUrl"
                                ></v-text-field>
                            </v-row>
                            <v-row>
                                <v-text-field
                                    label="Enter your password"
                                    type="password"
                                    hint="No comparta sus contraseñas"
                                    v-model="password"
                                    @change="cambiarUrl"
                                ></v-text-field>
                            </v-row>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                color="primary"
                                block
                                @click="validar"
                                :to="url"
                                >Login</v-btn
                            >
                        </v-card-actions>
                        <v-alert type="error" :value="error">
                            Los datos ingresados no corresponden con un usuario
                            valido
                        </v-alert>
                        <v-alert
                            type="warning"
                            :value="true"
                            class="mt-10 pt-5"
                        >
                            <p>
                                Para ingresar como Administrador ingrese
                                <strong>admin</strong> como usuario y
                                contraseña.
                            </p>
                            <p>
                                Para ingresar como Conductor ingrese
                                <strong>user</strong> como usuario y contraseña.
                            </p>
                        </v-alert>
                    </v-card>
                </v-col>
            </v-row>
        </v-img>
    </v-container>
</template>



<script>
export default {
    name: "Login",
    data: () => ({
        email: "",
        password: "",
        error: false,
        url: "/",
        usuarios: [
            { email: "admin", password: "admin" },
            { email: "user", password: "user" },
        ],
    }),
    methods: {
        validar() {
            this.email = "";
            this.password = "";
            this.error = true;
        },
        cambiarUrl() {
            for (let key in this.usuarios) {
                if (
                    this.email == this.usuarios[key].email &&
                    this.password == this.usuarios[key].password
                ) {
                    console.log("el usuario esta en la bd");
                    this.url = "".concat("/", this.usuarios[key].email);
                    break;
                } else {
                    this.url = "/";
                }
            }
        },
    },
};
</script>
