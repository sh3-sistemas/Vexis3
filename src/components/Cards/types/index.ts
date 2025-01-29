/**
 *
 * Sh3NoticeCard is an extension to standard card element with additional features.
 *
 * [Primevue Based](https://www.primevue.org/card/)
 *
 * @module cards
 *
 */
import type { DefineComponent } from "vue";
import { notice, alert } from "../constants";

export type cardVariation = {
  cardStyle: string;
  circleStyle: string;
  iconVariation: string;
  iconColor: string;
};

export const variations = <Record<"notice" | "alert", cardVariation>>{
  notice: notice,
  alert: alert,
};

export interface Sh3NoticeCardProps {
  noticeCard: NoticeCard;
}

export type NoticeCard = {
  variation: keyof typeof variations;
  title: string;
  text: string;
};

export type Sh3CardSlots = object;
export type Sh3CardEmits = object;
/**
 * **SH3 - Sh3NoticeCard**
 *
 * _NoticeCard is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */

export interface Sh3NoticeCardWrapperProps {
  noticeCards: Array<NoticeCard>;
  style?: string;
}
/**
 * **SH3 - Sh3NoticeCardWrapper**
 *
 * _NoticeCardWrapper is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */

export type NotificationLabel = {
  time: string;
  autarchy: string;
};

export type NotificationType = {
  text: string;
  tag: string;
  label: NotificationLabel;
};

export interface NotificationCardProps {
  notifications: Array<NotificationType>;
}
/**
 * **SH3 - Sh3NotificationCard**
 *
 * _NotificationCard is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */

export type ImageLabel = {
  label: string;
  image: string;
};

export type PictureCard = {
  params?: object;
  onClick: (params: object) => void;
} & ImageLabel;

export type PictureCardStyle = {
  card: string;
} & ImageLabel;

export interface Sh3PictureCardProps {
  pictureCard: PictureCard;
  pictureCardStyle: PictureCardStyle;
}
/**
 * **SH3 - Sh3PictureCard**
 *
 * _PictureCard is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */

export interface Sh3SimpleCardProps {
  cardStyle: string;
}
/**
 * **SH3 - Sh3SimpleCard**
 *
 * _SimpleCard is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */

export interface Sh3LobbySectionCardProps {
  title: string;
  titleStyle: string;
}
/**
 * **SH3 - Sh3LobbySectionCard**
 *
 * _LobbySectionCard is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */

export interface Sh3ListContentCardProps {
  cardStyle?: string;
  title: string;
}

/**
 * **SH3 - Sh3ListContentCardProps**
 *
 * _ListContentCardProps is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */

export interface Sh3ListCardProps {
  cardStyle?: string;
}

/**
 * **SH3 - Sh3ListCardProps**
 *
 * _ListCardProps is an extension to standard card element with additional features._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 *
 */

declare module "vue" {
  export interface GlobalComponents {
    Sh3NoticeCard: DefineComponent<
      Sh3NoticeCardProps,
      Sh3CardSlots,
      Sh3CardEmits
    >;
    Sh3NoticeCardWrapper: DefineComponent<
      Sh3NoticeCardWrapperProps,
      Sh3CardSlots,
      Sh3CardEmits
    >;
    Sh3NotificationCard: DefineComponent<
      NotificationCardProps,
      Sh3CardSlots,
      Sh3CardEmits
    >;
    Sh3PictureCard: DefineComponent<
      Sh3PictureCardProps,
      Sh3CardSlots,
      Sh3CardEmits
    >;
    Sh3SimpleCard: DefineComponent<
      Sh3SimpleCardProps,
      Sh3CardSlots,
      Sh3CardEmits
    >;
    Sh3LobbySectionCard: DefineComponent<
      Sh3LobbySectionCardProps,
      Sh3CardSlots,
      Sh3CardEmits
    >;
    Sh3ListCard: DefineComponent<Sh3ListCardProps, Sh3CardSlots, Sh3CardEmits>;
    Sh3ListContentCard: DefineComponent<
      Sh3ListContentCardProps,
      Sh3CardSlots,
      Sh3CardEmits
    >;
  }
}
