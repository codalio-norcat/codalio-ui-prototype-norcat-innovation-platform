import { useEffect, useMemo, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarSeparator, SidebarTrigger } from "./ui/sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Bell, FileText, Handshake, Home, LayoutDashboard, SunMoon } from "lucide-react";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const navigation = [
    { label: "Home", route: "/", icon: Home },
    { label: "Report", route: "/report", icon: FileText },
    { label: "Contact", route: "/contact", icon: Handshake },
    { label: "Client Portal", route: "/client-portal", icon: LayoutDashboard },
    { label: "Mentor Portal", route: "/mentor-portal", icon: LayoutDashboard },
    { label: "Notifications", route: "/notifications", icon: Bell },
  ];

  const titleMap: Record<string, string> = {
    "/": "Home / Idea Submission",
    "/report": "AI Validation Report",
    "/contact": "Contact Information",
    "/client-portal": "Client Portal",
    "/mentor-portal": "Mentor Portal",
    "/notifications": "Notifications",
  };

  const pageTitle = useMemo(() => {
    if (titleMap[location.pathname]) return titleMap[location.pathname];
    if (location.pathname.startsWith("/client-portal")) return "Client Portal";
    if (location.pathname.startsWith("/mentor-portal")) return "Mentor Portal";
    return "Norcat Innovation Platform";
  }, [location.pathname]);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
  };

  const themeLabel = theme === "light" ? "Light" : "Dark";

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <div className="px-2 py-1 text-sm font-semibold text-sidebar-foreground">
            Norcat Innovation Platform
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarMenu>
            {navigation.map((navItem) => (
              <SidebarMenuItem key={navItem.route}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === navItem.route}
                  tooltip={navItem.label}
                >
                  <Link to={navItem.route}>
                    <navItem.icon />
                    <span>{navItem.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <Button variant="outline" className="justify-start gap-2" onClick={toggleTheme}>
            <SunMoon className="h-4 w-4" />
            <span>Theme: {themeLabel}</span>
          </Button>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-w-0">
        <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
          <div className="flex h-14 items-center justify-between px-4 md:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <SidebarTrigger />
              <Separator orientation="vertical" className="h-5" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <Header />
          </div>
        </header>

        <div className="flex-1 w-full min-w-0 p-4 md:p-6">
          <Outlet />
        </div>

        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}