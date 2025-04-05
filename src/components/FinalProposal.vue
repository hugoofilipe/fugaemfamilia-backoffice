<template>
    <div>
        <h2>Deixe o seu contacto</h2>
        <div id="element-to-convert" class="content" v-for="reservation in filteredReservations" :key="reservation.nome" ref="textToCopy1">
            <div>Olá {{ reservation.nome }} {{ greeting }}! 😊🙏</div>
            <div>Mais uma vez, ficamos muito felizes em saber do teu/vosso interesse em alugar a nossa autocaravana para virem descobrir Portugal.</div>
        </div>
        <button @click="copyToClipboard('textToCopy1')">Copy to clipboard</button>
    </div>
    <div>
        <h2>Envio de conteúdos</h2>
        <div id="element-to-convert" class="content" v-for="reservation in filteredReservations" :key="reservation.nome" ref="textToCopy3">
            <div>Envio um conjunto de fotos da autocaravana, para que possas ver como é por dentro e por fora.</div>
            <div>-[🖼️ FOTOS] <a href="https://photos.app.goo.gl/ATqw2TmAAy42tQJG7">https://photos.app.goo.gl/ATqw2TmAAy42tQJG7</a></div>
            <div><br></div>
            <div>Aproveito também para te deixar um VIDEO, feito por um dos nossos clientes:</div>
            <div>-[📽️ VíDEO] <a href="https://youtu.be/palAGRCP1jc">https://youtu.be/palAGRCP1jc</a></div>
            <div><br></div>
            <div>Segue a nossa página de INSTAGRAM e onde vamos partilhando destinos e experiências fantásticas:</div>
            <div>-[📷 INSTAGRAM] <a href="https://www.instagram.com/fugaemfamilia/">https://www.instagram.com/fugaemfamilia/</a></div>
        </div>
        <button @click="copyToClipboard('textToCopy3')">Copy to clipboard</button>
    </div>
    <div>
        <h2>Proposta</h2>
        <div id="element-to-convert" class="content" v-for="reservation in filteredReservations" :key="reservation.nome" ref="textToCopy2">
            <div><b>*Proposta*:</b></div>
            <div>O Local de entrega da autocaravana, na {{ reservation.dia_da_semana_da_partida }}, dia {{ reservation.dia_da_partida }} de {{ reservation.mes_da_partida }}, às {{ reservation.hora_da_partida }} horas, seria em {{ reservation.localdepartida }}. 
            </div>
            <div>O Local da chegada, na {{ reservation.dia_da_semana_da_chegada }}, dia {{ reservation.dia_da_chegada }} de {{ reservation.mes_da_chegada }}, às {{ reservation.hora_da_chegada }} horas seria em {{ reservation.localdechegada }}. 
            </div>
            <br>
            <div>Envio-te esta mensagem na sequência da nossa conversa, para partilhar os custos.</div>
            <div>Periodo: De {{ reservation.dia_da_partida }} de {{ reservation.mes_da_partida }} a {{ reservation.dia_da_chegada }} de {{ reservation.mes_da_chegada }} ({{ reservation.periodo_dias }} dias)</div>
            <div>Valor/dia : {{ valorDia }} x {{ reservation.periodo_dias }} dias</div>
            <div>Valor seguro : {{ seguro }} x {{ reservation.periodo_dias }} dias</div>
            <div>Taxa de transporte : {{ taxaDeTransporte }}</div>
            <div>Taxa Limpeza : {{ taxaDeLimpeza }}</div>
            <div>Roupas de cama para 4 pessoas: {{ reservation.extras["Roupas de cama para 4 pessoas"] }}</div>
            <div>Almofadas para 4 pessoas: {{ reservation.extras["Almofadas para 4 pessoas"] }}</div>
            <div>Toalhas para 4 pessoas: {{ reservation.extras["Toalhas para 4 pessoas"] }}</div>
            <div>1 Mesa de campismo e 4 cadeiras de campismo: {{ reservation.extras["1 Mesa de campismo e 4 cadeiras de campismo"] }}</div>
            <div>Cabo de eletricidade: {{ reservation.extras["Cabo de eletricidade"] }}</div>
            <div>Bicicletas elétricas: {{ reservation.extras["Bicicletas elétricas"] }}</div>
            <div>Jogos de tabuleiro: {{ reservation.extras["Jogos de tabuleiro"] }}</div>
            <div>Grelhador a carvão: {{ reservation.extras["Grelhador a carvão"] }}</div>
            <div>Grelhador a gás: {{ reservation.extras["Grelhador a gás"] }}</div>
            <div>Tenda de campismo: {{ reservation.extras["Tenda de campismo"] }}</div>
            <div>Cadeira de criança ou bebé: {{ reservation.extras["Cadeira de criança ou bebé"] }}</div>
            <div>Fitas para pranchas: {{ reservation.extras["Fitas para pranchas"] }}</div>
            <div>Brinde especial supresa: {{ reservation.extras["Brinde especial supresa"] }}</div>
            <div>Caução : {{ caucao }} </div>
            <br>
            <div><b>*Valor total*: </b>({{ valorDia }} x {{ reservation.periodo_dias }}) + ({{ seguro }} x {{
                reservation.periodo_dias }}) + {{  taxaDeTransporte }}
                + {{ taxaDeLimpeza }} + {{ caucao }} = <b> {{ parseInt(valorDia) * reservation.periodo_dias + parseInt(seguro) *
                    reservation.periodo_dias + parseInt(taxaDeTransporte) +
                    parseInt(taxaDeLimpeza) + parseInt(caucao) }}€</b></div>
            <br>
            <div>A caução de {{ caucao }} pode ser transferida no dia da partida, e será devolvida até 5 dias após a entrega da autocaravana.</div>
        </div>

        <button @click="copyToClipboard('textToCopy2')">Copy to clipboard</button>
        <button @click="exportToPDF">Export to PDF</button>
    </div>
    <div>
        <h2>Por fim...</h2>
        <div id="element-to-convert" class="content" v-for="reservation in filteredReservations" :key="reservation.nome" ref="textToCopy5">
            <div>Depois de aceitar a oferta acima, para dar início ao processo também vamos precisamos que nos envie alguns documentos e informações, como a carta de
                condução e do cartão de cidadão. Isso será necessário também para emitir o contrato de aluguer e o seguro. 
            </div>
            <br>
            <div>Assim que for decidida a data e a transferência for realizada fica oficializado a reserva 😊🙏</div>
            <br>
            <div>Estamos entusiasmados em receber-vos e disponíveis para responder a qualquer pergunta adicional que
                possam ter. Muito obrigado pelo contato 🚐💫</div>
        </div>
        <button @click="copyToClipboard('textToCopy5')">Copy to clipboard</button>
        <button @click="exportToPDF">Export to PDF</button>
    </div>

    <div>
        <h2>Envio do formulário de documentos</h2>
        <div>
            <div id="element-to-convert" class="content" v-for="reservation in filteredReservations" :key="reservation.nome" ref="textToCopy6">
                <div>{{ greeting }} {{ reservation.nome }},</div>
                <div>Peço que carregue mo formulário seguinte para que possa preencher com os documentos de que necessitamos:</div>
                <div>- [FORMULÁRIO] <a href="https://forms.gle/UZhghd2xYRCtckdM8">https://forms.gle/UZhghd2xYRCtckdM8</a></div>
            </div>
            <button @click="copyToClipboard('textToCopy6')">Copy to clipboard</button>
        </div>
    </div>

    <div>
        <h2>Após receber documentos. Apresentar pedido de reserva</h2>
        <!-- Olá de novo Irene,
