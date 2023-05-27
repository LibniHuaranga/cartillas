<template>
  <ion-page>
    <HeaderLayout />
    <ion-content class="ion-padding form-primer">
      <div class="test" style="color: black">asdas</div>
      <form @submit="submitForm">
        <!--  <ion-list>
          <ion-item>
            <ion-label>Unidad seleccionada</ion-label>
            <ion-select v-model="unidadSeleccionada">
              <ion-select-option
                v-for="unidad in unidades"
                :key="unidad.id"
                :value="unidad.id"
              >
                {{ unidad.nombre }}
              </ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>Mina</ion-label>
            <ion-select v-model="mina">
              <ion-select-option v-for="m in minas" :key="m.id" :value="m.id">
                {{ m.nombre }}
              </ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>Lugar</ion-label>
            <ion-select v-model="lugar">
              <ion-select-option v-for="l in lugares" :key="l.id" :value="l.id">
                {{ l.nombre }}
              </ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>Especialidad</ion-label>
            <ion-select v-model="especialidad">
              <ion-select-option
                v-for="e in especialidades"
                :key="e.id"
                :value="e.id"
              >
                {{ e.nombre }}
              </ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>Actividad observada</ion-label>
            <ion-input v-model="actividadObservada" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Fecha</ion-label>
            <ion-input v-model="fecha" type="date"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button
          expand="full"
          @click="goToOtraPagina"
          type="submit"
          style="color: orange"
          color="orange"
          >Crear cartilla</ion-button
        > -->

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
      actividadObservada,
      fecha,
      submitForm,
    };
  },
});
</script>

<style scoped lang="scss">
ion-content {
  background-color: red !important;
}
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
