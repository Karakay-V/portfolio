<template>
    <div class="wrapper">
        <img :src="icon" alt="logotype" />
        <h5 class="title">{{ title }}</h5>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logotype from "../../assets/icons/logotype.png";

export default defineComponent({
    name: "Logo",
    props: {
        icon: {
            type: String,
            default: Logotype,
            required: false,
        },
        title: {
            type: String,
            default: "Personal",
            required: false,
        },
    },
});
</script>

<style scoped lang="scss">
    @use "/src/assets/styles/fonts" as *;
    @use "/src/assets/styles/colors" as *;

    .wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        padding: 6px 0;

        img {
            width: auto;
            height: 40px;
        }

        h5 {
            @include sora-font(700);
            @include responsive-font(20, 20, 1440);
            color: $primary-black;
            margin: 0;
        }

        @media (max-width: 768px) {
            gap: 8px;

            img {
                height: 28px;
            }
        }
    }
</style>