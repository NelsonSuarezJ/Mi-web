<template>
    <div>
        <v-data-table
            :headers="encabezados"
            :items="listaPreop"
            sort-by="fecha"
            class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Lista Preoperacional</v-toolbar-title>
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
                                New Item
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.id"
                                                label="Dessert name"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.fecha"
                                                label="fecha"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.lucesd"
                                                label="lucesd (g)"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.lucest"
                                                label="lucest (g)"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="
                                                    editedItem.limpiabrisas
                                                "
                                                label="limpiabrisas (g)"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="close"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5"
                                >Are you sure you want to delete this
                                item?</v-card-title
                            >
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="closeDelete"
                                    >Cancel</v-btn
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
    </div>
</template>

<script>
export default {
    name: "ListaPre",
    data: () => ({
        dialog: false,
        dialogDelete: false,
        encabezados: [
            {
                text: "Id",
                align: "start",
                sortable: false,
                value: "id",
            },
            { text: "Fecha", value: "fecha" },
            { text: "Luces delanteras", value: "lucesd" },
            { text: "Luces traseras", value: "lucest" },
            { text: "Brazos limpia brisas", value: "limpiabrisas" },
            { text: "Placa del vehiculo", value: "placa" },
            { text: "Tapa de gasolina", value: "tapa" },
            { text: "Apoya cabezas", value: "apoyac" },
            { text: "Pito o Bocina", value: "bocina" },
            { text: "Frenos", value: "frenos" },
            { text: "Freno de emergencia", value: "frenose" },
            { text: "Espejos retrovisores", value: "espejos" },
            { text: "Extintor presurizado y vigente", value: "extintor" },
            { text: "Linterna / Lampara para bateria", value: "linterna" },
            { text: "Banderolas o triangulos", value: "banderolas" },
            { text: "Gato hidraulico o mecanico", value: "gato" },
            { text: "Palanca del gato", value: "palancag" },

            { text: "Actions", value: "actions", sortable: false },
        ],
        listaPreop: [],
        editedIndex: -1,
        editedItem: {
            id: "",
            fecha: 0,
            lucesd: 0,
            lucest: 0,
            limpiabrisas: 0,
            placa: 0,
            tapa: 0,
            apoyac: 0,
            bocina: 0,
            frenos: 0,
            frenose: 0,
            espejos: 0,
            extintor: 0,
            linterna: 0,
            banderolas: 0,
            gato: 0,
            palancag: 0,
        },
        defaultItem: {
            id: "",
            fecha: 0,
            lucesd: 0,
            lucest: 0,
            limpiabrisas: 0,
            placa: 0,
            tapa: 0,
            apoyac: 0,
            bocina: 0,
            frenos: 0,
            frenose: 0,
            espejos: 0,
            extintor: 0,
            linterna: 0,
            banderolas: 0,
            gato: 0,
            palancag: 0,
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
            this.listaPreop = [
                {
                    id: "ab01",
                    fecha: "01/10/2021",
                    lucesd: "Perfecto estado",
                    lucest: "Perfecto estado",
                    limpiabrisas: "Requiere reparacion",
                    placa: "Perfecto estado",
                    tapa: "Perfecto estado",
                    apoyac: "Perfecto estado",
                    bocina: "Perfecto estado",
                    frenos: "Perfecto estado",
                    frenose: "Requiere reparacion",
                    espejos: "Perfecto estado",
                    extintor: "Perfecto estado",
                    linterna: "Requiere mantenimiento",
                    banderolas: "Perfecto estado",
                    gato: "Perfecto estado",
                    palancag: "Perfecto estado",
                },
                {
                    id: "ab02",
                    fecha: "02/10/2021",
                    lucesd: "Requiere reparacion",
                    lucest: "Perfecto estado",
                    limpiabrisas: "Perfecto estado",
                    placa: "Requiere mantenimiento",
                    tapa: "Perfecto estado",
                    apoyac: "Perfecto estado",
                    bocina: "Perfecto estado",
                    frenos: "Requiere mantenimiento",
                    frenose: "Perfecto estado",
                    espejos: "Perfecto estado",
                    extintor: "Perfecto estado",
                    linterna: "Requiere reparacion",
                    banderolas: "Perfecto estado",
                    gato: "Perfecto estado",
                    palancag: "Perfecto estado",
                },
                {
                    id: "ab03",
                    fecha: "03/10/2021",
                    lucesd: "Requiere mantenimiento",
                    lucest: "Requiere reparacion",
                    limpiabrisas: "Requiere reparacion",
                    placa: "Perfecto estado",
                    tapa: "Perfecto estado",
                    apoyac: "Perfecto estado",
                    bocina: "Requiere reparacion",
                    frenos: "Perfecto estado",
                    frenose: "Perfecto estado",
                    espejos: "Perfecto estado",
                    extintor: "Requiere mantenimiento",
                    linterna: "Perfecto estado",
                    banderolas: "Perfecto estado",
                    gato: "Perfecto estado",
                    palancag: "Requiere reparacion",
                },
                {
                    id: "ab04",
                    fecha: "04/10/2021",
                    lucesd: "Perfecto estado",
                    lucest: "Perfecto estado",
                    limpiabrisas: "Requiere reparacion",
                    placa: "Perfecto estado",
                    tapa: "Perfecto estado",
                    apoyac: "Perfecto estado",
                    bocina: "Perfecto estado",
                    frenos: "Requiere mantenimiento",
                    frenose: "Perfecto estado",
                    espejos: "Requiere reparacion",
                    extintor: "Perfecto estado",
                    linterna: "Perfecto estado",
                    banderolas: "Perfecto estado",
                    gato: "Perfecto estado",
                    palancag: "Perfecto estado",
                },
                {
                    id: "ab05",
                    fecha: "05/10/2021",
                    lucesd: "Perfecto estado",
                    lucest: "Perfecto estado",
                    limpiabrisas: "Perfecto estado",
                    placa: "Perfecto estado",
                    tapa: "Perfecto estado",
                    apoyac: "Perfecto estado",
                    bocina: "Perfecto estado",
                    frenos: "Perfecto estado",
                    frenose: "Perfecto estado",
                    espejos: "Requiere reparacion",
                    extintor: "Perfecto estado",
                    linterna: "Perfecto estado",
                    banderolas: "Perfecto estado",
                    gato: "Perfecto estado",
                    palancag: "Perfecto estado",
                },
                {
                    id: "ab06",
                    fecha: "06/10/2021",
                    lucesd: "Requiere mantenimiento",
                    lucest: "Requiere reparacion",
                    limpiabrisas: "Perfecto estado",
                    placa: "Perfecto estado",
                    tapa: "Perfecto estado",
                    apoyac: "Perfecto estado",
                    bocina: "Perfecto estado",
                    frenos: "Requiere mantenimiento",
                    frenose: "Perfecto estado",
                    espejos: "Perfecto estado",
                    extintor: "Perfecto estado",
                    linterna: "Perfecto estado",
                    banderolas: "Perfecto estado",
                    gato: "Requiere mantenimiento",
                    palancag: "Perfecto estado",
                },
            ];
        },

        editItem(item) {
            this.editedIndex = this.listaPreop.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.listaPreop.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.listaPreop.splice(this.editedIndex, 1);
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
                    this.listaPreop[this.editedIndex],
                    this.editedItem
                );
            } else {
                this.listaPreop.push(this.editedItem);
            }
            this.close();
        },
    },
};
</script>

<style>
</style>