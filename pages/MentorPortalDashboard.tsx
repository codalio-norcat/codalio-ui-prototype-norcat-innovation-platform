import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";

import { useMemo, useState } from "react";

export default function MentorPortalDashboard() {
    const [query, setQuery] = useState("")
    const ventures = [
      { id: "1", name: "Pulse Logistics", stage: "MVP", status: "Active" },
      { id: "2", name: "MediRoute AI", stage: "Pilot", status: "Needs follow-up" },
      { id: "3", name: "Cobalt Supply", stage: "Revenue", status: "Active" },
    ]
    const filtered = useMemo(() => {
      return ventures.filter((venture) => venture.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, ventures])
    const [tab, setTab] = useState("upcoming")
    const [meetings, setMeetings] = useState({
      upcoming: [
        { id: "1", title: "Go-to-market review", date: "Jul 22, 10:00", founder: "Pulse Logistics" },
        { id: "2", title: "Pilot metrics check-in", date: "Jul 24, 14:00", founder: "MediRoute AI" },
      ],
      past: [
        { id: "3", title: "Problem discovery", date: "Jul 12, 11:00", outcome: "Refined ICP" },
      ],
    })
    const [notes, setNotes] = useState([
      { id: "1", text: "Founder needs support on pricing experiments before next investor call." },
    ])
    const [newMeeting, setNewMeeting] = useState({ title: "", date: "", notes: "" })
    const addMeeting = () => {
      if (!newMeeting.title.trim() || !newMeeting.date.trim()) return
      setMeetings((prev) => ({
        ...prev,
        upcoming: [...prev.upcoming, { id: `${prev.upcoming.length + 4}`, title: newMeeting.title, date: newMeeting.date, founder: "Unassigned" }],
      }))
      if (newMeeting.notes.trim()) {
        setNotes((prev) => [...prev, { id: `${prev.length + 1}`, text: newMeeting.notes }])
      }
      setNewMeeting({ title: "", date: "", notes: "" })
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="space-y-4">
      <Card>
      <CardHeader>
      <CardTitle>Assigned Ventures</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
      <div className="flex justify-between items-center gap-2">
      <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search venture" className="max-w-sm" />
      <p className="text-sm text-muted-foreground">{filtered.length} ventures</p>
      </div>
      <div className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Venture</TableHead>
      <TableHead>Stage</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Actions</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {filtered.map((venture) => (
      <TableRow key={venture.id}>
      <TableCell>{venture.name}</TableCell>
      <TableCell>{venture.stage}</TableCell>
      <TableCell><Badge variant="secondary">{venture.status}</Badge></TableCell>
      <TableCell className="text-right">
      <div className="flex justify-end gap-2">
      <Button size="sm" variant="outline">Open Venture</Button>
      <Button size="sm" variant="ghost">Add Note</Button>
      </div>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </div>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-3">
      <div>
      <CardTitle>Meetings</CardTitle>
      <CardDescription>Track upcoming sessions and capture mentorship notes.</CardDescription>
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button>Schedule Meeting</Button>
      </DialogTrigger>
      <DialogContent>
      <DialogHeader>
      <DialogTitle>Schedule Meeting</DialogTitle>
      </DialogHeader>
      <div className="space-y-3">
      <Input value={newMeeting.title} onChange={(event) => setNewMeeting((prev) => ({ ...prev, title: event.target.value }))} placeholder="Meeting topic" />
      <Input value={newMeeting.date} onChange={(event) => setNewMeeting((prev) => ({ ...prev, date: event.target.value }))} placeholder="Date and time" />
      <Textarea value={newMeeting.notes} onChange={(event) => setNewMeeting((prev) => ({ ...prev, notes: event.target.value }))} placeholder="Agenda" />
      <Button className="w-full" onClick={addMeeting}>Save</Button>
      </div>
      </DialogContent>
      </Dialog>
      </CardHeader>
      <CardContent>
      <Tabs value={tab} onValueChange={setTab}>
      <TabsList>
      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
      <TabsTrigger value="past">Past</TabsTrigger>
      <TabsTrigger value="notes">Notes</TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming" className="mt-4 overflow-x-auto">
      <Table>
      <TableHeader><TableRow><TableHead>Topic</TableHead><TableHead>Date</TableHead><TableHead>Founder</TableHead></TableRow></TableHeader>
      <TableBody>
      {meetings.upcoming.map((meeting) => (
      <TableRow key={meeting.id}><TableCell>{meeting.title}</TableCell><TableCell>{meeting.date}</TableCell><TableCell>{meeting.founder}</TableCell></TableRow>
      ))}
      </TableBody>
      </Table>
      </TabsContent>

      <TabsContent value="past" className="mt-4 overflow-x-auto">
      <Table>
      <TableHeader><TableRow><TableHead>Topic</TableHead><TableHead>Date</TableHead><TableHead>Outcome</TableHead></TableRow></TableHeader>
      <TableBody>
      {meetings.past.map((meeting) => (
      <TableRow key={meeting.id}><TableCell>{meeting.title}</TableCell><TableCell>{meeting.date}</TableCell><TableCell>{meeting.outcome}</TableCell></TableRow>
      ))}
      </TableBody>
      </Table>
      </TabsContent>

      <TabsContent value="notes" className="mt-4 space-y-2">
      {notes.map((note) => (
      <div key={note.id} className="rounded-lg border border-border p-3 text-sm">{note.text}</div>
      ))}
      </TabsContent>
      </Tabs>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}