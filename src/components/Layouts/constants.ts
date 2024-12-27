export type Config = {
  addStyle: {
    side: string;
    sideMenu: string;
    sideLink: string;
    login: string;
    loginTitle: string;
    miniLinksStyle: string;
  };
  title: string;
};

export type SideLink = {
  label: string;
  link: string;
};

export type MiniLink = {
  label: string;
  route: string;
  style?: string;
};
