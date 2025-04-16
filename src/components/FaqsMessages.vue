<template>
    <div>
        <h1>Pedido de contacto</h1>
        <form>
            <label >Nome:</label>
            <input type="text" id="name" name="name" v-model="name">
            <label for="language">Lingua:</label> {{ language }}
            <input type="number" id="amount" name="amount" v-model="amount" placeholder="Valor">
            <input type="text" id="iban" name="iban" v-model="iban" placeholder="IBAN">
        </form>
        <div>
            <h2>Esclarecimento sobre taxa de limpeza</h2>
            <div class="content" ref="textToCopy1">
                <div>Olá {{ name }} {{ greeting }} </div>
                <div>Em relação à taxa de higienização de 30€, isto refere-se a um serviço contratado a empresa especializada sempre que existe um aluguer, que assegura uma limpeza técnica e sanitária da autocaravana. Este processo é essencial para que nós consiga-mos garantir um ambiente seguro, limpo e confortável.</div>
                <div>No entanto, esta taxa não substitui a responsabilidade do locatário de devolver a autocaravana nas mesmas condições de limpeza e organização em que foi entregue.</div>
                <div>Se tiveres alguma dúvida, entrem em contacto comigo.</div>
            </div>
            <button @click="copyToClipboard('textToCopy1')">Copy to clipboard</button>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';
export default {
    name: 'FaqsMessages',
    data() {
        const language = inject('language');
        return {
            name: '',
            language,
            amount: '',
            iban: '',
        };
    },
    computed: {
        greeting() {
            const hour = new Date().getHours();

            if (hour < 12 && hour >= 6) {
                if (this.language === 'pt') {
                    return 'Bom dia';
                } else {
                    return 'Good morning';
                }
            } else if (hour < 19) {
                if (this.language === 'pt') {
                    return 'Boa tarde';
                } else {
                    return 'Good afternoon';
                }
            } else {
                if (this.language === 'pt') {
                    return 'Boa noite';
                } else {
                    return 'Good night';
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