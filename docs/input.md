# Input Component

> **Category:** `Form`

## 📖 Description
A customizable input component with multiple variants and sizes.

## ⚙️ Properties

| Name     | Type   | Default   | Required | Description                     |
|----------|--------|-----------|----------|---------------------------------|
| **variant** | `enum(default \| outline \| filled)` | `default` | ✅ | Defines the input style variant. |
| **size** | `enum(sm \| md \| lg)` | `md` | ❌ | Defines the input size. |
| **placeholder** | `string` | `` | ❌ | Placeholder text for the input. |
| **value** | `string` | `` | ❌ | Value of the input field. |
| **onChange** | `function` | `undefined` | ❌ | Callback function when the input value changes. |
| **disabled** | `boolean` | `false` | ❌ | Disables the input field if set to true. |

## 🏗 Default Props

```json
{
  "variant": "default",
  "size": "md",
  "placeholder": "",
  "value": "",
  "disabled": false
}
```

## 🎯 Events

### onChange
- **Action:** `custom_function`
  - Handler: `handleChange`

## 🎨 Styles

| Property       | Default Value | Editable | Responsive |
|----------------|---------------|----------|------------|
| **borderColor** | `#e2e8f0` | ✅ | ❌ |
| **padding** | `0.75rem 1rem` | ❌ | ✅ |

## 👶 Children

❌ This component does not allow children.

## 📦 Dependencies

No dependencies required.
