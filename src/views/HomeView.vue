<script setup lang="ts">
import { useFetch } from "../utils/fetch";

const { data, error, loading } = useFetch("http://localhost:9090/api/manhwas");
</script>

<template>
  <main>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="loading">Loading...</p>
    <div v-for="manhwa in data" :key="manhwa.id">
      <h1>{{ manhwa.title }}</h1>
    </div>
  </main>
</template>
