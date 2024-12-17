import { DNA } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[rgb(0,0,31)]">

            <DNA
                visible={true}
                height="100"
                width="150"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"

            />

        </div>
    );
};

export default Loading;