<template>
    <v-card>
        <v-app-bar bar prominent dark color="orange" dense>
            <div>
                <router-link to="/administrador">
                    <v-img width="100" src="../assets/logo.png"></v-img>
                </router-link>
            </div>

            <v-toolbar-title> </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn text class="mt-5" to="/">
                <span class="mr-3">Cerrar Cesion</span>
                <v-icon large>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
    </v-card>
</template>

<script>
export default {
    name: "BarraLogin",
    data() {
        return {};
    },
};
</script>