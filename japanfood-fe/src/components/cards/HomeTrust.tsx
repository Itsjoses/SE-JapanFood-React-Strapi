import { IconType } from "react-icons";

interface HomeTrustAttribute{
    Icon:  IconType,
    title: string,
    children: React.ReactNode
}

export default function HomeTrust({Icon,title,children}: HomeTrustAttribute) {
  return (
    <div className="flex flex-col items-center md:gap-8 gap-2">
      <Icon className="lg:text-8xl md:text-6xl text-5xl text-orange-500" />
      <p className="lg:text-lg text-base font-semibold font-Merienda">{title}</p>
      <p className="text-center lg:text-base text-xs">
        {children}
      </p>
    </div>
  );
}
