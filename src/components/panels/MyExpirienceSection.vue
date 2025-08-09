<template>
    <div class="inner-expirience_section">
        <div data-aos="fade-down" class="wrapper-title">
            <h2 class="title">
                <span class="display-regular">My</span>
                <span class="display-extra_bold"> Experience</span>
            </h2>
        </div>

        <div class="wrapper-expirience_section">

            <div data-aos="fade-up">
                <Experience :icon="GoogleIcon"
                            position="Lead Software Engineer at Google"
                            description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
                            period="Nov 2019 - Present" />
            </div>

            <div data-aos="fade-up">        
                <Experience :icon="YouTubeIcon"
                            position="Lead Software Engineer at Google"
                            description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
                            period="Nov 2019 - Present" />
            </div>

            <div data-aos="fade-up">
                <Experience :icon="AppleIcon"
                            position="Lead Software Engineer at Google"
                            description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
                            period="Nov 2019 - Present" />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Experience from '../UI/Experience.vue';
import GoogleIcon from '../../assets/icons/google.png';
import YouTubeIcon from '../../assets/icons/youtube.png';
import AppleIcon from '../../assets/icons/apple.png';

export default defineComponent({
    name: "MyExpirienceSection",
    data() {
        return({
            GoogleIcon,
            YouTubeIcon,
            AppleIcon,
        });
    },
    components: {
        Experience,
    },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

.inner-expirience_section {
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

.wrapper-expirience_section {
    margin-top: 20px;
    padding: 20px calc(32px + 24px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    @media (max-width: 768px) {
        padding: 20px 0;
        gap: 20px;
    }
}

</style>