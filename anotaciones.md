# Angular 13 (Angular 17/18)

* Legacy <https://angularjs.org/>
* Actual <https://angular.dev/>
* Blog oficial <https://blog.angular.dev/>

## Angular usa Typescript

* <https://www.typescriptlang.org/>

### Verifico si tengo Typescript

```sh
tsc --version
```

### Instalación de Typescript

```sh
npm install -g typescript
```

## Arrancando el desarrolo de una aplicación Angular 

### Angular CLI

<https://angular.dev/installation>

```sh
npm install -g @angular/cli
```

## Verifico que lo tenga instalado

```sh
ng help
ng version
```

## Creo un proyecto de Angular

```sh
ng new <nombre-del-proyecto>
ng new clase-01
```

## Empezar a desarrollar con Angular

**Nota**: Si quiero que se abra automaticamente el navegador tengo que poner en el script el flag/bandera -o

```json
"scripts": {
    "start": "ng serve -o",
}
```

```sh
npm start
```

## Detener el servidor de desarrollo

Ctrl + C

## Extensiones de VSC

* Angular.ng-template
* cyrilletuzi.angular-schematics

* formulahendry.auto-rename-tag
* benjaminbenais.copilot-theme
* EditorConfig.EditorConfig

## Extesiones de Chrome

<https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh>

## Incorporando Bootstrap al proyecto vía CDN

<https://getbootstrap.com/docs/5.3/getting-started/introduction/#cdn-links>

* CSS -> https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
* JS ->	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js

## Herramient NG

```sh
ng help
```

### Crear distintos archivos predefinidos para el proyecto

```sh
ng generate help
ng g help
```

### Agregar componentes al proyecot

```sh
ng g c componente/binding
ng g c componente/atributos
ng g c componente/formularios
ng g c componente/estructura
```

### Agregamos interfaces a nuestro proyecto

```sh
ng g interface <nombre-de-la-interfaz>
ng g i models/alumnos
```

### Agregamos directives a nuestro proyecto

```sh
ng g directive <nombre-directiva>
ng g d directives/resaltar
```

### Agregamos un service a nuestro proyecto

```sh
ng g service <nombre-servicio>
ng g s services/clientes
ng g s services/usuarios
```

## Crear en el proyecto los archivos de entorno

```sh
ng g environments
``` 

## RXJS

<https://rxjs.dev/>

##  Crear en el proyecto un modulo

```sh
ng generate module <nombre-modulo>
ng g m modules/mimodulo
## --
ng g c modules/mimodulo/components/contenido
ng g c modules/mimodulo/components/panel
ng g s modules/mimodulo/services/mimodulo
```
