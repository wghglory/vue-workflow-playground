import { ref, defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon, NMenu } from 'naive-ui';
import { HomeOutline, CloudOutline } from '@vicons/ionicons5';

const menuOptions = [
  {
    label: () => {
      return <RouterLink to={{ name: 'Home' }}>Home</RouterLink>;
    },
    key: 'home',
    icon: () => (
      <NIcon>
        <HomeOutline />
      </NIcon>
    ),
  },
  {
    label: () => <RouterLink to={{ name: 'API' }}>API</RouterLink>,
    key: 'api',
  },
  {
    label: () => <RouterLink to={{ name: 'Vuex' }}>Vuex</RouterLink>,
    key: 'vuex',
  },
];

export default defineComponent({
  setup(props) {
    const activeKey = ref(null);

    return () => (
      <header class='flex items-center py-2 px-4 text-white fixed w-full' style='background: rgb(0 54 77)'>
        <h1 class='pr-6'>
          <router-link to='/' class='flex items-center'>
            <NIcon size='40'>
              <CloudOutline />
            </NIcon>
            <span class='font-bold text-2xl pl-3'>PCDL</span>
          </router-link>
        </h1>
        <nav class='flex-1'>
          <NMenu v-model={activeKey} inverted={true} options={menuOptions} mode='horizontal' />
        </nav>
      </header>
    );
  },
});
