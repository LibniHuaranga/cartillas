<template>
  <div class="welcome">¡Bienvenido de nuevo asdasdad!</div>
  <div class="title-section">Busqueda de cartillas</div>
  <div class="primer-search">
    <form @submit="submitForm">
      <ion-input fill="outline" placeholder="Codigo de cartilla"></ion-input>
      <ion-button shape="round" expand="full">BUSCAR</ion-button>
    </form>
  </div>
  <div class="primers-list">
    <div v-for="primer in primers" :key="primer.id" v-if="primers.lenght">
      {{ primer }}
    </div>
    <div class="no-primers" v-else>Aun no has registrado una cartilla</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { IonInput, IonButton } from "@ionic/vue";
import { useAuthStore } from "../Store/authStore";
import { CapacitorHttp } from "@capacitor/core";

export default defineComponent({
  components: {
    IonButton,
    IonInput,
  },
  setup() {
    const authStore = useAuthStore();
    const submitForm = () => {};
    const primers = ref([]);
    const getPrimers = async () => {
      try {
        const options = {
          url: "http://192.168.0.10:8080/api/v1/primers/list",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authStore.token}`,
          },
        };
        const response = await CapacitorHttp.get(options);
        if (response.status === 200) {
          primers.value = response.data;
        }
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    onMounted(() => {
      getPrimers();
    });
    return { submitForm, primers };
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
.primers-list {
  margin-top: 10px;
  border-top: 1px #f1b204 solid;
  height: calc(100% - 190px);
  .no-primers {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
