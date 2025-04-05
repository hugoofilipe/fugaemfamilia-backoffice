<template>
    <div class="fullscreen-iframe">
        <iframe 
            src="https://v2.finder-portal.com/tabs/map" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    </div>
</template>

<script>
export default {
    name: "GpsPage",
};
</script>

<style scoped>
.fullscreen-iframe {
    position: fixed;
    top: var(--header-height, 100px); /* Adjust this value to match your header height */
    left: 0;
    width: 100%;
    height: calc(100% - var(--header-height, 100px)); /* Subtract header height */
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.fullscreen-iframe iframe {
    width: 100%;
    height: 100%;
    border: none;
}
</style>