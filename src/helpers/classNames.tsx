type Mods = Record<string, string | boolean>
export function classNames(cls: string, mods: Mods, additinional: string[]): string {
    return [
      cls,
      ...additinional,
      ...Object.entries(mods)
      .filter(([classname, value])=>(Boolean(value)))
      .map(([classname])=>classname)
    ].join(' ')
}