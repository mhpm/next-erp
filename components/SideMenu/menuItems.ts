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
  { title: 'Resumen', icon: FaChartPie, route: '/summary' },
  {
    title: 'Ventas',
    icon: FaStore,
    route: '/sales',
    subItems: [
      { title: 'Órdenes de Venta', route: 'Orders' },
      { title: 'Reportes', route: 'Reports' },
    ],
  },
  {
    title: 'Compras',
    icon: FaShoppingCart,
    route: '/shopping',
    subItems: [
      { title: 'Historial', route: '/history' },
      { title: 'Pendientes', route: '/earrings' },
    ],
  },
  {
    title: 'Entregas',
    icon: FaTruck,
    route: '/deliveries',
  },
  { title: 'Corte de Caja', icon: FaShopSlash, route: '/cashcut' },
  {
    title: 'Administración',
    icon: FaKey,
    route: '/administration',
    subItems: [
      { title: 'Historial', route: '/history' },
      { title: 'Pendientes', route: '/earrings' },
    ],
  },
  {
    title: 'Inventario',
    icon: MdOutlineInventory,
    route: '/inventory',
    subItems: [
      { title: 'Historial', route: '/history' },
      { title: 'Pendientes', route: 'eEarrings' },
    ],
  },
  {
    title: 'Configuración',
    icon: FaCog,
    route: '/config',
    subItems: [
      { title: 'Historial', route: '/history' },
      { title: 'Pendientes', route: '/earrings' },
    ],
  },
];
