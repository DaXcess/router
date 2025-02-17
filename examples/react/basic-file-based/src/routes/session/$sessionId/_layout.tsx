import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/session/$sessionId/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <><div>Hello "/session/$sessionId/_layout"!</div><Outlet /></>
}
