# ClasicComponents

ClasicComponents es un paquete de npm diseñado para agilizar la creación de archivos base para proyectos HTML, React o web en general. Este paquete permite generar componentes automáticamente con un template base, además de crear una estructura organizada con el archivo CSS asociado.

---

## Características

- Creación rápida de archivos base para proyectos web.
- Generación automática de componentes React con su archivo CSS.
- Organización eficiente para trabajar en proyectos HTML y React.
- Compatible con la consola de comandos para mayor facilidad de uso.

---

## Instalación

Para instalar ClasicComponents, ejecuta el siguiente comando en tu terminal:

```bash
npm install -g clasiccomponents

npm i clasiccomponents
```

---

## Uso

ClasicComponents está diseñado para ser utilizado desde la línea de comandos. Aquí tienes algunos ejemplos de uso:

### Crear un componente React

```bash
clasiccomponents create-component NombreComponente
```

Este comando generará una carpeta llamada `NombreComponente` que incluirá:

- `NombreComponente.jsx`
- `NombreComponente.css`

### Crear un proyecto base HTML

```bash
clasiccomponents html-env
```

Esto creará una estructura inicial para un proyecto HTML, incluyendo un archivo `index.html`.

### Crear un proyecto base para un proyecto React

```bash
clasiccomponents react-env ProyectoReact
```

Este comando generará la estructura base para un proyecto React.

---

## Ejemplo de estructura generada

### Para un componente React:

```
NombreComponente/
├── NombreComponente.jsx
└── NombreComponente.css
```

### Para un proyecto HTML:

```
ProyectoWeb/
├── index.html
└── src
    ├──style
    ├──pages
    └──files
```

---

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama nueva para tus cambios: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz un commit: `git commit -m "Añadida nueva funcionalidad"`.
4. Sube tus cambios: `git push origin feature/nueva-funcionalidad`.
5. Abre un pull request.

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## Autor

Creado y mantenido por **Luis Palomino**.

---

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **GitHub**: [LuisPalomin05](https://github.com/LuisPalomin05)

