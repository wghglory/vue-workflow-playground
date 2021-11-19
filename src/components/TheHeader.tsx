import { ref, defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon, NMenu, NButton } from 'naive-ui';
import { HomeOutline, CloudOutline, CloudyNightOutline, SunnyOutline } from '@vicons/ionicons5';

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
  props: ['theme'], // MUST, otherwise setup cannot get value
  emits: ['updateTheme'],
  setup(props: { theme: string }, { emit }) {
    const activeKey = ref(null);

    const update = () => {
      emit('updateTheme', props.theme === 'dark' ? 'light' : 'dark');
    };

    return () => {
      return (
        <header class='flex items-center py-2 px-4 text-white fixed w-full z-50' style='background: rgb(0 54 77)'>
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
          <NButton
            text
            style='font-size: 24px'
            onClick={update}
            class='text-gray-100 hover:text-green-400 focus-within:text-green-400'
          >
            <NIcon>
              {props.theme === 'dark' && <SunnyOutline />}
              {props.theme === 'light' && <CloudyNightOutline />}
            </NIcon>
          </NButton>
        </header>
      );
    };
  },
});
