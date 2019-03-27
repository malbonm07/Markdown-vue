const regexSimbols = [
  [/#{6}\s?([^\n]+)\n/g, "<h6>$1</h6>"],
  [/#{5}\s?([^\n]+)\n/g, "<h5>$1</h5>"],
  [/#{4}\s?([^\n]+)\n/g, "<h4>$1</h4>"],
  [/#{3}\s?([^\n]+)\n/g, "<h3>$1</h3>"],
  [/#{2}\s?([^\n]+)\n/g, "<h2>$1</h2>"],
  [/#{1}\s?([^\n]+)\n/g, "<h1>$1</h1>"],
  [/\[([^\]]+)\]\(([^\]]+)\)/g, '<a href="$2">$1</a>']
];

export default {
  bind(el) {
    let text = el.textContent;
    regexSimbols.forEach(([rule, template]) => {
      text = text.replace(rule, template);
    });
    el.innerHTML = text;
  }
};
