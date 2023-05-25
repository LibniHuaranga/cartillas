<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Crear Cartilla</ion-title>
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
        <ion-button expand="full" type="submit">Crear cartilla</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useAuthStore } from "../Store/authStore";

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
  data() {
    return {
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
  },
  mounted() {
    const authStore = useAuthStore();
    this.token = authStore.token;

    // Realizar solicitudes GET para obtener los datos
    this.fetchUnidades();
    this.fetchMinas();
    this.fetchEspecialidades();
  },
  methods: {
    fetchUnidades() {
      fetch('http://localhost:8080/api/v1/company-worker', {
        mode: 'no-cors',
        headers: {
          Authorization: this.token,
        },
      })
        .then(response => response.json())
        .then(data => {
          this.unidades = data;
        })
        .catch(error => {
          console.log(this.token);
          console.error('Error al obtener los datos de las unidades:', error);
        });
    },
    fetchMinas() {
      fetch('http://localhost:8080/api/v1/place', {
        mode: 'no-cors',
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          this.minas = data.map(item => item.area);
        })
        .catch(error => {
          console.error('Error al obtener los datos de las minas:', error);
        });
    },
    fetchEspecialidades() {
      fetch('http://localhost:8080/api/v1/specialty', {
        mode: 'no-cors',
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          this.especialidades = data;
        })
        .catch(error => {
          console.error('Error al obtener los datos de las especialidades:', error);
        });
    },
    submitForm() {
      console.log('Formulario enviado');
      console.log('Unidad seleccionada:', this.unidadSeleccionada);
      console.log('Mina:', this.mina);
      console.log('Lugar:', this.lugar);
      console.log('Especialidad:', this.especialidad);
      console.log('Actividad observada:', this.actividadObservada);
      console.log('Fecha:', this.fecha);
      console.log('Token:', this.token);
    },
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