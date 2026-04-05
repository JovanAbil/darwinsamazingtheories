import { footerContent } from "@/data/footerContent";

const Footer = () => {
  return (
    <footer className="border-t bg-card/50 py-3 mt-8">
      <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="font-display font-semibold text-foreground">{footerContent.siteName}</span>
        <span className="hidden sm:inline">·</span>
        <span>
          <a href="mailto:abilash.jovan@charterschool.org" className="hover:text-primary transition-colors">{footerContent.authors[0]}</a>
          {" & "}
          <a href="mailto:brown.lucas@charterschool.org" className="hover:text-primary transition-colors">{footerContent.authors[1]}</a>
        </span>
        <span className="hidden sm:inline">·</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
