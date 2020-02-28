<template>
  <section class="HeadlineCopyComponent">
    <div>
      <h2 :class="headlineCopy.copyEnabled ? '' : 'rule'">{{headlineCopy.heading}}</h2>
      <p v-if="headlineCopy.copyEnabled" class="copy">{{headlineCopy.copy}}</p>
      <a
        v-if="headlineCopy.buttonEnabled"
        :href="headlineCopy.buttonLink"
        :target="headlineCopy.buttonExternal ? '_blank' : ''"
        class="button"
      >{{headlineCopy.buttonText}}</a>
    </div>
  </section>
</template>

<script>
export default {
  props: ["headlineCopy"]
};
</script>

<style lang="scss">
.HeadlineCopyComponent {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  width: 100%;

  div {
    max-width: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $base_space 0;
    box-sizing: border-box;
  }
  h2 {
    max-width: 100%;
    &.rule {
      padding-bottom: $half_space;
      margin-bottom: $half_space;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        border-bottom: 2px solid $color_primary_brand;
      }
    }
  }

  .copy {
    max-width: 100%;
    p {
      margin: 0;
    }
    @media (min-width: $mobile_breakpoint) {
      max-width: 65%;
    }
  }

  @media (max-width: 950px) {
    div {
      padding: $base_space $base_space;
    }
    .copy {
      padding: 0;
    }
  }
}
</style>