<template>
    <div id="skills" class="inner-skills_section">
        <div data-aos="fade-down" class="wrapper-title">
            <h2 class="title">
                <span class="display-regular">My</span>
                <span class="display-extra_bold"> Skills</span>
            </h2>
        </div>

        <div data-aos="fade-up" class="wrapper-skills_section">

            <Skill name="GitHub" :icon="GitHubIcon" :is-focused="false" />
            <Skill name="GitHub" :icon="GitHubIcon" :is-focused="false" />
            <Skill name="GitHub" :icon="GitHubIcon" :is-focused="false" />
            <Skill name="GitHub" :icon="GitHubIcon" :is-focused="false" />
            <Skill name="GitHub" :icon="GitHubIcon" :is-focused="false" />

            <Skill name="GitHub" :icon="GitHubIcon" :is-focused="false" />
            <Skill name="GitHub" :icon="GitHubIcon" :is-focused="false" />
            <Skill name="GitHub" :icon="GitHubIcon" :is-focused="false" />
            <Skill name="GitHub" :icon="GitHubIcon" :is-focused="false" />
            <Skill name="GitHub" :icon="GitHubIcon" :is-focused="false" />

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Skill from '../UI/Skill.vue';
import GitHubIcon from '../../assets/icons/github.png';

export default defineComponent({
    name: "SkillsSection",
    data() {
        return({
            GitHubIcon,
        });
    },
    components: {
        Skill,
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

.inner-skills_section {
    padding: 60px 80px;

    @media (max-width: 1260px) {
        padding: 40px 16px;
    }

    @media (max-width: 390px) {
        padding: 40px 0;   
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

.wrapper-skills_section {
    margin-top: 20px;
    padding: 20px 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(196px, 196px));
    gap: 40px 71px;
    justify-content: center;

    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(165px, 165px));
        padding: 0;
        gap: 20px;    
    }
}

</style>