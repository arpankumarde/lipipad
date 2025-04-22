import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bookmark, Edit3, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-background to-muted/50">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Your Smart Note-Taking
          <br />
          <span className="text-primary">Powered by AI</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-prose">
          Create, organize, and analyze your notes with the help of artificial intelligence. 
          LipiPad learns from your writing style to help you be more productive.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button asChild size="lg">
            <Link href="/auth/signup">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/auth/login">Log In</Link>
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Edit3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">Smart Note-Taking</h3>
              <p className="text-muted-foreground">
                Create and edit notes with a clean, distraction-free interface built for productivity.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">AI Summarization</h3>
              <p className="text-muted-foreground">
                Let AI help you extract key points and summarize your lengthy notes in seconds.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Bookmark className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">Organized Library</h3>
              <p className="text-muted-foreground">
                Keep all your notes organized in one place with smart categorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LipiPad. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
