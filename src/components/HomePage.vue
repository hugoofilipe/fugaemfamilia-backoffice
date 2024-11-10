<template>
    <div id="app">
        <div class="container">
            <div class="column1">
                <button @click="refresh_reservations_by_language" class="refresh-button">Refresh</button>
                <div class="form-group">
                    <p>Selecione o template</p>
                    <select v-model="template">
                        <option disabled value="">Respostas</option>
                        <option value="requestContact">Pedido de contactos</option>
                        <option value="proposal">Proposta final</option>
                        <option value="leaveMessages">Mensagens de despedida</option>
                    </select>
                    <p>Selecione o cliente</p>
                    <select v-model="selectedOption" @change="fetchReservations">
                        <option disabled value="">Cliente</option>
                        <option v-for="option in options" :key="option" :value="option" >{{ option[1] }}</option>
                    </select>
                    <p>Selecione o valor do dia</p>
                    <select v-model="valorDia">
                        <option disabled value="">Valor Dia</option>
                        <option v-for="valorDia in valorDias" :key="valorDia">{{ valorDia }}</option>
                    </select>
                    <p>Selecione o seguro</p>
                    <select v-model="seguro">
                        <option disable value="">Seguro</option>
                        <option v-for="seguro in seguros" :key="seguro" :value="seguro">Seguro: {{ seguro }}</option>
                    </select>
                    <p>Selecione a caução</p>
                    <select v-model="caucao">
                        <option disable value="">Caução</option>
                        <option v-for="caucao in caucaos" :key="caucao" :value="caucao">Caução: {{ caucao }}</option>
                    </select>
                    <p>Selecione a taxa de transporte</p>
                    <select v-model="taxaDeTransporte">
                        <option disabled value="">Taxa de Transporte</option>
                        <option v-for="taxaDeTransporte in taxaDeTransportes" :key="taxaDeTransporte">{{ taxaDeTransporte }}
                        </option>
                    </select>
                    <p>Selecione a taxa de limpeza</p>
                    <select v-model="taxaDeLimpeza">
                        <option disable value="">Taxa de Limpeza</option>
                        <option v-for="taxaDeLimpeza in taxaDeLimpezas" :key="taxaDeLimpeza" :value="taxaDeLimpeza">{{ taxaDeLimpeza }}
                        </option>
                    </select>
                    <div v-for="reservation in filteredReservations" :key="reservation.id">
                        <table>
                            <tr>
                                <th>Numeros de dias</th>
                                <td>{{ reservation.periodo_dias }}</td>
                            </tr> 
                            <tr>
                                <th>Numero de pessoas</th>
                                <td>{{ reservation.adultos }} adultos, {{ reservation.criancas }} crianças</td>
                            </tr>
                            
                            <tr>
                                <th>Animal de estimação</th>
                                <td>{{ reservation.animais == 0 ? 'Não tem' :  reservation.animais }}</td>
                            </tr>
                            <tr>
                                <th>Telemovel</th>
                                <td>{{ reservation.phone == 'None' ? '--' : reservation.phone }}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{{ reservation.email == 'None' ? '--' : reservation.email }}</td>
                            </tr>
                            <tr>
                                <th>Experiencia</th>
                                <td>{{ reservation.tem_experiencia }} (1 a 5)</td>
                            </tr>
                            <tr>
                                <th>Localidade</th>
                                <td>{{ reservation.localidade }}</td>
                            </tr>
                            <tr>
                                <th>Destino</th>
                                <td>{{ reservation.destino }}</td> 
                            </tr>
                            <tr>
                                <th>Tipo de viagem</th>
                                <td>{{ reservation.tipo_de_viagem }}</td>
                            </tr>
                            <tr>
                                <th>Pernoitar</th>
                                <td>{{ reservation.Pernoitar }}</td>
                            </tr>
                            <tr>
                                <th>Metodo de contacto preferencial</th>
                                <td>{{ reservation.metodo_de_contacto }}</td>
                            </tr>
                            <tr v-if="reservation.questions_and_comments">
                                <th>Comentarios</th>
                                <td>{{ reservation.questions_and_comments }}</td>
                            </tr>
                            <tr>
                                <th>Vem de onde</th>
                                <td>{{ reservation.vem_de_onde }}</td>
                            </tr>
                            <tr>
                                <th>Lucro</th>
                                <td><b> {{ parseInt(valorDia) * reservation.periodo_dias }}€</b></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="column2">
                <!-- Render the current component based on the selected template with fileredReservations as a prop -->
                <component :is="currentComponent" :filteredReservations="filteredReservations" :valorDia="valorDia" :taxaDeTransporte="taxaDeTransporte"
                    :taxaDeLimpeza="taxaDeLimpeza" :caucao="caucao" :seguro="seguro" @change="fetchData" />
            </div>
        </div>
    </div>
