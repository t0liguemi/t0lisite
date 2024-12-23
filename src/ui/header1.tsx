    export default function Header1({children}: {children?: string}) {
  return (
    <h1 className="font-extrabold text-4xl text-primary my-4">
      {children}
    </h1>
  );
}