<template>
    <div :class="`wrapper ${theme === Theme.Dark ? 'theme-dark' : 'theme-light'}`">
        <div class="container-icon">
            <img :src="icon" :alt="`Skill: ${name}`" />
        </div>
        <h5 class="skill-name">{{ name }}</h5>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Theme } from '../../types/theme';

export default defineComponent({
    name: "Skill",
    data() {
        return({
            Theme,
        });
    },
    props: {
        icon: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        theme: {
            type: String,
            required: true,
            validator: (value: string) =>
                (Object.values(Theme) as string[]).includes(value),
        },
    },
});
</script>

<style lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/image";
@use "/src/assets/styles/colors" as *;

$maxWrapperWidth: calc(186px - 24px - 24px);
$maxWrapperHeight: calc(186px - 37px - 37px);

.wrapper {
    border: 2px solid $primary-black;
    border-radius: 4px;
    padding: 37px 24px;
    margin: 5px;
    
    width: $maxWrapperWidth;
    max-width: $maxWrapperWidth;

    height: $maxWrapperHeight;
    max-height: $maxWrapperHeight;

    .container-icon {
        margin: 0;
        padding: 0 41px;
        
        img {
            @include image.prevent-manipulations;
            transition: 0.3s ease all;
            width: 56px;
            height: 56px;
            filter: invert(0);
        }
    }

    .skill-name {
        @include fonts.prevent-selecting;
        transition: 0.3s ease all;
        margin: 32px 0 0 0;
        @include fonts.sora-font(700);
        @include fonts.responsive-font(20, 20, 1440);
        @include fonts.hide-overflowed-text-multiline(2);
        text-align: center;
    }

    &.theme-light {
        background-color: $primary-white;
        
        .skill-name {
            color: $primary-black;    
        }
    }

    &.theme-dark {
        background-color: $primary-black;

        .container-icon img {
            filter: invert(1);
        }

        .skill-name {
            color: $primary-white;    
        }
    }
}
</style>