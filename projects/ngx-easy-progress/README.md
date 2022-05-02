# NgxEasyProgress

An easy and customizable progress bar for angular.

## Install

```
npm install ngx-easy-progress
```

## Usage

```html
<ngx-easy-progress [options]="pbOptions" [progress]=".47"></ngx-easy-progress>
```

Progress is a number between 0 and 1

### Options

```ts
interface progressBarOptions {
  vertical?: boolean;
  invert?: boolean;
  thickness?: string;
  fgColor?: string;
  bgColor?: string;
  align?: "left" | "center" | "right";
}
```

| Field         | Description                                      | Default value |
| ------------- | ------------------------------------------------ | ------------- |
| **vertical**  | Vertical or horizontal bar                       | false         |
| **invert**    | Reverses the direction of growth                 | false         |
| **thickness** | Bar thickness                                    | 20px          |
| **fgColor**   | Bar color                                        | #4477ee       |
| **bgColor**   | Background color                                 | #ddd          |
| **align**     | Bar alignment in the div, useful when vertically | left          |

### Demo

Run `ng serve` in the repo root.

The source is inside `projects/demo`