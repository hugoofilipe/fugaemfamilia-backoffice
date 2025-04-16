<template>
    <div>
        <!-- A table with one row only, with 12 months, each with the name of the month -->
        <div class="row">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Janeiro</th>
                        <th>Fevereiro</th>
                        <th>Março</th>
                        <th>Abril</th>
                        <th>Maio</th>
                        <th>Junho</th>
                        <th>Julho</th>
                        <th>Agosto</th>
                        <th>Setembro</th>
                        <th>Outubro</th>
                        <th>Novembro</th>
                        <th>Dezembro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="low-season">Época BAIXA</td>
                        <td class="low-season">Época BAIXA</td>
                        <td class="low-season">Época BAIXA</td>
                        <td class="high-season">Época ALTA</td>
                        <td class="medium-season">Época MÉDIA</td>
                        <td class="high-season">Época ALTA</td>
                        <td class="high-season">Época ALTA</td>
                        <td class="high-season">Época ALTA</td>
                        <td class="high-season">Época ALTA</td>
                        <td class="high-season">Época ALTA</td>
                        <td class="low-season">Época BAIXA</td>
                        <td class="low-season">Época BAIXA</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- two center rows, each with two small columns -->
        <div class="row">
            <div class="col-sm-6" style="text-align: right;">
                <span style="display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: #0b8043;"></span>
            </div>
            <div class="col-sm-6">
                <span class="caption">Confirmado</span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 " style="text-align: right;">
                <span style="display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: #3f51b5;"></span>
            </div>
            <div class="col-sm-6">
                <span class="caption">Por confirmar</span>
            </div>
        </div>
        <div>
            <iframe src="https://calendar.google.com/calendar/embed?src=52bf317a45c856aa26f8622b2a08fb0c407dfb7549336017e29d9299b19cda99%40group.calendar.google.com&ctz=Europe%2FLisbon" style="border: 0" width="800" height="1000" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
h1 {
    text-align: center;
    color: #333;
}
.row {
    display: flex;
    justify-content: space-around;
    padding: 1px;
        /* align vertical center */    
    align-items: center;
}
.col-sm-6 {
    width: 50%;
    padding: 5px;
}

.caption {
    font-size: 20px;
    font-weight: bold;
}

/* General table styling */
.styled-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1rem;
    font-family: 'Arial', sans-serif;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

/* Table header styling */
.styled-table thead tr {
    background-color: #4CAF50;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
}

/* Table body styling */
.styled-table tbody tr {
    background-color: #f9f9f9;
    border-bottom: 1px solid #dddddd;
}

/* Alternating row colors */
.styled-table tbody tr:nth-of-type(even) {
    background-color: #f1f1f1;
}

/* Hover effect for rows */
.styled-table tbody tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
}

/* Cell padding */
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

/* Border for table cells */
.styled-table th,
.styled-table td {
    border: 1px solid #dddddd;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
    .styled-table {
        font-size: 0.9rem;
    }
}
/* Season color coding */
.low-season {
    background-color: #0b8043;
    color: white;
}
.medium-season {
    background-color: #3f51b5;
    color: white;
}
.high-season {
    background-color: #f44336;
    color: white;
}
</style>