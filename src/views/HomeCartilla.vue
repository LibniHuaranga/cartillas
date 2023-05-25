<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="cartilla-title">Informacion de la cartilla</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-grid class="container">
        <ion-row class="top-section">
          <ion-col>
            <h2 class="orange-text text-center">Aqui va la info de las cartillas</h2>
          </ion-col>
        </ion-row>
        <ion-row class="bottom-section">
          <ion-col size="12" size-md="4" v-for="(button, index) in buttons" :key="index">
            <ion-button expand="block" @click="buttonClicked(index)">
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
    text: 'Condiciones',
    route: '/condiciones' // Ruta de redireccionamiento para el botón Condiciones
  },
  {
    text: 'Actos',
    route: '/actos' // Ruta de redireccionamiento para el botón Actos
  },
  {
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
ion-content {
  --background: #ffffff;
}

ion-toolbar {
  --background: #ffffff;
}

.title-orange {
  color: #ff9900;
}

ion-button {
  --background: #ff9900;
  --color: #fcf8f5;
  --border-color: #ff9900;
  width: 100%;
  text-align: left;
}

ion-toggle {
  --background: #ffffff;
  --color: #ff9900;
  --unchecked-color: #ff9900;
}

ion-title {
  font-size: 20px;
  font-weight: bold;
  color: #ff9900;
}

ion-col {
  display: flex;
  align-items: flex-start;
}

ion-row {
  padding: 10px 0;
}

.button-text {
  text-align: left;
}
.orange-text {
  color: orange;
}
.text-center {
  text-align: center;
}
.cartilla-title {
  color: orange;
  text-align: center;
}


</style>