import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import { BuilderElement } from "@builder.io/sdk-qwik/types/types/element";
import Example from "./example/example";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Example,
    name: "Example",
    inputs: [
      {
        name: "initialValue",
        type: "number",
      },
    ],
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: { name: "Text", options: { text: "I am child text block!" } },
      } as BuilderElement,
      {
        "@type": "@builder.io/sdk:Element",
        component: { name: "Text", options: { text: "I am child text block!" } },
      } as BuilderElement,
    ]
  },
];
