const Title = ({ subTitle, title, section }) => {
  return (
    <hgroup className="max-w-container mr-auto ml-auto mt-40 pl-8 pr-8">
      <h6 className="text-grey-200 font-extralight capitalize text-xl"> <a id={section}>{subTitle}</a></h6>
      <hr className="border-grey-200 w-28 mt-2 mb-2 ml-1 border-opacity-25" />
      <h1 className="uppercase text-grey-900 text-4xl font-semibold">{title}</h1>
    </hgroup>
  );
}

export default Title;