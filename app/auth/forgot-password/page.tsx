import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <ForgotPasswordForm />
      </main>
      <Footer />
    </div>
  )
}
