const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function HomeMission() {
  return (
    <div
      className="relative isolate overflow-hidden bg-accent2 py-36 scroll-mt-24 lg:scroll-mt-56"
      id="HomeMission"
    >
      <div className="mx-auto max-w-7xl px-10 sm:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div className="max-w-4xl text-center text-balance mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-darkText lg:text-5xl">
              Mission
            </h2>
            <p className="mt-3 md:mt-6 lg:leading-6 text-lightText text-sm leading-5 md:text-lg">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="max-w-4xl text-center text-balance mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-darkText lg:text-5xl">
              Vision
            </h2>
            <p className="mt-3 md:mt-6 lg:leading-6 text-lightText text-sm leading-5 md:text-lg">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-24 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 text-center text-md lg:text-lg">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-700">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
