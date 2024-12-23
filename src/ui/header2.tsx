export default function Header2({children}: {children?: string}) {
    return (
      <h2 className="font-normal text-2xl text-primary my-2">
       {children}
      </h2>
    );
  }