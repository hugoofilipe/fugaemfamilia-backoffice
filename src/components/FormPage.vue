<template>
    <div>
        <div class="container">
            <div class="column">
                <div>
                    <button @click="copyUrl">Share this link</button>
                </div>
                <div>
                    <button @click="openForm">Pre-fill responses, then click "Get link"</button>
                </div>
            </div>
            <div class="column">
                <div>
                    <button @click="openForm_onboarding_autocaravana">Formulario onboarding_autocaravana</button>
                    <button @click="openForm_onboarding_autocaravana_spreadsheet">Formulario onboarding_autocaravana_spreadsheet</button>
                </div>
                <div>
                    <button @click="openForm_onboarding_autocaravana_EN">Formulario onboarding_autocaravana_EN</button>
                    <button @click="openForm_onboarding_autocaravana_EN_spreadsheet">Formulario onboarding_autocaravana_EN_spreadsheet</button>
                </div>
                <div>
                    <button @click="openForm_onboarding_documents_autocaravana">Formulario onboarding_documents_autocaravana</button>
                    <button @click="openForm_onboarding_documents_autocaravana_spreadsheet">Formulario onboarding_documents_autocaravana_spreadsheet</button>
                </div>
            </div>
        </div>
        <div class="container_column">
            <div class="column1">
                <h2>Script ao telefone.</h2>
                
                <h3>Tem perguntas?</h3>
                <p>LVLL (Listen - Validate - Level - Lead)</p>
                
                <h3>Serviço</h3>
                <p>Estou sempre disponível para responder a todas as suas perguntas.</p>
                <p>Tenho total disponibilidade para lhe mostrar a autocaravana.</p>
                <p>Deixo convosco: Via verde, duas bilhas de gás, conta premium no Park4Night</p>
                
                <h3>Cuidados</h3>
                <p>Trata-se de uma autocaravana familiar, portanto peço que tenham máximo cuidado com ela.</p>
                <p>Condução com um cuidado redobrado.</p>
                <p>Partilho na autocaravana um documento de regras e boas práticas durante a estadia.</p>
                <p>Obrigatório devolver a autocaravana no estado exatamente como foi entregue. (está descrito nas “regras de utilização e cuidados”)</p>
                
                <h3>Documentação</h3>
                <p>No dia, serão assinados os contratos, entregues as condições gerais e apólice de seguro.</p>
                <p>Documentação necessária: Cartão de cidadão, carta de condução, Nib para a devolver a caução, morada para o seguro. </p>
                <p>O condutor tem de ter mais de 25 anos e 2 anos de carta de condução.</p>

                <h3>Reserva</h3>
                <p>A reserva só se faz pagando um sinal (15%), chamo atenção que devido á elevada procura, sugiro fortemente que o façam assim que decidam.</p>
                <br>
                <br>
                <h2>Calendário de Reservas</h2>
                <iframe src="https://calendar.google.com/calendar/embed?src=52bf317a45c856aa26f8622b2a08fb0c407dfb7549336017e29d9299b19cda99%40group.calendar.google.com&ctz=Europe%2FLisbon" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
            <div class="column2">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfuNkT_xxISDP79cbIhu5jPrcW--YF5M5hpq4oI9YBilaLTIw/viewform?embedded=true"
                    width="840" height="5826" frameborder="0" marginheight="0" marginwidth="0">Loading…
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';
export default {
    name: 'FormPage',
    setup() {
        const language = inject('language');
        return { language };
    },
    methods: {
        async copyUrl() {
            try {
                // Text you want to copy
                const textToCopy = 'https://forms.gle/4QwgJfuHq3sFiWTB6';
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
                textarea.setSelectionRange(0, 99999); /* For mobile devices */

                // Copy the selected text
                document.execCommand('copy');

                // Remove the textarea from the document
                document.body.removeChild(textarea);

            } catch (error) {
                console.error('Error copying URL to clipboard: ', error);
                alert('Error copying URL to clipboard');
            }
        },
        openForm() {
            window.open('https://docs.google.com/forms/d/1WIpYhvo5NiiHBCsy_MjumIESrLZvfwKR-UZuKMgEu5k/prefill', '_blank');
        },
        openForm_onboarding_autocaravana() {
            window.open('https://docs.google.com/forms/d/1WIpYhvo5NiiHBCsy_MjumIESrLZvfwKR-UZuKMgEu5k/edit', '_blank');
        },
        openForm_onboarding_autocaravana_spreadsheet() {
            window.open('https://docs.google.com/spreadsheets/d/1cVQKa3lvpoQPmtRyRcJxB8CAjfkSEuSKOi8hLWH6Ekk', '_blank');
        },
        openForm_onboarding_autocaravana_EN() {
            window.open('https://docs.google.com/forms/d/1CYao4KUSZ7fbfY_qqmBKRdtPDROl5cIVBmP86bfYBN8/edit', '_blank');
        },
        openForm_onboarding_autocaravana_EN_spreadsheet() {
            window.open('https://docs.google.com/spreadsheets/d/1IBEKqCZdHL154-SQcV-QeHwKL7a7Z01h-45falR8uHo', '_blank');
        },
        openForm_onboarding_documents_autocaravana() {
            window.open('https://docs.google.com/forms/d/1V-Zqw4QWCMG4CnguBoXMkfjqSoK0tcznj_0hnP8cXkY/edit', '_blank'); 
        },
        openForm_onboarding_documents_autocaravana_spreadsheet() {
            window.open('https://docs.google.com/spreadsheets/d/1DBmHaNkK8zxtwA62-gxNUPs_DF9OWVbr6tTQR5d_Os4', '_blank');
        },
        event_calendar() {
            const calendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?src=52bf317a45c856aa26f8622b2a08fb0c407dfb7549336017e29d9299b19cda99@group.calendar.google.com&text=Example+Google+Calendar+Event&details=More+help+see:+https://support.google.com/calendar/thread/81344786&dates=${formattedDate}/${formattedDate}&ctz=Lisbon`;
            window.open(calendarUrl, '_blank');
        },

    },
};
</script>

<style>
.container_column {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.column1 {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 20px;
    min-width: 40%
}

.column2 {
    display: flex;
    flex-direction: column;
    flex: 4;
    padding: 0 20px;
}

iframe {
    border: 0; /* Removes the default iframe border */
    width: 100%;
}

.container {
    display: flex;
    justify-content: space-between;
}

.column {
    flex: 1;
    margin-right: 20px;
}

</style>
