const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function HomeMission() {
  return (
    <div
      className="relative isolate overflow-hidden bg-white py-12 pb-36 scroll-mt-24 lg:scroll-mt-56"
      id="HomeMission"
    >
      <div className="mx-auto max-w-7xl sm:px-32">
        <div className="flex flex-row flex-wrap">
          <div className="basis-full xl:basis-1/2">
            <div className="max-w-4xl text-center text-balance mx-auto">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700 text-md lg:text-lg">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
          </div>
          <div className="basis-full xl:basis-1/2 mt-24 xl:mt-0">
            <div className="max-w-4xl text-center text-balance mx-auto">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Vision
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700 text-md lg:text-lg ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
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
