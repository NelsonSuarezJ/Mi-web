<template>
    <div>
        <h2 class="text-center">
            Proceso de servicio y mantenimiento de flota
        </h2>

        <h3 class="text-center">
            Lista de verificacion del estado del vehiculo
        </h3>

        <v-divider></v-divider>

        <v-card max-width="1200" class="mx-auto pa-10 my-sm-0 my-md-10">
            <v-form>
                <v-card-title>Informacion del vehiculo</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="placa" label="No de placa">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="kilometraje"
                                label="Kilometraje"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-menu
                                v-model="menu1"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="date1"
                                        label="Revision TecnoMecanica"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="date1"
                                    @input="menu1 = false"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="date2"
                                        label="Vencimiento del SOAT"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="date2"
                                    @input="menu2 = false"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="tarjeta"
                                label="Tarjeta de propiedad"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-title>Partes del vehiculo</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                            v-for="(parte, indexpv) in pv"
                            :key="indexpv"
                        >
                            <div>{{ parte.titulo }}</div>

                            <v-radio-group column v-model="parte.respuesta">
                                <v-radio
                                    v-for="(estadov, index) in estados"
                                    :key="index"
                                    :label="estadov.titulo"
                                    :value="index"
                                    :color="estadov.color"
                                ></v-radio>
                            </v-radio-group>
                            <v-divider></v-divider>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-title>Liquidos del vehiculo</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                            v-for="(liquido, indexlv) in lv"
                            :key="indexlv"
                        >
                            <div>{{ liquido.titulo }}</div>

                            <v-radio-group column v-model="liquido.respuesta">
                                <v-radio
                                    v-for="(estadov, index) in estados"
                                    :key="index"
                                    :label="estadov.titulo"
                                    :value="index"
                                    :color="estadov.color"
                                ></v-radio>
                            </v-radio-group>
                            <v-divider></v-divider>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-subtitle
                    >¿Va a transportar en el vehiculo productos quimicos
                    peligrosos?</v-card-subtitle
                ><v-card-text>
                    <v-radio-group mandatory row v-model="quimicos">
                        <v-radio label="No" value="0"></v-radio>
                        <v-radio label="Si" value="1"></v-radio>
                    </v-radio-group>

                    <v-textarea label="Observaciones" rows="3"></v-textarea>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary"> Enviar </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "FormPre",
    data() {
        return {
            placa: "",
            kilometraje: "",
            tarjeta: "",
            quimicos: 0,

            menu1: false,
            menu2: false,
            date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),

            pv: [
                { titulo: "Luces delanteras", respuesta: 0 },
                { titulo: "Luces traseras", respuesta: 0 },
                { titulo: "Brazos limpia brisas", respuesta: 0 },
                { titulo: "Placa del vehiculo", respuesta: 0 },
                { titulo: "Tapa de gasolina", respuesta: 0 },
                { titulo: "Apoya cabezas", respuesta: 0 },
                { titulo: "Pito o Bocina", respuesta: 0 },
                { titulo: "Frenos", respuesta: 0 },
                { titulo: "Freno de emergencia", respuesta: 0 },
                { titulo: "Espejos retrovisores", respuesta: 0 },
                { titulo: "Extintor presurizado y vigente", respuesta: 0 },
                { titulo: "Linterna / Lampara para bateria", respuesta: 0 },
                { titulo: "Banderolas o triangulos", respuesta: 0 },
                { titulo: "Gato hidraulico o mecanico", respuesta: 0 },
                { titulo: "Palanca del gato", respuesta: 0 },
                {
                    titulo: "Herramientas, alicate, destornillador, llaves, hombresolo",
                    respuesta: 0,
                },
                { titulo: "Llantas de repuesto", respuesta: 0 },
                { titulo: "Presion de los 5 neumaticos", respuesta: 0 },
                { titulo: "Botiquin", respuesta: 0 },
                { titulo: "Sillas", respuesta: 0 },
                { titulo: "Cinturones de seguridad", respuesta: 0 },
            ],

            lv: [
                { titulo: "Nivel de agua del radiador", respuesta: 0 },
                { titulo: "Nivel de aceite del motor", respuesta: 0 },
                { titulo: "Nivel de liquido de frenos", respuesta: 0 },
                {
                    titulo: "Nivel del liquido de direccion hidraulica",
                    respuesta: 0,
                },
                { titulo: "Nivel del liquido de embrage", respuesta: 0 },
            ],

            estados: [
                { titulo: "Perfecto estado", color: "success" },
                { titulo: "Requiere mantenimiento", color: "info" },
                { titulo: "Requiere reparacion", color: "error" },
            ],
        };
    },
};
</script>

<style>
</style>