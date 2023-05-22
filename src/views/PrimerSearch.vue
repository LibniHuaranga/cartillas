<template>
  <div class="welcome">¡Bienvenido de nuevo asdasdad!</div>
  <div class="title-section">Busqueda de cartillas</div>
  <div class="primer-search">
    <form @submit="submitForm">
      <ion-input fill="outline" placeholder="Codigo de cartilla"></ion-input>
      <ion-button shape="round" expand="full">BUSCAR</ion-button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonInput, IonButton } from "@ionic/vue";
export default defineComponent({
  components: {
    IonButton,
    IonInput,
  },
  setup() {
    const submitForm = () => {};
    return { submitForm };
  },
});
</script>

<style scoped lang="scss">
* {
  color: black;
}
.title-section {
  margin: 15px 0 15px;
  font-weight: bold;
}
ion-button {
  margin-top: 10px;
  --background: #f1b204;
}
</style>
