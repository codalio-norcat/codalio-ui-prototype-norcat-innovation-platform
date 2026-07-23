import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="border-t bg-card px-4 py-5 md:px-6">
      <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>© Norcat Innovation Platform</span>
        <Separator orientation="vertical" className="hidden h-4 md:block" />
        <div className="flex items-center gap-2">
          <Button asChild variant="link" className="h-auto p-0 text-muted-foreground">
            <Link to="/">Privacy</Link>
          </Button>
          <Button asChild variant="link" className="h-auto p-0 text-muted-foreground">
            <Link to="/notifications">Support</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}