<template>
  <div>
    <ion-menu content-id="main-content" class="menu-primer">
      <ion-header class="primer-header">
        <div class="user-information">
          <div class="user-space">
            <ion-avatar class="user-avatar">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </ion-avatar>
            <div class="user-data">
              <span class="user-name">name lastname</span>
              <div class="space"></div>
              <span>test@gmail.com</span>
            </div>
          </div>
        </div>
        <img
          class="primer-banner"
          alt="Primer Banner"
          src="../assets/images/primer-banner.jpg"
          style="width: 60%"
        />
      </ion-header>
      <ion-content class="primer-body-menu"
        ><ul>
          <li>
            <ion-icon slot="start" :icon="personSharp"></ion-icon>
            <div>PERFIL</div>
          </li>
          <li>
            <ion-icon slot="start" :icon="cogSharp"></ion-icon>
            <div>AJUSTES</div>
          </li>
          <li>
            <ion-icon slot="start" :icon="logOutSharp"></ion-icon>
            <div>CERRAR SESIÓN</div>
          </li>
        </ul>
      </ion-content>
    </ion-menu>
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar :mode="'md'">
          <ion-buttons slot="start">
            <ion-menu-button class="test" color="primary"></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> <primer-search /> </ion-content>
    </ion-page>
  </div>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonAvatar,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/vue";
import { personSharp, cogSharp, logOutSharp } from "ionicons/icons";
import PrimerSearch from "./PrimerSearch.vue";
</script>

<style scoped lang="scss">
.header-md::after {
  background-image: none;
}
.menu-primer {
  .primer-header {
    padding-top: 25px;
    height: 100%;
    max-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .user-information {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      .user-space {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: black;
        .user-avatar {
          border: 2px solid #f1b204;
          box-shadow: rgba(207, 126, 20, 0.25) 0px 6px 12px -2px,
            rgba(216, 127, 26, 0.3) 0px 3px 7px -3px;
        }
        .user-data {
          margin-left: 20px;
          font-size: 14px;
          .user-name {
            font-weight: bolder;
          }
          .space {
            height: 5px;
          }
        }
      }
    }
  }
  .primer-divider {
    hr.style-five {
      border: 0;
      height: 0; /* Firefox... */
      box-shadow: 0 0 10px 1px black;
    }
    hr.style-five:after {
      /* Not really supposed to work, but does */
      content: "\00a0"; /* Prevent margin collapse */
    }
  }
  .primer-body-menu {
    height: 100%;
  }
}
ion-toolbar {
  --ion-color-primary: #f1b204;

  --background: transparent;
  --color: black;

  --border-width: 0;
  --border-style: none;
  --border-color: transparent;
  --padding-top: 5px;
  --padding-bottom: 5px;
}
ion-content {
  --color: black;
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 10px 0px;
      padding-left: 75px;
      color: black;
      display: flex;
      font-size: 13px;
      div {
        display: flex;
        align-items: center;
      }
      ion-icon {
        color: black;
        margin-right: 25px;
        font-size: 23px;
      }
    }
    li:active {
      background-color: rgb(230, 230, 230);
    }
  }
}
</style>
