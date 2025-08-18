import dayjs from "dayjs";

import isBeetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import "dayjs/locale/pt-br";

dayjs.extend(isBeetween);
dayjs.extend(isSameOrAfter);
dayjs.locale("pt-br");

export { dayjs };

export type {
  ConfigType,
  OptionType,
  UnitTypeShort,
  UnitTypeLong,
  UnitTypeLongPlural,
  UnitType,
  OpUnitType,
  QUnitType,
  ManipulateType,
  PluginFunc,
} from "dayjs";
declare module "dayjs" {
  interface Dayjs {
    /**
     * @description Verifica se uma data é a mesma ou posterior a outra.
     * @param target Data para comparar.
     * @param unit Unidade de tempo para comparação (ex: 'day', 'month', 'year').
     */
    isSameOrAfter(target: dayjs.Dayjs, unit?: dayjs.UnitType): boolean;

    /**
     * @description Verifica se uma data está entre duas outras.
     * @param start Data de início do intervalo.
     * @param end Data de fim do intervalo.
     * @param unit Unidade de tempo para comparação (ex: 'day', 'month', 'year').
     * @param inclusivity Se o intervalo deve incluir os pontos finais ('()', '[]', etc.).
     */
    isBetween(
      start: dayjs.Dayjs,
      end: dayjs.Dayjs,
      unit?: dayjs.UnitType,
      inclusivity?: string,
    ): boolean;
  }
}
