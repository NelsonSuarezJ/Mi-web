<template>
    <v-app>
        <router-view />

        <v-footer padless color="indigo darken-4" dark app>
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} —
                <strong>Ten Transportes</strong>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: "App",
    components: {},

    data: () => ({
        //
    }),
};
</script>

