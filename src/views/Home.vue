<template>
    <div>
        <barra-inicio />
        <v-main class="blue-grey darken-4">
            <v-container class="py-0">
                <router-view></router-view>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import BarraInicio from "../components/BarraInicio.vue";

export default {
    name: "Home",
    components: { BarraInicio },
};
</script>
