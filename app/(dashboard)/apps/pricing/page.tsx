"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Sparkles, Zap, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    monthlyPrice: 9,
    yearlyPrice: 7,
    description: "Perfect for individuals getting started with AI tools.",
    features: [
      "5,000 AI generations/month",
      "1 workspace",
      "Basic analytics dashboard",
      "Email support",
      "Community access",
    ],
    notIncluded: [
      "Custom AI models",
      "API access",
      "Priority support",
      "Team collaboration",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    icon: Sparkles,
    monthlyPrice: 29,
    yearlyPrice: 24,
    description: "For professionals who need advanced AI capabilities.",
    features: [
      "50,000 AI generations/month",
      "5 workspaces",
      "Advanced analytics & reports",
      "API access (100K tokens/day)",
      "Priority email support",
      "Team collaboration (5 members)",
      "Custom branding",
      "Export & integrations",
    ],
    notIncluded: ["Custom AI models", "Dedicated support"],
    popular: true,
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    icon: Building2,
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "For organizations with advanced security & scale needs.",
    features: [
      "Unlimited AI generations",
      "Unlimited workspaces",
      "Enterprise analytics & BI",
      "Unlimited API access",
      "24/7 dedicated support",
      "Unlimited team members",
      "Custom AI model training",
      "SSO & SAML authentication",
      "SLA guarantee (99.9%)",
      "On-premise deployment option",
    ],
    notIncluded: [],
    popular: false,
    cta: "Contact Sales",
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight">Pricing Plans</h1>
        <p className="text-muted-foreground mt-2">
          Choose the perfect plan for your needs. All plans include a 14-day
          free trial.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !yearly ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Monthly
          </span>
          <Switch checked={yearly} onCheckedChange={setYearly} />
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              yearly ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Yearly
          </span>
          {yearly && (
            <Badge className="bg-success/10 text-success border-success/20 text-xs">
              Save 20%
            </Badge>
          )}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Card
              className={cn(
                "shadow-sm relative flex flex-col h-full",
                plan.popular && "border-primary shadow-md glow-primary overflow-visible"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-brand-gradient text-white border-0 px-4">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4 pt-6">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl",
                      plan.popular ? "bg-brand-gradient" : "bg-primary/10"
                    )}
                  >
                    <plan.icon
                      className={cn(
                        "h-5 w-5",
                        plan.popular ? "text-white" : "text-primary"
                      )}
                    />
                  </div>
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      /month
                    </span>
                  </div>
                  {yearly && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Billed ${plan.yearlyPrice * 12}/year
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground/50"
                    >
                      <Check className="h-4 w-4 shrink-0 mt-0.5 opacity-30" />
                      <span className="line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  className={cn(
                    "w-full mt-6",
                    plan.popular
                      ? "bg-brand-gradient text-white border-0 hover:opacity-90"
                      : ""
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
