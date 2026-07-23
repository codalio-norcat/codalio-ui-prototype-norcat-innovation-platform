import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useMemo, useState } from "react";

export default function ClientPortalMentors() {
    const [search, setSearch] = useState("")
    const [availability, setAvailability] = useState("all")
    const [requested, setRequested] = useState<Array<string>>([])
    const mentors = [
      { id: "1", name: "Janelle Carter", expertise: "Go-to-market strategy", availability: "open", availabilityLabel: "Open this week", image: "/images/ui-prototype/1563998.jpg" },
      { id: "2", name: "Amir Thompson", expertise: "B2B sales systems", availability: "limited", availabilityLabel: "Limited", image: "/images/ui-prototype/1563998.jpg" },
      { id: "3", name: "Priya Bains", expertise: "Product validation", availability: "open", availabilityLabel: "Open this week", image: "/images/ui-prototype/1563998.jpg" },
      { id: "4", name: "Marco Delaney", expertise: "Fundraising and investor prep", availability: "limited", availabilityLabel: "Limited", image: "/images/ui-prototype/1563998.jpg" },
      { id: "5", name: "Sophie Nguyen", expertise: "Operations and scaling", availability: "open", availabilityLabel: "Open this week", image: "/images/ui-prototype/1563998.jpg" },
      { id: "6", name: "Daniel Roy", expertise: "AI product architecture", availability: "open", availabilityLabel: "Open this week", image: "/images/ui-prototype/1563998.jpg" },
    ]
    const filteredMentors = useMemo(() => {
      return mentors.filter((mentor) => {
        const matchesSearch = `${mentor.name} ${mentor.expertise}`.toLowerCase().includes(search.toLowerCase())
        const matchesAvailability = availability === "all" || mentor.availability === availability
        return matchesSearch && matchesAvailability
      })
    }, [availability, mentors, search])
    const requestConnection = (id: string) => {
      setRequested((prev) => (prev.includes(id) ? prev : [...prev, id]))
    }
    const [requests, setRequests] = useState([
      { id: "1", mentor: "Janelle Carter", focus: "Go-to-market", status: "Pending" },
      { id: "2", mentor: "Priya Bains", focus: "Product validation", status: "Accepted" },
    ])
    const cancelRequest = (id: string) => {
      setRequests((prev) => prev.filter((request) => request.id !== id))
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <Input
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      placeholder="Search mentor by name or expertise"
      className="md:max-w-sm"
      />
      <Select value={availability} onValueChange={setAvailability}>
      <SelectTrigger className="md:w-52">
      <SelectValue placeholder="Availability" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="all">All availability</SelectItem>
      <SelectItem value="open">Open this week</SelectItem>
      <SelectItem value="limited">Limited</SelectItem>
      </SelectContent>
      </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {filteredMentors.map((mentor) => (
      <Card key={mentor.id}>
      <CardHeader className="space-y-2">
      <Avatar className="h-14 w-14">
      <AvatarImage src={mentor.image} alt={mentor.name} />
      <AvatarFallback>{mentor.name.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <CardTitle className="text-base">{mentor.name}</CardTitle>
      <CardDescription>{mentor.expertise}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
      <Badge variant="secondary">{mentor.availabilityLabel}</Badge>
      <Button className="w-full" onClick={() => requestConnection(mentor.id)}>
      {requested.includes(mentor.id) ? "Requested" : "Request Connection"}
      </Button>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader>
      <CardTitle>Connection Requests</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Mentor</TableHead>
      <TableHead>Focus</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Action</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {requests.map((request) => (
      <TableRow key={request.id}>
      <TableCell>{request.mentor}</TableCell>
      <TableCell>{request.focus}</TableCell>
      <TableCell><Badge variant="secondary">{request.status}</Badge></TableCell>
      <TableCell className="text-right">
      <Button size="sm" variant="ghost" onClick={() => cancelRequest(request.id)}>Cancel</Button>
      </TableCell>
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