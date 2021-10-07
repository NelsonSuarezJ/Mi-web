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
                <v-dialog v-model="dialog" max-width="500px">
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
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="editedItem.placa"
                                            label="Placa"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="editedItem.kilometraje"
                                            label="Kilometraje"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="editedItem.tecnomecanica"
                                            label="Tecnomecanica"
                                            type="date"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="editedItem.soat"
                                            label="SOAT"
                                            type="date"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="editedItem.tarjeta"
                                            label="Tarjeta de propiedad"
                                        ></v-text-field>
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
                <v-dialog v-model="dialogDelete" max-width="500px">
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
        <template v-slot:item.actions="{ item }">
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
            { text: "Kilometraje", value: "kilometraje" },
            { text: "Tecnomecanica", value: "tecnomecanica" },
            { text: "SOAT", value: "soat" },
            { text: "Tarjeta de propiedad", value: "tarjeta" },
            { text: "Acciones", value: "actions", sortable: false },
        ],
        preoperacional: [],
        editedIndex: -1,
        editedItem: {
            placa: "",
            kilometraje: 0,
            tecnomecanica: "",
            soat: "",
            tarjeta: 0,
        },
        defaultItem: {
            placa: "",
            kilometraje: "",
            tecnomecanica: "",
            soat: "",
            tarjeta: "",
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1
                ? "Nuevo vehiculo"
                : "Editar vehiculo";
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
            this.preoperacional = [
                {
                    placa: "ABC123",
                    kilometraje: 123456,
                    tecnomecanica: "2025-08-01",
                    soat: "2024-10-22",
                    tarjeta: 578452355,
                },
                {
                    placa: "CDE456",
                    kilometraje: 234567,
                    tecnomecanica: "2022-01-02",
                    soat: "2022-12-24",
                    tarjeta: 475689121,
                },
                {
                    placa: "FGH789",
                    kilometraje: 345678,
                    tecnomecanica: "2022-10-10",
                    soat: "2023-04-12",
                    tarjeta: 689821357,
                },
            ];
        },

        editItem(item) {
            this.editedIndex = this.preoperacional.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.preoperacional.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.preoperacional.splice(this.editedIndex, 1);
            this.closeDelete();
        },

        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(
                    this.preoperacional[this.editedIndex],
                    this.editedItem
                );
            } else {
                this.preoperacional.push(this.editedItem);
            }
            this.close();
        },
    },
};
</script>

<style>
</style>