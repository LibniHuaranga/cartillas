<template>
  <div class="content" :style="{ backgroundColor: backgroundColor, color: textColor }">
    <div class="login-bg">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col class="card" size="12" size-sm="10">
            <form @submit.prevent="login" class="form">
              <ion-row class="ion-margin-bottom">
                <ion-col size="12" class="ion-margin-bottom">
                  <h1 class="title ion-text-center custom-color" style="color: orange">Formulario de Cartilla</h1>
                </ion-col>
              </ion-row>
              <ion-row class="ion-margin-bottom">
                <ion-col size="12">
                  <ion-item class="ion-margin-bottom ion-align-self-center">
                    <ion-label>Unidad Seleccionada</ion-label>
                    <ion-select v-model="unidad" placeholder="Seleccione una unidad" :searchable="true">
                      <ion-select-option v-for="unit in unidades" :value="unit.id" :key="unit.id">{{ unit.name }}</ion-select-option>
                    </ion-select>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-margin-bottom">
                <ion-col size="12">
                  <ion-item class="ion-margin-bottom ion-align-self-center">
                    <ion-label>Mina</ion-label>
                    <ion-select v-model="mina" placeholder="Seleccione una mina" :searchable="true">
                      <ion-select-option v-for="mine in minas" :value="mine.id" :key="mine.id">{{ mine.name }}</ion-select-option>
                    </ion-select>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-margin-bottom">
                <ion-col size="12">
                  <ion-item class="ion-margin-bottom ion-align-self-center">
                    <ion-label>Lugar</ion-label>
                    <ion-select v-model="lugar" placeholder="Seleccione un lugar" :searchable="true">
                      <ion-select-option v-for="place in lugares" :value="place.id" :key="place.id">{{ place.name }}</ion-select-option>
                    </ion-select>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-margin-bottom">
                <ion-col size="12">
                  <ion-item class="ion-margin-bottom ion-align-self-center">
                    <ion-label>Especialidad</ion-label>
                    <ion-select v-model="especialidad" placeholder="Seleccione una especialidad" :searchable="true">
                      <ion-select-option v-for="specialty in especialidades" :value="specialty.id" :key="specialty.id">{{ specialty.name }}</ion-select-option>
                    </ion-select>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-margin-bottom">
                <ion-col size="12">
                  <ion-item class="ion-margin-bottom ion-align-self-center">
                    <ion-label>Actividad Observada</ion-label>
                    <ion-input v-model="actividad" placeholder="Escriba la actividad observada"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-margin-top">
                <ion-col size="12" class="ion-margin-bottom">
                  <ion-item class="">
                    <ion-label>Fecha</ion-label>
                    <ion-input v-model="fecha" type="date"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12">
                  <ion-row class="ion-margin-bottom ion-justify-content-center">
                    <ion-col size="6" class="login-button-container">
                      <ion-button fill="solid" shape="round" color="primary" size="default" class="login-button ion-text-capitalize ion-no-margin" type="submit">
                        Crear Cartilla
                      </ion-button>
                    </ion-col>
                  </ion-row>
                </ion-col>
              </ion-row>
            </form>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      unidades: [],
      minas: [],
      lugares: [],
      especialidades: [],
      unidad: null,
      mina: null,
      lugar: null,
      especialidad: null,
      actividad: '',
      fecha: '',
      // Resto de tus datos del formulario
    };
  },
  methods: {
    async loadData() {
      try {
        const promises = [
          axios.get('http://localhost:8080/api/v1/company-worker'),
          axios.get('http://localhost:8080/api/v1/place'),
          axios.get('http://localhost:8080/api/v1/specialty')
        ];

        const responses = await Promise.all(promises);

        this.minas = responses[1].data;
        this.lugares = responses[2].data;
        this.especialidades = responses[3].data;
      } catch (error) {
        console.error(error);
      }
    },
    // Resto de tus métodos del componente
    async login() {
      // Llamar a la función loadData antes de enviar el formulario
      await this.loadData();

      // Resto de tu lógica de login
    },
  },
  mounted() {
    // Llamar a la función loadData cuando el componente se monte
    this.loadData();
  },
};
</script>
<style scoped>
/* Estilos CSS existentes */

.content {
  --background: #000000 !important;
  --color: #000000 !important;
}

/* Estilos CSS existentes */

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

/* Estilos CSS existentes */

</style>