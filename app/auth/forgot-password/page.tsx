"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pattern-dots p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient shadow-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">NexBoard</span>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader className="text-center pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Forgot password?</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    No worries. Enter your email and we&apos;ll send you reset
                    instructions.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>

                  <Button
                    className="w-full bg-brand-gradient text-white border-0 hover:opacity-90"
                    onClick={() => setSubmitted(true)}
                  >
                    Send Reset Link
                  </Button>

                  <Link
                    href="/auth/login"
                    className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to Sign In
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="shadow-lg border-0">
                <CardContent className="text-center py-10 space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 mx-auto">
                    <CheckCircle2 className="h-7 w-7 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Check your email</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We&apos;ve sent a password reset link to your email
                      address. The link will expire in 24 hours.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-2"
                  >
                    Didn&apos;t receive it? Resend
                  </Button>
                  <div>
                    <Link
                      href="/auth/login"
                      className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Back to Sign In
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
