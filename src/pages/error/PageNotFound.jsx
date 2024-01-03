export default function PageNotFound() {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center">
      <h1 className="text-8xl pb-4">Error 404</h1>
      <h3 className="text-3xl pb-8"> Page Not found</h3>
      <div>
        <a href="#">Get back</a>
      </div>
    </div>
  );
}
