import { Link } from "react-router-dom";

const MenuItem = ({ icon: Icon, label }) => {
  return (
    <Link to="/peripherals">
      <div className="flex flex-row items-center gap-x-lg px-sm py-xs hover:bg-button-secondary cursor-pointer rounded-xs ease-in-out duration-200 text-text-primary">
        <Icon size={17} color="#666666" />
        <span className="text-xs font-medium">{label}</span>
      </div>
    </Link>
  );
};

const MenuSection = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-y-2xs">
      {title && (
        <span className="text-text-caption text-xs font-medium">{title}</span>
      )}
      <div className="flex flex-col gap-y-sm">
        {items.map((item, index) => (
          <MenuItem key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export const Menu = ({ sections }) => {
  return (
    <div className="flex flex-col gap-y-sm">
      {sections.map((section, index) => (
        <MenuSection key={index} title={section.title} items={section.items} />
      ))}
    </div>
  );
};
