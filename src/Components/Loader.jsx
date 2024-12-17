import { Puff } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[rgb(0,0,31)]">

            <Puff
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;