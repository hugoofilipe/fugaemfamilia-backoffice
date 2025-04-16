<template>
    <div class="roadmap-container">
        <h1>Marcos do Nosso Serviço de Aluguer de Autocaravanas</h1>
        <p>Acompanhe a jornada desde o início até à entrega da sua autocaravana!</p>
        <div class="roadmap">
            <div class="step" v-for="(step, index) in steps" :key="index">
                <div class="icon">
                    <img :src="step.icon" :alt="step.title" />
                </div>
                <div class="content">
                    <h2>{{ step.title }}</h2>
                    <!-- Use v-html to render HTML content -->
                    <p v-html="step.description"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RoadMap",
    data() {
        return {
            steps: [
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Example icon URL
                    title: "Onboarding do Cliente",
                    description: "- Contacto telefónico<br> - Recolha de informações através de formulário<br> - Envio de orçamento<br> - Criação de evento no calendário<br> - Atualização do evento no calendario"
                },

                {
                    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
                    title: "Documentação",
                    description: " - Recolhemos e verificamos todos os documentos necessários<br> -identificação<br> - carta de condução<br> - morada<br> - NIB para devolução da caução<br> - Idade do condutor (tem de ter mais de 25 anos e 2 anos de carta de condução)"
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
                    title: "Confirmação da Reserva",
                    description: "A sua reserva é confirmada após um depósito de 15%. Devido à alta procura, recomendamos reservar com antecedência!"
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                    title: "Documentação prévia à entrega",
                    description: "- Envio de documento welcome<br> - Envio de documento guia de regras e boas práticas<br> - Partilha da aplicação Park4Night<br> - Dicas de viagem e itinerário personalizado" 
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
                    title: "Checklist Pré-Viagem",
                    description: "Garantimos que a autocaravana está totalmente equipada, limpa e pronta para a sua aventura."
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
                    title: "Entrega",
                    description: "Explicamos as funcionalidades da autocaravana, as regras e as melhores práticas para uma viagem segura."
                },
            ]
        };
    }
};
</script>

<style scoped>
.roadmap-container {
    text-align: center;
    padding: 40px 20px;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(to bottom, #f9f9f9, #eaeaea);
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #2c3e50;
    font-size: 2.8rem;
    margin-bottom: 20px;
    font-weight: bold;
}

p {
    color: #7f8c8d;
    font-size: 1.2rem;
    margin-bottom: 40px;
}

.roadmap {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
}

.step {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 15px;
    padding: 20px;
    width: 90%;
    max-width: 900px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.icon {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf0f1;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon img {
    width: 60%;
    height: 60%;
    object-fit: contain;
}

.content {
    text-align: left;
    flex: 1;
}

.content h2 {
    color: #34495e;
    font-size: 1.8rem;
    margin-bottom: 10px;
    font-weight: bold;
}

.content p {
    color: #7f8c8d;
    font-size: 1.1rem;
    line-height: 1.6;
}
</style>