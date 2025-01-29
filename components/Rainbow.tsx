export function Rainbow({ className = "" }: { className?: string }) {
  return (
    <div className={`w-64 h-32 overflow-hidden ${className}`}>
      <div className="w-full h-full bg-gradient-to-b from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-t-full opacity-70"></div>
    </div>
  )
}

