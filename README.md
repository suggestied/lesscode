# LessCode UI

[![npm version](https://img.shields.io/npm/v/suggestied-lesscode-ui?style=flat-square)](https://www.npmjs.com/package/suggestied-lesscode-ui)
[![license](https://img.shields.io/github/license/suggestied/lesscode?style=flat-square)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/suggestied/lesscode?style=flat-square)](https://github.com/suggestied/lesscode/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/suggestied/lesscode?style=flat-square)](https://github.com/suggestied/lesscode/issues)
[![Build Status](https://img.shields.io/github/actions/workflow/status/suggestied/lesscode/generate-metadata.yml?style=flat-square)](https://github.com/suggestied/lesscode/actions)

**LessCode UI** is an open-source component library that provides a collection of reusable, customizable UI components built with **React** and **Tailwind CSS**, designed to be easily integrated into projects using Next.js and Supabase.

## Features

- 📦 **Prebuilt UI Components:** Buttons, Forms, Modals, Tables, and more.
- 🎨 **Tailwind Support:** Uses your existing Tailwind CSS configuration.
- ⚡ **Optimized for Next.js:** Fully compatible with SSR and static export.
- 🔄 **Customizable & Extensible:** Modify styles and behaviors with ease.
- 📚 **Metadata-Driven:** Each component comes with metadata for dynamic usage.
- 🛠 **Exportable to No-Code Solutions:** Supports drag-and-drop builder integration.

---

## Installation

To install LessCode UI in your project, run:

```bash
npm install suggestied-lesscode-ui
```

or with yarn:

```bash
yarn add suggestied-lesscode-ui
```

or with bun:

```bash
bun add suggestied-lesscode-ui
```

---

## Usage

To use LessCode UI components, import them into your project:

```tsx
import { Button } from "suggestied-lesscode-ui";

export default function App() {
  return (
    <Button variant="primary" size="lg">
      Click Me
    </Button>
  );
}
```

### Tailwind Configuration

LessCode UI relies on your project's Tailwind CSS configuration. Ensure your `tailwind.config.js` is set up properly:

```js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## Components

LessCode UI includes the following components:

| Component | Description                    |
|-----------|--------------------------------|
| Button    | Customizable button component  |
| Input     | Styled input field             |
| Modal     | Popup modal component          |
| Table     | Responsive data table          |
| Card      | Content container component    |

Each component supports customization via props and Tailwind utility classes.

---

## Example Components

### Button Component

```tsx
import { Button } from "suggestied-lesscode-ui";

<Button variant="secondary" size="sm">Secondary Button</Button>
```

#### Button Props

| Prop    | Type    | Default   | Description                  |
|---------|---------|-----------|------------------------------|
| variant | string  | "default" | Button style variant         |
| size    | string  | "md"       | Button size (sm, md, lg)      |
| asChild | boolean | false     | Renders as a child component |

---

## Component Metadata

LessCode UI provides metadata for each component that can be used to dynamically generate documentation or integrate into no-code platforms.

Example metadata for the `Button` component:

```json
{
  "name": "Button",
  "description": "A customizable button component.",
  "props": [
    {
      "name": "variant",
      "type": "enum",
      "values": ["default", "primary", "secondary"],
      "default": "default",
      "description": "Defines the button style variant."
    },
    {
      "name": "size",
      "type": "enum",
      "values": ["sm", "md", "lg"],
      "default": "md",
      "description": "Defines the button size."
    }
  ]
}
```

---

## Roadmap

- Add more complex components such as **date pickers, dropdowns, and charts.**
- Improved accessibility features (a11y).
- Add component theming support.
- Integration with Supabase for real-time data.

---

## Contributing

We welcome contributions to the project! To get started:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.