<script setup lang="ts">
import NpkSwitch from "@/components/npk-switch.vue";
import { ref } from "vue";

const properties = defineProps({
  links: [] as {
    text: string;
    link: string;
    type?: string;
    activeText?: string;
    activeLink?: string;
  }[],
  activeItemId: 0,
});
const selectedSwitchItemId = ref([]);
const activeItem = ref(properties.links[properties.activeItem || 0].text);
function clickSwitch(event, i) {
  console.log("clickSwitch", event, i);
  if (!selectedSwitchItemId.value.includes(i)) {
    selectedSwitchItemId.value.push(i);
  } else {
    selectedSwitchItemId.value = selectedSwitchItemId.value.filter(
      (item) => item !== i
    );
  }
}
console.log("npk-menu", properties);
</script>

<template>
  <nav class="wrapper">
    <ul class="menu">
      <li
        v-for="(item, i) in links"
        :key="'menu text-' + i"
        :class="{ active: activeItem == item.text }"
      >
        <a
          :href="item.link"
          v-show="!item.activeLink || !selectedSwitchItemId.includes(i)"
        >
          <span>
            {{ item.text }}
          </span>
        </a>
        <a :href="item.activeLink" v-show="selectedSwitchItemId.includes(i)">
          <span>
            {{ item.activeText }}
          </span> </a
        ><npk-switch
          @update:modelValue="clickSwitch($event, i)"
          v-if="item.type == 'toggle'"
          class="switch"
        />
      </li>
    </ul>

    <div class="logo">
      <p class="-name">Train Control</p>
      <p class="-ip">127.0.0.1</p>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/style";

.menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
}
.switch {
  margin-left: 5px;
}
li {
  display: flex;
  text-decoration: none;
  &.active {
    position: relative;
    :after {
      content: "";
      position: absolute;
      width: calc(100% + 32px);
      height: 2px;
      background: $color-white;
      bottom: -10px;
      left: -16px;
    }
    a {
      color: $color-white;
    }
  }
  a {
    text-decoration: none;
    color: $color-white-transparent-2;
    transition: 300ms ease-in-out color;
    :hover {
      color: $color-white;
    }
  }
}

.wrapper {
  display: flex;
  background: $color-grey-5;
  justify-content: end;
  gap: 40px;
  padding: 8px 16px 0px 16px;
}

.logo {
  color: $color-white;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  .-name {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }

  .-ip {
    font-size: 0.8rem;
    padding: 0;
    margin: -5px 0 0;
  }
}
</style>
