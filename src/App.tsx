import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Credits from "./pages/Credits";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/darwinsamazingtheories">
        <Routes>
          <Route path="/darwinsamazingtheories/" element={<Index />} />
          <Route path="/darwinsamazingtheories/page-1" element={<Page1 />} />
          <Route path="/darwinsamazingtheories/page-2" element={<Page2 />} />
          <Route path="/darwinsamazingtheories/page-3" element={<Page3 />} />
          <Route path="/darwinsamazingtheories/page-4" element={<Page4 />} />
          <Route path="/darwinsamazingtheories/page-5" element={<Page5 />} />
          <Route path="/darwinsamazingtheories/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
