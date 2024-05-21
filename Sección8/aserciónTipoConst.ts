// Aserción de tipo as const
function x(): any {
    return 5
}

const y = x();

type Page = {
    title: string;
    path: string;
}

const pages = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    }
] as const;

console.log(pages[0].title);