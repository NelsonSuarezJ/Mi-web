<template>
    <v-card>
        <v-app-bar bar prominent dark color="orange" dense>
            <div>
                <router-link to="/">
                    <v-img width="100" src="../assets/logo1.png"></v-img>
                </router-link>
            </div>

            <v-toolbar-title> </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn text class="mt-5" to="/equipo">
                <span class="mr-3">EQUIPO</span>
                <v-icon large>mdi-account-group</v-icon>
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