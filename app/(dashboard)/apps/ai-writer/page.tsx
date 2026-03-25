"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Sparkles,
  Copy,
  Download,
  RotateCcw,
  Wand2,
  Mail,
  Share2,
  Newspaper,
  BookOpen,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const contentTypes = [
  { value: "blog", label: "Blog Post", icon: Newspaper },
  { value: "email", label: "Email", icon: Mail },
  { value: "social", label: "Social Media", icon: Share2 },
  { value: "article", label: "Article", icon: BookOpen },
];

const templates = [
  {
    id: 1,
    title: "Product Launch Email",
    category: "Email",
    desc: "Announce a new product or feature with excitement",
  },
  {
    id: 2,
    title: "SEO Blog Post",
    category: "Blog",
    desc: "Write an SEO-optimized blog article",
  },
  {
    id: 3,
    title: "LinkedIn Post",
    category: "Social",
    desc: "Professional thought leadership post",
  },
  {
    id: 4,
    title: "Newsletter",
    category: "Email",
    desc: "Weekly/monthly newsletter template",
  },
  {
    id: 5,
    title: "Twitter Thread",
    category: "Social",
    desc: "Engaging multi-tweet thread",
  },
  {
    id: 6,
    title: "Case Study",
    category: "Article",
    desc: "Customer success story framework",
  },
];

const generatedContent = `# How AI is Transforming Modern SaaS Platforms

The landscape of Software-as-a-Service has undergone a dramatic shift in the past year. With the advent of large language models and generative AI, SaaS platforms are no longer just tools — they're intelligent assistants that understand context, predict needs, and automate complex workflows.

## The Rise of AI-Native SaaS

Traditional SaaS products focused on digitizing manual processes. Today's AI-native platforms go further:

- **Intelligent Automation**: AI handles repetitive tasks, freeing users for strategic work
- **Predictive Analytics**: Machine learning models forecast trends before they happen
- **Natural Language Interfaces**: Users interact with software through conversation, not clicks
- **Personalized Experiences**: Every user gets a tailored interface based on their behavior

## Key Benefits for Businesses

1. **40% reduction** in operational costs
2. **3x faster** customer response times
3. **85% improvement** in data accuracy
4. **2x increase** in team productivity

## Looking Ahead

The integration of AI into SaaS is not a trend — it's the new baseline. Companies that fail to adopt AI-native tools risk falling behind competitors who leverage these technologies for growth.

*Start your AI transformation today with NexBoard.*`;

export default function AIWriterPage() {
  const [topic, setTopic] = useState("");
  const [length, setLength] = useState(500);
  const [activeTab, setActiveTab] = useState("generate");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          AI Content Writer
        </h1>
        <p className="text-muted-foreground">
          Generate blog posts, emails, social content, and more with AI.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="generate">
            <Wand2 className="h-4 w-4 mr-1.5" />
            Generate
          </TabsTrigger>
          <TabsTrigger value="templates">
            <FileText className="h-4 w-4 mr-1.5" />
            Templates
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {activeTab === "generate" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-semibold">
                Content Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium">Content Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {contentTypes.map((type) => (
                    <button
                      key={type.value}
                      className={cn(
                        "flex items-center gap-2 p-2.5 rounded-lg border text-sm transition-colors text-left",
                        "hover:border-primary hover:bg-primary/5",
                        type.value === "blog"
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      )}
                    >
                      <type.icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="truncate">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Topic / Prompt</label>
                <Textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="What should the AI write about?"
                  rows={3}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tone</label>
                <Select defaultValue="professional">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="humorous">Humorous</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Length</label>
                  <span className="text-xs text-muted-foreground">
                    ~{length} words
                  </span>
                </div>
                <Slider
                  value={length}
                  onValueChange={(val) => setLength(typeof val === 'number' ? val : val[0])}
                  max={2000}
                  min={100}
                  step={50}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Language</label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-brand-gradient text-white border-0 hover:opacity-90">
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Content
              </Button>
            </CardContent>
          </Card>

          {/* Output Preview */}
          <Card className="shadow-sm lg:col-span-2">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold">
                  Generated Content
                </CardTitle>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert max-w-none leading-relaxed whitespace-pre-wrap">
                {generatedContent}
              </div>
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
                <Badge variant="secondary" className="text-xs">
                  GPT-4o
                </Badge>
                <span className="text-xs text-muted-foreground">
                  487 words • 2,340 characters • Generated in 4.2s
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* Templates Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((tmpl, i) => (
            <motion.div
              key={tmpl.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{tmpl.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {tmpl.desc}
                      </p>
                      <Badge
                        variant="secondary"
                        className="text-[10px] mt-2"
                      >
                        {tmpl.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
