import type { AllMenu } from "@/utils";
import { computed, ref, type Ref } from "vue";
import type {
  RouteLocationNormalizedLoadedGeneric,
  RouteMeta,
  RouteRecordNameGeneric,
  RouteRecordRaw,
} from "vue-router";

/**
 * Cria um objeto breadcrumb pai adicionando uma propriedade breadCrumb à propriedade meta do objeto pai.
 * Se o objeto pai já tiver uma propriedade meta, a propriedade breadCrumb será adicionada a ela.
 * Se o objeto pai não tiver uma propriedade meta, uma nova propriedade meta será criada com a propriedade breadCrumb.
 * A propriedade breadCrumb será um array contendo um único objeto com uma propriedade label definida como o título do pai.
 * @param {Object} parent - O objeto pai para criar o breadcrumb.
 * @returns {Object} - O objeto pai com a propriedade breadCrumb adicionada à sua propriedade meta.
 */
export const createParentBreadCrumb = (
  parent: RouteRecordRaw & AllMenu,
): AllMenu & RouteRecordRaw => {
  return {
    ...parent,
    meta: {
      ...parent.meta,
      breadCrumb: parent.meta
        ? parent.meta.breadCrumb
        : [{ label: parent.title, name: parent.name, path: parent.path }],
    },
  };
};

/**
 * Cria breadcrumbs para os itens filhos de um item pai.
 * @returns {Array} - Um array de itens filhos com breadcrumbs.
 */
export const createChildrenBreadCrumb = (
  parent: RouteRecordRaw & AllMenu,
): Array<RouteRecordRaw> => {
  return parent.children?.map((child) => {
    const breadCrumb = [
      ...(parent.meta?.breadCrumb || []),
      {
        label: (child as RouteRecordRaw & { title: string }).title,
        name: child.name,
        path: parent.path,
      },
    ];
    return {
      ...child,
      filter: breadCrumb.map((bread) => bread.label).join(" "),
      meta: { ...child.meta, breadCrumb },
    };
  }) as Array<RouteRecordRaw>;
};

export default function useBreadCrumbs(allMenu: Ref<Array<AllMenu>>) {
  const groupWithChildren = ref<Array<AllMenu>>([]);

  /**
   * Cria breadcrumbs para todos os menus.
   * @returns {Array} - Um array de menus com breadcrumbs.
   */
  const breadCrumbFilter = computed(() => {
    const mountBreadCrumbs = (menu: Array<AllMenu>) => {
      menu.forEach((parent) => {
        const parentBreadcrumb = createParentBreadCrumb(
          parent as AllMenu & RouteRecordRaw,
        );
        groupWithChildren.value.push(parentBreadcrumb);

        if (parent.children && parent.children.length > 0) {
          const children = createChildrenBreadCrumb(parentBreadcrumb);
          mountBreadCrumbs(children as Array<AllMenu & RouteRecordRaw>);
        }
      });
    };

    if (!allMenu) return [];
    mountBreadCrumbs(allMenu.value);
    return groupWithChildren.value.flat(1);
  });

  /**
   * Retorna o breadcrumb de um menu específico.
   * @returns {Array} - O breadcrumb do menu específico.
   */
  const getBreadCrumb = (
    route: RouteRecordRaw | RouteLocationNormalizedLoadedGeneric,
  ) => {
    const routeMenu: (AllMenu & { meta?: RouteMeta }) | undefined =
      breadCrumbFilter.value.find(
        (menu: { name: RouteRecordNameGeneric }) => menu.name == route.name,
      );

    if (!routeMenu) return [];
    return routeMenu.meta?.breadCrumb;
  };

  return { breadCrumbFilter, getBreadCrumb };
}
