# 🗄️ VERİTABANI ŞEMA ŞABLONLARI v1.0

> Sektör bazlı Prisma ORM şemaları
> Doğrudan projeye kopyalanıp kullanılabilir

---

## 📋 TEMEL ŞEMALAR

### 1. Genel Website (Herkese Uygun)

```prisma
model SiteConfig {
  id          String   @id @default(cuid())
  siteName    String
  description String?
  logoUrl     String?
  faviconUrl  String?
  primaryColor String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  pages       Page[]
  contacts    Contact[]
}

model Page {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  content     String?  // JSON veya MD
  sortOrder   Int      @default(0)
  isPublished Boolean  @default(false)
  seoTitle    String?
  seoDesc     String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  site        SiteConfig @relation(fields: [siteId], references: [id])
  siteId      String
}

model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  subject   String?
  message   String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())

  site      SiteConfig @relation(fields: [siteId], references: [id])
  siteId    String
}
```

### 2. E-Ticaret

```prisma
model Product {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String?
  price       Float
  comparePrice Float?
  images      String[] // JSON array of URLs
  category    Category @relation(fields: [categoryId], references: [id])
  categoryId  String
  isPublished Boolean  @default(false)
  stock       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  orderItems  OrderItem[]
  reviews     Review[]
}

model Category {
  id        String   @id @default(cuid())
  name      String
  slug      String   @unique
  imageUrl  String?
  sortOrder Int      @default(0)
  createdAt DateTime @default(now())

  products  Product[]
}

model Order {
  id          String    @id @default(cuid())
  orderNumber String   @unique
  customerName String
  customerEmail String
  customerPhone String?
  total       Float
  status      String    @default("pending") // pending, confirmed, shipped, delivered, cancelled
  address     String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  items       OrderItem[]
}

model OrderItem {
  id        String  @id @default(cuid())
  quantity  Int
  price     Float
  productId String
  orderId   String
  product   Product @relation(fields: [productId], references: [id])
  order     Order   @relation(fields: [orderId], references: [id])
}

model Review {
  id        String   @id @default(cuid())
  rating    Int      // 1-5
  comment   String?
  author    String
  productId String
  product   Product @relation(fields: [productId], references: [id])
  createdAt DateTime @default(now())
}
```

### 3. Blog / CMS

```prisma
model Post {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  excerpt     String?
  content     String   // MD veya JSON
  coverImage  String?
  isPublished Boolean  @default(false)
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
  tags        Tag[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  categories  PostTag[]
}

model Tag {
  id    String @id @default(cuid())
  name  String @unique
  slug  String @unique

  posts Post[]
}

model PostTag {
  postId String
  tagId   String

  post Post @relation(fields: [postId], references: [id])
  tag  Tag  @relation(fields: [tagId], references: [id])

  @@id([postId, tagId])
}

model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String?
  role      String   @default("author") // admin, author, editor
  avatar    String?
  createdAt DateTime @default(now())

  posts Post[]
}
```

### 4. Randevu / Booking Sistemi

```prisma
model Service {
  id          String   @id @default(cuid())
  name        String
  description String?
  duration    Int      // dakika
  price       Float
  imageUrl    String?
  isActive    Boolean  @default(true)
  sortOrder   Int      @default(0)
  createdAt   DateTime @default(now())

  bookings    Booking[]
}

model Booking {
  id          String    @id @default(cuid())
  customerName String
  customerEmail String
  customerPhone String
  serviceId   String
  service     Service   @relation(fields: [serviceId], references: [id])
  date        DateTime
  time        String    // "14:00"
  status      String    @default("pending") // pending, confirmed, cancelled, completed
  notes       String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Availability {
  id        String   @id @default(cuid())
  serviceId String
  service   Service  @relation(fields: [serviceId], references: [id])
  date      DateTime
  startTime String   // "09:00"
  endTime   String   // "17:00"
  isBooked  Boolean  @default(false)
}
```

### 5. Portfolio / Galeri

```prisma
model Project {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  description String?
  coverImage  String
  images      String[] // JSON array
  category    String   // "web", "mobile", "branding"
  tags        String[] // ["nextjs", "threejs"]
  liveUrl     String?
  sourceUrl   String?
  featured    Boolean  @default(false)
  sortOrder   Int      @default(0)
  publishedAt DateTime?
  createdAt   DateTime @default(now())
}
```

---

## 🔧 PRISMA KULLANIMI

### Kurulum

```bash
# Schema dosyası: prisma/schema.prisma
# Veritabanı: SQLite (varsayılan)
bun run db:push    # Schema'yı veritabanına uygula
bun run db:studio  # Veritabanı yönetim paneli
bun run db:seed    # Başlangıç verileri
```

### Veritabanı Erişimi

```typescript
import { db } from '@/lib/db'

// Tüm ürünleri listele
const products = await db.product.findMany({
  include: { category: true },
  where: { isPublished: true },
  orderBy: { createdAt: 'desc' },
})

// Tek ürün detay
const product = await db.product.findUnique({
  where: { slug: 'my-product' },
  include: { category: true, reviews: true },
})

// İletişim formu kaydet
const contact = await db.contact.create({
  data: {
    name: 'John',
    email: 'john@example.com',
    message: 'Hello!',
    siteId: 'default',
  },
})
```

---

> **v1.0 — 5 Prisma Şema Şablonu | Website, E-ticaret, Blog, Booking, Portfolio**
> **Son Güncelleme:** 2026-04-05
