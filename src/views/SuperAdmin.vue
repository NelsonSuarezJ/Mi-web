<template>
    <div>
        <barra-super />
        <v-main class="grey lighten-2">
            <v-container>
                <crear-admin />
            </v-container>
        </v-main>
    </div>
</template>

<script>
import BarraSuper from "../components/BarraSuper.vue";
import CrearAdmin from "../components/CrearAdmin.vue";
export default {
    name: "SuperAdmin",
    components: { BarraSuper, CrearAdmin },
    data() {
        return {};
    },
};
</script>

<style>
</style>