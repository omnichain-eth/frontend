"use client"

const getConsensus = (value) => {
    if (value >= 50) {
      return { text: "Likely ⌐🅄-🅄", color: "text-green-600" };
    } else {
      return { text: "Unlikely ⌐🅃-🅃", color: "text-red-600" };
    }
};

export default function Card() {

    const progressValue = 20; 
    const { text: consensusText, color: consensusColor } = getConsensus(progressValue);

    return (
        <div className="font-figtree mx-2 my-2 px-2 py-2 bg-white border border-gray-400 rounded-md">
            <div className="flex justify-center">
            <img className="rounded-md"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-1 w-full mt-2">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Will Bitcoin reach $100k this year?
                </h2>
                <p className="text-sm text-gray-600 mt-2 mb-4">
                    Bitcoin has been on a tear lately. Experts weigh in on its potential to hit the $100k milestone this year.
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <span className="text-sm font-medium text-gray-500">Current consensus:</span>
                    <span className={`text-lg font-bold ${consensusColor}`}>{consensusText}</span>
                </div>
                </div>
                <div className="flex-shrink-0">
                    <div className="radial-progress bg-gray-100 text-green-500 " style={{ "--value": progressValue }} role="progressbar">
                        {progressValue}%
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <button className="btn btn-success flex-1 hover:bg-chateau-green-600 text-white font-medium py-2 px-4"> Yes </button>
                <p className="font-bold text-2xl"> / </p>
                <button className="btn btn-error flex-1 hover:bg-torch-red-600 text-white font-medium py-2 px-4"> No </button>
            </div>
        </div>
    );
}