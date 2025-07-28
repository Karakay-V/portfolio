<template>
    <div class="wrapper">
        <button :class="`${isSelected ? 'selected' : ''}`" 
            v-scroll-to="{
                element: to,
                duration: 1200,
                easing: 'easeInOutCubic',
                offset: -60
            }"
        >
            {{ label }}
        </button>
    </div>
</template>

<script scoped lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "NavLink",
    props: {
        to: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        isSelected: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
});
</script>

<style lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;

.wrapper {
    padding: 5px 0;
    
    button {
        border: none;
        outline: none;
        margin: 0;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
        transition: 0.3s ease color;
        @include fonts.sora-font(600);
        @include fonts.responsive-font(20, 20, 1440);
        color: $primary-black;

        &:hover {
            color: $primary-neutral;
        }

        &.selected {
            color: $primary-neutral;
        }
    }
}
</style>