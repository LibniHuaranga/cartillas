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
       
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useAuthStore } from "../Store/authStore";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CrearCartilla',
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
  background-image: url('../assets/fondoformulario.jpg');
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