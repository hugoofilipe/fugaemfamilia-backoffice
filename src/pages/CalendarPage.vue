<template>
    <div>
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

</style>