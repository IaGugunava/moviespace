

export const getSingleUrl = (data) => {
    const router = useRouter();

    router.push({ path: '/inner', query: { slug: data.slug } })
}

export const useConfigs = () => {
  const config = useRuntimeConfig();
  return {
    apiUrl: config.public.NUXT_PUBLIC_BASE_URL,
    websiteUrl: config.public.NUXT_PUBLIC_WEBSITE_URL
  };
};

export const apiFetch = (path, options = {}) => {

  const { apiUrl } = useConfigs();

  return useFetch(
    path,
    {
      baseURL: apiUrl,
      ...options
    },
  );
};