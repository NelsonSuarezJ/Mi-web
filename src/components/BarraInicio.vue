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
            <v-toolbar-title>TEN TRANSPORTES</v-toolbar-title>

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
    name: "BarraLogin",
    data() {
        return {
            drawer: null,
            group: null,
            menu: [
                { icono: "mdi-home", texto: "Home", url: "/login" },
                {
                    icono: "mdi-account-multiple",
                    texto: "Equipo",
                    url: "/equipo",
                },
            ],
        };
    },
    // watch: {
    //     group() {
    //       this.drawer = null;
    //     },
    // },
};
</script>