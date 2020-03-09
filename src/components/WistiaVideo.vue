<template>
  <section class="WistiaVideoComponent">
    <article>
      <script :src="`https://fast.wistia.com/embed/medias/${wistiaVideo.wistiaId}.jsonp`" type="application/javascript" async></script>

      <script src="https://fast.wistia.com/assets/external/E-v1.js" type="application/javascript" async></script>

      <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
        <div
          class="wistia_responsive_wrapper"
          style="height:100%;left:0;position:absolute;top:0;width:100%;"
        >
          <div
            :class="`wistia_embed wistia_async_${wistiaVideo.wistiaId} videoFoam=true`"
            style="height:100%;position:relative;width:100%"
          >
            <div
              class="wistia_swatch"
              style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"
            >
              <img
                :src="`https://fast.wistia.com/embed/medias/${wistiaVideo.wistiaId}/swatch`"
                style="filter:blur(5px);height:100%;object-fit:contain;width:100%;"
                alt
                aria-hidden="true"
                onload="this.parentNode.style.opacity=1;"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>


<script>
export default {
  props: ["wistiaVideo"]
};
</script>
<style lang="scss">
.WistiaVideoComponent {
  article {
    margin: 0 auto;
    max-width: 1278px;
    position: relative;
  }
}
</style>