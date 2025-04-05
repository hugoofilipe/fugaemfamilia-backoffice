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
            <h2>Devolução da Caução</h2>
            <div class="content" ref="textToCopy1">
                <div>{{ greeting }} {{ name }},</div>
                <div>Tranferência da caução concluída com sucesso. O valor de {{ amount }}€ foi transferido para a conta com o IBAN: {{ iban }}</div>
                <div>Se tiveres alguma dúvida, entrem em contacto comigo.</div>
                <div>Mais uma vez, espero que tenham gostado da vossa viagem. Até à próxima.</div>

                <div>PS: Se tiveres um minuto, agradeço o teu feedback no link abaixo:</div>
                <div><a href="https://g.page/r/Cf8SYfD6jTRmEB0/review">https://g.page/r/Cf8SYfD6jTRmEB0/review</a></div>
                <div>Obrigado</div>
            </div>
            <button @click="copyToClipboard('textToCopy1')">Copy to clipboard</button>
        </div>
        <div>
            <h2>Viagem a chegar ao fim</h2>
            <div class="content" ref="textToCopy2">
                <div>Olá {{ name }},</div>
                <div>Esperamos encontrar-vos bem e a desfrutar ao máximo! 🙏🚐.</div>
                <div> Agora que as férias estão quase a terminar, desejamos de coração que tenham sido fantásticas e cheias de bons momentos! 🚐✨</div>
                <div>Ficaríamos muito felizes em saber como correu tudo e, se possível, adoraríamos que partilhassem a vossa experiência connosco no Google:   </div>    
                <div><a href="https://g.page/r/Cf8SYfD6jTRmEB0/review">https://g.page/r/Cf8SYfD6jTRmEB0/review</a></div>
                <br>
                <div>A vossa opinião é extremamente valiosa para nós e os vossos comentários fazem toda a diferença. 😊 </div>
                <div>Muito obrigado pelo vosso tempo e carinho! 🙏</div>
            </div>
            <button @click="copyToClipboard('textToCopy2')">Copy to clipboard</button>
        </div>
        <div>
            <h2>Verificação concluída</h2>
            <div class="content" ref="textToCopy3">
                <div>Olá {{ name }},</div>
                <div>Espero que tenham tido uma boa viagem de regresso a casa.</div>
                <div>Quero agradecer a vossa preferência e confiança.</div>
                <div>Se tiverem alguma sugestão ou feedback, por favor, partilhem connosco.</div>
                <div>Espero que tenham gostado da vossa viagem e que tenham boas recordações.</div>
                <div>Até à próxima!</div>
            </div>
            <button @click="copyToClipboard('textToCopy3')">Copy to clipboard</button>
            <button @click="exportToPDF">Export to PDF</button>
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