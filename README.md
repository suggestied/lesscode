# **LessCode UI**

[![npm version](https://img.shields.io/npm/v/suggestied-lesscode-ui?style=flat-square)](https://www.npmjs.com/package/suggestied-lesscode-ui)
[![license](https://img.shields.io/github/license/suggestied/lesscode?style=flat-square)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/suggestied/lesscode/generate-metadata.yml?style=flat-square)](https://github.com/suggestied/lesscode/actions)
[![GitHub stars](https://img.shields.io/github/stars/suggestied/lesscode?style=flat-square)](https://github.com/suggestied/lesscode/stargazers)

**LessCode UI** is a powerful, metadata-driven component library for **React** and **Tailwind CSS**, designed to work seamlessly with **Next.js** and **Supabase**. Build customizable, production-ready UI components with ease.

---

## 🚀 Features

- **Prebuilt Components** – Buttons, Inputs, Modals, and more.
- **Tailwind Native** – Uses your existing Tailwind config.
- **Metadata-Driven** – Auto-generate docs and no-code building.

---

## 📦 Installation

Install LessCode UI with your favorite package manager:

```bash
npm install suggestied-lesscode-ui
# or
yarn add suggestied-lesscode-ui
# or
bun add suggestied-lesscode-ui
```

---

## 🛠 Usage

Import components and start building:

```tsx
import { Button } from "suggestied-lesscode-ui";

export default function App() {
  return <Button variant="primary" size="lg">Click Me</Button>;
}
```

Make sure your Tailwind CSS is configured correctly in `tailwind.config.js`:

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

## 📚 Available Components

| Component | Description              |
|-----------|--------------------------|
| `Button`  | Customizable button       |
| `Input`   | Styled input field        |
| `Modal`   | Popup modal window        |
| `Table`   | Responsive data table     |
| `Card`    | Content display component |

Each component supports props for easy customization.

---

## 🔍 Example Metadata

LessCode UI components come with metadata that can be used to dynamically generate documentation and enable no-code integrations.

```json
{
  "component": "Button",
  "description": "A customizable button component.",
  "props": [
    {
      "name": "variant",
      "type": "enum",
      "values": ["default", "primary", "secondary"],
      "default": "default",
      "description": "Defines the button style."
    }
  ]
}
```

---

## 🏗 Roadmap

- [x] Core UI components (Buttons, Inputs, Modals)
- [ ] Advanced components (Charts, Forms)
- [ ] Supabase Integration for real-time data
- [ ] No-code drag-and-drop builder
- [ ] Theming & Dark Mode Support

---

## 🤝 Contributing

Want to help improve LessCode UI? Here's how to get started:

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "feat: added new feature"`
4. Push and open a PR.

---

## 📄 License

Licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## ⭐ Support

If you find this project helpful, please consider giving it a star ⭐ on GitHub. Your support helps drive development!

---

LessCode UI - **"Code less, build more!"** 🚀
