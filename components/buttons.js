import Link from "next/link";

const BtnSolid = ({more}) => {
  return (
    <div className="mt-28 flex gap-8 items-center justify-center">
      <hr className="border-grey-100 w-80" />
      {(more) ? (
        <Link href="/projects"><a className="p-3 pl-5 pr-5 bg-red-200 text-white rounded-xl text-sm whitespace-nowrap">More Works</a></Link>
      ): (
        <Link href="#"><a className="p-3 pl-5 pr-5 bg-red-200 text-white rounded-xl text-sm whitespace-nowrap">Loading more projects...</a></Link>
      )}
      <hr className="border-grey-100 w-80" />
    </div>
  )
}

const BtnContact = () => {
  return (
    <div className="mt-20 flex gap-8 items-center justify-center pl-8 pr-8">
      <hr className="border-grey-100 w-full" />
        <Link href="tel:+2348023457784"><a className="p-3 pl-5 pr-5 bg-red-200 text-white rounded-xl text-sm whitespace-nowrap" title={+2348023457784}>Call Us Directly</a></Link>
        <Link href="mailto: mykaenobs@gmail.com"><a className="p-3 pl-5 pr-5 border-2 border-red-100 text-red-100 rounded-xl text-sm whitespace-nowrap" title={'mykaenobs@gmail.com'}>Email Us Directly</a></Link>
      <hr className="border-grey-100 w-full" />
    </div>
  )
}


export { BtnContact, BtnSolid };