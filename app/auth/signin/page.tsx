import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SignInForm } from "@/components/auth/signin-form"

export default function SignInPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <SignInForm />
      </main>
      <Footer />
    </div>
  )
}
