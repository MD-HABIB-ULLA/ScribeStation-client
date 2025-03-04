interface title {
  title: string;
  description?: string;
}

const Title = ({ title, description }: title) => {
  return (
    <div>
      <div className="text-center max-w-2xl m-auto  py-8 space-y-4">
        <h1 className="md:text-3xl text-xl font-bold text-foreground">
          {title}
        </h1>
        {description && (
          <p className="md:text-sm text-xs text-center text-gray-600">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Title;
