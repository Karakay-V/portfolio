<template>
    <div id="about-me" class="inner-expirience_section">
        <div class="wrapper-about_me_section">
            <div :data-aos="aosTypeImage" class="wrapper-image">
                <img :src="AboutMePicture" alt="About Me" class="image-about_me" />
            </div>

            <div :data-aos="aosTypeStory" class="wrapper-story">
                <h2 class="title">
                    <span class="display-regular">About</span>
                    <span class="display-extra_bold"> Me</span>
                </h2>

                <div class="wrapper-text_block">
                    <p>
                        Привіт! Мене звати Владислав, я full-stack розробник, який поєднує бекенд і фронтенд навички для створення сучасних веб-рішень.  
                    </p>
                    <p>
                        Мій шлях у програмуванні почався ще у 2021 році. У 2022 я вступив до університету на технічну спеціальність, щоб поглибити свої знання та розвиватися в цій сфері. З того часу я працюю над різними проєктами - від спільних стартапів з однодумцями в університеті до реалізацій особистих ідей, що здаються мені цікавими.  
                    </p>
                    <p>
                        У роботі окрім технологій для побудови бекенду, й фронтенду я також користуюсь своїми супутньо набутими знаннями в системному адмініструванні. Ці інструменти дозволяють мені створювати продуктивні, масштабовані та зручні у підтримці додатки.
                    </p>
                    <p>
                        Не обійшлося й без хоббі, я захоплююсь читанням літератури по Психології, Філософії, Саморозвитку, піклуюсь я й про своє тіло, зокрема займаюсь легкою атлетикою та звичайними заняттями в залі з вагою, а також з недавнього часу до цього списку долучилася ще й музика. Моя мета - розвиватися як хороший інженер, яскрава особистість, й гарний співрозмовник.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useResponsiveAos } from "../../utils/aosHelper";
import AboutMePicture from "../../assets/covers/about-me.png";

export default defineComponent({
  name: "AboutMeSection",
  setup() {
    const aosTypeImage = useResponsiveAos("fade-right", "fade-down");
    const aosTypeStory = useResponsiveAos("fade-left", "fade-up");

    return {
      AboutMePicture,
      aosTypeImage,
      aosTypeStory,
    };
  },
});
</script>

<style scoped lang="scss">
@use "/src/assets/styles/fonts";
@use "/src/assets/styles/colors" as *;
@use "/src/assets/styles/image";

h2, p {
    margin: 0;
}

.inner-expirience_section {
    padding: 60px 80px;

    @media (max-width: 768px) {
        padding: 40px 16px;
    }
}

.wrapper-about_me_section {
    padding: 0 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 80px;
    flex-wrap: wrap;
    align-items: start;
    overflow-x: clip;

    @media (max-width: 1260px) {
        padding: 0;
        gap: 20px;
        flex-direction: column;
        align-items: stretch;        
    }
}

@media (max-width: 1260px) {
  .aos-init[data-aos="fade-left"],
  .aos-init[data-aos="fade-right"] {
    transform: translate3d(0,0,0); /* без !important зазвичай достатньо */
  }
}

.wrapper-image {
    width: calc(40% - 32px - 32px);
    max-width: 526px;
    align-self: center;

    img.image-about_me {
        width: 100%;
        @include image.prevent-manipulations;
    }

    @media (max-width: 1260px) {
        width: 100%;
    }

}

.wrapper-story {
    width: calc(60% - 32px - 32px);

    @media (max-width: 1260px) {
        width: 100%;
    }


    h2.title {
        margin: 0;
        padding: 20px 0;
        text-align: left;
        white-space: nowrap;
        @include fonts.responsive-font(48, 28, 1440);
        @include fonts.prevent-selecting;
        color: $primary-black;
        
        span {
            &.display-regular {
                @include fonts.sora-font(400);        
            }

            &.display-extra_bold {
                @include fonts.sora-font(800);
            }
        }
    }

    .wrapper-text_block {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        gap: 20px;

        p {
            @include fonts.sora-font(400);
            @include fonts.responsive-font(16, 16, 1440);
            @include fonts.prevent-selecting;
            color: $zinc-500;
            letter-spacing: 0.32px;
            line-height: 150%;
        }
    }
}

</style>