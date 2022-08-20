import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "standalone-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}