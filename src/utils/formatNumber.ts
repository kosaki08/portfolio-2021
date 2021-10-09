export function pad(d: number): string {
  return d < 10 ? '0' + d.toString() : d.toString()
}
