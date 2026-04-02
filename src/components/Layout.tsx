import type { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Footer from "./Footer";
import CounterDev from "./CounterDev";
import RandomPopup from "./RandomPopup";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full overflow-x-hidden">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
          <header className="h-14 flex items-center border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
            <SidebarTrigger className="ml-3" />
            <span className="ml-3 font-display font-bold text-lg text-foreground">BioSphere</span>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
      <CounterDev />
      <RandomPopup />
    </SidebarProvider>
  );
};

export default Layout;
