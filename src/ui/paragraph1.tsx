export default function Paragraph1({children}: {children?: string}) {
    return (
      <p className="font-normal text-primary my-1">
        {children}
      </p>
    );
  }