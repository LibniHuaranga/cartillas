<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My Page</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-grid class="container">
        <ion-row class="top-section">
          <ion-col>
            <h2 class="orange-text">Texto en la parte superior</h2>
          </ion-col>
        </ion-row>
        <ion-row class="bottom-section">
          <ion-col size="12" size-md="4" v-for="(button, index) in buttons" :key="index">
            <ion-button expand="block" @click="buttonClicked(index)">
              <ion-img :src="button.imageSrc" :alt="button.imageAlt"></ion-img>
              <ion-label>{{ button.text }}</ion-label>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  name: String
});

const buttons = [
  {
    imageSrc: '/assets/condiciones.png',
    imageAlt: 'Imagen 1',
    text: 'Condiciones',
    route: '/condiciones' // Ruta de redireccionamiento para el botón Condiciones
  },
  {
    imageSrc: '/assets/logo.png',
    imageAlt: 'Imagen 2',
    text: 'Actos',
    route: '/actos' // Ruta de redireccionamiento para el botón Actos
  },
  {
    imageSrc: '/assets/logo.png',
    imageAlt: 'Imagen 3',
    text: 'Recursos',
    route: '/recursos' // Ruta de redireccionamiento para el botón Recursos
  }
];

const router = useRouter();

const buttonClicked = (index: number) => {
  const button = buttons[index];
  console.log(`Botón ${index + 1} hizo clic`);
  router.push(button.route); // Redireccionar a la ruta correspondiente al botón
};
</script>


<style scoped>
.container {
  height: 100vh;
}

.top-section {
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.orange-text {
  color: orange;
}

.bottom-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #e6e6e6;
}

ion-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

ion-button ion-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>