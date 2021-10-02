<template>
    <v-data-table
        :headers="headers"
        :items="conductores"
        sort-by=""
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Lista de Conductores</v-toolbar-title>
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
                            Nuevo Conductor
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
                                            v-model="editedItem.cedula"
                                            label="Cedula"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="editedItem.nombre"
                                            label="Nombre"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="editedItem.apellido"
                                            label="Apellido"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="editedItem.email"
                                            label="Email"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="editedItem.licencia"
                                            label="Licencia"
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
                            conductor?</v-card-title
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
export default {
    name: "AdminConductor",
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            { text: "Cedula", value: "cedula" },
            { text: "Nombre", value: "nombre" },
            { text: "Apellido", value: "apellido" },
            { text: "Email", value: "email" },
            { text: "Licencia", value: "licencia" },
            { text: "Acciones", value: "actions", sortable: false },
        ],
        conductores: [],
        editedIndex: -1,
        editedItem: {
            cedula: "",
            nombre: "",
            apellido: "",
            email: "",
            licencia: "",
        },
        defaultItem: {
            cedula: "",
            nombre: "",
            apellido: "",
            email: "",
            licencia: "",
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1
                ? "Nuevo Conductor"
                : "Editar Conductor";
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
            this.conductores = [
                {
                    cedula: "80578324",
                    nombre: "Juan",
                    apellido: "Perez",
                    email: "juan@hotmail.com",
                    licencia: 578452355,
                },
                {
                    cedula: "10242315351",
                    nombre: "Antonio",
                    apellido: "Santo Domingo",
                    email: "antonio@gmail.com",
                    licencia: 475689121,
                },
                {
                    cedula: "812543884",
                    nombre: "Carlos",
                    apellido: "Fernandez",
                    email: "carlos@hotmail.com",
                    licencia: 689821357,
                },
            ];
        },

        editItem(item) {
            this.editedIndex = this.conductores.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.conductores.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.conductores.splice(this.editedIndex, 1);
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
                    this.conductores[this.editedIndex],
                    this.editedItem
                );
            } else {
                this.conductores.push(this.editedItem);
            }
            this.close();
        },
    },
};
</script>

<style>
</style>