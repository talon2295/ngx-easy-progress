# NgxEasyProgress

An easy and customizable progress bar for angular.

## Install

```
npm install ngx-easy-progress
```

## Usage

```html
<ngx-easy-progress [options]="pbOptions" [progress]=".47" [buffer]=".85"></ngx-easy-progress>
```

Progress is a number between 0 and 1
If progress < 0 bar is indeterminate

### Options

```ts
interface progressBarOptions {
  vertical?: boolean;
  invert?: boolean;
  thickness?: string;
  fgColor?: string;
  bgColor?: string;
  bufColor?: string;
  borderRadius?: string;
  align?: "left" | "center" | "right";
  animate?: boolean;
  animationParams?: string;
  indeterminateLength?: string;
}
```

| Field                   | Description                                      | Default value |
| ----------------------- | ------------------------------------------------ | ------------- |
| **vertical**            | Vertical or horizontal bar                       | false         |
| **invert**              | Reverses the direction of growth                 | false         |
| **thickness**           | Bar thickness                                    | 20px          |
| **fgColor**             | Bar color                                        | #4477ee       |
| **bgColor**             | Background color                                 | #ddd          |
| **bufColor**            | Buffer bar color                                 | #eee          |
| **borderRadius**        | Bar border radius                                |               |
| **align**               | Bar alignment in the div, useful when vertically | left          |
| **animate**             | Bar progress animation                           | false         |
| **animationParams**     | Animation parameters [seconds] [function]        | .3s ease-out  |
| **indeterminateLength** | Size of progress when indeterminate              | 15%           |

### Demo

Run `ng serve` in the repo root.

The source is inside `projects/demo`