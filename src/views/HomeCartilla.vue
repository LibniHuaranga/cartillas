<template>
  <ion-page>
    <HeaderLayout />
    <ion-content class="ion-padding form-primer">
      <ion-grid class="container">
        <ion-row class="top-section">
          <ion-col>
            <h2 class="orange-text text-center">Aqui va la info de las cartillas</h2>
          </ion-col>
        </ion-row>
        <ion-row class="bottom-section">
          <ion-col size="12">
            <ion-button expand="block" @click="buttonClicked(0)">
              <ion-label>Condiciones</ion-label>
            </ion-button>
          </ion-col>
          <ion-col size="12">
            <ion-button expand="block" @click="buttonClicked(1)">
              <ion-label>Actos</ion-label>
            </ion-button>
          </ion-col>
          <ion-col size="12">
            <ion-button expand="block" @click="buttonClicked(2)">
              <ion-label>Recursos</ion-label>
            </ion-button>
          </ion-col>
          <ion-col size="12">
            <ion-button expand="block" @click="buttonClicked(3)">
              <ion-label>Guardar</ion-label>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "vue";
import HeaderLayout from "../views/HeaderLayout.vue";
import router from "@/router";

export default defineComponent({
  name: "CrearCartilla",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonButton,
    IonCol,
    HeaderLayout,
  },
  setup() {
    const buttonClicked = (index: number) => {
      if (index === 0) {
        router.push({ path: "/condiciones" });
      } else if (index === 1) {
        router.push({ path: "/actos" });
      } else if (index === 2) {
        router.push({ path: "/recursos" });
      }
    };

    return {
      buttonClicked,
    };
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
  color: white;
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
  --color: white;
  --unchecked-color: white;
}

ion-title {
  font-size: 20px;
  font-weight: bold;
  color: white;
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