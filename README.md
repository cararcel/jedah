# Jedah

Sitio web para los espacios de aprendizaje de inglés de Jedah Castillo, construido con Laravel, Inertia, React y Tailwind CSS.

## Stack

- Laravel 13
- PHP 8.4+
- Inertia.js 3
- React 19
- Tailwind CSS 4
- Laravel Fortify
- Laravel Wayfinder
- Pest

## Requisitos

- PHP 8.4 o superior
- Composer
- Node.js y npm
- SQLite

## Instalación

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
```

## Desarrollo

Levanta Laravel, Vite, la cola y los logs con:

```bash
composer run dev
```

También puedes levantar solo Vite con:

```bash
npm run dev
```

## Comandos útiles

```bash
npm run build
npm run lint:check
npm run format:check
npm run types:check
php artisan test
composer run ci:check
```

## Páginas principales

- `/` - Página principal de Once Upon a Traveller.
- `/english-course` - Página del curso de inglés.
- `/dashboard` - Panel privado para usuarios autenticados.

## Estructura relevante

- `resources/js/pages` - Páginas de Inertia con React.
- `resources/js/components` - Componentes compartidos.
- `resources/js/assets` - Imágenes, logo y recursos visuales.
- `routes/web.php` - Rutas web de Laravel.
- `tests` - Pruebas con Pest.

## Formato y calidad

Antes de cerrar un cambio, ejecuta los checks relacionados:

```bash
npm run lint:check
npm run types:check
php artisan test --compact
```

Si modificas archivos PHP, ejecuta:

```bash
vendor/bin/pint --dirty --format agent
```
