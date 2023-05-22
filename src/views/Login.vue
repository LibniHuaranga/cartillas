<script lang="ts" setup>
import { IonItem, IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/vue';
</script>

<template>
  <div class="content" :style="{ backgroundColor: backgroundColor, color: textColor }">
    <div class="login-bg">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col class="card" size="12" size-sm="10">
            <form>
              <div class="login-image-container">
                <img src="../assets/logo.png" alt="Logo" class="login-image" />
              </div>
              <ion-row class="ion-margin-bottom">
                <ion-col size="12" class="ion-margin-bottom">
                  <h1 class="title ion-text-center custom-color">Aplicacion para documentar cartillas</h1>
                </ion-col>
              </ion-row>
              <ion-row class="ion-margin-bottom">
                <ion-col size="12">
                  <ion-item class="ion-margin-bottom ion-align-self-center">
                    <ion-input v-model="username" label="Usuario" label-placement="floating"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-margin-top">
                <ion-col size="12" class="ion-margin-bottom">
                  <ion-item class="">
                    <ion-input v-model="password" class="ion-padding-start" type="password" label-placement="floating"
                      label="Contraseña"></ion-input>
                  </ion-item>
                  <a href="/contrasena" class="fp" color="medium">Olvidaste tu contraseña?</a>
                </ion-col>
              </ion-row>
              <ion-row>
                 <ion-col size="12">
                   <ion-row class="ion-margin-bottom">
                    <ion-col size="6" class="login-button-container">
                       <ion-button fill="solid" shape="round" color="primary" size="default" class="login-button ion-text-capitalize ion-no-margin" @click="login">
                       Iniciar Sesión
                    </ion-button>
                 </ion-col>
                </ion-row>
               </ion-col>
              </ion-row>
              <ion-row v-if="showWarning" class="ion-margin-top">
                <ion-col size="12">
                  <p class="warning-message">Usuario o contraseña incorrectos</p>
                </ion-col>
              </ion-row>
            </form>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      showWarning: false,
      backgroundColor: '#ffffff',
      textColor: '#ffa500',
    };
  },
  methods: {
    login() {
      const credentials = {
        email: this.username,
        password: this.password,
      };

      axios
        .post('http://localhost:8080/api/v1/auth/authenticate', credentials)
        .then(() => {
          // Redireccionar a la página de inicio después de iniciar sesión exitosamente
          window.location.href = '/formcartilla';
        })
        .catch(() => {
          // Mostrar mensaje de advertencia si el usuario o la contraseña son incorrectos
          this.showWarning = true;
        });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  --background: #991212 !important;
  --color: #000000 !important;
}

.login-bg {
  background-image: url('../assets/fondo.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;

form {
  width: 100%;
}

.card {
   background-color: #000000 !important;
   border-radius: 30px;
   margin: 0;
   padding: 20px;
  }

  .title {
  font-weight: 500 !important;
  font-size: 1.75rem !important;
  letter-spacing: 1px;
  color: var(--ion-color-light);
}
.login-image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.login-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  margin: auto; /* Agregamos esta línea */
}
.custom-color {
  color: orange;
}

  ion-item {
    --border-radius: 50px;
    border-radius: 50px;
    --background: #2e2e2e !important;
    --color: orange !important;
    letter-spacing: 1px;

    ion-label {
      padding: 2.5px 10px !important;
    }

    ion-input {
      padding: 2.5px 10px !important;
    }
  }

  a.fp {
    color: orange;
    font-size: 0.8rem;
    letter-spacing: 1px;
    float: right;
    margin-top: 10px;
    text-decoration: none !important;
  }
  .login-button-container {
  display: flex;
  justify-content: center;
}

  .login-button {
  font-weight: 600 !important;
  width: 80% !important;
  letter-spacing: 1px;
}
  .back-button {
    font-weight: 600 !important;
    width: 100% !important;
    letter-spacing: 1px;
  }

  .warning-message {
    color: red;
  }
}
</style>