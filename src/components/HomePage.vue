<template>
    <div id="app">
        <div class="container">
            <div class="column1">
                <button @click="refresh_reservations_by_language" class="refresh-button">Refresh</button>
                <div class="form-group">
                    <p>Selecione o template</p>
                    <select v-model="template">
                        <!-- <option disabled value="">Respostas</option> -->
                        <option value="requestContact">Pedido de contactos</option>
                        <option value="proposal">Proposta final</option>
                        <option value="leaveMessages">Mensagens de despedida</option>
                        <option value="faqs">FAQs</option>
                    </select>
                    <p>Selecione o cliente</p>
                    <select v-model="selectedOption" @change="fetchReservations">
                        <option disabled value="">Cliente</option>
                        <option v-for="option in options" :key="option" :value="option" >{{ option[1] }}</option>
                    </select>
                    <div>
                        <p>Selecione o valor do dia</p>
                        <select v-model="valorDia">
                            <option disabled value="">Valor Dia</option>
                            <option v-for="valorDia in valorDias" :key="valorDia">{{ valorDia }}</option>
                        </select>
                        <!-- button "low season" to set the value of valorDia to 80€ -->
                        <button @click="valorDia = low_season" style="padding: 5px 5px; border: none; border-radius: 5px; margin:0px 5px;">
                            <span style="font-size: 16px;">Baixa</span>
                        </button>
                        <!-- button "mid season" to set the value of valorDia to 100€ -->
                        <button @click="valorDia = mid_season" style="padding: 5px 5px; border: none; border-radius: 5px; margin:0px 5px;">
                            <span style="font-size: 16px;">Media</span>
                        </button>
                        <!-- button "high season" to set the value of valorDia to 120€ -->
                        <button @click="valorDia = high_season" style="padding: 5px 5px; border: none; border-radius: 5px; margin:0px 5px;">
                            <span style="font-size: 16px;">Alta</span>
                        </button>
                    </div>
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
                    <p>Selecione a taxa de higienização</p>
                    <select v-model="taxaDeLimpeza">
                        <option disable value="">Taxa de higienização</option>
                        <option v-for="taxaDeLimpeza in taxaDeLimpezas" :key="taxaDeLimpeza" :value="taxaDeLimpeza">{{ taxaDeLimpeza }}
                        </option>
                    </select>
                    <p>Selecione a km</p>
                    <select v-model="km">
                        <option disable value="">Km</option>
                        <option v-for="km in kms" :key="km" :value="km">{{ km }}</option>
                    </select>
                    <!-- lets create paragraph called "+ 7 dias" that will add a discount of 10% to the value of valorDia -->
                    <p>Descontos</p>
                    <p style="font-size: 16px; font-weight: bold;">Se o cliente reservar + 7 dias, tem um desconto de 10% ao valor do dia -> {{ parseInt(valorDia) * 0.9 }}€</p>
                    <div v-for="reservation in filteredReservations" :key="reservation.id" style="margin-top: 20px;">
                        <h3>Dados do cliente</h3>
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
                                <td>{{ reservation.phone == 'None' ? '--' : reservation.phone }}
                                    <!-- button to save concatct on contatcs.google -->
                                    <button @click="addContact(reservation.phone, reservation.nome)" style="padding: 5px 5px; border: none; border-radius: 5px; margin:0px 5px;">
                                        <span style="font-size: 16px;">Adicionar contacto</span>
                                    </button>
                                </td>
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
                                <th>Condutor</th>
                                <td>{{ reservation.condutor }}</td>
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
                <div style="margin: 50px 0px;">
                    <button @click="event_calendar" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px;">
                        <span style="font-size: 16px;">Add to Calendar</span>
                    </button>
                    <button @click="import_data_to_create_event" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin-left: 10px;">
                        <span style="font-size: 16px;">Importar</span>
                    </button>
                    <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <label for="first_event_date" style="font-weight: bold;">Primeiro dia:</label>
                            <input 
                                type="date" 
                                id="first_event_date" 
                                name="first_event_date" 
                                v-model="firstEventDate" 
                                style="padding: 5px; border: 1px solid #ccc; border-radius: 4px;"
                            >   
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <label for="last_event_date" style="font-weight: bold;">Último dia:</label>
                            <input 
                                type="date" 
                                id="last_event_date" 
                                name="last_event_date" 
                                v-model="lastEventDate"
                                style="padding: 5px; border: 1px solid #ccc; border-radius: 4px;"
                            >
                            <!-- create here a tolltip with the text "Ao último dia é adicionado +1 dia, devido a Google Calendar" -->
                            <span class="tooltip">
                                &nbsp;i&nbsp;&nbsp;&nbsp;
                                <span class="tooltip-text">Ao último dia é adicionado +1 dia, devido a Google Calendar</span>
                            </span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <label for="event_name" style="font-weight: bold;">Nome da pessoa:</label>
                            <input 
                                type="text" 
                                id="event_name" 
                                name="event_name" 
                                v-model="eventName"
                                style="padding: 5px; border: 1px solid #ccc; border-radius: 4px;"
                            >
                        </div>
                    </div>
                </div>
                <iframe src="https://calendar.google.com/calendar/embed?src=52bf317a45c856aa26f8622b2a08fb0c407dfb7549336017e29d9299b19cda99%40group.calendar.google.com&ctz=Europe%2FLisbon" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>   
            </div>
            <div class="column2">
                <!-- Render the current component based on the selected template with fileredReservations as a prop -->
                <component :is="currentComponent" :filteredReservations="filteredReservations" :valorDia="valorDia" :taxaDeTransporte="taxaDeTransporte"
                    :taxaDeLimpeza="taxaDeLimpeza" :caucao="caucao" :seguro="seguro" :limite_km="km" @change="fetchData" />
            </div>
        </div>
        <div>
            <p>Version: {{ version }}</p>
        </div>
    </div>
