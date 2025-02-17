import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/session/$sessionId/_layout/logs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/session/$sessionId/_layout/logs"!</div>
}
