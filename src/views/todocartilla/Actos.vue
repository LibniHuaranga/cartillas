<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          ACTOS
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row v-for="(button, index) in buttons" :key="button.id">
          <ion-col>
            <ion-button :disabled="!button.active" class="custom-button">
              <ion-label class="custom-label">{{ button.label }}</ion-label>
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-toggle v-model="button.active" @ionChange="toggleChanged(index)"></ion-toggle>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonToggle, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonLabel,
  },
  data() {
    return {
      buttons: [
        { id: 1, label: '1. HERRAMIENTAS DE GESTIÓN', active: false },
        { id: 2, label: '2. EPP ', active: false },
        { id: 3, label: '3. HIGIENE OCUPACIONAL - FACTORES DISERGONOMICOS ', active: false },
        { id: 4, label: '4. TRABAJOS CON HERRAMIENTAS MANUALES O DE PODER', active: false },
        { id: 5, label: '5. LINEA DE FUEGO y CUIDADO DE MANOS', active: false },
        { id: 6, label: '6. TRABAJOS EN CALIENTE', active: false },
        { id: 7, label: '7. TRABAJOS CERCA O SOBRE FUENTES DE AGUA', active: false },
        { id: 8, label: '8. TRABAJO EN ALTURA ', active: false },
        { id: 9, label: '9.- EQUIPOS PESADOS/ VEHÍCULOS LIVIANOS/ TRANSPORTE', active: false },
        { id: 10, label: '10. DELIMITACIÓN Y SEÑALIZACIÓN DE AREAS DE TRABAJO', active: false },
        { id: 11, label: '11.- ALMACENAMIENTO Y MANEJO DE MATERIALES PELIGROSOS', active: false },
        { id: 12, label: '12. IZAJE DE CARGAS', active: false },
        { id: 13, label: '13. EXCAVACIÓN Y ZANJAS', active: false },
        { id: 14, label: '14. ESPACIOS CONFINADOS', active: false },
        { id: 15, label: '15. TRABAJOS CON EQUIPOS DE LINEA AMARILLA TRABAJANDO CERCA O EN TALUDES', active: false },
        { id: 16, label: '16. AISLAMIENTO DE ENERGIA (ELÉCTRICA, QUÍMICA, NEUMÁTICA, HIDRAÚLICA, ETC)', active: false },
      ],
    };
  },
  methods: {
    toggleChanged(buttonIndex: number) {
      const button = this.buttons[buttonIndex];
      const prevButton = this.buttons[buttonIndex - 1];

      if (buttonIndex > 0) {
        if (button.active) {
          prevButton.active = true;
        }
      }
    },
  },
});
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

</style>