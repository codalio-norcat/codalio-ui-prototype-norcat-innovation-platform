import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useMemo, useState } from "react";

export default function ClientPortalReports() {
    const [query, setQuery] = useState("")
    const [selected, setSelected] = useState("1")
    const reports = [
      { id: "1", name: "AI Validation - Mobility SaaS", status: "Approved", date: "2026-07-10" },
      { id: "2", name: "Customer Snapshot - EdTech", status: "Draft", date: "2026-07-08" },
      { id: "3", name: "Funding Fit - Health AI", status: "Submitted", date: "2026-07-05" },
    ]
    const filtered = useMemo(() => {
      return reports.filter((report) => report.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, reports])
    const details = [
      { title: "Idea Validation", description: "The core value proposition is validated by a clear unmet need and testable assumptions." },
      { title: "Opportunity Ranking", description: "The opportunity sits in the upper quartile for growth potential in comparable sectors." },
      { title: "Founder Readiness", description: "Execution capability is strong with focus required on go-to-market milestones." },
    ]
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="space-y-4">
      <Card>
      <CardHeader>
      <CardTitle>Your AI Reports</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <Input
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Search by report name"
      className="md:max-w-sm"
      />
      <p className="text-sm text-muted-foreground">{filtered.length} results</p>
      </div>
      <div className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Report</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Date</TableHead>
      <TableHead className="text-right">Actions</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {filtered.map((report) => (
      <TableRow key={report.id}>
      <TableCell>{report.name}</TableCell>
      <TableCell><Badge variant="secondary">{report.status}</Badge></TableCell>
      <TableCell>{report.date}</TableCell>
      <TableCell className="text-right">
      <Button size="sm" variant="outline" onClick={() => setSelected(report.id)}>Open</Button>
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
      <CardContent className="p-4">
      <Accordion type="single" collapsible defaultValue="item-1">
      {details.map((item, index) => (
      <AccordionItem key={item.title} value={`item-${index + 1}`}>
      <AccordionTrigger>{item.title}</AccordionTrigger>
      <AccordionContent>
      <p className="text-sm text-muted-foreground">{item.description}</p>
      </AccordionContent>
      </AccordionItem>
      ))}
      </Accordion>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}