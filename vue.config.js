module.exports = {
    css: {
      extract: false,
      loaderOptions: {
        sass: {
          data: `
          @import "@/scss/_variables";
          @import "@/scss/_fonts";
          @import "@/scss/_typography";
          @import "@/scss/base";
          @import "@/scss/_utilities";
          @import "@/scss/_alerts";
          @import "@/scss/_buttons";
          @import "@/scss/_horizontalRules";
          @import "@/scss/_links";
          `
        }
      }
    }
  };