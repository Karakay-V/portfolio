import { ref, onMounted, onUnmounted, computed } from "vue";

/**
 * Хук для визначення AOS-анімації залежно від ширини вікна
 * @param defaultAnimation - початкове значення (для великих екранів)
 * @param verticalAnimation - яке буде застосовано при малих екранах
 * @param breakpoint - ширина, нижче якої використовується verticalAnimation (за замовчуванням 1260px)
 */
export function useResponsiveAos(
  defaultAnimation: string,
  verticalAnimation: string,
  breakpoint: number = 1260
) {
  const width = ref(window.innerWidth);

  const onResize = () => (width.value = window.innerWidth);

  onMounted(() => window.addEventListener("resize", onResize));
  onUnmounted(() => window.removeEventListener("resize", onResize));

  const animation = computed(() =>
    width.value < breakpoint ? verticalAnimation : defaultAnimation
  );

  return animation;
}
