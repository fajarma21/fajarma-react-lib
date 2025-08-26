# Fajarma React Library

Personal React package for fajarma.

## Installation

```bash
npm install fajarma-react-lib
```

---

## Components

### Dialog

```typescript
import { Dialog } from "fajarma-react-lib";

const [display, setDisplay] = useState(false);
...

<Dialog display={display} onClose={() => setDisplay(false)}>
  Content
</Dialog>
```

---

## Custom Hooks

### useDebounce

```typescript
const debounced = useDebounce(callback, options);
```

- **Parameters**

  - `callback`: Function to be debounced

    | Type                | Required | Example  |
    | ------------------- | :------: | -------- |
    | (params: T) => void |   true   | () => {} |

  - `options`

    | Type              | Required | Example        |
    | ----------------- | :------: | -------------- |
    | UseDebonceOptions |          | see more below |

    - **UseDebonceOptions**

      - `disabledValue`: Disable debounce when meet this value (execute immediately).

      | Type | Default   | Example |
      | :--: | --------- | ------- |
      |  T   | undefined |         |

      - `timeout`: Debounce time limit.

      |  Type  | Default | Example |
      | :----: | ------- | ------- |
      | number | 500     | 1000    |

```typescript
import { useDebounce } from "fajarma-react-lib";
...

const handleDebounceHit = useDebounce(() => {
    console.log('debounced');
  },
  {
    disabledValue: '',
    timeout: 500,
  }
);
```

### useIntersect

```typescript
const { ref, intersecting } = useIntersect(callback, options);
```

- **Parameters**

  - `callback`: Function to be called when element intersected

    | Type       | Required | Example  |
    | ---------- | :------: | -------- |
    | () => void |   true   | () => {} |

  - `options`: `IntersectionObserver` options. See [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for details.

- **Returns**
  - `ref`: `React.RefObject`

```typescript
import { useIntersect } from "fajarma-react-lib";
...

const handleIntersect = () => {
  console.log('intersecting');
}

const { ref, intersecting } = useIntersect(handleIntersect);
...

<div ref={ref} />
```

### useResizeObserver

```typescript
const { ref, elementSize } = useResizeObserver(callback);
```

- **Parameters**

  - `callback`: Function to be called when element resized

    | Type       | Required | Example  |
    | ---------- | :------: | -------- |
    | () => void |          | () => {} |

- **Returns**
  - `ref`: `React.RefObject`
  - `elementSize`: Object of element size.
    - `width`: number.
    - `heigth`: number.

```typescript
import { useResizeObserver } from "fajarma-react-lib";
...

const { ref, elementSize } = useResizeObserver<HTMLDivElement>();
...

<div ref={ref}>
  {elementSize.width} x {elementSize.height}
</div>

```

### useThrottle

```typescript
const throttled = useThrottle(callback, options);
```

- **Parameters**

  - `callback`: Function to be throttled

    | Type                | Required | Example  |
    | ------------------- | :------: | -------- |
    | (params: T) => void |   true   | () => {} |

  - `options`

    | Type               | Required | Example        |
    | ------------------ | :------: | -------------- |
    | UseThrottleOptions |          | see more below |

    - **UseThrottleOptions**

      - `disabledValue`: Disable throttle when meet this value (execute immediately).

      | Type | Default   | Example |
      | :--: | --------- | ------- |
      |  T   | undefined |         |

      - `timeout`: Time interval.

      |  Type  | Default | Example |
      | :----: | ------- | ------- |
      | number | 500     | 1000    |

```typescript
import { useThrottle } from "fajarma-react-lib";
...

const handleThrottleHit = useThrottle(() => {
    console.log('throttled');
  },
  {
    disabledValue: '',
    timeout: 500,
  }
);

```
