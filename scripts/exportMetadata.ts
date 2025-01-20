import fs from 'fs';
import path from 'path';

// Function to dynamically import and retrieve metadata from a component
const getComponentMetadata = (filePath: string) => {
  try {
    const component = require(filePath);
    return component.metadata || null;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return null;
  }
};

// Function to recursively find component files
const collectMetadata = (dir: string): any[] => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let metadataCollection: any[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      metadataCollection = metadataCollection.concat(collectMetadata(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      const metadata = getComponentMetadata(fullPath);
      if (metadata) {
        metadataCollection.push({
          component: entry.name.replace('.tsx', ''),
          ...metadata,
        });
      }
    }
  }

  return metadataCollection;
};

// Define the components directory path
const componentsDir = path.resolve(__dirname, '../src/components');

// Collect metadata for all components
const allMetadata = collectMetadata(componentsDir);

// Write metadata to a JSON file
const outputPath = path.resolve(__dirname, '../generated/components-metadata.json');
fs.writeFileSync(outputPath, JSON.stringify(allMetadata, null, 2));

console.log(`Component metadata exported successfully to ${outputPath}`);
