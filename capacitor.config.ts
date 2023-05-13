import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'vue.project',
  appName: 'vue-project',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
