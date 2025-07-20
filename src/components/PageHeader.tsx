import { Breadcrumbs } from "./Breadcrumbs";

type Props = {
  title: string;
};

export function PageHeader({ title }: Props) {
  return (
    <section className="relative bg-counter bg-cover bg-no-repeat bg-center ">
      <div className="hero-content relative z-10 h-full flex items-center py-40">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-2">{title}</h1>
            <div className="breadcrumbs text-black">
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
