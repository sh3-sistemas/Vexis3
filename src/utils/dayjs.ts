import dayjs from "dayjs";
import isBeetween from "dayjs/plugin/isBetween";
import "dayjs/locale/pt-br";

dayjs.extend(isBeetween);
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
