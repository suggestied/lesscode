# Button Component

> **Category:** `UI`

## 📖 Description
A customizable button component with multiple variants and sizes.

## ⚙️ Properties

| Name     | Type   | Default   | Required | Description                     |
|----------|--------|-----------|----------|---------------------------------|
| **variant** | `enum(default \| destructive \| outline \| secondary \| ghost \| link)` | `default` | ✅ | Defines the button style variant. |
| **size** | `enum(default \| sm \| lg \| icon)` | `default` | ❌ | Defines the button size. |
| **asChild** | `boolean` | `false` | ❌ | If true, renders the component as a child of another element. |
| **onClick** | `function` | `undefined` | ❌ | Callback function when the button is clicked. |

## 🏗 Default Props

```json
{
  "variant": "default",
  "size": "default",
  "asChild": false
}
```

## 🎯 Events

### onClick
- **Action:** `custom_function`
  - Handler: `handleClick`

## 🎨 Styles

| Property       | Default Value | Editable | Responsive |
|----------------|---------------|----------|------------|
| **backgroundColor** | `#3498db` | ✅ | ❌ |
| **padding** | `1rem` | ❌ | ✅ |

## 👶 Children

❌ This component does not allow children.

## 📦 Dependencies

No dependencies required.
