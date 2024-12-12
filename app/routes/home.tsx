import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Inkline" },
    { name: "description", content: "Üdvözlünk az Inkline oldalán!" }
  ]
}

export default function Home() {
  return (
    <h1>Főoldal</h1>
  )
}
