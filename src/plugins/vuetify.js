import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey,
        secondary: colors.lightBlue,
        accent: colors.red,
        error: colors.purple,
        warning: colors.deepOrange,
        info: colors.teal,
        success: colors.lightGreen,
      },
    },
  },
});
