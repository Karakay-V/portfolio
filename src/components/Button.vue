<template>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ButtonSize } from '../types/button-types/button-size.ts';
import { ButtonIconPosition } from "../types/button-types/button-icon-position.ts";
import { ButtonState } from "../types/button-types/button-state.ts";

export default defineComponent({
  name: "Button",
  data() {
    return {
      state: ButtonState.Default,
    };
  },
  props: {
    size: {
      type: String,
      default: ButtonSize.Medium,
      required: false,
      validator: (value: string) =>
          (Object.values(ButtonSize) as string[]).includes(value),
    },
    iconPosition: {
      type: String,
      default: ButtonIconPosition.None,
      required: false,
      validator: (value: string) =>
          (Object.values(ButtonIconPosition) as string[]).includes(value),
    },
    label: {
      type: String,
      required: true,
    }
  },
})
</script>

<style lang="scss">


</style>