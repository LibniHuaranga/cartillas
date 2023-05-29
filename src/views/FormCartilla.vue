<template>
  <ion-page>
    <HeaderLayout />
    <ion-content class="ion-padding">
      <form @submit="submitForm">
        <ion-item class="custom-item">
          <ion-label position="floating" class="custom-label">Unidad Seleccionada</ion-label>
          <ion-select v-model="unidadSeleccionada" interface="action-sheet" searchable>
            <ion-select-option v-for="unidad in unidades" :key="unidad.id" :value="unidad.id">{{ unidad.name }}</ion-select-option>
          </ion-select>
        </ion-item>
        
        <ion-item class="custom-item">
          <ion-label position="floating" class="custom-label">Mina</ion-label>
          <ion-select v-model="mina" interface="action-sheet" searchable>
            <ion-select-option v-for="minaItem in minas" :key="minaItem.id" :value="minaItem.id">{{ minaItem.name }}</ion-select-option>
          </ion-select>
        </ion-item>
        
        <ion-item class="custom-item">
          <ion-label position="floating" class="custom-label">Lugar</ion-label>
          <ion-select v-model="lugar" interface="action-sheet" searchable>
            <ion-select-option v-for="lugarItem in lugares" :key="lugarItem.id" :value="lugarItem.id">{{ lugarItem.name }}</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item class="custom-item">
          <ion-label position="floating" class="custom-label">Especialidad</ion-label>
          <ion-select v-model="especialidad" interface="action-sheet" searchable>
            <ion-select-option v-for="especialidadItem in especialidades" :key="especialidadItem.id" :value="especialidadItem.id">{{ especialidadItem.name }}</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item class="custom-item">
          <ion-label position="floating" class="custom-label">Actividad Observada</ion-label>
          <ion-select v-model="actividadObservada" interface="action-sheet" searchable>
            <ion-select-option v-for="actividadItem in actividades" :key="actividadItem.id" :value="actividadItem.id">{{ actividadItem.name }}</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item class="custom-item">
          <ion-label position="floating" class="custom-label">Fecha</ion-label>
          <ion-input type="date" v-model="fecha" class="custom-input"></ion-input>
        </ion-item>
        
        <ion-button expand="full" type="submit" class="custom-button" @click="goToOtraPagina">Crear cartilla</ion-button>
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
  IonBackButton,
} from "@ionic/vue";
import { defineComponent, ref, onMounted } from "vue";
import { useAuthStore } from "../Store/authStore";
import { useRouter } from "vue-router";
import { CapacitorHttp } from "@capacitor/core";
import HeaderLayout from "../views/HeaderLayout.vue";

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
    IonBackButton,
    HeaderLayout,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const token = ref(authStore.token);
    const unidades = ref([]);
    const minas = ref([]);
    const lugares = ref([]);
    const especialidades = ref([]);
    const actividades = ref([]);
    const unidadSeleccionada = ref("");
    const mina = ref("");
    const especialidad = ref("");
    const lugar = ref("");
    const actividadObservada = ref("");
    const fecha = ref("");

    const getUnidades = async () => {
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
        unidades.value = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener los datos de las unidades:", error);
      }
    };

    const getMines = async () => {
      try {
        const options = {
          url: "http://192.168.0.10:8080/api/v1/company-worker",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
          },
        };
        const response = await CapacitorHttp.get(options);
        minas.value = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const submitForm = async () => {};

    const goToOtraPagina = () => {
      router.push({ name: "Homecartillas" });
    };

    onMounted(() => {
      getUnidades();
      getMines();
    });

    return {
      goToOtraPagina,
      lugares,
      unidadSeleccionada,
      unidades,
      mina,
      minas,
      lugar,
      especialidades,
      especialidad,
      actividades,
      actividadObservada,
      fecha,
      submitForm,
    };
  },
});
</script>

<style scoped lang="scss">
.custom-item {
  --background: white;
}

.custom-label {
  color: orange;
}

.custom-input {
  color: orange;
}
.custom-button {
  --background: orange;
  --color: white;
}
</style>