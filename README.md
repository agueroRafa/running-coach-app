# Running Coach App

Frontend en React para mostrar entrenamientos de running en formato calendario diario.

## Stack

- React + Vite
- Sin backend (datos locales en codigo)
- Deploy listo para Netlify

## Como editar entrenamientos

Edita el archivo:

`src/data/trainings.js`

Cada objeto representa un dia y su detalle.

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

## Deploy Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- El archivo `netlify.toml` ya trae esta configuracion.
