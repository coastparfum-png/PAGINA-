# Coast Parfum — E-commerce Premium 💎

Sitio web oficial de **Coast Parfum**, perfumería de lujo en Concón, V Región, Chile.

## 🚀 Despliegue en Vercel

Este proyecto está listo para ser desplegado en Vercel.

1. Haz push a tu repositorio de GitHub: `https://github.com/coastparfum-png/PAGINA-.git`
2. Conecta el repositorio a un nuevo proyecto en [Vercel](https://vercel.com).
3. Añade las siguientes variables de entorno en Vercel (`Settings > Environment Variables`):

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=56964788533
NEXT_PUBLIC_SITE_URL=https://www.coast.parfum.cl
NEXT_PUBLIC_INSTAGRAM=coast.parfum
NEXT_PUBLIC_EMAIL=coastparfum@gmail.com
```

4. El despliegue automático configurará las cabeceras de seguridad definidas en `vercel.json`.

## 📦 Datos y Supabase

Actualmente, el sitio funciona como un **MVP estático**. Los productos se cargan desde `lib/products.ts`, lo que permite un rendimiento ultra rápido y no depende de bases de datos externas de momento.

### Pasos futuros para Supabase:
Si deseas migrar a Supabase más adelante:
1. Ve a `supabase/migrations/001_initial.sql` y ejecuta ese SQL en el editor SQL de tu panel de Supabase.
2. Ejecuta `supabase/seed.sql` para poblar los productos iniciales.
3. Añade tus credenciales en el archivo `.env.local` (y en Vercel):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---
*Construido con Next.js 16, Tailwind CSS v4, Framer Motion y Next-Intl.*
