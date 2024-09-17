import { IconDashboard, IconUser } from '@tabler/icons-react';
import type { NavigationTree } from '@/@types/navigation';

const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    translateKey: '',
    icon: IconDashboard,
    authority: [],
    subMenu: [],
  },
  {
    key: 'users',
    path: '/users',
    title: 'Users',
    translateKey: '',
    icon: IconUser,
    authority: [],
    subMenu: [],
  },
];

export default navigationConfig;
