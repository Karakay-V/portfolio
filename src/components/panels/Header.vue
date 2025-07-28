<template>
    <header id="header">
        <Logo :icon="LogoIcon" title="Personal" />

        <nav class="wrapper-navigation_links">
            <div class="underline" :style="underlineStyle"></div>

            <NavLink
                label="About Me"
                to="#about-me"
                :isSelected="selectedLink === '#about-me'"
                @click="handleClick('#about-me', $event)" />

            <NavLink
                label="Skills"
                to="#skills"
                :isSelected="selectedLink === '#skills'"
                @click="handleClick('#skills', $event)" />

            <NavLink
                label="Projects"
                to="#projects"
                :isSelected="selectedLink === '#projects'"
                @click="handleClick('#projects', $event)" />

            <NavLink
                label="Contact me"
                to="#contact-me"
                :isSelected="selectedLink === '#contact-me'"
                @click="handleClick('#contact-me', $event)" />
        </nav>

        <a :href="CV" 
           download="Karakai-V_CV-EN.pdf"
        >
            <Button label="Resume"
                    :icon="DownloadIcon"
                    :iconPosition="ButtonIconPosition.Right" />
        </a>

    </header>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '../UI/Logo.vue';
import LogoIcon from '../../assets/icons/logotype.png';
import Button from '../UI/Button.vue';
import DownloadIcon from '../../assets/icons/download.png';
import { ButtonIconPosition } from '../../types/button-types/button-icon-position';
import NavLink from '../UI/NavLink.vue';
import CV from '../../assets/CV/Karakai-V_CV-EN.pdf';

export default defineComponent({
    name: "Header",
    components: {
        Logo,
        NavLink,
        Button,
    },
    data() {
        return({
            LogoIcon,
            DownloadIcon,
            ButtonIconPosition,
            CV,
            selectedLink: "",
            underlineStyle: {
                left: '0px',
                width: '0px',
                transform: 'scaleX(1)',
            },
        });
    },
    methods: {
        handleClick(link: string, event: MouseEvent) {
            this.selectedLink = link;
            this.updateUnderline(event);
        },
        updateUnderline(event: MouseEvent) {
            const target = event.target as HTMLElement;
            if (!target) return;

            const { offsetLeft, offsetWidth } = target;

            this.underlineStyle = {
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`,
                transform: 'scaleX(1.6)',
            };

            setTimeout(() => {
                this.underlineStyle = {
                    left: `${offsetLeft}px`,
                    width: `${offsetWidth}px`,
                    transform: 'scaleX(1)',
                };
            }, 50);
        },
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/colors" as *;

a {
    text-decoration: none;
}

#header {
    width: calc(100% - 80px - 80px);
    padding: 24px 80px;
    background-color: $primary-white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
}

.wrapper-navigation_links {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;

    .underline {
        position: absolute;
        bottom: 0;
        height: 2px;
        background-color: $primary-neutral;

        transform-origin: center;
        transform: scaleX(1);
        transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 0.3s ease left, 0.3s ease width;
        pointer-events: none;
    }
}
</style>