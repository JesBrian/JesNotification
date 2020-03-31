import Vue from 'vue';
import JesNotification from './components/JesNotification.vue';

function install(Vue: any) {
  Vue.component(JesNotification.name, JesNotification);
}

export default {install, JesNotification};
