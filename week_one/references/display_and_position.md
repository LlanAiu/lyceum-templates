# Display and Position Properties

For a rendered view: Right click on this file in VS Code --> "Open Preview" 

## Display Types

Determines how the element are organized (flow) on the page in relation to other elements.

### Outside Display
**block**: Acts like a paragraph -- The entire element starts on its own line vertically (line breaks before and after).

**inline**: Acts like a line of text -- The entire element is tacked onto the current line and wraps like text if it overflows (element height is also set to text height, even if the actual display is taller).

### Inside Display
**flex**: The element's children will expand/shrink to fill available space.

**grid**: The element's children are laid out in a grid-like format (with rows and columns).

### Both
**inline-block**: The element is tacked on to the current line, but its height will adapt to its children's height.


## Position Properties

The actual positioning of the element.

**static**: The default position -- the element stays where it is according to layout flow.

**relative**: Allows relative offsets to its normal position. This is done via the top, right, bottom, and left properties.

**fixed**: Element is removed element from layout flow (doesn't affect elements in the document flow) -- the element is always positioned relative to the browser window (even when scrolled).

**absolute**: Element is removed element from layout flow -- the element is positioned relative to its nearest (in terms of hierarchy) non-static element.

**sticky**: Element is relative until it's scrolled past, when it then becomes fixed (until its parent is scrolled past).