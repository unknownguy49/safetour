import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SignUpForm } from "@/components/auth/signup-form"

export default function SignUpPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <SignUpForm />
      </main>
      <Footer />
    </div>
  )
}
