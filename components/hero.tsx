"use client"

import { useEffect, useState } from "react"

const titles = [
  "Frontend Developer",
  "Video Editor",
  "Music Producer",
  "Robotics",
  "Content Creator",
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      
      <div className="relative z-10 text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
          Merhaba, ben
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          Adem Eymen Kurt
        </h1>
        <div className="h-10">
          <p className="text-xl text-muted-foreground md:text-2xl">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </p>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-muted-foreground">
          6 yıllık deneyimle farklı alanlarda projeler geliştiriyorum.
          Frontend&apos;den robotik&apos;e, video editing&apos;den müzik prodüksiyonuna kadar
          geniş bir yelpazede çalışıyorum.
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#skills"
            className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Yeteneklerim
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            İletişim
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <svg
          className="h-6 w-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
