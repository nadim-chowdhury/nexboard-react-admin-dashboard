"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Plus,
  Bot,
  User,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { chatConversations, chatMessages } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function AIChatPage() {
  const [message, setMessage] = useState("");
  const [activeConv, setActiveConv] = useState(1);

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight">AI Chat</h1>
          <Badge className="bg-brand-gradient text-white border-0">Hot</Badge>
        </div>
        <p className="text-muted-foreground">
          Chat with advanced AI models for any task.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[calc(100vh-200px)] min-h-[500px]">
        {/* Conversations Sidebar */}
        <Card className="shadow-sm lg:col-span-1 flex flex-col">
          <div className="p-3 border-b border-border">
            <Button className="w-full bg-brand-gradient text-white border-0 hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              New Chat
            </Button>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1">
              {chatConversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setActiveConv(conv.id)}
                  className={cn(
                    "w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors",
                    activeConv === conv.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 shrink-0" />
                    <span className="truncate font-medium">{conv.title}</span>
                  </div>
                  <p className="text-[11px] mt-0.5 ml-6 opacity-70">
                    {conv.time}
                  </p>
                </button>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Chat Area */}
        <Card className="shadow-sm lg:col-span-3 flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">NexBoard AI</p>
              <p className="text-xs text-muted-foreground">
                Powered by GPT-4o • Online
              </p>
            </div>
            <Badge variant="secondary" className="ml-auto text-[10px]">
              GPT-4o
            </Badge>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-6 max-w-3xl mx-auto">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    "flex gap-3",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.role === "assistant" && (
                    <Avatar className="h-8 w-8 shrink-0 mt-1">
                      <AvatarFallback className="bg-brand-gradient text-white">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted rounded-bl-md"
                    )}
                  >
                    <div className="whitespace-pre-wrap leading-relaxed prose prose-sm dark:prose-invert max-w-none [&>h1]:text-base [&>h1]:font-bold [&>h2]:text-sm [&>h2]:font-semibold [&>h3]:text-sm [&>ul]:text-sm [&>p]:text-sm">
                      {msg.content}
                    </div>
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-1 mt-3 pt-2 border-t border-border/50">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                        >
                          <ThumbsUp className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                        >
                          <ThumbsDown className="h-3.5 w-3.5" />
                        </Button>
                        <span className="text-[10px] text-muted-foreground ml-auto">
                          {msg.time}
                        </span>
                      </div>
                    )}
                    {msg.role === "user" && (
                      <p className="text-[10px] opacity-70 text-right mt-1">
                        {msg.time}
                      </p>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <Avatar className="h-8 w-8 shrink-0 mt-1">
                      <AvatarFallback className="bg-secondary">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </motion.div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2 max-w-3xl mx-auto">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                onKeyDown={(e) => e.key === "Enter" && setMessage("")}
              />
              <Button className="bg-brand-gradient text-white border-0 hover:opacity-90 px-6">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
