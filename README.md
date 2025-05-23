# Fajarma React Library

Personal React package for fajarma.

## Installation

```bash
npm install fajarma-react-lib
```

## Components

### Dialog

```typescript
import { Dialog } from "fajarma-react-lib";
...
const [display, setDisplay] = useState(false);
...
<Dialog display={display} onClose={() => setDisplay(false)}>
  Content
</Dialog>
```

## Hooks

### useIntersect

```typescript
import { useIntersect } from "fajarma-react-lib";
...
const { ref, intersecting } = useIntersect({ callback: () => console.log('intersecting') });
...
<div ref={ref} />
{intersecting && <SomeComponent />}
```

### useResizeObserver

```typescript
import { useResizeObserver } from "fajarma-react-lib";
...
const { ref, elementSize } = useResizeObserver();
...
<div ref={elementRef}>
  {elementSize.width} x {elementSize.height}
</div>
```
