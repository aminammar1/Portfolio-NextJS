export default function Divider() {
  return (
    <div
      aria-hidden="true"
      className="relative left-1/2 h-8 w-screen -translate-x-1/2 overflow-hidden"
    >
      <div className="hatch absolute inset-0" />
    </div>
  )
}
