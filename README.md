# Banco de Alimentos Comarcal · Valparaíso — Landing

Landing de una sola página (React + Tailwind CSS) para captar solicitudes de contacto, con un panel interno en `/admin` para editar textos, logo e imágenes sin tocar código.

## Stack

Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router. Sin base de datos ni backend propio.

## Arquitectura (resumen)

- **Sitio 100% estático** — se compila con `npm run build` a HTML/CSS/JS puro (carpeta `dist/`), sin servidor ni base de datos que mantener.
- **Contenido editable** (textos, precios, FAQ, horario, legales) vive en `localStorage` del navegador. El panel `/admin` lo edita en vivo; el botón "Exportar JSON" descarga el contenido para congelar la versión final antes de publicar.
- **Formulario de contacto**: valida los campos y el consentimiento en el propio navegador. El envío está pensado para engancharse al servicio de formularios del hosting final (actualmente implementado sobre Netlify Forms, ver `src/components/landing/contact-form.tsx` e `index.html`) — si se aloja en otro sitio, esta parte hay que adaptarla a lo que ofrezca ese hosting.
- Detalle completo de las decisiones de arquitectura en [`plans/`](./plans) y en la memoria del proyecto.

## Estructura del proyecto

```
src/
  content/            # Tipos y contenido por defecto de toda la web (textos, precios, FAQ...)
  hooks/              # use-site-content (CMS en localStorage), use-cookie-consent, use-admin-auth, use-reveal
  components/
    landing/          # Secciones públicas (hero, servicios, precios, equipo, FAQ, contacto, footer...)
    admin/            # Panel /admin: editores por sección, gate de contraseña, toolbar
  pages/              # Landing, páginas legales, página /admin
  lib/layout.ts       # Clase de contenedor compartida (ancho completo + márgenes 16/24/48/96px)
public/images/         # Logo, fotos e iconos ya optimizados que usa la web
imagenes/               # Material original recibido del cliente (no se sirve en la web)
docs/guia-uso/          # Guía de uso en HTML y PDF (ver más abajo)
```

## Desarrollo local

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run lint     # oxlint
```

## Variables de entorno

| Variable | Por defecto | Uso |
|---|---|---|
| `VITE_ADMIN_PASSWORD` | `ADMIN` | Contraseña de acceso a `/admin`. Cámbiala antes de publicar creando un archivo `.env` local (no versionado) con `VITE_ADMIN_PASSWORD=tu-clave`, o como variable de entorno del hosting elegido. |

## Editar contenido (`/admin`)

1. Entra en `tu-dominio.com/admin` con la contraseña configurada.
2. Cambia los textos de cada sección — se guardan al instante en este navegador.
3. Las imágenes solo se pueden **previsualizar** desde el panel (no se guardan ahí); para que el cambio sea definitivo hay que sustituir el archivo indicado dentro de `public/images/` y volver a publicar.
4. Cuando el contenido esté definitivo, pulsa **Exportar JSON** y usa ese archivo para sustituir `src/content/default-content.ts` (o pide que te lo integren) antes del despliegue final — así la web no depende del navegador de nadie.

Guía visual paso a paso (uso interno de Kodarvia), en HTML y PDF: [`docs/guia-uso/index.html`](./docs/guia-uso/index.html) / [`docs/guia-uso/guia-uso-web.pdf`](./docs/guia-uso/guia-uso-web.pdf).

## Despliegue

El hosting final todavía no está decidido. Al ser un sitio 100% estático (`npm run build` → carpeta `dist/`), sirve para cualquier hosting de sitios estáticos (Netlify, Vercel, Cloudflare Pages, hosting propio...). El único punto a adaptar según el hosting elegido es el envío del formulario de contacto (ver Arquitectura).

`netlify.toml` incluido en el repo configura el build y el redirect de SPA por si el hosting final es Netlify; si se elige otro proveedor, ese archivo se puede eliminar o ignorar.

## Pendiente del cliente

- Logo en vectorial (de momento se usa el logo en `.webp` ya recibido).
- Datos fiscales para las páginas legales (`/aviso-legal`, `/politica-privacidad`).
- Validación de las respuestas de las preguntas frecuentes (redactadas como borrador).
- Confirmar el hosting final para adaptar el envío del formulario de contacto si no es Netlify.
