import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Progress } from "../components/ui/progress";
import { Textarea } from "../components/ui/textarea";

import { Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Report() {
    const [idea, setIdea] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const generateReport = () => {
      setIsGenerating(true)
      window.setTimeout(() => {
        setIsGenerating(false)
      }, 1000)
    }
    const navigate = useNavigate()
    const [approved, setApproved] = useState(false)
    const cards = [
      { title: "Idea Validation", score: 82, note: "Strong articulation of customer pain point." },
      { title: "Opportunity Ranking", score: 74, note: "Good market indicators with moderate competition pressure." },
      { title: "Problem Clarity", score: 88, note: "Problem statement is clear and measurable." },
      { title: "Search Interest Trend", score: 67, note: "Interest is rising but clustered in niche regions." },
      { title: "Target Customer Snapshot", score: 79, note: "Clear ICP definition with early adopter channels." },
      { title: "Business Fit", score: 76, note: "Revenue model shows promise with pricing validation needed." },
      { title: "Appropriate Funding", score: 63, note: "Recommend staged fundraising milestones." },
      { title: "Market Analogues", score: 72, note: "Comparable startups validate segment demand." },
      { title: "Ideal Customers", score: 85, note: "Strong alignment with pain-aware buyer segments." },
      { title: "Founder Readiness", score: 80, note: "Execution readiness is high with mentoring support." },
    ]
    const averageScore = useMemo(() => {
      const total = cards.reduce((sum, card) => sum + card.score, 0)
      return Math.round(total / cards.length)
    }, [cards])
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
          <section className="mx-auto w-full max-w-4xl">
      <Card>
      <CardHeader>
      <CardTitle>Describe your startup idea</CardTitle>
      <CardDescription>Explain the problem, your solution, and target users...</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
      <Textarea
      value={idea}
      onChange={(event) => setIdea(event.target.value)}
      className="min-h-[180px]"
      placeholder="Describe your startup concept"
      />
      <div className="flex justify-end">
      <Button onClick={generateReport} disabled={!idea.trim() || isGenerating} className="gap-2">
      <Sparkles className="h-4 w-4" />
      {isGenerating ? "Generating..." : "Generate AI Report"}
      </Button>
      </div>
      </CardContent>
      </Card>
      </section>
  <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">Generated Report Cards</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
      <Card key={card.title}>
      <CardHeader>
      <CardTitle className="text-base">{card.title}</CardTitle>
      <div className="flex items-center justify-between">
      <Badge variant={card.score >= 75 ? "default" : "secondary"}>{card.score}%</Badge>
      <span className="text-xs text-muted-foreground">Confidence</span>
      </div>
      </CardHeader>
      <CardContent className="space-y-2">
      <Progress value={card.score} />
      <p className="text-sm text-muted-foreground">{card.note}</p>
      </CardContent>
      </Card>
      ))}
      </div>

      <Card className="mt-4">
      <CardHeader>
      <CardTitle>Approve for Submission</CardTitle>
      <CardDescription>Confirm that the generated report reflects your current venture direction.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
      <label className="flex items-center gap-2 text-sm">
      <Checkbox checked={approved} onCheckedChange={(checked) => setApproved(Boolean(checked))} />
      I approve this AI-generated report for submission.
      </label>
      <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">Average score: {averageScore}%</p>
      <Button disabled={!approved} onClick={() => navigate("/contact")}>Approve & Continue</Button>
      </div>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}