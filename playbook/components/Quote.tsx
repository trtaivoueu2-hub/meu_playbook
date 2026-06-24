interface QuoteProps {
  text: string;
  author?: string;
  role?: string;
}

export default function Quote({ text, author, role }: QuoteProps) {
  return (
    <figure className="my-10 border-l-2 border-zinc-900 py-1 pl-6">
      <blockquote className="text-xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-2xl">
        &ldquo;{text}&rdquo;
      </blockquote>
      {(author || role) && (
        <figcaption className="mt-4 text-sm text-zinc-400">
          {author && <span className="font-semibold text-zinc-600">{author}</span>}
          {author && role && <span className="mx-1">·</span>}
          {role && <span>{role}</span>}
        </figcaption>
      )}
    </figure>
  );
}
