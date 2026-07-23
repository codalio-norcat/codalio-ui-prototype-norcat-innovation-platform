import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useState } from "react";

export default function ClientPortalEvents() {
    const [events, setEvents] = useState([
      { id: "1", title: "Founder Fundraising Clinic", type: "Workshop", date: "Jul 24", location: "Virtual", registered: false },
      { id: "2", title: "Northern Ontario Demo Day", type: "Event", date: "Jul 30", location: "Sudbury", registered: true },
    ])
    const register = (id: string) => {
      setEvents((prev) => prev.map((event) => (event.id === id ? { ...event, registered: true } : event)))
    }
    const registrations = [
      { event: "Northern Ontario Demo Day", ticket: "General", status: "Confirmed" },
      { event: "Founder Fundraising Clinic", ticket: "Virtual", status: "Pending" },
    ]
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
      {events.map((event) => (
      <Card key={event.id}>
      <CardHeader>
      <div className="flex items-center justify-between gap-2">
      <CardTitle className="text-base">{event.title}</CardTitle>
      <Badge variant="secondary">{event.type}</Badge>
      </div>
      </CardHeader>
      <CardContent className="space-y-3">
      <p className="text-sm text-muted-foreground">{event.date} · {event.location}</p>
      <div className="flex gap-2">
      <Button size="sm" onClick={() => register(event.id)}>
      {event.registered ? "Registered" : "Register"}
      </Button>
      <Button size="sm" variant="outline">View Details</Button>
      </div>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader>
      <CardTitle>Registrations</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Event</TableHead>
      <TableHead>Ticket</TableHead>
      <TableHead>Status</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {registrations.map((registration) => (
      <TableRow key={registration.event}>
      <TableCell>{registration.event}</TableCell>
      <TableCell>{registration.ticket}</TableCell>
      <TableCell><Badge variant="secondary">{registration.status}</Badge></TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}