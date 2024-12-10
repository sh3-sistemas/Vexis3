/**
 * Defines the structure for the ConfigurationMap object.
 */
export type ConfigurationMap = {
  /**
   * Unique identifier for the project template.
   */
  key: string;
  /**
   * Display name of the project template.
   */
  name: string;
  /**
   * Display the prefix of the project module.
   */
  prefix: string;
  /**
   * Styling configurations for the project template.
   */
  styles: GeneralStyles;
};

/**
 * Defines the structure for styling options of a sidebar menu.
 */
export type SidebarMenuStyles = {
  /**
   * Class for styling the sidebar menu icon.
   */
  icon: string;

  /**
   * Class for hover effect on the sidebar menu icon.
   */
  hover: string;
};

/**
 * Defines the structure for styling options of a sidebar menu item.
 */
export type SidebarMenuItemStyles = {
  /**
   * Class for active state styling of the sidebar menu item icon.
   */
  iconActive: string;

  /**
   * Class for active state styling of the sidebar menu item.
   */
  active: string;

  /**
   * Class for styling when the sidebar menu item is active and the menu is closed.
   */
  activeWhenClosed: string;

  /**
   * Class for text styling of the sidebar menu item.
   */
  text: string;
};

/**
 * Defines the structure for general styling configurations.
 */
export type GeneralStyles = {
  /**
   * Class for text color styling.
   */
  textColor: string;

  /**
   * Class for background color styling.
   */
  bgColor: string;

  /**
   * Class for hover effect on the background color.
   */
  bgHover: string;

  /**
   * Class for ring color styling.
   */
  ringColor: string;

  /**
   * Class for hover effect on the ring color.
   */
  bgRingHover: string;

  /**
   * Styling configurations for the sidebar menu.
   */
  sidebarMenu: SidebarMenuStyles;

  /**
   * Styling configurations for individual items in the sidebar menu.
   */
  sidebarMenuItem: SidebarMenuItemStyles;
};

/**
 * Defines the structure for the ProjectConfiguration object.
 */
export type ProjectConfiguration = {
  /**
   * Unique identifier for the project template.
   */
  key: string;

  /**
   * Display name of the project template.
   */
  name: string;

  /**
   * Styling configurations for the project template.
   */
  styles: GeneralStyles;
};
