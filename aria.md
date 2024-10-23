# ARIA

### Accessible Rich Internet Applications.

- It's a way to make websites more accessible to people with disabilities.

### ARIA Attributes

1. `aria-current="page"`
    - Indicates that an item is currently selected.
    - `"page"` indicates that the item is a page.
    - `"true"` indicates that the item is currently selected.
    - Use on elements that can be selected.
    - `aria-current` can also use these values, pick the one that best describes what you need:
       - `false`
       - `step`
       - `location`
       - `date`
       - `time`

2. `aria-disabled="true"`
    - Indicates the status of an item.
    - `"true"` indicates that the item is disabled.
    - Switch it to "false" when the item is enabled.
    - Use on elements that can be disabled and enabled.

3. `aria-label="Close"`
   - ARIA for alerts.
   - This ARIA describes an item without a label.
   - `"Close"` is describing a button that has a meaning, but no label.
   - Use on icons or images that have a meaning but no label.

### Enable Full-page Accessibility Tree

1. Open developer tools
2. Elements tab
3. Accessibility tab
4. Enable full-page accessibility tree
5. Refresh the page

### The Accessibility Tree:
- Represents the structure of a web page.
- Only includes accessibility elements.
- How assistive technologies interpret and describe a web page.

### Semantic Elements

1. `<body>`
2. `<header>`
3. `<main>`
4. `<footer>`
5. `<section>`
   - Use `<section>` enclose themes, categories, and content with headings.
     - Example: recipe ingredients, recipe instructions
6. `<article>`
   - Use `<article>` for blog posts, news articles, and other independent self-contained content.
     - Example: recipe cards
7. `<dialog>`
8. - Use `<dialog>` for a box or window that can be opened or closed.
      - Example: Bootstrap alert
      - Note: Use the open attribute to show the < dialog> content.
9. `<output>`
    - Use `<output>` for the result of a calculation or showing feedback.
      - Example: The form has been successfully submitted.
10. `<label>` Can be used to help label `<input>` types.
       - semantic attributes are inclube `for` and `id`

### Semantic Attributes

1. Attributes that begin with `aria`
   - `aria-current`
   - `aria-disabled`
   - `aria-label`
2. `type`
   - `type="password"`
   - `type="tel"`
3. `role`
   - `role="alert`