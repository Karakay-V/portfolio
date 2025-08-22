<template>
    <div id="projects" class="inner-projects_section">
        <div data-aos="fade-down" class="wrapper-title">
            <h2 class="title">
                <span class="display-regular">My</span>
                <span class="display-extra_bold"> Projects</span>
            </h2>
        </div>

        <div class="wrapper-projects_section">

            <div :data-aos="handleAOS('fade-left', 'fade-up')">
                <Project    :screenshoot="ProjectScreenshoot1"
                            number="01"
                            name="Crypto Screener Application"
                            description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
                            link="https://github.com/"
                            sourceLink="https://github.com/" />
            </div>

            <div :data-aos="handleAOS('fade-right', 'fade-up')">        
                <Project    :screenshoot="ProjectScreenshoot2"
                            number="02"
                            name="Euphoria - Ecommerce (Apparels) Website Template"
                            description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
when an unknown printer took a galley of type and scrambled it to specimen book."
                            link="https://github.com/"
                            sourceLink="https://github.com/"
                            :align="Align.Right" />
            </div>

            <div :data-aos="handleAOS('fade-left', 'fade-up')">
                <Project    :screenshoot="ProjectScreenshoot3"
                            number="03"
                            name="Blog Website Template"
                            description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
                            link="https://github.com/"
                            sourceLink="https://github.com/" />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Project from '../UI/Project.vue';
import ProjectScreenshoot1 from '../../assets/projects/project-1.png';
import ProjectScreenshoot2 from '../../assets/projects/project-2.png';
import ProjectScreenshoot3 from '../../assets/projects/project-3.png';
import { Align } from '../../types/align';
import { useResponsiveAos } from '../../utils/aosHelper';

export default defineComponent({
    name: "MyProjects",
    data() {
        return({
            Align,
            ProjectScreenshoot1,
            ProjectScreenshoot2,
            ProjectScreenshoot3,
        });
    },
    components: {
        Project,
    },
    methods: {
        handleAOS(defaultAnimation: string, verticalAnimation: string) {
            return useResponsiveAos(defaultAnimation, verticalAnimation).value;
        },
    },

});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

.inner-projects_section {
    background: $primary-black;
    padding: 60px 80px;

    @media (max-width: 1260px) {
        padding: 40px 16px;
    }
}

.wrapper-title {
    padding: 20px 0;

    h2.title {
        margin: 0;
        padding: 0;
        text-align: center;
        white-space: nowrap;
        @include fonts.responsive-font(48, 28, 1440);
        @include fonts.prevent-selecting;
        color: $primary-white;
        
        span {
            &.display-regular {
                @include fonts.sora-font(400);        
            }

            &.display-extra_bold {
                @include fonts.sora-font(800);
            }
        }
    }
}

.wrapper-projects_section {
    margin-top: 20px;
    padding: 0 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 1260px) {
        padding: 0;
        gap: 28px;
    }
}

</style>