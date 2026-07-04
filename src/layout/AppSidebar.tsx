"use client";

import NavLabel from "@/components/common/NavLabel";
import { SITE } from "@/config/site";
import { useModules } from "@/context/ModulesContext";
import { useSidebar } from "@/context/SidebarContext";
import {
  buildDevSidebarNav,
  buildSidebarNav,
  SETTINGS_NAV_ITEM,
  shouldShowDevRoutes,
} from "@/lib/sidebar-nav";
import { renderSidebarIcon } from "@/lib/sidebar-icons";
import type { SidebarNavItem } from "@/lib/sidebar-nav";
import {
  ChevronDownIcon,
  HorizontaLDots,
} from "../icons/index";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SidebarWidget from "./SidebarWidget";

type NavSection = "modules" | "dev";

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();
  const { enabledModules } = useModules();
  const showDev = shouldShowDevRoutes();
  const tLayout = useTranslations("layout.sidebar.sections");

  const moduleNavItems = useMemo(
    () => buildSidebarNav(enabledModules),
    [enabledModules]
  );
  const devNavItems = useMemo(
    () => (showDev ? buildDevSidebarNav() : []),
    [showDev]
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    section: NavSection;
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  const renderMenuItems = (items: SidebarNavItem[], section: NavSection) => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={`${section}-${nav.nameKey}`}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, section)}
              className={`menu-item group  ${
                openSubmenu?.section === section && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.section === section && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {renderSidebarIcon(nav.icon)}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>
                  <NavLabel nameKey={nav.nameKey} />
                </span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.section === section &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {renderSidebarIcon(nav.icon)}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>
                    <NavLabel nameKey={nav.nameKey} />
                  </span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${section}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.section === section && openSubmenu?.index === index
                    ? `${subMenuHeight[`${section}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.nameKey}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      <NavLabel nameKey={subItem.nameKey} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const renderSectionHeading = (label: string) => (
    <h2
      className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
        !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
      }`}
    >
      {isExpanded || isHovered || isMobileOpen ? label : <HorizontaLDots />}
    </h2>
  );

  useEffect(() => {
    let submenuMatched = false;
    const sections: { section: NavSection; items: SidebarNavItem[] }[] = [
      { section: "modules", items: moduleNavItems },
      { section: "dev", items: devNavItems },
    ];

    sections.forEach(({ section, items }) => {
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({ section, index });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) {
      // openSubmenu also changes independently via manual toggle clicks, so
      // it can't be fully derived from pathname during render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpenSubmenu(null);
    }
  }, [pathname, isActive, moduleNavItems, devNavItems]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.section}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, section: NavSection) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.section === section &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { section, index };
    });
  };

  const settingsActive = isActive(SETTINGS_NAV_ITEM.path!);

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt={SITE.name}
                width={150}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt={SITE.name}
                width={150}
                height={40}
              />
            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt={SITE.name}
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              {renderSectionHeading(tLayout("menu"))}
              {renderMenuItems(moduleNavItems, "modules")}
            </div>

            {showDev && devNavItems.length > 0 && (
              <div>
                {renderSectionHeading(tLayout("development"))}
                {renderMenuItems(devNavItems, "dev")}
              </div>
            )}

            <div>
              {renderSectionHeading(tLayout("system"))}
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href={SETTINGS_NAV_ITEM.path!}
                    className={`menu-item group ${
                      settingsActive ? "menu-item-active" : "menu-item-inactive"
                    }`}
                  >
                    <span
                      className={`${
                        settingsActive
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      {renderSidebarIcon(SETTINGS_NAV_ITEM.icon)}
                    </span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className="menu-item-text">
                        <NavLabel nameKey={SETTINGS_NAV_ITEM.nameKey} />
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null}
      </div>
    </aside>
  );
};

export default AppSidebar;
