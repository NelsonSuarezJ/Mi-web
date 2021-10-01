<template>
    <v-sheet>
        <v-img src="../assets/fondo.png" alt="fondo-login" max-height="1000">
            <v-row>
                <v-col>
                    <v-form>
                        <v-card
                            max-width="500"
                            class="pa-10 mx-auto my-sm-0 my-md-10"
                            elevation="10"
                        >
                            <v-card-title primary-title>
                                <div class="pb-10">
                                    <h3 class="display-3 mb-0">Sign up</h3>
                                </div>
                            </v-card-title>
                            <v-card-text v-model="cambio">
                                <v-row>
                                    <v-text-field
                                        label="Email"
                                        hint="Correo con el que se registro"
                                        v-model="email"
                                        autocomplete="username"
                                    ></v-text-field>
                                </v-row>
                                <v-row>
                                    <v-text-field
                                        label="Enter your password"
                                        type="password"
                                        hint="No comparta sus contraseñas"
                                        v-model="password"
                                        autocomplete="current-password"
                                    ></v-text-field>
                                </v-row>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="primary" block @click="validar"
                                    >Login</v-btn
                                >
                            </v-card-actions>
                            <v-alert type="error" :value="error">
                                Los datos ingresados no corresponden con un
                                usuario valido
                            </v-alert>
                            <v-alert
                                text
                                type="warning"
                                :value="true"
                                class="mt-5 pt-5"
                            >
                                <h3>Datos de ingreso:</h3>
                                <div>Administrador: admin / admin</div>
                                <div>Conductor: user / user</div>
                                <div>Superusuario: super / super</div>
                            </v-alert>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-img>
    </v-sheet>
</template>



<script>
export default {
    name: "Login",
    data: () => ({
        cambio: "",
        email: "",
        password: "",
        error: false,
        url: "/",
        usuarios: [
            { email: "admin", password: "admin", path: "/administrador" },
            { email: "user", password: "user", path: "/conductor" },
            { email: "super", password: "super", path: "/superadmin" },
        ],
    }),
    methods: {
        validar() {
            if (this.url != "/") {
                this.$router.push(this.url);
            }
            this.error = true;
            this.email = "";
            this.password = "";
        },
    },
    watch: {
        cambio: function () {
            for (let key in this.usuarios) {
                if (
                    this.email == this.usuarios[key].email &&
                    this.password == this.usuarios[key].password
                ) {
                    this.url = this.usuarios[key].path;
                    break;
                } else {
                    this.url = "/";
                }
            }
        },
    },
};
</script>
