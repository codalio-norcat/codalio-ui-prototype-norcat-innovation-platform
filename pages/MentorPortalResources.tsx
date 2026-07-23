import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useMemo, useState } from "react";

export default function MentorPortalResources() {
    const [query, setQuery] = useState("")
    const [category, setCategory] = useState("all")
    const resources = [
      { id: "1", title: "Discovery Interview Template", category: "template", description: "Guide for uncovering pain points in founder interviews." },
      { id: "2", title: "MVP Prioritization Playbook", category: "playbook", description: "Framework for choosing high-impact early features." },
      { id: "3", title: "Pre-Seed Narrative Article", category: "article", description: "How to structure momentum stories for early investors." },
    ]
    const filtered = useMemo(() => {
      return resources.filter((resource) => {
        const matchesQuery = resource.title.toLowerCase().includes(query.toLowerCase())
        const matchesCategory = category === "all" || resource.category === category
        return matchesQuery && matchesCategory
      })
    }, [category, query, resources])
    const shareResource = (id: string) => {
      window.alert(`Resource ${id} shared with founder.`)
    }
    const [saved, setSaved] = useState([
      { id: "1", title: "MVP Prioritization Playbook", type: "Playbook" },
      { id: "2", title: "Funding Milestone Worksheet", type: "Template" },
    ])
    const remove = (id: string) => {
      setSaved((prev) => prev.filter((item) => item.id !== id))
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search resources" className="md:max-w-sm" />
      <Select value={category} onValueChange={setCategory}>
      <SelectTrigger className="md:w-48"><SelectValue placeholder="Category" /></SelectTrigger>
      <SelectContent>
      <SelectItem value="all">All categories</SelectItem>
      <SelectItem value="playbook">Playbook</SelectItem>
      <SelectItem value="template">Template</SelectItem>
      <SelectItem value="article">Article</SelectItem>
      </SelectContent>
      </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
      {filtered.map((resource) => (
      <Card key={resource.id}>
      <CardHeader>
      <div className="flex items-center justify-between gap-2">
      <CardTitle className="text-base">{resource.title}</CardTitle>
      <Badge variant="secondary">{resource.category}</Badge>
      </div>
      <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
      <Button size="sm">Open</Button>
      <Button size="sm" variant="outline" onClick={() => shareResource(resource.id)}>Share with Founder</Button>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
  <section className="space-y-4">
      <Card>
      <CardHeader>
      <CardTitle>Saved Materials</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Title</TableHead>
      <TableHead>Type</TableHead>
      <TableHead className="text-right">Action</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {saved.map((item) => (
      <TableRow key={item.id}>
      <TableCell>{item.title}</TableCell>
      <TableCell>{item.type}</TableCell>
      <TableCell className="text-right">
      <Button size="sm" variant="ghost" onClick={() => remove(item.id)}>Remove</Button>
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