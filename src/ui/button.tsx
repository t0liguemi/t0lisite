export default function Button({children}: {children?: string}) {
    return (
        <button className="bg-primary/80 font-bold mx-2 py-2 px-4 rounded-xl my-2 hover:bg-primary/90">
            {children}
        </button>
    )
}