import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";

import { useState } from "react";

export default function MentorPortalEthicsAgreements() {
    const items = [
      { id: "conf", label: "I will maintain confidentiality for all venture documents and meetings." },
      { id: "conduct", label: "I agree to the platform's code of conduct and respectful communication standards." },
      { id: "conflict", label: "I will disclose potential conflicts of interest before mentorship sessions." },
    ]
    const [acknowledged, setAcknowledged] = useState<Array<string>>([])
    const toggle = (id: string, checked: boolean) => {
      setAcknowledged((prev) => {
        if (checked) {
          return prev.includes(id) ? prev : [...prev, id]
        }
        return prev.filter((value) => value !== id)
      })
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="max-w-4xl space-y-4">
      <Card>
      <CardHeader>
      <CardTitle>Ethics and Agreements</CardTitle>
      <CardDescription>Acknowledge required policies before continuing mentorship activities.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
      {items.map((item, index) => (
      <div key={item.id} className="space-y-3">
      <div className="flex items-start justify-between gap-3">
      <label className="flex items-start gap-2 text-sm">
      <Checkbox checked={acknowledged.includes(item.id)} onCheckedChange={(checked) => toggle(item.id, Boolean(checked))} />
      <span>{item.label}</span>
      </label>
      <Badge variant={acknowledged.includes(item.id) ? "default" : "secondary"}>
      {acknowledged.includes(item.id) ? "Acknowledged" : "Pending"}
      </Badge>
      </div>
      {index < items.length - 1 ? <Separator /> : null}
      </div>
      ))}
      <div className="flex gap-2">
      <Button disabled={acknowledged.length !== items.length}>Acknowledge</Button>
      <Button variant="outline">Download PDF</Button>
      </div>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
  <Alert>
  <AlertTitle>Maintain confidentiality</AlertTitle>
  <AlertDescription>
  Ensure all venture discussions and documents follow platform ethics and confidentiality requirements.
  </AlertDescription>
  </Alert>
  </section>
      </div>
    </div>
  );
}