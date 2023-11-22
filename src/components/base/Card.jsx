import PropTypes from "prop-types";

export default function Card({ title, children, actions }) {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="text-xl flex flex-row justify-between items-center font-semibold ">
            {title}
            {/*<div className={'flex flex-row content-center'}>
                            {toTranslate("Employees")}
                        </div>
                        <div className="inline-block float-right">
                            <button className="btn btn-sm bg-gray-800 hover:bg-gray-300 text-white hover:text-black">
                                <Plus size={20}/>
                                {toTranslate("Add new")}
                            </button>
                        </div>*/}
          </div>
          <div className={"divider"}></div>
          <div className="h-full w-full pb-6 bg-base-100">
            <div className="overflow-x-auto w-full rounded-t-lg">
              {children}
            </div>
          </div>
          <div className="card-actions justify-end">{actions}</div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
};
