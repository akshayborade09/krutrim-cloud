export const styles = [
  {
    name: "new-york",
    label: "Compact",
  },
  {
    name: "default",
    label: "Default",
  },
] as const

export type Style = (typeof styles)[number]
