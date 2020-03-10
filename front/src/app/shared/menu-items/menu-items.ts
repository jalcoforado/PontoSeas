import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string; /*--sub , link*/
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Início',
    main:[
      {
        state: 'home',
        short_label: 'H',
        name: 'Início',
        type: 'link',
        icon: 'feather icon-home'
      },
    ]
  },
  {
    label: 'Pesquisas',
    main:[
      {
        state: 'survey-list',
        short_label: 'SL',
        name: 'Lista das Pesquisas',
        type: 'link',
        icon: 'feather icon-list'
      },
      {
        state: 'survey-create',
        short_label: 'SC',
        name: 'Criar Pesquisa',
        type: 'link',
        icon: 'feather icon-plus-square'
      },
    ]
  },
  {
    label: 'Outros',
    main:[      
      {
        state: 'integrations',
        short_label: 'I',
        name: 'Integrações',
        type: 'link',
        icon: 'feather icon-cast'
      }
    ]
  },
  
  // {
  //   label: 'Pipeline',
  //   main: [
  //     {
  //       state: 'simple-page',
  //       short_label: 'D',
  //       name: 'Dashboard',
  //       type: 'link',
  //       icon: 'feather icon-home'
  //     },
  //     {
  //       state: 'smart-goal',
  //       short_label: 'P',
  //       name: 'SMART goal',
  //       type: 'link',
  //       icon: 'feather icon-award'
  //     },
  //     {
  //       state: 'personas',
  //       short_label: 'P',
  //       name: 'Personas',
  //       type: 'link',
  //       icon: 'feather icon-users'
  //     },
  //     {
  //       state: 'customer-journey',
  //       short_label: 'CJ',
  //       name: 'Customer Journey',
  //       type: 'link',
  //       icon: 'feather icon-map'
  //     }
  //   ]
  // },
  // {
  //   label: 'UI Element',
  //   main: [
  //     {
  //       state: 'basic',
  //       short_label: 'B',
  //       name: 'Basic',
  //       type: 'sub',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           state: 'other',
  //           name: 'Personas'
  //         },
  //         {
  //           state: 'breadcrumb',
  //           name: 'Breadcrumbs'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'user',
  //       short_label: 'U',
  //       name: 'User Profile',
  //       type: 'sub',
  //       icon: 'feather icon-users',
  //       children: [
  //         {
  //           state: 'profile',
  //           name: 'User Profile'
  //         }, {
  //           state: 'card',
  //           name: 'User Card'
  //         }
  //       ]
  //     }
  //   ]
  // }
];


@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
