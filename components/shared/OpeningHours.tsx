const days = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
]

export default function OpeningHours({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="text-sm text-[#94a3b8]">
        <span className="text-[#f0f9ff] font-medium">Mon – Sun:</span> 9:00 AM – 6:00 PM
      </div>
    )
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-[#1e3a5f]">
      {days.map((day, i) => (
        <div
          key={day}
          className={`flex justify-between items-center px-4 py-3 text-sm ${
            i % 2 === 0 ? 'bg-[#0f1624]' : 'bg-[#080c14]'
          }`}
        >
          <span className="font-medium text-[#f0f9ff]">{day}</span>
          <span className="text-[#38bdf8]">9:00 AM – 6:00 PM</span>
        </div>
      ))}
    </div>
  )
}
