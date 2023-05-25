<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Crear Cartilla</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <form @submit="submitForm">
        <ion-button expand="full" type="submit">Crear cartilla</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";
import { defineComponent, ref, onMounted } from "vue";
import { useAuthStore } from "../Store/authStore";
import { CapacitorHttp } from "@capacitor/core";
import api from "../boot/axios";

export default defineComponent({
  name: "CrearCartilla",
  components: {
    IonContent,
    IonDatetime,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
    IonButton,
  },
  setup() {
    const authStore = useAuthStore();
    const token = ref(authStore.token);
    const unidades = ref([]);
    const minas = ref([]);
    const lugares = ref([]);
    const especialidades = ref([]);
    const unidadSeleccionada = ref("");
    const mina = ref("");
    const especialidad = ref("");
    const lugar = ref("");
    const actividadObservada = ref("");
    const fecha = ref("");
    const fetchUnidades = async () => {
      console.log(authStore);

      try {
        const options = {
          url: "http://192.168.0.10:8080/api/v1/place/placesList",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
          },
        };
        const response = await CapacitorHttp.get(options);
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener los datos de las unidades:", error);
      }
    };
    onMounted(() => {
      fetchUnidades();
    });
    return {};
  },
});
</script>

<style scoped>
.content {
  --background: #000000 !important;
  --color: #000000 !important;
}

.rounded-input {
  border-radius: 1px;
  background-color: transparent;
}

.login-bg {
  background-image: url("../assets/fondoformulario.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
}

.form {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
}
.custom-color {
  color: orange;
}
</style>
