<template>
    <v-data-table
        :headers="headers"
        :items="preoperacional"
        sort-by=""
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Lista preoperacional</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="800px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                        >
                            Nuevo registro
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" lg="4">
                                        <v-text-field
                                            v-model="editedItem.placa"
                                            label="Placa"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" sm="6" lg="4">
                                        <h3>{{ headers[1].text }}</h3>
                                        <v-radio-group
                                            column
                                            v-model="editedItem.luces"
                                        >
                                            <v-radio
                                                :label="estados[0].titulo"
                                                :color="estados[0].color"
                                                :value="estados[0].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[1].titulo"
                                                :color="estados[1].color"
                                                :value="estados[1].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[2].titulo"
                                                :color="estados[2].color"
                                                :value="estados[2].abr"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="4">
                                        <h3>{{ headers[2].text }}</h3>
                                        <v-radio-group
                                            column
                                            v-model="editedItem.frenos"
                                        >
                                            <v-radio
                                                :label="estados[0].titulo"
                                                :color="estados[0].color"
                                                :value="estados[0].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[1].titulo"
                                                :color="estados[1].color"
                                                :value="estados[1].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[2].titulo"
                                                :color="estados[2].color"
                                                :value="estados[2].abr"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="4">
                                        <h3>{{ headers[3].text }}</h3>
                                        <v-radio-group
                                            column
                                            v-model="editedItem.espejos"
                                        >
                                            <v-radio
                                                :label="estados[0].titulo"
                                                :color="estados[0].color"
                                                :value="estados[0].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[1].titulo"
                                                :color="estados[1].color"
                                                :value="estados[1].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[2].titulo"
                                                :color="estados[2].color"
                                                :value="estados[2].abr"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="4">
                                        <h3>{{ headers[4].text }}</h3>
                                        <v-radio-group
                                            column
                                            v-model="editedItem.gato"
                                        >
                                            <v-radio
                                                :label="estados[0].titulo"
                                                :color="estados[0].color"
                                                :value="estados[0].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[1].titulo"
                                                :color="estados[1].color"
                                                :value="estados[1].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[2].titulo"
                                                :color="estados[2].color"
                                                :value="estados[2].abr"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="4">
                                        <h3>{{ headers[5].text }}</h3>
                                        <v-radio-group
                                            column
                                            v-model="editedItem.cinturones"
                                        >
                                            <v-radio
                                                :label="estados[0].titulo"
                                                :color="estados[0].color"
                                                :value="estados[0].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[1].titulo"
                                                :color="estados[1].color"
                                                :value="estados[1].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[2].titulo"
                                                :color="estados[2].color"
                                                :value="estados[2].abr"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="4">
                                        <h3>{{ headers[6].text }}</h3>
                                        <v-radio-group
                                            column
                                            v-model="editedItem.aceitemotor"
                                        >
                                            <v-radio
                                                :label="estados[0].titulo"
                                                :color="estados[0].color"
                                                :value="estados[0].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[1].titulo"
                                                :color="estados[1].color"
                                                :value="estados[1].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[2].titulo"
                                                :color="estados[2].color"
                                                :value="estados[2].abr"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="4">
                                        <h3>{{ headers[7].text }}</h3>
                                        <v-radio-group
                                            column
                                            v-model="editedItem.liquidofrenos"
                                        >
                                            <v-radio
                                                :label="estados[0].titulo"
                                                :color="estados[0].color"
                                                :value="estados[0].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[1].titulo"
                                                :color="estados[1].color"
                                                :value="estados[1].abr"
                                            ></v-radio>
                                            <v-radio
                                                :label="estados[2].titulo"
                                                :color="estados[2].color"
                                                :value="estados[2].abr"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">
                                Cancelar
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="save">
                                Guardar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="650px">
                    <v-card>
                        <v-card-title class="text-h5"
                            >¿Esta seguro que desea eliminar los datos del
                            registro?</v-card-title
                        >
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="closeDelete"
                                >Cancelar</v-btn
                            >
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="deleteItemConfirm"
                                >OK</v-btn
                            >
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
    </v-data-table>
</template>

<script>
import axios from "axios";

export default {
    name: "ListaPre",
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            { text: "Placa", value: "placa" },
            { text: "Luces", value: "luces" },
            { text: "Frenos", value: "frenos" },
            { text: "Espejos", value: "espejos" },
            { text: "Gato", value: "gato" },
            { text: "Cinturones", value: "cinturones" },
            { text: "Aceite del motor", value: "aceitemotor" },
            { text: "Liquido de frenos", value: "liquidofrenos" },
            { text: "Fecha de creacion", value: "creado" },
            { text: "Acciones", value: "actions", sortable: false },
        ],
        preoperacional: [],
        editedIndex: -1,
        editedItem: {
            placa: "",
            luces: "PE",
            frenos: "PE",
            espejos: "PE",
            gato: "PE",
            cinturones: "PE",
            aceitemotor: "PE",
            liquidofrenos: "PE",
        },
        estados: [
            { titulo: "Perfecto estado", abr: "PE", color: "success" },
            { titulo: "Requiere mantenimiento", abr: "RM", color: "info" },
            { titulo: "Requiere reparacion", abr: "RR", color: "error" },
        ],
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1
                ? "Nuevo registro"
                : "Editar registro";
        },
    },

    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },

    created() {
        this.initialize();
    },

    methods: {
        initialize() {
            let apiURL = "http://localhost:2000/api/preoperacional";
            axios
                .get(apiURL)
                .then((res) => {
                    this.preoperacional = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        editItem(item) {
            this.editedIndex = this.preoperacional.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            if (
                window.confirm("¿Esta seguro que quiere eliminar el registro?")
            ) {
                let apiURL = `http://localhost:2000/api/delete-pre/${item._id}`;

                axios
                    .delete(apiURL)
                    .then(() => {
                        console.log("Se elimino item");
                        this.initialize();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

        deleteItemConfirm() {
            this.closeDelete();
        },

        close() {
            this.dialog = false;
            this.editedItem.placa = "";
        },

        closeDelete() {
            this.dialogDelete = false;
        },

        save() {
            let apiURL = "http://localhost:2000/api/preoperacional";
            axios
                .post(apiURL, this.editedItem)
                .then((res) => {
                    this.initialize();
                    this.editedItem.placa = "";
                })
                .catch((error) => {
                    console.log(error);
                });
            this.close();
        },
    },
};
</script>

<style>
</style>