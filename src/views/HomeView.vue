<script setup lang="ts">
import { useFetch } from "../utils/fetch";

const { data, error } = useFetch("http://localhost:9090/api/manhwas/1");
</script>

<template>
  <main>Hello World!</main>
</template>
