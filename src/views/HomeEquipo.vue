<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
                v-for="(integrante, index) in team"
                :key="index"
            >
                <v-card max-width="400" class="mx-auto">
                    <div class="pa-10">
                        <v-img :src="integrante.scr" width="400"></v-img>
                    </div>
                    <v-card-title>{{ integrante.name }}</v-card-title>
                    <v-card-text>Integrante</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            team: [
                {
                    name: "Nelson Suarez",
                    scr: "https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar1_big@2x.png",
                },
                {
                    name: "Juan Valderrama",
                    scr: "https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar1_big@2x.png",
                },
                {
                    name: "Kevin Correa",
                    scr: "https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar1_big@2x.png",
                },
                {
                    name: "Jefer Medina",
                    scr: "https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar1_big@2x.png",
                },
                {
                    name: "Yradis Pertuz",
                    scr: "https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar5_big@2x.png",
                },
            ],
        };
    },
};
</script>

<style>
</style>
