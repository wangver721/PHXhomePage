<template>
  <div class="proj-info pi-fade"
    @mouseenter="store.madeByIsHover = true" 
    @mouseleave="store.madeByIsHover = false"
    @click="store.madeByIsOpen = true"
  >
    <!-- 不使用 if else 为了降低切换开销 -->
    <table class="tb-on" v-show="store.madeByIsOpen">
      <thead>
        <tr>
          <th></th>
          <th>作者</th>
          <th>项目</th>
          <th>版本</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(info, index) in infos" :key="index" :class="index === max ? 'current-info' : ''">
          <td>{{ index + 1 }}</td>
          <td><a :href="info.home" target="_blank" about>{{ info.author }}</a></td>
          <td><a :href="info.github" target="_blank" about>{{ info.getProject() }}</a></td>
          <td>{{ info.version }}</td>
        </tr>
      </tbody>
    </table>
    <div v-show="!store.madeByIsOpen">
      <div class="pi-fade" style="font-size: 18px;" v-show="store.madeByIsHover">
        <table>
          <tr class="current-info">
            <td>({{ infos.length }})</td>
            <td>{{ cInfo.author }}</td>
            <td><a @click.stop :href="cInfo.github" target="_blank" about>{{ cInfo.getProject() }}</a></td>
            <td>{{ cInfo.version }}</td>
          </tr>
        </table>
      </div>
      <div class="pi-fade" v-show="!store.madeByIsHover">
        <span>Made By</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mainStore } from "@/store";
import { infos } from "@/utils/updateInfo.js"

const store = mainStore();
const max = infos.length - 1;
const cInfo = infos[max];
</script>

<style lang="scss" scoped>
.pi-fade {
  transition: transform 0.3s;
  animation: fade 0.5s;
  &:active {
    transform: scale(0.95);
  }
}
.proj-info {
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 20%);
  backdrop-filter: blur(10px);
  border-radius: 6px;
  flex-direction: column;
  overflow-y: auto;
  z-index: 0;
  &:hover {
    background: rgb(0 0 0 / 40%);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      text-align: center;
      padding: 8px;
    }
  }
  .current-info {
    // font-weight: bolder;
    td,
    a {
      color: yellow;
      a:hover {
        color: rgb(57, 159, 255);
      }
    }
  }
  .tb-on {
    font-size: 16px;
  }
}
</style>
