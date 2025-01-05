// Initial markdown content
const defaultMarkdown = `
# Heading 1
## Subheading 2
[FreeCodeCamp](https://www.freecodecamp.org)
\`Inline code\`
\`\`\`javascript
const x = 10;
console.log(x);
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://www.freecodecamp.org/news/content/images/2020/03/freecodecamp-logo-social.png)
**Bold text**
`;

// Get the editor and preview elements
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Initialize the editor with the default markdown content
editor.value = defaultMarkdown;

// Function to update the preview
function updatePreview() {
  // Convert markdown to HTML using the marked library
  const htmlContent = marked(editor.value);
  preview.innerHTML = htmlContent;
}

// Event listener to update preview when the user types
editor.addEventListener('input', updatePreview);

// Initial preview update when page loads
updatePreview();
