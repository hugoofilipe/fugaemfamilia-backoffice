<template>
    <div>
        <h1>Pedido de contacto</h1>
        <form>
            <label >Nome:</label>
            <input type="text" id="name" name="name" v-model="name">
            <label for="language">Lingua:</label> {{ language }}

            <!-- <select id="language" name="language" v-model="language">
                <option value="pt" selected>Português</option>
                <option value="en">Inglês</option>
            </select> -->
        </form>

        <div v-if="language == 'pt'">
            <h2>Olá</h2>
            <div id="element-to-convert" class="content" ref="textToCopy1_3">
                <div>Olá {{ name }} {{ greeting }}! 😊🙏</div>
                <div>Mais uma vez, ficamos muito felizes em saber do teu/vosso interesse em alugar a nossa autocaravana para virem descobrir Portugal.</div>
            </div>
            <button @click="copyToClipboard('textToCopy1_3')">Copy to clipboard</button>
        </div>

        <div v-if="language == 'pt'">
            <h2>Deixa me o teu contacto</h2>
            <div class="content"  ref="textToCopy1">
                <div>Olá {{ name }}, {{ greeting }}! 😊🙏</div>
                <div>Deixa-me o teu contacto, ou liga para o <a href="tel:+351913314803">913314803 📞</a>.</div>
                <div>Desta forma consigo partilhar contigo as informações que precisas.</div>
            </div>
            <button @click="copyToClipboard('textToCopy1')">Copy to clipboard</button>
        </div>

        <div v-if="language == 'pt'">
            <h2>Formulario de contacto</h2>
            <div class="content" ref="textToCopy1_2">
                <div>Se preferir, pode também responder ao questionário que está no link abaixo:</div>
                <div><a href="https://forms.gle/4QwgJfuHq3sFiWTB6">https://forms.gle/4QwgJfuHq3sFiWTB6</a></div>
                <div>Até já 🚐💫</div>
                <div>Hugo Filipe</div> 
            </div>
            <button @click="copyToClipboard('textToCopy1_2')">Copy to clipboard</button>
        </div>

        <div v-if="language == 'en'">
            <h2>Leave your contact</h2>
            <div class="content" ref="textToCopy1">
                <div>{{ greeting }} {{ name }},</div>
                <div>Leave me your contact, or call me at <a href="tel:+351913314803">913314803</a>.</div>
                <div>This way I can share with you the information you need.</div>
                <div>If you prefer, you can also answer the questionnaire that is in the link below:</div>
                <div><a href="https://forms.gle/4QwgJfuHq3sFiWTB6">https://forms.gle/4QwgJfuHq3sFiWTB6</a></div>
                <div>See you soon</div>
                <div>Hugo Filipe</div>
            </div>
            <button @click="copyToClipboard('textToCopy1')">Copy to clipboard</button>
        </div>

        <div v-if="language == 'pt'">
            <h2>Sem datas disponíveis</h2>
            <div class="content" ref="textToCopy2">
                <div>Olá {{ name }}, {{ greeting }} 😊🙏</div>
                <div>Infelizmente não temos, para já, essa data disponível.</div>
                <div>Entretanto vou tratar de saber, junto da minha rede de contactos, quem possa ter uma autocaravana disponível para essas datas.</div>
                <div>Caso venhas a ter interesse noutra data diz-me, ou então podes preencher o formulário que está no link abaixo:</div>
                <div><a href="https://forms.gle/4QwgJfuHq3sFiWTB6">https://forms.gle/4QwgJfuHq3sFiWTB6</a></div>
                <div>Obrigado e até breve🚐💫</div>
                <div>Fuga em Família</div>
            </div>
            <button @click="copyToClipboard('textToCopy2')">Copy to clipboard</button>
        </div>

        <div v-if="language == 'en'">
            <h2>No available dates</h2>
            <div class="content" ref="textToCopy2">
                <div>{{ greeting }} {{ name }},</div>
                <div>Unfortunately we no longer have that date available. Leave me your name and contact, and I will find out who may have a motorhome available. </div>
                <div>If you are interested in another date, you can also answer the questionnaire that is in the link below:</div>
                <div><a href="https://forms.gle/4QwgJfuHq3sFiWTB6">https://forms.gle/4QwgJfuHq3sFiWTB6</a></div>
                <div>Thank you</div>
            </div>
            <button @click="copyToClipboard('textToCopy2')">Copy to clipboard</button>
        </div>
        <div v-if="language == 'pt'">
            <h2>Apresentação da autocaravana</h2>
            <div>
                <div class="content" ref="textToCopy3">
                    <div>{{ greeting }} {{ name }},</div>
                    <div>🚐 Aluguer de Autocaravana Familíar ✨</div>
                    <div>Viaja por Portugal com a nossa autocaravana, perfeita para férias em família ou com amigos.</div>
                    <div>Espaço para 4 pessoas: 1 Cama de casal, 2 camas singulares</div>
                    <div>Conforto: Casa de Banho completa, aquecimento central, cozinha equipada</div>
                    <div>Tecnologia: Eletricidade longa duração 220V, àguas quentes, TV</div>
                    <div>Extras: Toldo lateral, janelas com rede anti-insetos, extintores</div>
                    <div>Opcionais:</div>
                    <div>Cabo de eletricidade</div>
                    <div>Cadeiras e mesa de campismo</div>
                    <div>Roupas de cama e toalhas para 4 pessoas</div>
                    <div>Bicicletas elétricas</div>
                    <div>Jogos de tabuleiro</div>
                    <div>Grelhador, a carvão ou gás</div>
                    <div>Dispositivo Via Verde</div>
                    <div>Tenda de campismo</div>
                    <div>Entra em contacto comigo para reservar ou saber mais.</div>
                    <div>Tel: 913314803</div>
                </div>
                <button @click="copyToClipboard('textToCopy3')">Copy to clipboard</button>
            </div>
        </div>
        <div v-if="language == 'pt'">
            <h2>Envio de conteúdos</h2>
            <div>
                <div class="content" ref="textToCopy3">
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
        </div>
        <div v-if="language == 'pt'">
            <h2>Envio do formulário de documentos</h2>
            <div>
                <div class="content" ref="textToCopy6">
                    <div>{{ greeting }} {{ name }},</div>
                    <div>Peço que carregue mo formulário seguinte para que possa preencher com os documentos de que necessitamos:</div>
                    <div>- [FORMULÁRIO] <a href="https://forms.gle/UZhghd2xYRCtckdM8">https://forms.gle/UZhghd2xYRCtckdM8</a></div>
                </div>
                <button @click="copyToClipboard('textToCopy6')">Copy to clipboard</button>
            </div>
        </div>
        <div v-if="language == 'pt'">
            <h2>Desistiu, mas queremos deixar o nosso contacto</h2>
            <div>
                <div class="content" ref="textToCopy5">
                    <div>{{ greeting }} {{ name }},</div>
                    <div>Se mudar de ideias, ou se precisar de alguma informação, pode sempre entrar em contacto connosco.</div>
                    <br>
                    <div>🚐 Fuga em Família - Aluguer de Autocaravana Familíar ✨</div>
                    <div>Viaja por Portugal com a nossa autocaravana, perfeita para férias em família ou com amigos.</div>
                    <div>Espaço para 4 pessoas: 1 Cama de casal, 2 camas singulares</div>
                    <div>Conforto: Casa de Banho completa, aquecimento central, cozinha equipada</div>
                    <div>Tecnologia: Eletricidade longa duração 220V, àguas quentes, TV</div>
                    <div>Extras: Toldo lateral, janelas com rede anti-insetos, extintores</div>
                    <div>Opcionais:</div>
                    <div>Cabo de eletricidade</div>
                    <div>Cadeiras e mesa de campismo</div>
                    <div>Roupas de cama e toalhas para 4 pessoas</div>
                    <div>Bicicletas elétricas</div>
                    <div>Jogos de tabuleiro</div>
                    <div>Grelhador, a carvão ou gás</div>
                    <div>Dispositivo Via Verde</div>
                    <div>Tenda de campismo</div>
                    <div>Tel: 913314803</div>
                </div>
                <button @click="copyToClipboard('textToCopy5')">Copy to clipboard</button>
            </div> 
        </div>  
    </div>
</template>

<script>
import { inject } from 'vue';
export default {
    name: 'RequestContact',
    data() {
        const language = inject('language');
        return {
            name: '',
            language
        };
    },
    computed: {
        greeting() {
            const hour = new Date().getHours();

            if (hour < 12 && hour >= 6) {
                if (this.language === 'pt') {
                    return 'bom dia';
                } else {
                    return 'good morning';
                }
            } else if (hour < 19) {
                if (this.language === 'pt') {
                    return 'boa tarde';
                } else {
                    return 'good afternoon';
                }
            } else {
                if (this.language === 'pt') {
                    return 'boa noite';
                } else {
                    return 'good night';
                }
            }
        }
    },
    methods: {
        async copyToClipboard(refName) {
            try {
                const textToCopy = this.$refs[refName].innerText;
                console.log('Text to copy: ', textToCopy);
                // Text you want to copy
                if (textToCopy ) {
                    // Normalize line breaks to ensure only a single line break between texts
                    console.log('Text to copy1: ', textToCopy);

                    // Create a temporary textarea element
                    const textarea = document.createElement('textarea');
                    textarea.value = textToCopy ;

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
    },

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