Tive a oportunidade de rever os documentos e está tudo perfeito. Para garantirmos a reserva da autocaravana, apenas pedimos que seja feito o pagamento de 15% do valor total, no montante de 208€. Pode fazê-lo através das seguintes opções:
MB Way: 913 314 803
IBAN: PT50 0023 0000 4554 6015 73994
Assim que o pagamento estiver confirmado, envio-lhe todos os detalhes da reserva e ficamos com tudo assegurado. -->
        <div id="element-to-convert" class="content" v-for="reservation in filteredReservations" :key="reservation.nome" ref="textToCopy4">
            <div>Olá de novo {{ reservation.nome }},</div>
            <div>Tive a oportunidade de rever os documentos e está tudo perfeito.</div>
            <div>Para garantirmos a reserva da autocaravana, apenas pedimos que seja feito o pagamento de 15% do valor total. Pode fazê-lo através das seguintes opções:</div>
            <div>*Valor total*: {{ (parseInt(valorDia) * reservation.periodo_dias + parseInt(seguro) * reservation.periodo_dias + parseInt(taxaDeTransporte) + parseInt(taxaDeLimpeza) + parseInt(caucao)) * 0.15 }}€</div>
            <div>MB Way: 913 314 803</div>
            <div>IBAN: PT50 0023 0000 4554 6015 73994</div>
            <div>Assim que o pagamento estiver confirmado, envio-lhe todos os detalhes da reserva e ficamos com tudo assegurado.</div>
        </div>
        <button @click="copyToClipboard('textToCopy4')">Copy to clipboard</button>
    </div>
        
    <div>
        <HtmlToPdf />
    </div>
