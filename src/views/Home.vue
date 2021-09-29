<template>
    <v-container>
        <barra-login />
        <login />
    </v-container>
</template>

<script>
import BarraLogin from "../components/BarraLogin.vue";
import Login from "../components/Login.vue";

export default {
    components: { Login, BarraLogin },
};
</script>
