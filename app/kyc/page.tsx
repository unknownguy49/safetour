
"use client";
import { Navigation } from "../../components/navigation";
import { KYCForm } from "../../components/kyc-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, UserCheck, FileText, Camera, CheckCircle } from "lucide-react";

export default function KYCPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="lg:ml-72">
        <div className="px-6 py-8 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">KYC Verification</h1>
                <p className="text-muted-foreground">Secure identity verification with blockchain storage</p>
              </div>
            </div>

            <Badge variant="secondary" className="mb-6">
              <Shield className="mr-2 h-3 w-3" />
              Government-Grade Security
            </Badge>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* KYC Form */}
            <div className="lg:col-span-2">
              <KYCForm />
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              {/* Process Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Verification Process
                  </CardTitle>
                  <CardDescription>Follow these steps to complete your identity verification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        1
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Personal Information</p>
                        <p className="text-xs text-muted-foreground">Provide basic details and contact information</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        2
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Document Upload</p>
                        <p className="text-xs text-muted-foreground">Upload government-issued ID documents</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        3
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Biometric Verification</p>
                        <p className="text-xs text-muted-foreground">Complete facial recognition scan</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        4
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Blockchain Storage</p>
                        <p className="text-xs text-muted-foreground">Secure your verified identity on blockchain</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>End-to-end encryption</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Blockchain immutability</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>GDPR compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Multi-factor authentication</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Supported Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Accepted Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      <span>Passport</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      <span>Driver's License</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      <span>National ID Card</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      <span>Aadhaar Card</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
