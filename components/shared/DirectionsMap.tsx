export default function DirectionsMap({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-[#1e3a5f] ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.3726!2d-0.105948!3d50.814847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df72c6fc95c7b1%3A0x9fb0e4a9a8d21e0c!2sBrighton%20Marina%2C%20Brighton%20BN2%205UT!5e0!3m2!1sen!2suk!4v1"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Brighton Marina Hand Car Wash location map"
        aria-label="Map showing Brighton Marina Hand Car Wash location at Marina Square, BN2 5UT"
      />
    </div>
  )
}
