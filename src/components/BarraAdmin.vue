<template>
    <div class="flow">
        <v-app-bar
            app
            dense
            dark
            color="orange"
            prominent
            src="https://picsum.photos/1920/1080?random"
            shrink-on-scroll
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Administrador</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            temporary
            color="blue darken-3"
            dark
            app
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Ten Transportes
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list nav>
                <v-list-item-group
                    v-model="group"
                    v-for="(item, i) in menu"
                    :key="i"
                >
                    <v-list-item :to="item.url">
                        <v-list-item-icon>
                            <v-icon>{{ item.icono }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ item.texto }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "BarraAdmin",
    data() {
        return {
            drawer: false,
            group: null,
            menu: [
                {
                    icono: "mdi-home-city",
                    texto: "Home",
                    url: "/administrador/listapre",
                },
                {
                    icono: "mdi-bus",
                    texto: "Vehiculos",
                    url: "/administrador/adminvehiculo",
                },
                {
                    icono: "mdi-card-account-details-outline",
                    texto: "Conductores",
                    url: "/administrador/adminconductor",
                },
                {
                    icono: "mdi-shield-account-outline",
                    texto: "Administradores",
                    url: "/administrador/adminadmin",
                },
                {
                    icono: "mdi-logout",
                    texto: "Cerrar sesion",
                    url: "/",
                },
            ],
        };
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
};
</script>