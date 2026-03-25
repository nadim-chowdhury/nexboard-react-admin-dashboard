"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
  Image as ImageIcon,
  Sparkles,
  Download,
  Heart,
  Wand2,
  Palette,
} from "lucide-react";
import { motion } from "motion/react";

const demoImages = [
  {
    id: 1,
    prompt: "Futuristic city at sunset, neon lights",
    style: "Digital Art",
    size: "1024×1024",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    id: 2,
    prompt: "Abstract fluid art, gold and teal",
    style: "Abstract",
    size: "1024×1024",
    gradient: "from-amber-500/20 to-teal-500/20",
  },
  {
    id: 3,
    prompt: "Mountain landscape, photorealistic",
    style: "Photography",
    size: "1536×1024",
    gradient: "from-green-500/20 to-sky-500/20",
  },
  {
    id: 4,
    prompt: "Minimalist logo design, tech company",
    style: "Logo",
    size: "512×512",
    gradient: "from-rose-500/20 to-orange-500/20",
  },
  {
    id: 5,
    prompt: "Cyberpunk character portrait",
    style: "Illustration",
    size: "1024×1024",
    gradient: "from-cyan-500/20 to-violet-500/20",
  },
  {
    id: 6,
    prompt: "Isometric 3D workspace setup",
    style: "3D Render",
    size: "1024×1024",
    gradient: "from-indigo-500/20 to-pink-500/20",
  },
];

export default function AIImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [quality, setQuality] = useState(75);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          AI Image Generator
        </h1>
        <p className="text-muted-foreground">
          Create stunning visuals from text descriptions with AI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls Panel */}
        <Card className="shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <Wand2 className="h-4 w-4 text-primary" />
              Generate
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Prompt</label>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to create..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Style</label>
              <Select defaultValue="digital">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital">Digital Art</SelectItem>
                  <SelectItem value="photo">Photography</SelectItem>
                  <SelectItem value="illustration">Illustration</SelectItem>
                  <SelectItem value="3d">3D Render</SelectItem>
                  <SelectItem value="anime">Anime</SelectItem>
                  <SelectItem value="abstract">Abstract</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Size</label>
              <Select defaultValue="1024">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="512">512 × 512</SelectItem>
                  <SelectItem value="1024">1024 × 1024</SelectItem>
                  <SelectItem value="1536">1536 × 1024</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Quality</label>
                <span className="text-xs text-muted-foreground">
                  {quality}%
                </span>
              </div>
              <Slider
                value={quality}
                onValueChange={(val) => setQuality(typeof val === 'number' ? val : val[0])}
                max={100}
                min={10}
                step={5}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Model</label>
              <Select defaultValue="dalle3">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dalle3">DALL·E 3</SelectItem>
                  <SelectItem value="sdxl">Stable Diffusion XL</SelectItem>
                  <SelectItem value="midjourney">Midjourney v6</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-brand-gradient text-white border-0 hover:opacity-90">
              <Sparkles className="h-4 w-4 mr-2" />
              Generate Image
            </Button>

            <p className="text-[11px] text-muted-foreground text-center">
              ~15 seconds per generation • 1 credit per image
            </p>
          </CardContent>
        </Card>

        {/* Gallery */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-primary" />
              <h2 className="text-base font-semibold">Recent Generations</h2>
            </div>
            <Badge variant="secondary" className="text-xs">
              {demoImages.length} images
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {demoImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
              >
                <Card className="shadow-sm overflow-hidden group cursor-pointer">
                  {/* Placeholder gradient image */}
                  <div
                    className={`aspect-square bg-linear-to-br ${img.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <ImageIcon className="h-12 w-12 text-muted-foreground/30" />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-9 w-9 rounded-full"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-9 w-9 rounded-full"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <p className="text-xs truncate text-muted-foreground">
                      {img.prompt}
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <Badge variant="secondary" className="text-[10px]">
                        {img.style}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">
                        {img.size}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
