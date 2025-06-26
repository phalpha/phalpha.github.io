document.addEventListener('DOMContentLoaded', () => {
  // Create collapsible sections for all h2 elements
  document.querySelectorAll('h2').forEach(heading => {
    // Skip if already processed
    if (heading.dataset.collapsible) return;
    
    heading.dataset.collapsible = "true";
    const section = document.createElement('div');
    section.className = 'collapsible-section';
    
    // Move all content between this h2 and next h2 into the collapsible
    let nextElement = heading.nextElementSibling;
    const content = document.createElement('div');
    content.className = 'section-content';
    
    while (nextElement && nextElement.tagName !== 'H2') {
      content.appendChild(nextElement.cloneNode(true));
      nextElement.remove();
      nextElement = heading.nextElementSibling;
    }
    
    // Create collapsible structure
    const details = document.createElement('details');
    details.className = 'collapsible';
    details.open = true; // Start with sections open
    
    const summary = document.createElement('summary');
    summary.className = 'section-title';
    summary.appendChild(heading.cloneNode(true));
    
    details.appendChild(summary);
    details.appendChild(content);
    
    // Replace heading with collapsible
    heading.replaceWith(details);
  });
  
  // Add toggle indicators
  document.querySelectorAll('.collapsible > summary').forEach(summary => {
    const indicator = document.createElement('span');
    indicator.className = 'toggle-indicator';
    indicator.textContent = '−';
    summary.prepend(indicator);
    
    summary.addEventListener('click', (e) => {
      const indicator = summary.querySelector('.toggle-indicator');
      indicator.textContent = details.open ? '+' : '−';
    });
  });
});
