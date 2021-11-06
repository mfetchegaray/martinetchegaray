import NextLink from "next/link";
import Headroom from "react-headroom";
import Link from "next/link";

export default function Header() {
  return (
    <Headroom disableInlineStyles>
      <div className="px-4 mx-auto max-w-7xl xl:px-0 ">
        <nav className="relative flex items-center justify-between w-full py-6 ">
          <NextLink href="/">
            <a className="logo">
              mfetchegaray
            </a>
          </NextLink>
          <div className="pageNav">
            <div className="pageNavInside">
              {routes.map((route, i) => (
                <Link href={route.slug} key={route.slug}>
                  <a alt={route.ariaLabel} title={route.ariaLabel} aria-label={route.ariaLabel}>
                    {route.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="absolute hidden ml-0 text-xl md:block lg:right-0 right-32">
            <div className="font-mono text-xl tracking-wider uppercase btn btn-primary">Connect wallet</div>
          </div>
        </nav>
      </div>
    </Headroom>
  );
}

const routes = [
  {
    title: "Sidemenu",
    slug: "/sidemenu",
    ariaLabel: "See Sidemenu",
  },
  {
    title: "About",
    slug: "/about",
    ariaLabel: "See About",
  },
  {
    title: "Contact",
    slug: "/contact",
    ariaLabel: "See contact",
  },
  {
    title: "Otra pagina",
    slug: "/otra-pagina",
    ariaLabel: "Visita mi otra pagina",
  },
];
