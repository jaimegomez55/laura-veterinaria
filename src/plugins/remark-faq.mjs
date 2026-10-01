// Extrae la sección "## Preguntas frecuentes" de cada artículo del blog
// (formato: **¿Pregunta?** y en la línea siguiente la respuesta)
// y la deja en remarkPluginFrontmatter.faqs para generar el schema FAQPage.
// No hace falta tocar los artículos: funciona con el formato que ya usan.

function nodeToText(node) {
  if (!node) return '';
  if (node.type === 'text' || node.type === 'inlineCode') return node.value;
  if (node.type === 'break') return ' ';
  if (Array.isArray(node.children)) return node.children.map(nodeToText).join('');
  return '';
}

export function remarkFaq() {
  return function (tree, file) {
    const children = tree.children || [];
    const start = children.findIndex(
      (n) =>
        n.type === 'heading' &&
        n.depth === 2 &&
        nodeToText(n).trim().toLowerCase().startsWith('preguntas frecuentes')
    );
    if (start === -1) return;

    const faqs = [];
    for (let i = start + 1; i < children.length; i++) {
      const node = children[i];
      if (node.type === 'heading' && node.depth <= 2) break;
      if (node.type !== 'paragraph') continue;
      const [first, ...rest] = node.children;
      if (!first || first.type !== 'strong') continue;
      const question = nodeToText(first).trim();
      const answer = rest.map(nodeToText).join('').replace(/\s+/g, ' ').trim();
      if (question && answer) faqs.push({ question, answer });
    }

    if (faqs.length > 0) {
      file.data.astro ??= {};
      file.data.astro.frontmatter ??= {};
      file.data.astro.frontmatter.faqs = faqs;
    }
  };
}
