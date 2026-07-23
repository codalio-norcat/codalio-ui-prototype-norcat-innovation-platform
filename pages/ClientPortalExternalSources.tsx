import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";

import { useMemo, useState } from "react";

export default function ClientPortalExternalSources() {
    const [query, setQuery] = useState("")
    const [saved, setSaved] = useState<Array<string>>([])
    const resources = [
      { id: "1", title: "Early-stage SaaS Metrics", category: "Metrics", description: "Benchmarks for activation, retention, and pipeline conversion.", url: "https://example.com/resource-1" },
      { id: "2", title: "Founder Interview Guide", category: "Research", description: "Question set for validating customer pain points.", url: "https://example.com/resource-2" },
      { id: "3", title: "Investor Narrative Template", category: "Fundraising", description: "Narrative structure for pre-seed and seed conversations.", url: "https://example.com/resource-3" },
    ]
    const filtered = useMemo(() => {
      return resources.filter((resource) => `${resource.title} ${resource.category}`.toLowerCase().includes(query.toLowerCase()))
    }, [query, resources])
    const saveResource = (id: string) => {
      setSaved((prev) => (prev.includes(id) ? prev : [...prev, id]))
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="space-y-4">
      <Input
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Filter by topic"
      className="max-w-sm"
      />
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
      <Button size="sm" asChild>
      <a href={resource.url} target="_blank" rel="noreferrer">Open Link</a>
      </Button>
      <Button size="sm" variant="outline" onClick={() => saveResource(resource.id)}>
      {saved.includes(resource.id) ? "Saved" : "Save"}
      </Button>
      </CardContent>
      </Card>
      ))}
      </div>
      </section>
  <section className="space-y-4">
  <Alert>
  <AlertTitle>Need something specific?</AlertTitle>
  <AlertDescription>
  Use the mentor portal meeting workflow to request curated resources from your assigned mentor.
  </AlertDescription>
  </Alert>
  </section>
      </div>
    </div>
  );
}