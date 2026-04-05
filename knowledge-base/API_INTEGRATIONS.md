# 🔌 API ENTEGRASYON REHBERİ v1.0

> Stripe, Google Maps, Email, SMS, Analytics API entegrasyon rehberi
> Her entegrasyon hazır kod snippet'leri ile

---

## 💳 STRIPE ÖDEME

### Kurulum
```bash
bun add stripe @stripe/stripe-js
```

### Server-Side (API Route)

```typescript
// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: 'try',
          product_data: {
            name: item.name,
            images: item.image ? [item.image] : [],
          },
          unit_amount: Math.round(item.price * 100), // kuruş
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    return NextResponse.json({ error: 'Payment failed' }, { status: 500 })
  }
}
```

### Client-Side

```typescript
// src/lib/payment.ts
export async function createCheckout(items: CartItem[]) {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
  })
  const { url } = await res.json()
  window.location.href = url
}
```

---

## 📧 EMAIL GÖNDERME (React Email)

### Kurulum
```bash
bun add @react-email/components @react-email/render nodemailer
```

### Email Template

```typescript
// src/emails/contact-template.tsx
import { Html, Head, Body, Container, Section, Text, Button } from '@react-email/components'

export function ContactEmail({ name, email, message }: { name: string; email: string; message: string }) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
        <Container style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '12px', maxWidth: '560px', margin: '0 auto' }}>
          <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>Yeni İletişim Formu</Text>
          <Section style={{ padding: '20px 0' }}>
            <Text><strong>Ad:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Mesaj:</strong></Text>
            <Text>{message}</Text>
          </Section>
          <Button href={`mailto:${email}`} style={{ backgroundColor: '#f43f5e', color: '#fff', padding: '12px 24px', borderRadius: '8px' }}>
            Yanıtla
          </Button>
        </Container>
      </Body>
    </Html>
  )
}
```

### Email Gönderme API

```typescript
// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import { ContactEmail } from '@/emails/contact-template'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
})

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  const html = await render(ContactEmail({ name, email, message }))

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'info@site.com',
    subject: `İletişim: ${name}`,
    html,
  })

  return NextResponse.json({ success: true })
}
```

---

## 🗺️ GOOGLE MAPS

### Kurulum
```bash
bun add @react-google-maps/api
```

### Harita Bileşeni

```tsx
'use client'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = { width: '100%', height: '400px', borderRadius: '16px' }

export function MapSection({ lat = 41.0082, lng = 28.9784 }: { lat?: number; lng?: number }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  })

  if (!isLoaded) return <div className="h-[400px] bg-muted animate-pulse rounded-2xl" />

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat, lng }}
      zoom={15}
      options={{
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#1d1d1d' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#ffffff' }] },
        ],
      }}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  )
}
```

---

## 📱 SMS GÖNDERME (Twilio)

### Kurulum
```bash
bun add twilio
```

### SMS API

```typescript
// src/app/api/send-sms/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Twilio from 'twilio'

const client = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

export async function POST(req: NextRequest) {
  const { to, message } = await req.json()

  await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE,
    to: `+90${to}`,
  })

  return NextResponse.json({ success: true })
}
```

---

## 📊 ANALYTICS (Google Analytics 4)

### Kurulum

```bash
bun add @next/third-parties
```

### GoogleAnalytics Bileşeni

```tsx
// src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Event Tracking

```typescript
'use client'
import { useEffect } from 'react'

export function useAnalytics() {
  useEffect(() => {
    // Page view otomatik
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID)
    }
  }, [])
}

// Özel event
export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    })
  }
}
```

---

## 🔔 WEBHOOK (Formspree / Custom)

```typescript
// src/app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  
  // Webhook URL'ine gönder
  const webhookUrl = process.env.WEBHOOK_URL
  
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'contact_form',
        data: body,
        timestamp: new Date().toISOString(),
      }),
    })
  }
  
  return NextResponse.json({ received: true })
}
```

---

## 🌤️ HAVA DURUMU (OpenWeatherMap)

```typescript
// src/app/api/weather/route.ts
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') || 'Istanbul'

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_KEY}&units=metric`
  )
  const data = await res.json()

  return NextResponse.json({
    temp: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    city: data.name,
  })
}
```

---

## 🔑 ENV VİBLELERİ (.env.local)

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# SMTP Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@site.com
SMTP_PASS=app-password

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIza...

# Twilio SMS
TWILIO_SID=AC...
TWILIO_TOKEN=...
TWILIO_PHONE=+1234567890

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Webhook
WEBHOOK_URL=https://hooks.example.com/...

# OpenWeather
OPENWEATHER_KEY=...
```

---

> **v1.0 — 7 API Entegrasyon | Stripe, Email, Maps, SMS, Analytics, Webhook, Weather**
> **Son Güncelleme:** 2026-04-05
