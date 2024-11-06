export default function ErrorField({
  errors,
  className,
}: {
  errors: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <ul>
        {errors.map((error) => {
          return (
            <li key={error} className="text-red-500">
              {error}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
