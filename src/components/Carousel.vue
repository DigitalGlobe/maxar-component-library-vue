<template>
  <div>
    <div v-if="carousel.sharedHeadingEnabled" class="sharedHeading">
      <h2>{{ carousel.sharedHeading }}</h2>
    </div>
    <section class="CarouselComponent">
      <div class="images">
        <div class="slider">
          <div v-for="slide in carousel.slides" :key="slide.imageUrl" class="slide">
            <img :src="slide.imageUrl" />
          </div>
        </div>
      </div>
      <div class="copy">
        <div class="indicators">
          <button
            v-for="(slide, index) in carousel.slides"
            :key="slide.heading"
            :class="`indicator navbar__link ${index === 0 ? 'active' : ''}`"
            :data-index="index"
          >{{ index + 1 }}</button>
        </div>
        <div class="slider">
          <div
            v-for="(slide, index) in carousel.slides"
            :key="slide.buttonLink"
            :class="`slide ${index === 0 ? 'active' : ''}`"
          >
            <h2>{{ slide.heading }}</h2>
            <div v-html="slide.body"></div>
            <a
              class="button"
              v-if="slide.buttonEnabled"
              :href="slide.buttonLink"
              :target="slide.buttonIsExternal ? '_blank' : '_self'"
            >{{slide.buttonText}}</a>
          </div>
        </div>
        <div class="arrows">
          <button class="previousButton">Previous</button>
          <button class="nextButton">Next</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["carousel"]
};
</script>

<style lang="scss">
.CarouselComponent {
  // Use margin instead of padding for javascript calculation reasons
  margin: $half_space $mobile_side_space;
  padding: 0;
  position: relative;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    margin-left: 0;
    margin-right: 0;
  }

  .images {
    background: #f5f5f5;
    overflow-x: hidden;
    width: 100%;
    @media (min-width: 1024px) {
      background: white;
      width: 50%;
    }
    .slider {
      display: flex;
      height: 100%;
      transition: transform 0.4s ease-in-out;
      transform: translateX(0%);
    }

    .slide {
      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }

  .copy {
    background: $color_grey;
    color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: -80px;
    overflow-x: hidden;
    width: 100%;

    @media (min-width: 1024px) {
      flex: 1;
      flex-direction: column-reverse;
      justify-content: flex-end;
      margin-top: 0;
    }

    .indicators {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      height: 80px;
      justify-content: center;
      position: relative;
      z-index: 3;
      @media (min-width: 1024px) {
        padding: 0 0 40px 40px;
        justify-content: flex-start;
      }
      @media (min-width: 1440px) {
        padding: 0 0 80px 80px;
      }
    }

    .indicator {
      background-color: white;
      border: 1px solid $color_primary_brand;
      box-sizing: border-box;
      color: transparent;
      height: 15px;
      margin: 0 5px;
      padding: 0;
      transition: all 0.3s ease;
      width: 15px;
      &:focus,
      &:hover {
        border-color: $color_primary_brand;
      }
      @media (min-width: 1024px) {
        background-color: transparent;
        color: unset;
        height: 40px;
        margin: 0 20px;
        width: 40px;
      }
      &:first-of-type {
        @media (min-width: 1024px) {
          margin-left: 0;
        }
      }

      &.active {
        background-color: $color_primary_brand;
        border-color: $color_primary_brand;
        color: transparent;
        &:focus {
          color: transparent !important;
        }
        @media (min-width: 1024px) {
          color: white !important;
          &:focus {
            color: $color_primary_brand !important;
          }
        }
      }
    }

    .slider {
      display: flex;
      transition: transform 0.3s ease;
      transform: translateX(0%);
    }

    .slide {
      padding: 25px;
      @media (min-width: 1024px) {
        padding: 40px;
      }
      @media (min-width: 1440px) {
        padding: 80px;
      }
      .button {
        color: white;
      }
    }

    .arrows {
      display: none;
      @media (min-width: 1024px) {
        display: block;
        padding: 40px 0 0 40px;
      }
      @media (min-width: 1440px) {
        padding: 80px 0 0 80px;
      }
      .nextButton,
      .previousButton {
        border: none;
        box-sizing: border-box;
        color: transparent;
        margin-right: 16px;
        padding: 0;
        position: relative;
        height: 40px;
        width: 40px;
        &:hover,
        &:focus {
          background-color: transparent !important;
          color: transparent !important;
        }
      }

      .nextButton:before,
      .previousButton:before {
        background-size: contain !important;
        background-repeat: no-repeat !important;
        content: " ";
        display: block;
        height: 32px;
        left: 0;
        position: absolute;
        top: 0;
        width: 16px;
      }
      .nextButton:before {
        background-image: url("/right-arrow.svg");
      }
      .previousButton:before {
        background-image: url("/left-arrow.svg");
      }
    }
  }
}
.sharedHeading {
  background-color: $color_grey;
  padding: $base_space 0;
  margin-bottom: -$half_space;
  h2 {
    color: white;
    text-align: center;
    margin-bottom: 0;
  }
}
</style>