</template>
<script>
import { inject } from 'vue';
import DefaultPage from './DefaultPage.vue';
import FinalProposal from './FinalProposal.vue';
import RequestContact from './RequestContact.vue';
import LeaveMessages from './LeaveMessages.vue';
import axios from 'axios';
import { markRaw } from 'vue';

const apiUrl = process.env.VUE_APP_API_URL;

export default {
    name: 'HomePage',
    components: {
    },
    data() {
        const language = inject('language');
        return {
            language,
            options: [],
            selectedOption: ['', ''], // Ensure this is initialized as an array
            reservations: [], // Ensure this is initialized as an array
            template: '',
            templateComponents: markRaw({ // Ensure this is reactive
                requestContact: RequestContact,
                proposal: FinalProposal,
                leaveMessages: LeaveMessages,
            }),
            valorDia: '',
            valorDias: [ '0€', '5€', '10€', '15€', '20€', '25€', '30€', '35€', '40€', '45€', '50€', '55€', '60€', '65€', '70€', '75€', '80€', '85€', '90€', '95€', '100€', '105€', '110€', '115€', '120€', '125€', '130€', '135€', '140€', '145€', '150€', '155€', '160€', '165€', '170€', '175€', '180€' ],
            taxaDeTransporte: '',
            taxaDeTransportes: ['0€', '20€', '30€', '40€', '50€', '60€', '70€', '80€'],
            taxaDeLimpeza: '',
            taxaDeLimpezas: ['0€', '5€', '10€', '15€', '20€', '30€', '40€', '50€', '60€', '70€', '80€', '90€', '100€', '110€', '120€'],
            seguro: '',
            seguros: ['0€', '2€', '4€', '6€', '8€', '10€', '12€', '14€', '16€', '18€', '20€'],
            caucao: '',
            caucaos: [ '400€', '500€','600€', '700€', '800€', '900€', '1000€', '1100€', '1200€', '1300€', '1400€', '1500€' , '1600', '1700€', '1800€', '1900€', '2000€'],
        };
    },
    computed: {
        filteredReservations() {
            if (Array.isArray(this.reservations)) {
                console.log("this.reservations is an array 001:", this.reservations);
                // return this.reservations.filter(reservation => reservation.id == this.selectedOption[0]);
                return this.reservations;
            }
            console.error("this.reservations is not an array:", this.reservations);
            return []; // Return an empty array if this.reservations is not an array
        },
        currentComponent() {
            // Return the component corresponding to the selected template
            return this.templateComponents[this.template] || DefaultPage;
        },
    },
    mounted() {
        this.fetchOptions();
    },
    methods: {

        // create somethink like above "refresh_reservations" but now with the name "refresh_reservations_by_language" where i can the body of the request the language
        refresh_reservations_by_language() {
            // axios.post('http://localhost:5000/api/refresh_by_language', {
                // axios.post('https://http://fugaemfamilia.huna.pt/backoffice/api/refresh_by_language', {
                axios.post(`${apiUrl}/refresh_by_language`, {
                        language : this.language
            })
                .then(response => {
                    // Assuming the API response contains an array of reservations
                    this.reservations = response.data;
                    this.fetchOptions();
                })
                .catch(error => {
                    console.error('Error fetching data from the API:', error);
                    // Handle error appropriately, maybe set reservations to an empty array or show an error message
                });
        },

        fetchOptions() {
            axios.get(`${apiUrl}/options`)
                .then(response => {
                    this.options = response.data;
                })
                .catch(error => {
                    console.error("There was an error fetching the options:", error);
                });
        },
        fetchReservations() {
            axios.get(`${apiUrl}/reservation`, {
                params: {
                    name: this.selectedOption[1],
                    id: this.selectedOption[0]
                }
            })
                .then(response => {
                    if (Array.isArray(response.data)) {
                        this.reservations = response.data;
                    } else {
                        console.error('Expected an array for reservations, but got:', response.data);
                        // be cautious and ensure reservations is an array with no space at the end of the string
                        this.reservations = []; // Fallback to an empty array
                    }
                })
                .catch(error => {
                    console.error("There was an error fetching the reservations:", error);
                    this.reservations = []; // Ensure reservations is reset to an empty array on error
                });
        },
        fetchData() {
            this.fetchOptions(); // This is just an example call
        },
    },
};
</script>

<style>
.container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.column1 {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 20px;
}

.column2 {
    display: flex;
    flex-direction: column;
    flex: 4;
    padding: 0 20px;
}


.form-group {
    margin-bottom: 20px;
}

.select-style {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.refresh-button {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
}
</style>