"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    period: "2018 - Günümüz",
    title: "Çok Yönlü Geliştirici",
    description:
      "6 yıl boyunca frontend development, video editing, müzik prodüksiyonu ve robotik alanlarında projeler geliştirdim. Sürekli öğrenmeye ve yeni teknolojilere adapte olmaya devam ediyorum.",
  },
  {
    period: "Devam Ediyor",
    title: "Frontend Development",
    description:
      "Orta düzey frontend bilgisiyle modern web teknolojilerini kullanarak projeler geliştiriyorum. React, Next.js ve diğer frameworklerle çalışıyorum.",
  },
  {
    period: "Devam Ediyor",
    title: "Sosyal Medya Yönetimi",
    description:
      "Birçok sosyal medya hesabı yönettim, içerik stratejileri oluşturdum ve ürettiğim içerikleri geniş kitlelere sundum.",
  },
  {
    period: "Devam Ediyor",
    title: "Robotik Projeleri",
    description:
      "Robotik alanında projeler geliştirmeye devam ediyorum. Donanım ve yazılım entegrasyonu üzerine çalışıyorum.",
  },
]

export function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Deneyim
        </h2>
        <p className="mb-16 text-center text-muted-foreground">
          Yolculuğum ve üzerinde çalıştığım alanlar
        </p>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el }}
              data-index={index}
              className={`relative mb-12 pl-12 transition-all duration-700 md:w-1/2 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              } ${
                visibleItems.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div
                className={`absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-primary bg-background md:top-2 ${
                  index % 2 === 0 ? "md:left-auto md:right-[-6px]" : "md:left-[-6px]"
                }`}
              />

              <div className="rounded-xl border border-border bg-card p-6">
                <span className="mb-2 inline-block text-xs font-medium text-primary">
                  {exp.period}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
