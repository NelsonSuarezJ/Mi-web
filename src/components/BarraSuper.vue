<template>
    <div class="flow">
        <v-app-bar
            app
            dense
            dark
            color="orange darken-2"
            prominent
            shrink-on-scroll
            flat
            hide-on-scroll
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>SUPER ADMINISTRADOR</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            color="blue-grey darken-3"
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
            drawer: null,
            group: null,
        };
    },
    // watch: {
    //     group() {
    //         this.drawer = false;
    //     },
    // },
};
</script>