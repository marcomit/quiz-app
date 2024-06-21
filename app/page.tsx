import Link from "next/link"
import { BadgeIcon, CalendarIcon, ClockIcon, CopyIcon, CubeIcon, FaceIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/mode-toggle";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <FaceIcon className="w-6 h-6" />
          <span className="sr-only">Quiz App</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Login
          </Link>
          <ModeToggle/>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Knowledge with Our Quiz App
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Engage your mind, test your skills, and have fun with our interactive quizzes. Discover new insights
                    and challenge yourself today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/quiz"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Enter in a group
                  </Link>
                  <Link
                    href="/register"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Quiz Illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover the Benefits of Our Quiz App
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our quiz app offers a wide range of features to enhance your learning experience and keep you engaged.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <CubeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Personalized Quizzes</h3>
                <p className="text-muted-foreground">Tailored quizzes based on your interests and skill level.</p>
              </div>
              <div className="grid gap-1">
                <BadgeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Competitive Leaderboard</h3>
                <p className="text-muted-foreground">
                  Challenge your friends and track your progress on the leaderboard.
                </p>
              </div>
              <div className="grid gap-1">
                <CopyIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Detailed Feedback</h3>
                <p className="text-muted-foreground">Receive comprehensive feedback to improve your knowledge.</p>
              </div>
              <div className="grid gap-1">
                <BadgeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Rewarding Badges</h3>
                <p className="text-muted-foreground">Earn badges and achievements to showcase your progress.</p>
              </div>
              <div className="grid gap-1">
                <ClockIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Offline Mode</h3>
                <p className="text-muted-foreground">Access quizzes anytime, even without an internet connection.</p>
              </div>
              <div className="grid gap-1">
                <CalendarIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Comprehensive Statistics</h3>
                <p className="text-muted-foreground">Track your performance and progress with detailed analytics.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied users and see how our quiz app has helped them learn and grow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center">
                      JD
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">John Doe</h3>
                      <p className="text-sm text-muted-foreground">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The quiz app has been a game-changer for me. It's helped\n me stay engaged and motivated to learn
                    new things. The\n personalized quizzes and detailed feedback have been\n invaluable."
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center">
                      SM
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Sarah Miller</h3>
                      <p className="text-sm text-muted-foreground">Student</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I love using the quiz app to prepare for my exams. The\n competitive leaderboard and rewarding
                    badges keep me\n motivated to learn and improve. It's been a game-changer\n for my academic
                    performance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Quiz App. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}