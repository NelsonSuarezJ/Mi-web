<template>
    <v-data-table
        :headers="headers"
        :items="vehiculos"
        sort-by=""
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Lista de vehiculos</v-toolbar-title>
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
                                        <v-text-field
                                            v-model="editedItem.kilometraje"
                                            label="Kilometraje"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="4">
                                        <v-text-field
                                            v-model="editedItem.tarjeta"
                                            label="Tarjeta de propiedad"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="4">
                                        <v-text-field
                                            v-model="editedItem.tecnoMecanica"
                                            label="TecnoMecanica"
                                            type="date"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="4">
                                        <v-text-field
                                            v-model="editedItem.soat"
                                            label="SOAT"
                                            type="date"
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
                <v-dialog v-model="dialogDelete" max-width="530px">
                    <v-card>
                        <v-card-title class="text-h5"
                            >¿Esta seguro que desea eliminar el
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
import {
    getAll,
    createVehiculo,
    deleteVehiculo,
    updateVehiculo,
} from "../controllers/vehiculoController";

export default {
    name: "AdminVehiculo",
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            { text: "Placa", value: "placa" },
            { text: "Kilometraje", value: "kilometraje" },
            { text: "Tarjeta", value: "tarjeta" },
            { text: "TecnoMecanica", value: "tecnoMecanica" },
            { text: "SOAT", value: "soat" },
            { text: "Acciones", value: "actions", sortable: false },
        ],
        vehiculos: [],
        editedIndex: -1,
        id: "",
        editedItem: {
            placa: "",
            kilometraje: "",
            tarjeta: "",
            tecnoMecanica: null,
            soat: null,
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
            getAll()
                .then((res) => {
                    this.vehiculos = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        editItem(item) {
            this.editedIndex = this.vehiculos.indexOf(item); //retorna el indice donde esta el item
            this.editedItem = Object.assign({}, item);
            delete this.editedItem._id;
            this.dialog = true;
            this.id = item._id;
        },

        deleteItem(item) {
            this.dialogDelete = true;
            this.id = item._id;
        },

        deleteItemConfirm() {
            deleteVehiculo(this.id)
                .then(() => {
                    console.log("Se elimino registro");
                    this.initialize();
                })
                .catch((error) => {
                    console.log(error);
                });
            this.closeDelete();
        },

        close() {
            this.dialog = false;
            this.editedIndex = -1;
            this.editedItem.placa = "";
            this.editedItem.luces = "PE";
            this.editedItem.frenos = "PE";
            this.editedItem.espejos = "PE";
            this.editedItem.gato = "PE";
            this.editedItem.cinturones = "PE";
            this.editedItem.aceitemotor = "PE";
            this.editedItem.liquidofrenos = "PE";
            this.id = "";
        },

        closeDelete() {
            this.editedIndex = -1;
            this.dialogDelete = false;
        },

        save() {
            if (this.editedIndex > -1) {
                updateVehiculo(this.id, this.editedItem)
                    .then(() => {
                        console.log("Se actualizo registro");
                        this.initialize();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                createVehiculo(this.editedItem)
                    .then(() => {
                        console.log("Se creo un registro");
                        this.initialize();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            this.close();
        },
    },
};
</script>

<style>
</style>