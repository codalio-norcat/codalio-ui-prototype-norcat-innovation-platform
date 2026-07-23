import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { useMemo, useState } from "react";

export default function Notifications() {
    const [tab, setTab] = useState("all")
    const [items, setItems] = useState([
      { id: "1", title: "Founder approved report submission", category: "client", time: "15 min ago", read: false },
      { id: "2", title: "Meeting scheduled for Friday", category: "mentor", time: "1 hour ago", read: true },
      { id: "3", title: "Platform maintenance reminder", category: "system", time: "Yesterday", read: false },
    ])
    const filtered = useMemo(() => {
      if (tab === "all") return items
      return items.filter((item) => item.category === tab)
    }, [items, tab])
    const toggleRead = (id: string) => {
      setItems((prev) => prev.map((item) => (item.id === id ? { ...item, read: !item.read } : item)))
    }
    const archive = (id: string) => {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }
    const channels = [
      { key: "email", label: "Email" },
      { key: "inApp", label: "In-app" },
      { key: "sms", label: "SMS" },
    ]
    const [prefs, setPrefs] = useState({
      email: true,
      inApp: true,
      sms: false,
    })
    const savePrefs = () => {
      window.alert("Preferences saved")
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="mx-auto w-full max-w-5xl space-y-4">
      <Card>
      <CardHeader>
      <CardTitle>All Notifications</CardTitle>
      </CardHeader>
      <CardContent>
      <Tabs value={tab} onValueChange={setTab}>
      <TabsList>
      <TabsTrigger value="all">All</TabsTrigger>
      <TabsTrigger value="mentor">Mentor</TabsTrigger>
      <TabsTrigger value="client">Client</TabsTrigger>
      <TabsTrigger value="system">System</TabsTrigger>
      </TabsList>
      <TabsContent value={tab} className="mt-4">
      <ScrollArea className="h-80 pr-3">
      <div className="space-y-3">
      {filtered.map((item, index) => (
      <div key={item.id} className="space-y-3 rounded-lg border border-border p-3">
      <div className="flex items-start justify-between gap-3">
      <div className="space-y-1">
      <p className="text-sm font-medium">{item.title}</p>
      <p className="text-xs text-muted-foreground">{item.time}</p>
      </div>
      <Badge variant="secondary">{item.category}</Badge>
      </div>
      <div className="flex items-center justify-between">
      <label className="flex items-center gap-2 text-xs text-muted-foreground">
      <Checkbox checked={item.read} onCheckedChange={() => toggleRead(item.id)} />
      Mark as read
      </label>
      <div className="flex gap-2">
      <Button size="sm" variant="ghost" onClick={() => toggleRead(item.id)}>
      {item.read ? "Unread" : "Mark as Read"}
      </Button>
      <Button size="sm" variant="outline" onClick={() => archive(item.id)}>Archive</Button>
      </div>
      </div>
      {index < filtered.length - 1 ? <Separator /> : null}
      </div>
      ))}
      </div>
      </ScrollArea>
      </TabsContent>
      </Tabs>
      </CardContent>
      </Card>
      </section>
  <section className="mx-auto w-full max-w-5xl">
      <Card>
      <CardHeader>
      <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
      {channels.map((channel) => (
      <div key={channel.key} className="flex items-center justify-between rounded-lg border border-border p-3">
      <Label htmlFor={channel.key}>{channel.label}</Label>
      <Switch
      id={channel.key}
      checked={prefs[channel.key]}
      onCheckedChange={(checked) => setPrefs((prev) => ({ ...prev, [channel.key]: checked }))}
      />
      </div>
      ))}
      <Button onClick={savePrefs}>Save Preferences</Button>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}