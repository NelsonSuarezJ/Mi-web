<template>
    <div>
        <barra-user />
        <v-main class="grey lighten-2">
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import BarraUser from "../components/BarraUser.vue";
export default {
    components: { BarraUser },
    data() {
        return {};
    },
};
</script>

<style>
</style>