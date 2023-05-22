<template>
  <ion-page id="main-content">
    <div
      class="content"
      :style="{ backgroundColor: backgroundColor, color: textColor }"
    >
      <div class="login-bg">
        <div class="business-logo">
          <img src="../assets/logo.png" alt="Logo" class="login-image" />
        </div>
        <ion-grid>
          <form>
            <ion-row class="ion-margin-bottom">
              <ion-col size="12" class="ion-margin-bottom">
                <h1 class="title ion-text-center custom-color">
                  CARTILLAS DE SEGURIDAD
                </h1>
              </ion-col>
            </ion-row>
            <ion-row class="ion-margin-bottom">
              <ion-col size="12">
                <ion-input
                  fill="outline"
                  v-model="username"
                  label="Usuario"
                  label-placement="floating"
                ></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-margin-top">
              <ion-col size="12" class="ion-margin-bottom">
                <ion-input
                  fill="outline"
                  v-model="password"
                  type="password"
                  label-placement="floating"
                  label="Contraseña"
                ></ion-input>
                <a href="/contrasena" class="fp" color="medium"
                  >Olvidaste tu contraseña?</a
                >
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12">
                <ion-row class="ion-margin-bottom">
                  <ion-col size="12" class="login-button-container">
                    <ion-button
                      fill="solid"
                      shape="round"
                      size="default"
                      class="login-button ion-text-capitalize ion-no-margin"
                      @click="login"
                    >
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
        </ion-grid>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "../boot/axios.js";
import { useAuthStore } from "../Store/authStore";
import { useRouter } from "vue-router";
import { Toast } from "@capacitor/toast";
import { toastController } from "@ionic/vue";

import {
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonPage,
  IonButton,
} from "@ionic/vue";
export default defineComponent({
  name: "Login",
  components: {
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    IonPage,
  },
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const username = ref("");
    const password = ref("");
    const showWarning = ref(false);
    const backgroundColor = ref("#ffffff");
    const textColor = ref("#ffa500");

    const login = async () => {
      const credentials = {
        email: username.value,
        password: password.value,
      };
      try {
        const response = await api.post("/auth/authenticate", credentials);
        authStore.setToken(response.data.access_token);
        router.push({ name: "Search" });
        await Toast.show({
          text: "Logged",
        });
      } catch (error) {
        const test = error.message;
        await showToast(test);
        console.log(error);
      }
    };
    const showToast = async (text: string) => {
      const toast = await toastController.create({
        message: text,
        duration: 2000,
      });
      await toast.present();
    };
    const goBack = () => {
      router.go(-1);
    };

    return {
      username,
      password,
      showWarning,
      backgroundColor,
      textColor,
      login,
      goBack,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-bg {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100%;
  background-color: #ffbc04;
  .business-logo {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    img {
      max-height: 150px;
      background-color: white;
      border-radius: 35px;
    }
  }
  ion-grid {
    padding-inline-start: 0px;
    padding-inline-end: 0px;
    padding-block-end: 0px;
    height: 100%;
    width: 100%;
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    max-height: 68%;
    form {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        padding: 0;
        margin: 0;
        font-size: 20px;
        color: black;
        font-weight: bolder;
      }
    }
  }

  .card {
    background-color: white;
    height: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin: 0;
    padding: 20px;
  }
  .login-image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  ion-label {
    padding: 2.5px 10px !important;
  }

  ion-input {
    padding: 2.5px 10px !important;
    color: black;
  }
  ion-button {
    min-width: 100%;
    --background: #f1b204;
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
    align-items: centers;
  }

  .warning-message {
    color: red;
  }
}
</style>
