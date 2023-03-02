import { isRef, ref, unref, watchEffect } from "vue";
import type { Manhwa } from "../types";

export function useFetch(url: string) {
  const data = ref<Manhwa[]|null>(null);
  const error = ref<Error|null>(null);
  const loading = ref(false);

  async function doFetch() {
    data.value = null;
    error.value = null;

    const urlValue = unref(url);

    loading.value = true;
    try {
      const res = await fetch(urlValue);
      data.value = await res.json();

    } catch (err) {
      error.value = err as Error;
      console.error(err);
    } finally {
      loading.value = false;
    }

  }

  if (isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }

  return { data, error, loading};
}
