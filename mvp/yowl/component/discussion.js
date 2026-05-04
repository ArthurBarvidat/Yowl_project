export function IconBack({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function IconImage({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

//BULLE DE MESSAGE
export function MessageBubble({ me, name, text, time, image }) {
  return (
    <div className={`flex ${me ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm border ${
          me
            ? "bg-black text-white border-black"
            : "bg-white text-black border-black/10"
        }`}
      >
        {!me && (
          <div className="text-[11px] font-semibold text-black/60 mb-1">
            {name}
          </div>
        )}
        <div className="whitespace-pre-wrap break-words">{text}</div>
        {image && (
          <img
            src={image}
            alt="image envoyée"
            className="max-w-[200px] rounded mt-2"
          />
        )}
        <div
          className={`mt-1 text-[10px] ${me ? "text-white/70" : "text-black/40"}`}
        >
          {time}
        </div>
      </div>
    </div>
  );
}
