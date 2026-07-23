import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Textarea } from "../components/ui/textarea";

import { useState } from "react";

export default function MentorPortalRaiseConcern() {
    const [form, setForm] = useState({
      type: "",
      subject: "",
      details: "",
      confirmed: false,
    })
    const updateField = (field: string, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }))
    }
    const submitConcern = (event) => {
      event.preventDefault()
    }
    const concerns = [
      { date: "2026-07-09", subject: "Communication delay", status: "In review" },
      { date: "2026-06-28", subject: "Access request", status: "Resolved" },
    ]
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="max-w-3xl">
      <Card>
      <CardHeader>
      <CardTitle>Submit a concern</CardTitle>
      <CardDescription>Raise a concern for review by the platform team.</CardDescription>
      </CardHeader>
      <CardContent>
      <form className="space-y-4" onSubmit={submitConcern}>
      <Select value={form.type} onValueChange={(value) => updateField("type", value)}>
      <SelectTrigger>
      <SelectValue placeholder="Concern type" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="conduct">Conduct</SelectItem>
      <SelectItem value="confidentiality">Confidentiality</SelectItem>
      <SelectItem value="safety">Safety</SelectItem>
      <SelectItem value="other">Other</SelectItem>
      </SelectContent>
      </Select>
      <Input value={form.subject} onChange={(event) => updateField("subject", event.target.value)} placeholder="Subject" />
      <Textarea value={form.details} onChange={(event) => updateField("details", event.target.value)} placeholder="Describe the concern" />
      <label className="flex items-center gap-2 text-sm">
      <Checkbox checked={form.confirmed} onCheckedChange={(checked) => setForm((prev) => ({ ...prev, confirmed: Boolean(checked) }))} />
      I confirm the submitted information is accurate.
      </label>
      <div className="flex justify-end">
      <Button type="submit" disabled={!form.confirmed}>Submit Concern</Button>
      </div>
      </form>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader>
      <CardTitle>Recent concerns</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Date</TableHead>
      <TableHead>Subject</TableHead>
      <TableHead>Status</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {concerns.map((concern) => (
      <TableRow key={concern.subject}>
      <TableCell>{concern.date}</TableCell>
      <TableCell>{concern.subject}</TableCell>
      <TableCell><Badge variant="secondary">{concern.status}</Badge></TableCell>
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