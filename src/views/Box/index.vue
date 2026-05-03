<template>
  <div class="box cards" @mouseenter="closeShow = true" @mouseleave="closeShow = false">
    <transition name="el-fade-in-linear">
      <close-one
        class="close"
        theme="filled"
        size="28"
        fill="#ffffff60"
        v-show="closeShow"
        @click="store.boxOpenState = false"
      />
    </transition>
    <transition name="el-fade-in-linear">
      <setting-two
        class="setting"
        theme="filled"
        size="28"
        fill="#ffffff60"
        v-show="closeShow"
        @click="store.setOpenState = true"
      />
    </transition>
    <div class="content">
      <!-- 可在此处自定义任意内容 -->
      <TimeCapsule />
      <MoreContent />
    </div>
  </div>
</template>

<script setup>
import { CloseOne, SettingTwo } from "@icon-park/vue-next";
import { mainStore } from "@/store";
import TimeCapsule from "@/components/TimeCapsule.vue";
import MoreContent from "@/components/MoreContent.vue";

const store = mainStore();
const closeShow = ref(false);
</script>

<style lang="scss" scoped>
.box {
  flex: 1 0 0%;
  margin-left: 0.75rem;
  height: 80%;
  max-width: 50%;
  position: relative;
  animation: fade 0.5s;
  &:hover {
    transform: scale(1);
  }
  .close,
  .setting {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 28px;
    height: 28px;
    transition:
      transform 0.3s,
      opacity 0.3s;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(1);
    }
  }
  .setting {
    right: 56px;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
    height: 100%;
  }

  // 手机端：盒子改为全屏抽屉，覆盖整页
  @media (max-width: 720px) {
    position: fixed;
    inset: 0;
    margin: 0;
    height: 100vh;
    max-width: 100%;
    width: 100%;
    z-index: 5;
    border-radius: 0;
    .close,
    .setting {
      top: 18px;
      width: 32px;
      height: 32px;
    }
    .content {
      padding: 60px 18px 24px;
    }
  }
}
</style>
