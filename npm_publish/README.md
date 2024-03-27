# React-joy v1.1.2

The react-joy library exported as Web modules.

## Install
Using npm:
```shell
$ npm i react-joy
```
## Quickstart
```tsx
  enum LRFB { 
    'LEFT',
    'RIGHT',
    'FORWARD',
    'BACKWARD',
  }
  directionProps {
    direction: LRFB,
    x: number,
    y: number
  }

  const handleMove = function (e: directionProps) {
    const { x, y, direction } = e;
    // code...
  }
  const handleStop = function (e: MouseEvent) {
    
    // code...
  }

  // jsx
  <Joy handleMove={handleMove} handleStop={handleStop} />
```

## thx
