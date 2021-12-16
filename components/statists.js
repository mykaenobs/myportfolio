import useStore from '@store/index';

const Statists = () => {
  const statics = useStore(state => state.statics);

  console.log(statics)

  return (
    <section className="pl-8 pr-8">
      <div className="bg-red-200 mt-10 flex flex-wrap gap-8 p-6 rounded-2xl md:max-w-container md:mr-auto md:ml-auto">
        {statics.map((s) =>
          <div key={s.id} className="flex-1 text-red-200 uppercase bg-white text-center p-4 pt-8 pb-8 rounded-2xl">
            <h1 className="text-7xl font-bold font-jet">{s.amount}</h1>
            <p className="mt-2">{s.name}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Statists;