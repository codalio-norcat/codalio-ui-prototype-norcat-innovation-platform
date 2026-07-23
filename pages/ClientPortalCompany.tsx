import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Textarea } from "../components/ui/textarea";

import { useState } from "react";

export default function ClientPortalCompany() {
    const [profile, setProfile] = useState({
      company: "",
      website: "",
      summary: "",
    })
    const onChangeField = (field: string, value: string) => {
      setProfile((prev) => ({ ...prev, [field]: value }))
    }
    const saveProfile = (event) => {
      event.preventDefault()
    }
    const [documents, setDocuments] = useState([
      { id: "1", name: "Pitch Deck.pdf", status: "Approved", updated: "Today" },
      { id: "2", name: "Financial Model.xlsx", status: "Review", updated: "2 days ago" },
    ])
    const uploadMock = () => {
      setDocuments((prev) => [
        ...prev,
        { id: `${prev.length + 1}`, name: `Upload-${prev.length + 1}.pdf`, status: "New", updated: "Just now" },
      ])
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="max-w-4xl">
      <Card>
      <CardHeader>
      <CardTitle>Company Profile</CardTitle>
      </CardHeader>
      <CardContent>
      <form className="grid gap-4" onSubmit={saveProfile}>
      <div className="grid gap-2 md:grid-cols-2">
      <div className="grid gap-2">
      <Label htmlFor="company">Company name</Label>
      <Input id="company" value={profile.company} onChange={(event) => onChangeField("company", event.target.value)} />
      </div>
      <div className="grid gap-2">
      <Label htmlFor="website">Website</Label>
      <Input id="website" value={profile.website} onChange={(event) => onChangeField("website", event.target.value)} />
      </div>
      </div>
      <div className="grid gap-2">
      <Label htmlFor="summary">Summary</Label>
      <Textarea id="summary" value={profile.summary} onChange={(event) => onChangeField("summary", event.target.value)} />
      </div>
      <div className="flex justify-end">
      <Button type="submit">Save Company Details</Button>
      </div>
      </form>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>Documents</CardTitle>
      <Button size="sm" onClick={uploadMock}>Upload</Button>
      </CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Updated</TableHead>
      <TableHead className="text-right">Actions</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {documents.map((doc) => (
      <TableRow key={doc.id}>
      <TableCell>{doc.name}</TableCell>
      <TableCell><Badge variant="secondary">{doc.status}</Badge></TableCell>
      <TableCell>{doc.updated}</TableCell>
      <TableCell className="text-right">
      <div className="flex justify-end gap-2">
      <Button size="sm" variant="outline">View</Button>
      <Button size="sm" variant="ghost">Download</Button>
      </div>
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