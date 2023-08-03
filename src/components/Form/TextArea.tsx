export function TextArea() {
  return (
    <textarea
      id="bio"
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 shadow-sm"
      defaultValue={
        "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
      }
    />
  )
}
