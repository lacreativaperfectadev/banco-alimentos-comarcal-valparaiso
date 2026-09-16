# Banco de Alimentos Comarcal · Valparaíso — Landing

Landing de una sola página (React + Tailwind CSS) para captar solicitudes de contacto, con un panel interno en `/admin` para editar textos, logo e imágenes sin tocar código.

## Arquitectura (resumen)

- **Sitio 100% estático**, sin base de datos ni backend propio.
- **Contenido editable** (textos, precios, FAQ, horario, legales) vive en `localStorage` del navegador. El panel `/admin` lo edita en vivo; el botón "Exportar JSON" descarga el contenido para congelar la versión final.
- **Formulario de contacto**: usa [Netlify Forms](https://docs.netlify.com/manage/forms/) (sin backend propio). Las solicitudes quedan guardadas y visibles en el sitio de Netlify, en **Site settings → Forms**. Ahí también se puede activar el aviso por correo (lo conecta Kodarvia).
- Detalle completo de las decisiones en [`plans/`](./plans) y en la memoria del proyecto.

## Desarrollo local

```bash
npm install
npm run dev
```

## Variables de entorno

| Variable | Por defecto | Uso |
|---|---|---|
| `VITE_ADMIN_PASSWORD` | `ADMIN` | Contraseña de acceso a `/admin`. Cámbiala antes de publicar creando un archivo `.env` local (no versionado) con `VITE_ADMIN_PASSWORD=tu-clave`, o como variable de entorno en Netlify. |

## Editar contenido (`/admin`)

1. Entra en `tu-dominio.com/admin` con la contraseña configurada.
2. Cambia los textos de cada sección — se guardan al instante en este navegador.
3. Las imágenes solo se pueden **previsualizar** desde el panel (no se guardan ahí); para que el cambio sea definitivo hay que sustituir el archivo indicado dentro de `public/images/` y volver a publicar.
4. Cuando el contenido esté definitivo, pulsa **Exportar JSON** y usa ese archivo para sustituir `src/content/default-content.ts` (o pide que te lo integren) antes del despliegue final — así la web no depende del navegador de nadie.

Guía visual paso a paso (para el cliente, sin jerga técnica), en HTML y PDF: [`docs/guia-uso/index.html`](./docs/guia-uso/index.html) / [`docs/guia-uso/guia-uso-web.pdf`](./docs/guia-uso/guia-uso-web.pdf).

## Despliegue

- **Repositorio:** https://github.com/lacreativaperfectadev/banco-alimentos-comarcal-valparaiso
- **Web publicada:** https://banco-alimentos-comarcal-valparaiso.netlify.app
- **Panel de contenido:** https://banco-alimentos-comarcal-valparaiso.netlify.app/admin

El sitio está enlazado (`netlify link`) al proyecto de Netlify `banco-alimentos-comarcal-valparaiso`. Para publicar cambios nuevos:

```bash
netlify deploy --prod --build
```

Revisa **Site settings → Forms** en Netlify para ver las solicitudes de contacto y activar el aviso por correo.

## Pendiente del cliente

- Logo en vectorial (de momento se usa el logo en `.webp` ya recibido).
- Datos fiscales para las páginas legales (`/aviso-legal`, `/politica-privacidad`).
- Validación de las respuestas de las preguntas frecuentes (redactadas como borrador).
