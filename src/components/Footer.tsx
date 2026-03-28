import { footerContent } from "@/data/footerContent";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <span className="font-display font-bold text-foreground">{footerContent.siteName}</span>
          <span>{footerContent.authors.join(" & ")}</span>
          <a href={`mailto:${footerContent.contactEmail}`} className="bio-link text-xs">
            {footerContent.contactEmail}
          </a>
          <span>Est. {footerContent.dateCreated}</span>
        </div>
        <div className="text-center text-xs text-muted-foreground mt-3">
          © {new Date().getFullYear()} {footerContent.siteName}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
