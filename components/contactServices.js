import { useRef, useEffect } from 'react';

const ContactServices = ({ services, service, setService, clear }) => {

  // TODO: Am going to make this choose function apply from state
  // TODO: Am going to make the choose selection based on the index number of the element and make a check against the element itself

  const servs = useRef([]);

  useEffect(() => {
    if (clear)
      for (let service of servs.current) service.dataset.selected = 'false';
  }, [servs])

  const chosen = ({target}) => {
    const id = Number(target.dataset.id);
    const selected = target.dataset.selected
    if (selected === 'false') {
      setService([...service, id]);
      target.dataset.selected = 'true';
      target.classList.add('serviceActive');
    } else {
      const index = service.indexOf(id);
      service.splice(index, 1);
      setService(service);
      target.dataset.selected = 'false';
      target.classList.remove('serviceActive');
    }
  }

  return (
    <div className="mt-10 md:mr-auto md:ml-auto md:max-w-container">
      <p className="text-sm font-semibold text-grey-800">Services</p>

      <div className="flex gap-4 flex-wrap mt-5 font-light text-sm text-grey-800">
        {(services) && services.map(({ id, name }) => (
          <p
            className="bg-grey-400 border-2 border-grey-100 p-2 pl-6 pr-6 rounded-xl hover:border-red-100 hover:text-red-100 cursor-pointer"
            key={id}
            data-id={id}
            data-selected={false}
            ref={(el) => servs.current.push(el)}
            onClick={chosen}
          >{name}</p>
        ))}
      </div>
    </div>
  );
}

export default ContactServices;