</template>
<script>
import { inject } from 'vue';
import DefaultPage from './DefaultPage.vue';
import FinalProposal from './FinalProposal.vue';
import RequestContact from './RequestContact.vue';
import LeaveMessages from './LeaveMessages.vue';
import FaqsMessages from './FaqsMessages.vue';
import axios from 'axios';
import { markRaw } from 'vue';
import { version } from '../../package.json';
import { ref } from 'vue';


const apiUrl = process.env.VUE_APP_API_URL;

export default {
    name: 'HomePage',
    components: {
    },
    data() {
        const firstEventDate = ref('2025-02-01');
        const lastEventDate = ref('2025-02-28');
        const eventName = ref('');
        const language = inject('language');
        const low_season = ref('80€');
        const mid_season = ref('100€');
        const high_season = ref('120€');
        return {
            language,
            version,
            options: [],
            selectedOption: ['', ''], // Ensure this is initialized as an array
            reservations: [], // Ensure this is initialized as an array
            template: '',
            templateComponents: markRaw({ // Ensure this is reactive
                requestContact: RequestContact,
                proposal: FinalProposal,
                leaveMessages: LeaveMessages,
                faqs: FaqsMessages,
            }),
            valorDia: '',
            valorDias: [ '0€', '5€', '10€', '15€', '20€', '25€', '30€', '35€', '40€', '45€', '50€', '55€', '60€', '65€', '70€', '75€', '80€', '85€', '90€', '95€', '100€', '105€', '110€', '115€', '120€', '125€', '130€', '135€', '140€', '145€', '150€', '155€', '160€', '165€', '170€', '175€', '180€' ],
            taxaDeTransporte: '',
            taxaDeTransportes: ['0€', '20€', '30€', '40€', '50€', '60€', '70€', '80€'],
            taxaDeLimpeza: '',
            taxaDeLimpezas: ['0€', '5€', '10€', '15€', '20€', '30€', '40€', '50€', '60€', '70€', '80€', '90€', '100€', '110€', '120€'],
            seguro: '',
            seguros: ['0€', '2€', '4€', '6€', '8€', '10€', '12€', '14€', '16€', '18€', '20€', '22€', '24€', '26€', '28€', '30€', '32€', '34€', '36€', '38€', '40€', '42€', '44€', '46€', '48€', '50€', '52€', '54€', '56€', '58€', '60€', '62€', '64€', '66€', '68€', '70€', '72€', '74€', '76€', '78€', '80€', '82€', '84€', '86€', '88€', '90€', '92€', '94€', '96€', '98€', '100€'],
            caucao: '',
            caucaos: [ '400€', '500€','600€', '700€', '800€', '900€', '1000€', '1100€', '1200€', '1300€', '1400€', '1500€' , '1600', '1700€', '1800€', '1900€', '2000€'],
            km: '',
            kms: ['0', '100', '200', '300', '400'],
            firstEventDate,
            lastEventDate,
            eventName,
            low_season,
            mid_season,
            high_season,
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
        event_calendar() {
            // Format the dates to YYYYMMDDTHHMMSS
            const startDate = this.firstEventDate.replace(/-/g, '');
            const endDate = this.lastEventDate.replace(/-/g, '');
            const eventName = this.eventName.replace(/ /g, '+');
            const calendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?src=52bf317a45c856aa26f8622b2a08fb0c407dfb7549336017e29d9299b19cda99@group.calendar.google.com&text=${eventName}&details=COLAR+A+PROPOSTA&dates=${startDate}/${endDate}&ctz=Lisbon`;
            window.open(calendarUrl, '_blank');
        },
        import_data_to_create_event(){
            this.firstEventDate = this.reservations[0]?.data_de_partida 
                ? new Date(this.reservations[0].data_de_partida).toISOString().split('T')[0]
                : 'DATA DE PARTIDA'
            this.lastEventDate = this.reservations[0]?.data_de_chegada 
                ? new Date(new Date(this.reservations[0].data_de_chegada).setDate(new Date(this.reservations[0].data_de_chegada).getDate() + 1)).toISOString().split('T')[0]
                : 'DATA DE CHEGADA'
            this.eventName = this.reservations[0]?.nome || 'NOME DA PESSOA';
        },
        addContact(phone, name) {
            const contact = {
                name: name || 'Nome Desconhecido',
                phone: phone,
            };
            console.log("Contact to be added:", contact);
            // Open the Google Contacts URL with the contact information
            // const url = `https://contacts.google.com/new?phone={$contact.phone}&givenname={contact.name}&familyname=Autocaravana+Aluguer`;
            const url = `https://contacts.google.com/new?phone=${contact.phone}&givenname=${contact.name}&familyname=Autocaravana+Aluguer`;
            window.open(url, '_blank');
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
.tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.tooltip .tooltip-text {
    visibility: hidden;
    width: 220px; /* Adjust width as needed */
    background-color: #4CAF50; /* Green background */
    color: #fff; /* White text */
    text-align: center;
    border-radius: 5px;
    padding: 8px;
    position: absolute;
    z-index: 1;
    bottom: 125%; /* Position above the icon */
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 14px;
}

.tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
}
</style>