import type { NotFoundVariations, NotFoundConfig } from "./types";
import {
  curiosity_search_bro,
  search_engines_bro,
  together_rafiki,
  warning_rafiki,
} from "@/assets/images/illustration";

export const variationsConfig: Record<NotFoundVariations, NotFoundConfig> = {
  default: {
    message: "Nenhum item encontrado",
    complement: "Tente novamente",
    image: curiosity_search_bro,
  },
  search: {
    message: "Nenhum resultado encontrado",
    complement:
      "Experimente alterar ou limpar os filtros aplicados e tente novamente",
    image: search_engines_bro,
  },
  completed: {
    message: "Tudo certo!",
    complement: "Nenhuma solicitação pendente",
    image: together_rafiki,
  },
  error: {
    message: "Algo deu errado",
    complement: "Tente novamente mais tarde",
    image: warning_rafiki,
  },
};
