# React-joy

The react-joy library exported as H5 modules.

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
  interface directionProps {
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

## dom move function

```onPointerDown```
```onPointerUp```
```onPointerMove```

## DEMO
http://cxyhaha.cn/gba

--- thx ---