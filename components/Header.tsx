import { useState } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Bell, ChevronDown } from "lucide-react";

export default function Header() {
  const [role, setRole] = useState("Founder");

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
        <Bell className="h-4 w-4" />
        <Badge className="absolute -right-1 -top-1 h-5 min-w-5 px-1 text-[10px]">3</Badge>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Avatar className="h-7 w-7">
              <AvatarFallback>NI</AvatarFallback>
            </Avatar>
            <span className="hidden sm:inline">{role}</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setRole("Founder")}>Founder</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setRole("Mentor")}>Mentor</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/notifications">View Notifications</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}