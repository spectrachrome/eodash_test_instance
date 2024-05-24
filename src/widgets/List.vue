<template>
  <v-card
    class="mx-auto d-flex flex-column overflow-auto fill-height"
    color="transparent"
  >
    <v-list lines="one" class="overflow-auto">
      <v-list-item
        v-for="(link, idx) in stac"
        :key="idx"
        @click="getSelected(idx)"
        :title="link.title"
      >
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
import { store } from "@eodash/eodash";
import { storeToRefs } from "pinia";

const { stac, selectedStac } = storeToRefs(store.stac.useSTAcStore());
const { loadSelectedSTAC } = store.stac.useSTAcStore();

const getSelected = async (idx) => {
  const link = stac.value![idx];
  await loadSelectedSTAC(link.href);
  console.log(selectedStac.value);
};
</script>
