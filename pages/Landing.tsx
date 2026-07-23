import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Textarea } from "../components/ui/textarea";

import { ArrowRight, ArrowRightCircle, BarChart3, FileCheck2, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate()
    const [idea, setIdea] = useState("")
    const previewImages = [
      "/images/ui-prototype/849822.jpg",
      "/images/ui-prototype/849822.jpg",
      "/images/ui-prototype/849822.jpg",
    ]
    const handleGenerate = () => {
      if (!idea.trim()) return
      navigate("/report")
    }
    const features = [
      { title: "Idea Validation Report", description: "Get structured scoring across core startup criteria.", icon: FileCheck2 },
      { title: "Opportunity Ranking", description: "Assess market fit and potential growth trajectory.", icon: BarChart3 },
      { title: "Mentor Coordination", description: "Connect with mentors aligned to your sector and stage.", icon: Users },
      { title: "Actionable Next Steps", description: "Move fast with prioritized recommendations.", icon: ArrowRightCircle },
    ]
    const steps = [
      "Submit your startup idea",
      "Review AI-generated report cards",
      "Approve report",
      "Share contact details to continue",
    ]
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-8 px-4 py-6 md:px-6">
          <section className="grid gap-6 lg:grid-cols-2 items-stretch">
      <div className="relative overflow-hidden rounded-xl border border-border bg-card">
      <img
      src="/images/ui-prototype/849822.jpg"
      alt="Startup collaboration"
      className="h-full min-h-72 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
      <p className="text-sm uppercase tracking-[0.18em] text-white/80">Founder Workflow</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Validate your startup idea in minutes</h1>
      <p className="mt-3 max-w-xl text-sm text-white/85 md:text-base">
      Turn raw ideas into actionable insights with AI scorecards and guided next steps for founder-mentor collaboration.
      </p>
      </div>
      </div>

      <Card className="shadow-lg">
      <CardHeader>
      <Badge className="w-fit gap-1 bg-accent text-accent-foreground">
      <Sparkles className="h-3.5 w-3.5" />
      AI-Powered Validation
      </Badge>
      <CardTitle>Describe your startup idea</CardTitle>
      <CardDescription>Include the problem, your solution, and target users to generate a tailored report.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
      <Textarea
      value={idea}
      onChange={(event) => setIdea(event.target.value)}
      placeholder="We're building a platform that helps remote teams discover skill gaps and match employees with mentors..."
      className="min-h-44"
      />
      <div className="flex flex-col gap-2 sm:flex-row">
      <Button onClick={handleGenerate} className="gap-2">
      Generate Report
      <ArrowRight className="h-4 w-4" />
      </Button>
      <Button variant="outline" onClick={() => navigate("/client-portal")}>Explore Client Portal</Button>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2">
      {previewImages.map((src, idx) => (
      <img key={src} src={src} alt={`Startup workspace ${idx + 1}`} className="h-20 w-full rounded-md object-cover" />
      ))}
      </div>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <div className="space-y-1">
      <h2 className="text-2xl font-semibold tracking-tight">Designed for founders and mentors</h2>
      <p className="text-muted-foreground">Everything needed to move from idea to traction with the right support network.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
      <Card key={feature.title} className="h-full shadow-sm transition-colors duration-200 hover:border-primary/50">
      <CardHeader>
      <feature.icon className="h-5 w-5 text-primary" />
      <CardTitle className="text-base">{feature.title}</CardTitle>
      <CardDescription>{feature.description}</CardDescription>
      </CardHeader>
      </Card>
      ))}
      </div>
      </section>
  <section className="space-y-5">
      <h2 className="text-2xl font-semibold tracking-tight">Simple workflow</h2>
      <div className="grid gap-4 md:grid-cols-4">
      {steps.map((step, index) => (
      <Card key={step} className="bg-card">
      <CardContent className="space-y-3 p-4">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Step {index + 1}</p>
      <p className="font-medium text-foreground">{step}</p>
      </CardContent>
      </Card>
      ))}
      </div>
      <Separator />
      <Button variant="secondary" className="gap-2" disabled>
      Guided process active after report generation
      <ArrowRight className="h-4 w-4" />
      </Button>
      </section>
  <section className="pt-2">
      <Card className="border-primary/20 bg-primary text-primary-foreground shadow-md">
      <CardContent className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
      <div className="space-y-1">
      <h3 className="text-2xl font-semibold">Ready to move your idea forward?</h3>
      <p className="max-w-2xl text-primary-foreground/90">
      Generate your first validation report and connect with the right mentor support.
      </p>
      </div>
      <Button variant="secondary" onClick={() => navigate("/report")}>Start Now</Button>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}