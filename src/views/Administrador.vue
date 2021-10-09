<template>
    <div>
        <barra-admin />
        <v-main class="blue-grey darken-4">
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import BarraAdmin from "../components/BarraAdmin.vue";
export default {
    name: "Administrador",
    components: { BarraAdmin },
    data() {
        return {};
    },
};
</script>

<style>
</style>