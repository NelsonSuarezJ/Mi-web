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
            <v-toolbar-title>Super Administrador</v-toolbar-title>

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
                <v-list-item-group v-model="group">
                    <v-list-item to="/">
                        <v-list-item-icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Cerrar sesion</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "BarraSuper",
    data() {
        return {
            drawer: false,
            group: null,
        };
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
};
</script>