export default function Small({className ,children}: {className?: string, children?: string}) {
    return (
      <p className={"font-light text-sm text-secondary my-0 "+className}>
        {children}
      </p>
    );
  }