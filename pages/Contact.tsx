import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const [form, setForm] = useState({
      full_name: "",
      email: "",
      phone: "",
      organization: "",
      stage: "",
      notes: "",
    })
    const [consent, setConsent] = useState(false)
    const updateField = (field: string, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }))
    }
    const handleSubmit = (event) => {
      event.preventDefault()
    }
    const navigate = useNavigate()
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-5xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="mx-auto w-full max-w-3xl">
      <Card>
      <CardHeader>
      <CardTitle>Share your details</CardTitle>
      <CardDescription>Complete this form to submit your report and connect with support resources.</CardDescription>
      </CardHeader>
      <CardContent>
      <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
      <Label htmlFor="full_name">Full name</Label>
      <Input id="full_name" value={form.full_name} onChange={(event) => updateField("full_name", event.target.value)} required />
      </div>
      <div className="grid gap-2 md:grid-cols-2">
      <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} required />
      </div>
      <div className="grid gap-2">
      <Label htmlFor="phone">Phone</Label>
      <Input id="phone" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
      </div>
      </div>
      <div className="grid gap-2">
      <Label htmlFor="organization">Organization</Label>
      <Input id="organization" value={form.organization} onChange={(event) => updateField("organization", event.target.value)} />
      </div>
      <div className="grid gap-2">
      <Label>Stage</Label>
      <Select value={form.stage} onValueChange={(value) => updateField("stage", value)}>
      <SelectTrigger>
      <SelectValue placeholder="Select venture stage" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="idea">Idea</SelectItem>
      <SelectItem value="mvp">MVP</SelectItem>
      <SelectItem value="early_revenue">Early Revenue</SelectItem>
      <SelectItem value="scale">Scaling</SelectItem>
      </SelectContent>
      </Select>
      </div>
      <div className="grid gap-2">
      <Label htmlFor="notes">Anything else we should know?</Label>
      <Textarea id="notes" value={form.notes} onChange={(event) => updateField("notes", event.target.value)} />
      </div>
      <label className="flex items-center gap-2 text-sm">
      <Checkbox checked={consent} onCheckedChange={(checked) => setConsent(Boolean(checked))} />
      I consent to being contacted by the Norcat Innovation team.
      </label>
      <div className="flex justify-end">
      <Button type="submit" disabled={!consent}>Submit Report & Contact Info</Button>
      </div>
      </form>
      </CardContent>
      </Card>
      </section>
  <section className="mx-auto w-full max-w-3xl">
      <Alert className="border-primary/30 bg-primary/5">
      <CircleCheck className="h-4 w-4 text-primary" />
      <AlertTitle>What happens next?</AlertTitle>
      <AlertDescription className="mt-2 space-y-4">
      <p>Our team and mentor network will review your submission and follow up with next steps.</p>
      <Button onClick={() => navigate("/notifications")}>Go to Notifications</Button>
      </AlertDescription>
      </Alert>
      </section>
      </div>
    </div>
  );
}