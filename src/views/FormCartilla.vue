<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/ruta-personalizada"></ion-back-button>
        </ion-buttons>
        <ion-title style="color: orange;">Crear Cartilla</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <form @submit="submitForm">
<<<<<<< HEAD
        <ion-list>
          <ion-item>
            <ion-label>Unidad seleccionada</ion-label>
            <ion-select v-model="unidadSeleccionada">
              <ion-select-option v-for="unidad in unidades" :key="unidad.id" :value="unidad.id">
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
              <ion-select-option v-for="e in especialidades" :key="e.id" :value="e.id">
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
        <ion-button expand="full" @click="goToOtraPagina" type="submit" style="color: orange;" color="orange">Crear cartilla</ion-button>
       
=======
        <ion-button expand="full" type="submit">Crear cartilla</ion-button>
>>>>>>> c3f55a880346c173f2cbfbade0784a59eaeddd2b
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
<<<<<<< HEAD
import { useRouter } from 'vue-router';
=======
import { CapacitorHttp } from "@capacitor/core";
>>>>>>> c3f55a880346c173f2cbfbade0784a59eaeddd2b

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
<<<<<<< HEAD
    const router = useRouter();

    const goToOtraPagina = () => {
      router.push('/homecartillas');
    };

    const data = {
      unidades: [],
      minas: [],
      lugares: [],
      especialidades: [],
      unidadSeleccionada: '',
      mina: '',
      lugar: '',
      especialidad: '',
      actividadObservada: '',
      fecha: '',
      token: null,
    };

    const mounted = () => {
      const authStore = useAuthStore();
      data.token = authStore.token;

      // Realizar solicitudes GET para obtener los datos
      fetchUnidades();
      fetchMinas();
      fetchEspecialidades();
    };

    const fetchUnidades = () => {
      fetch('http://localhost:8080/api/v1/company-worker', {
        mode: 'no-cors',
        headers: {
          Authorization: data.token,
        },
      })
        .then(response => response.json())
        .then(data => {
          data.unidades = data;
        })
        .catch(error => {
          console.log(data.token);
          console.error('Error al obtener los datos de las unidades:', error);
        });
    };

    const fetchMinas = () => {
      fetch('http://localhost:8080/api/v1/place', {
        mode: 'no-cors',
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          data.minas = data.map(item => item.area);
        })
        .catch(error => {
          console.error('Error al obtener los datos de las minas:', error);
        });
    };

    const fetchEspecialidades = () => {
      fetch('http://localhost:8080/api/v1/specialty', {
        mode: 'no-cors',
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          data.especialidades = data;
        })
        .catch(error => {
          console.error('Error al obtener los datos de las especialidades:', error);
        });
    };

    const submitForm = () => {
      console.log('Formulario enviado');
      console.log('Unidad seleccionada:', data.unidadSeleccionada);
      console.log('Mina:', data.mina);
      console.log('Lugar:', data.lugar);
      console.log('Especialidad:', data.especialidad);
      console.log('Actividad observada:', data.actividadObservada);
      console.log('Fecha:', data.fecha);
      console.log('Token:', data.token);
    };

    return {
      data,
      goToOtraPagina,
      mounted,
      fetchUnidades,
      fetchMinas,
      fetchEspecialidades,
      submitForm,
    };
=======
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
          url: "http://192.168.0.10:8080/api/v1/place",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTY4NDk5NDA2NSwiZXhwIjoxNjg1MDgwNDY1fQ.raFkUWNv-wO2mtGqM6VF6a-cnhnYIH_MxrkuYItc4gc`,
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        };
        const response = await CapacitorHttp.get(options);
        console.log(response.data, "TTTTTTTTT");
      } catch (error) {
        console.error("Error al obtener los datos de las unidades:", error);
      }
    };
    onMounted(() => {
      fetchUnidades();
    });
    return {};
>>>>>>> c3f55a880346c173f2cbfbade0784a59eaeddd2b
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
