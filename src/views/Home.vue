<template>
    <div>
        <barra-inicio />
        <v-main class="grey lighten-2">
            <v-container class="py-0">
                <router-view></router-view>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import BarraInicio from "../components/BarraInicio.vue";

export default {
    components: { BarraInicio },
};
</script>
