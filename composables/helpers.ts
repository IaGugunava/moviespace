export const getSingleUrl = (data: any) => {
    const router = useRouter();

    router.push({ path: '/inner', query: { id: data.id } })

}