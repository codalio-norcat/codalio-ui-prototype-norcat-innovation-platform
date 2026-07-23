import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MentorPortal() {
    const navigate = useNavigate()
    const items = [
      { label: "Dashboard", route: "/mentor-portal/dashboard" },
      { label: "Resources", route: "/mentor-portal/resources" },
      { label: "Ethics & Agreements", route: "/mentor-portal/ethics-agreements" },
      { label: "Raise a Concern", route: "/mentor-portal/raise-concern" },
    ]
    const stats = [
      { label: "Assigned Ventures", value: "12", note: "2 new" },
      { label: "Meetings This Week", value: "5", note: "1 today" },
      { label: "Pending Notes", value: "3", note: "Due EOD" },
      { label: "Open Concerns", value: "1", note: "Review" },
    ]
    const [notices, setNotices] = useState([
      { id: "1", message: "Meeting notes requested for Mobility SaaS venture." },
      { id: "2", message: "New founder intro available for your review." },
    ])
    const dismiss = (id: string) => {
      setNotices((prev) => prev.filter((notice) => notice.id !== id))
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Mentor workspace</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
      <Card key={item.route}>
      <CardHeader>
      <CardTitle className="text-base">{item.label}</CardTitle>
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
      <h2 className="text-xl font-semibold">Today at a glance</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
      <Card key={stat.label}>
      <CardHeader className="pb-2">
      <CardTitle className="text-sm text-muted-foreground">{stat.label}</CardTitle>
      </CardHeader>
      <CardContent>
      <p className="text-2xl font-semibold">{stat.value}</p>
      <Badge variant="secondary" className="mt-2">{stat.note}</Badge>
      </CardContent>
      </Card>
      ))}
      </div>

      <Card>
      <CardHeader>
      <CardTitle>Notifications Preview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
      {notices.map((notice) => (
      <div key={notice.id} className="flex items-center justify-between rounded-lg border border-border p-3">
      <p className="text-sm">{notice.message}</p>
      <Button size="sm" variant="ghost" onClick={() => dismiss(notice.id)}>Dismiss</Button>
      </div>
      ))}
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}