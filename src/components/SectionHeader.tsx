interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="max-w-4xl flex flex-col gap-2">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-sm opacity-50">{description}</p>
    </div>
  );
};

export default SectionHeader;
