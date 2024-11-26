import { MdOutlineInventory } from 'react-icons/md';
import {
  FaChartPie,
  FaKey,
  FaTruck,
  FaStore,
  FaShopSlash,
} from 'react-icons/fa6';
import { FaCog, FaShoppingCart } from 'react-icons/fa';

export const menuItems = [
  { title: 'Resumen', icon: FaChartPie, route: '/Summary' },
  {
    title: 'Ventas',
    icon: FaStore,
    route: '/Sales',
    subItems: [
      { title: 'Órdenes de Venta', route: 'Orders' },
      { title: 'Reportes', route: 'Reports' },
    ],
  },
  {
    title: 'Compras',
    icon: FaShoppingCart,
    route: '/Shopping',
    subItems: [
      { title: 'Historial', route: '/History' },
      { title: 'Pendientes', route: '/Earrings' },
    ],
  },
  {
    title: 'Entregas',
    icon: FaTruck,
    route: '/Deliveries',
  },
  { title: 'Corte de Caja', icon: FaShopSlash, route: '/Cashcut' },
  {
    title: 'Administración',
    icon: FaKey,
    route: '/Administration',
    subItems: [
      { title: 'Historial', route: '/History' },
      { title: 'Pendientes', route: '/Earrings' },
    ],
  },
  {
    title: 'Inventario',
    icon: MdOutlineInventory,
    route: '/Inventory',
    subItems: [
      { title: 'Historial', route: '/History' },
      { title: 'Pendientes', route: '/Earrings' },
    ],
  },
  {
    title: 'Configuración',
    icon: FaCog,
    route: '/Config',
    subItems: [
      { title: 'Historial', route: '/History' },
      { title: 'Pendientes', route: '/Earrings' },
    ],
  },
];
