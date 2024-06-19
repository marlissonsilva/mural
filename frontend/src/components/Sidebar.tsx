import Logo from "./Logo";
import Menu from "./Menu";

interface SidebarProps {
  className?: string;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div
      className={`absolute sm:static 
    sm:flex flex-col z-30  bg-purple-950
    ${props.className}`}
    >
      <Logo />
      <Menu />
    </div>
  );
}
