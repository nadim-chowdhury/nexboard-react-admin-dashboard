"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Printer, Send, Sparkles } from "lucide-react";
import { invoiceData } from "@/lib/mock-data";

const statusColors = {
  paid: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  overdue: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function InvoicePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Invoice</h1>
          <p className="text-muted-foreground">
            View and manage invoice details.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button size="sm" className="bg-brand-gradient text-white border-0 hover:opacity-90">
            <Send className="h-4 w-4 mr-2" />
            Send Invoice
          </Button>
        </div>
      </div>

      <Card className="shadow-sm max-w-4xl">
        <CardContent className="p-8">
          {/* Invoice Header */}
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">NexBoard</h2>
                <p className="text-xs text-muted-foreground">
                  AI SaaS Platform
                </p>
              </div>
            </div>
            <div className="text-right">
              <h3 className="text-2xl font-bold text-gradient">INVOICE</h3>
              <p className="text-sm font-mono text-muted-foreground mt-1">
                {invoiceData.id}
              </p>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Addresses + Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">
                From
              </p>
              <p className="font-medium text-sm">{invoiceData.from.name}</p>
              <p className="text-sm text-muted-foreground">
                {invoiceData.from.address}
              </p>
              <p className="text-sm text-muted-foreground">
                {invoiceData.from.city}
              </p>
              <p className="text-sm text-muted-foreground">
                {invoiceData.from.email}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">
                Bill To
              </p>
              <p className="font-medium text-sm">{invoiceData.to.name}</p>
              <p className="text-sm text-muted-foreground">
                {invoiceData.to.address}
              </p>
              <p className="text-sm text-muted-foreground">
                {invoiceData.to.city}
              </p>
              <p className="text-sm text-muted-foreground">
                {invoiceData.to.email}
              </p>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                  Invoice Date
                </p>
                <p className="text-sm font-medium">{invoiceData.date}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                  Due Date
                </p>
                <p className="text-sm font-medium">{invoiceData.dueDate}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                  Status
                </p>
                <Badge
                  variant="outline"
                  className={`text-xs capitalize mt-1 ${statusColors[invoiceData.status]}`}
                >
                  {invoiceData.status}
                </Badge>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Line Items Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="text-center">Qty</TableHead>
                <TableHead className="text-right">Rate</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceData.items.map((item, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    {item.description}
                  </TableCell>
                  <TableCell className="text-center">{item.quantity}</TableCell>
                  <TableCell className="text-right">
                    ${item.rate.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    ${item.amount.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Totals */}
          <div className="flex justify-end mt-6">
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">
                  ${invoiceData.subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (9%)</span>
                <span className="font-medium">
                  ${invoiceData.tax.toLocaleString()}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between text-base">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-gradient">
                  ${invoiceData.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Payment is due within 30 days. Please make payment to the account
              details provided in the email. Late payments may incur a 1.5% monthly
              interest charge. For questions about this invoice, contact
              billing@nexboard.io.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
