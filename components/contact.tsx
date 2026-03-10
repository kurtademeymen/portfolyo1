import { Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:ornek@email.com" },
]

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          İletişime Geç
        </h2>
        <p className="mb-12 text-muted-foreground">
          *
        </p>

        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card transition-all hover:border-primary hover:bg-primary/10"
              aria-label={link.name}
            >
              <link.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © 2026 aeymenkurt.com.tr
          </p>
        </div>
      </div>
    </section>
  )
}
