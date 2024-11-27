'use client';

import { memo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { menuItems } from './menuItems';
import { Logo } from './Logo';
import {
  MdOutlineMenu,
  MdMenuOpen,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { ThemeToggle } from '@/components';

const SideMenu = memo(() => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`
        ${
          isCollapsed
            ? 'w-20'
            : 'w-full fixed z-50 inset-0 sm:w-[300px] sm:min-w-[200px]'
        }
        transition-all duration-200 p-4 sm:relative sm:flex flex-col items-center bg-gray-900 text-center text-white
      `}
    >
      <div className={`w-full ${isCollapsed ? 'text-center' : 'text-right'}`}>
        <button
          className="text-white"
          onClick={toggleNavbar}
          aria-label={
            isCollapsed ? 'Open navigation menu' : 'Close navigation menu'
          }
        >
          {isCollapsed ? <MdOutlineMenu size={32} /> : <MdMenuOpen size={32} />}
        </button>
      </div>
      {!isCollapsed && <Logo />}
      <NavLinks isCollapsed={isCollapsed} menuItems={menuItems} />
      <div className="absolute bottom-10">
        {!isCollapsed && <ThemeToggle />}
      </div>
    </div>
  );
});

const NavLinks = memo(({ isCollapsed, menuItems }: any) => {
  const router = useRouter();
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleAccordion = (index: number) =>
    setExpandedItem(expandedItem === index ? null : index);

  return (
    <div className="lg:top-10 w-full flex flex-col items-center">
      <nav
        className={`flex flex-col gap-2 font-extrabold w-full ${
          isCollapsed ? 'items-center' : 'items-start mt-8'
        }`}
        aria-label="Main Navigation"
      >
        <ul className="space-y-4 w-full">
          {menuItems.map((item: any, index: number) => (
            <NavItem
              key={index}
              item={item}
              index={index}
              isCollapsed={isCollapsed}
              expandedItem={expandedItem}
              toggleAccordion={toggleAccordion}
              router={router}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
});

const NavItem = memo(
  ({
    item,
    index,
    isCollapsed,
    expandedItem,
    toggleAccordion,
    router,
  }: any) => {
    const Icon: any = item.icon;

    return (
      <li
        className={`flex flex-col ${
          isCollapsed ? 'items-center' : 'justify-start'
        }`}
      >
        <div
          className="flex items-center justify-between cursor-pointer py-2 p-3 rounded hover:bg-gray-800"
          onClick={() =>
            item.subItems ? toggleAccordion(index) : router.push(item.route)
          }
          tabIndex={0}
          role="button"
          aria-expanded={expandedItem === index}
          aria-controls={`sub-menu-${index}`}
        >
          <div className="flex items-center space-x-4 hover:text-gray-300">
            <span className="text-xl" aria-hidden="true">
              <Icon />
            </span>
            {!isCollapsed && !item.subItems && (
              <Link href={item.route} className="font-bold">
                {item.title}
              </Link>
            )}
            {!isCollapsed && item.subItems && (
              <span className="font-bold">{item.title}</span>
            )}
          </div>
          {!isCollapsed && item.subItems && (
            <span>
              {expandedItem === index ? (
                <MdOutlineKeyboardArrowDown size={20} />
              ) : (
                <MdOutlineKeyboardArrowRight size={20} />
              )}
            </span>
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            expandedItem === index ? 'max-h-screen' : 'max-h-0'
          }`}
          id={`sub-menu-${index}`}
        >
          {!isCollapsed && expandedItem === index && item.subItems && (
            <ul className="flex flex-col mt-2 space-y-2 text-gray-500 text-sm text-start">
              {item.subItems.map((subItem: any, index: number) => (
                <div
                  key={index}
                  className="cursor-pointer pl-12 py-2 p-3 rounded hover:bg-gray-800"
                  onClick={() => router.push(subItem.route)}
                  tabIndex={0}
                  role="button"
                >
                  <Link href={subItem.route}>{subItem.title}</Link>
                </div>
              ))}
            </ul>
          )}
        </div>
      </li>
    );
  }
);

export default SideMenu;
