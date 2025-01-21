// @ts-nocheck
const fs = require('fs');

const metadata = require('../generated/components-metadata.json');

// Function to generate markdown content with better structure and readability
const generateMarkdown = (component) => {
  let md = `# ${component.name} Component\n\n`;
  md += `> **Category:** \`${component.category}\`\n\n`;
  md += `## 📖 Description\n${component.description}\n\n`;

  md += `## ⚙️ Properties\n\n`;
  md += `| Name     | Type   | Default   | Required | Description                     |\n`;
  md += `|----------|--------|-----------|----------|---------------------------------|\n`;

  component.props.forEach((prop) => {
    const values = prop.values ? `(${prop.values.join(' \\| ')})` : "";
    md += `| **${prop.name}** | \`${prop.type}${values}\` | \`${prop.default}\` | ${prop.required ? '✅' : '❌'} | ${prop.description} |\n`;
  });

  md += `\n## 🏗 Default Props\n\n`;
  md += `\`\`\`json\n${JSON.stringify(component.defaultProps, null, 2)}\n\`\`\`\n\n`;

  md += `## 🎯 Events\n\n`;
  component.events.forEach((event) => {
    md += `### ${event.type}\n`;
    event.actions.forEach((action) => {
      md += `- **Action:** \`${action.type}\`\n`;
      md += `  - Handler: \`${action.handlerName}\`\n\n`;
    });
  });

  md += `## 🎨 Styles\n\n`;
  md += `| Property       | Default Value | Editable | Responsive |\n`;
  md += `|----------------|---------------|----------|------------|\n`;
  component.styles.forEach((style) => {
    md += `| **${style.property}** | \`${style.value}\` | ${style.editable ? '✅' : '❌'} | ${style.responsive ? '✅' : '❌'} |\n`;
  });

  md += `\n## 👶 Children\n\n`;
  md += component.childrenAllowed
    ? "✅ This component allows children.\n"
    : "❌ This component does not allow children.\n";

  md += `\n## 📦 Dependencies\n\n`;
  if (component.dependencies.length > 0) {
    component.dependencies.forEach((dep) => {
      md += `- **${dep.name}**: ${dep.description}\n`;
    });
  } else {
    md += "No dependencies required.\n";
  }

  return md;
};

// Generate documentation for each component
metadata.forEach((component) => {
  const mdContent = generateMarkdown(component);
  const fileName = `./docs/${component.name.toLowerCase()}.md`;
  fs.writeFileSync(fileName, mdContent);
  console.log(`Generated documentation for ${component.name}`);
});
