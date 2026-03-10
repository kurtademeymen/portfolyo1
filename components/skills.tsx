"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Film, Music, Cpu, Share2, Gamepad2 } from "lucide-react"

const skills = [
  {
    name: "Frontend Development",
    level: "Orta",
    icon: Code,
    description: "React, Next.js, HTML/CSS, JavaScript",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Unreal Engine",
    level: "Temel",
    icon: Gamepad2,
    description: "Oyun Geliştirme",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "After Effects",
    level: "Orta",
    icon: Film,
    description: "Video Düzenleme",
    gradient: "from-pink-500 to-violet-500",
  },
  {
    name: "FL Studio",
    level: "Orta",
    icon: Music,
    description: "Müzik Prodüksiyonu",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    name: "Sosyal Medya",
    level: "İleri",
    icon: Share2,
    description: "İçerik Üretimi & Hesap Yönetimi",
    gradient: "from-purple-600 to-violet-600",
  },
  {
    name: "Robotik",
    level: "Orta",
    icon: Cpu,
    description: "Proje Geliştirme",
    gradient: "from-violet-500 to-purple-500",
  },
]

const levelIndicator = {
  Temel: 1,
  Orta: 2,
  İleri: 3,
}

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Yeteneklerim
        </h2>
        <p className="mb-16 text-center text-muted-foreground">
          6 yıl boyunca birçok farklı alanda deneyim kazandım
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${skill.gradient} opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-40`}
                />

                <div className="relative">
                  <div
                    className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${skill.gradient} p-3`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {skill.name}
                  </h3>

                  <p className="mb-4 text-sm text-muted-foreground">
                    {skill.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      {skill.level}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className={`h-2 w-2 rounded-full transition-all duration-500 ${
                            dot <= levelIndicator[skill.level as keyof typeof levelIndicator]
                              ? `bg-gradient-to-r ${skill.gradient}`
                              : "bg-border"
                          }`}
                          style={{
                            transitionDelay: isVisible ? `${index * 100 + dot * 100}ms` : "0ms",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
