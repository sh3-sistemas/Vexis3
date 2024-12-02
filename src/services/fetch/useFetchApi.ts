import {
  computed,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
  type Ref,
} from "vue";
import { debounce } from "./debounce";

type UseFetchState<T> = {
  data: T;
  error?: Error;
  loading: boolean;
};

/**
 *
 * @param url
 * @param queryParams
 * @param delay
 */
export default function useFetchApi<T, P extends Record<string, any>>(
  url: Ref<string>,
  queryParams?: P,
  delay?: number,
) {
  const state: UseFetchState<T> = reactive({
    data: {} as any,
    loading: false,
  });

  // Função para construir a URL com query params
  const buildUrlWithParams = (baseUrl: string, queryParams?: P) => {
    if (!queryParams) return baseUrl;

    const url = new URL(baseUrl);
    const searchParams = new URLSearchParams(queryParams);
    url.search = searchParams.toString();
    return url.toString(); // Retorna a URL como string
  };

  // URL completa com query parameters
  const urlWithParams = computed(() =>
    buildUrlWithParams(url.value, queryParams),
  );
  const fetchApi = (fetchUrl: string) => {
    {
      state.loading = true;
      fetch(fetchUrl)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Erro ao buscar dados");
          }
          return res.json();
        })
        .then((data) => {
          // setData((prevData) => setDataFn(prevData, data));
          state.data = data;
          state.loading = false;
        })
        .catch((err) => {
          state.error = err.message;
          state.loading = false;
        });
    }
  };

  const debouncedFetch = ref<(fetchUrl: string) => void>(
    debounce((fetchUrl) => fetchApi(fetchUrl), delay ?? 500),
  );

  watch(url, (newUrl) => {
    debouncedFetch.value(newUrl);
  });

  onMounted(() => {
    debouncedFetch.value(urlWithParams.value);
  });

  return { ...toRefs(state) };
}
