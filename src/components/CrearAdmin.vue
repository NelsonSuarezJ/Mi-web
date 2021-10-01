<template>
    <div>
        <v-card max-width="800" class="mx-auto pa-10 my-sm-0 my-md-10">
            <v-form>
                <v-card-title>Crear administrador</v-card-title>
                <v-card-text>
                    <v-row justify="center">
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="nombre"
                                label="Primer Nombre"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="apellido"
                                label="Primer Apellido"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="email"
                                label="Correo electronico"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="telefono"
                                label="Telefono"
                                outlined
                                type="number"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-checkbox
                                v-model="estado"
                                label="activo"
                            ></v-checkbox>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="ingresar">Crear</v-btn>
                    <v-btn color="primary" @click="cancelar">Cancelar</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
        <v-divider></v-divider>
        <h1>Administradores</h1>
        <v-data-table
            :headers="encabezados"
            :items="listaAdmin"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
    </div>
</template>

<script>
export default {
    name: "CrearAdmin",
    data() {
        return {
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
            estado: true,

            encabezados: [
                {
                    text: "Nombre",
                    align: "start",
                    sortable: false,
                    value: "nombre",
                },
                { text: "Apellido", value: "apellido" },
                { text: "Email", value: "email" },
                { text: "Telefono", value: "telefono" },
                { text: "Activo", value: "estado" },
            ],
            listaAdmin: [
                {
                    nombre: "Nelson",
                    apellido: "Suarez",
                    email: "nelson.sj@hotmail.com",
                    telefono: 351351351,
                    estado: true,
                },
                {
                    nombre: "Nelson",
                    apellido: "Suarez",
                    email: "nelson.sj@hotmail.com",
                    telefono: 351351351,
                    estado: true,
                },
                {
                    nombre: "Nelson",
                    apellido: "Suarez",
                    email: "nelson.sj@hotmail.com",
                    telefono: 351351351,
                    estado: true,
                },
                {
                    nombre: "Nelson",
                    apellido: "Suarez",
                    email: "nelson.sj@hotmail.com",
                    telefono: 351351351,
                    estado: true,
                },
                {
                    nombre: "Nelson",
                    apellido: "Suarez",
                    email: "nelson.sj@hotmail.com",
                    telefono: 351351351,
                    estado: true,
                },
                {
                    nombre: "Nelson",
                    apellido: "Suarez",
                    email: "nelson.sj@hotmail.com",
                    telefono: 351351351,
                    estado: true,
                },
                {
                    nombre: "Nelson",
                    apellido: "Suarez",
                    email: "nelson.sj@hotmail.com",
                    telefono: 351351351,
                    estado: true,
                },
            ],
        };
    },
    methods: {
        ingresar() {
            this.listaAdmin.push({
                nombre: this.nombre,
                apellido: this.apellido,
                email: this.email,
                telefono: this.telefono,
                estado: this.estado,
            });
            this.cancelar();
        },
        cancelar() {
            this.nombre = "";
            this.apellido = "";
            this.email = "";
            this.telefono = "";
            this.estado = true;
        },
    },
};
</script>
