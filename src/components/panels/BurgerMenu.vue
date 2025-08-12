<template>
    <Slide :closeOnNavigation="true" >


    </Slide>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { Slide }

export default defineComponent({
    name: "BurgerMenu",
    data() {
        return({
            isOpen: false,
        });
    },
});

</script>