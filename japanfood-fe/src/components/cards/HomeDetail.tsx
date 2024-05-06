import { IconType } from "react-icons";

interface DetailAttribute{
    Icon: IconType,
    address: string,
    children: React.ReactNode
}

export default function HomeDetail({Icon,address,children}: DetailAttribute) {
  return (
    <div className="flex gap-8">
      <div className="w-16">
        <Icon className="text-6xl max-w-xl " />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl">{address}</p>
        <p className="">{children}</p>
      </div>
    </div>
  );
}
