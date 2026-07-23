import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientPortal() {
    const navigate = useNavigate()
    const items = [
      { label: "Company", route: "/client-portal/company" },
      { label: "Reports", route: "/client-portal/reports" },
      { label: "Events", route: "/client-portal/events" },
      { label: "Mentors", route: "/client-portal/mentors" },
      { label: "External Sources", route: "/client-portal/external-sources" },
    ]
    const stats = [
      { label: "Active Report", value: "1", delta: "Updated today" },
      { label: "Upcoming Event", value: "2", delta: "Next: Friday" },
      { label: "Mentor Connections", value: "4", delta: "+1 this week" },
      { label: "Unread Notifications", value: "7", delta: "2 urgent" },
    ]
    const [activity, setActivity] = useState([
      { id: "1", title: "Opportunity ranking score refreshed", time: "10 mins ago" },
      { id: "2", title: "Mentor request accepted by J. Patel", time: "1 hour ago" },
      { id: "3", title: "Funding benchmark report uploaded", time: "Yesterday" },
    ])
    const dismiss = (id: string) => {
      setActivity((prev) => prev.filter((item) => item.id !== id))
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Client workspace</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {items.map((item) => (
      <Card key={item.route}>
      <CardHeader>
      <CardTitle className="text-base">{item.label}</CardTitle>
      <CardDescription>Open the {item.label.toLowerCase()} area.</CardDescription>
      </CardHeader>
      <CardContent>
      <Button variant="outline" className="w-full justify-between" onClick={() => navigate(item.route)}>
      Open
      <ArrowRight className="h-4 w-4" />
      </Button>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
  <section className="space-y-4">
      <h2 className="text-xl font-semibold">At a glance</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
      <Card key={stat.label}>
      <CardHeader className="pb-2">
      <CardTitle className="text-sm text-muted-foreground">{stat.label}</CardTitle>
      </CardHeader>
      <CardContent>
      <p className="text-2xl font-semibold">{stat.value}</p>
      <Badge variant="secondary" className="mt-2">{stat.delta}</Badge>
      </CardContent>
      </Card>
      ))}
      </div>

      <Card className="mt-2">
      <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
      {activity.map((item, index) => (
      <div key={item.id} className="space-y-3">
      <div className="flex items-center justify-between gap-3">
      <div>
      <p className="text-sm font-medium">{item.title}</p>
      <p className="text-xs text-muted-foreground">{item.time}</p>
      </div>
      <Button variant="ghost" size="sm" onClick={() => dismiss(item.id)}>Dismiss</Button>
      </div>
      {index < activity.length - 1 ? <Separator /> : null}
      </div>
      ))}
      {activity.length === 0 ? <p className="text-sm text-muted-foreground">You are all caught up.</p> : null}
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}