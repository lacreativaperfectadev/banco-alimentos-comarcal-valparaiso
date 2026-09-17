export interface NavLink {
  label: string
  href: string
}

export interface IconItem {
  icon: string
  title: string
  description: string
}

export interface PriceItem {
  icon: string
  name: string
  description: string
  price: string
  weight: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface HeroBadge {
  icon: string
  label: string
}

export interface SiteContent {
  meta: {
    title: string
    description: string
  }
  header: {
    logo: string
    logoAlt: string
    navLinks: NavLink[]
    ctaLabel: string
  }
  hero: {
    eyebrow: string
    title: string
    paragraph: string
    ctaLabel: string
    badges: HeroBadge[]
    image: string
    imageAlt: string
    imageCaption: string
  }
  services: {
    eyebrow: string
    title: string
    subtitle: string
    items: IconItem[]
  }
  pricing: {
    eyebrow: string
    title: string
    subtitle: string
    ctaLabel: string
    items: PriceItem[]
    disclaimer: string
  }
  team: {
    title: string
    paragraph: string
    ctaLabel: string
    image: string
    imageAlt: string
  }
  trust: {
    title: string
    items: IconItem[]
  }
  faq: {
    eyebrow: string
    title: string
    subtitle: string
    image: string
    imageAlt: string
    items: FaqItem[]
  }
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    form: {
      nameLabel: string
      phoneLabel: string
      emailLabel: string
      reasonLabel: string
      reasonOptions: string[]
      messageLabel: string
      consentLabel: string
      submitLabel: string
      successTitle: string
      successMessage: string
      errorMessage: string
    }
    info: {
      addressTitle: string
      address: string
      addressIcon: string
      hoursTitle: string
      hours: string
      hoursIcon: string
      mapImage: string
      mapImageAlt: string
      mapCaption: string
    }
  }
  footer: {
    logo: string
    logoAlt: string
    links: NavLink[]
  }
  cookieBanner: {
    message: string
    acceptLabel: string
    rejectLabel: string
  }
  legal: {
    avisoLegal: { title: string; body: string }
    privacidad: { title: string; body: string }
    cookies: { title: string; body: string }
  }
}
