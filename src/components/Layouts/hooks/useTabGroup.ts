import { computed } from "vue";

export default function useTabGroup<T extends { children?: T[], meta?: any }>(router: { currentRoute: any }) {
    const tabs = computed((): T[] | undefined => {
        const key = router.currentRoute.value.name;
        const routes = router.currentRoute.value.matched;
        const currentRoute: T & { meta: any } = routes.find((route: { name: string }) => route.name == key);

        let children: T[] | undefined = [];
        if (currentRoute?.meta.isTab) {
            const parent: T = routes[routes.length - 2];
            children = parent.children?.filter(
                (child) => child.meta && child.meta.isTab
            );
        } else {
            children = currentRoute?.children?.filter(
                (child: any) => child.meta && child.meta.isTab
            );
        }

        return children?.map((child: any) => ({ ...child, label: child?.meta?.label }));
    });

    return { tabs }
}