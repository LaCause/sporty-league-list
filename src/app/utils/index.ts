export function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function sleep(ms = 500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
