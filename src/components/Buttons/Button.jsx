/* eslint-disable react/prop-types */
export default function Button({children = 'button', btnClass = '', divClass}){
  return(
    <div className={`border ${divClass}`}>
      <button className={`px-6 md:px-8 lg:px-8 py-2 md:py-3 lg:py-3 bg-secondary font-semibold text-white outline outline-1 capitalize transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1 ${btnClass}`}>
        {children}
      </button>      
    </div>
  );
};