</template>

<script>
// lets import component HtmlToPdf
import HtmlToPdf from './HtmlToPdf.vue';
// lets import html2pdf
import html2pdf from 'html2pdf.js';
import { inject } from 'vue';


export default {
    components: {
        HtmlToPdf,
    },
    name: 'FinalProposal',
    props: {
        filteredReservations: {
            type: Array,
            default: () => [],
        },
        valorDia: {
            type: String,
            default: '',
        },
        taxaDeTransporte: {
            type: String,
            default: '',
        },
        taxaDeLimpeza: {
            type: String,
            default: '',
        },
        seguro: {
            type: String,
            default: '',
        },
        caucao: {
            type: String,
            default: '',
        }

    },
    data() {
        const language = inject('language');
        return {
            language,
        };
    },
    methods: {
        async copyToClipboard(refName) {
            try {

                // Text you want to copy
                if (this.$refs[refName] && this.$refs[refName].length > 0) {
                    // Normalize line breaks to ensure only a single line break between texts
                    const textToCopy = Array.from(this.$refs[refName])
                        .map(el => el.innerText.replace(/<b>/g, '*').replace(/<\/b>/g, '*').trim())
                        .join('\n');
                    console.log('Text to copy: ', textToCopy);

                    // Create a temporary textarea element
                    const textarea = document.createElement('textarea');
                    textarea.value = textToCopy;

                    // Set styles to ensure the textarea is not visible
                    textarea.setAttribute('readonly', '');
                    textarea.style.position = 'absolute';
                    textarea.style.left = '-9999px';

                    // Add the textarea to the document
                    document.body.appendChild(textarea);

                    // Select the text inside the textarea
                    textarea.select();

                    try {
                        // Copy the text inside the textarea to the clipboard
                        const successful = document.execCommand('copy');
                        const msg = successful ? 'successful' : 'unsuccessful';
                        console.log('Fallback: Copying text command was ' + msg);
                    } catch (err) {
                        console.error('Fallback: Oops, unable to copy', err);
                    }

                    // Remove the temporary textarea
                    document.body.removeChild(textarea);

                } else {
                    console.log('Elements not found');
                }
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        },
        exportToPDF() {
            html2pdf(document.getElementById("element-to-convert"), {
            margin: 1,
            filename: "generated-pdf.pdf",
            });
        },
    },
    computed: {
        greeting() {
            const hour = new Date().getHours();

            if (hour < 12 && hour >= 6) {
                if (this.language === 'pt') {
                    return 'Bom dia';
                } else {
                    return 'good morning';
                }
            } else if (hour < 19) {
                if (this.language === 'pt') {
                    return 'Boa tarde';
                } else {
                    return 'good afternoon';
                }
            } else {
                if (this.language === 'pt') {
                    return 'Boa noite';
                } else {
                    return 'good night';
                }
            }
        }
    }
};
</script>

<style scss>
.content {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: left;
}
</style>