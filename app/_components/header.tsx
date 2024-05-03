import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Header = () => {
  return (
    <>
      <header className="h-25 w-full flex flex-col gap-8 items-center">
        <h1 className="font-bold text-4xl w-full text-center">
          Bem vindo a Pop TV
        </h1>
        {/* <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex gap-8 text-sl ">
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
              <NavigationMenuLink href="/">Destaques</NavigationMenuLink>
              <NavigationMenuLink href="/">Esportes</NavigationMenuLink>
              <NavigationMenuLink href="/">Segurança</NavigationMenuLink>
              <NavigationMenuLink href="/">
                Previsão do Tempo
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}
      </header>
    </>
  );
};

export default Header;
