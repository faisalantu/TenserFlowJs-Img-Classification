import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as mobilenet from "@tensorflow-models/mobilenet";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";

function App() {
    const animalImgRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [displayImg, setDisplayImg] = useState(null);
    const [predectData, setPredectData] = useState(null);
    const predictionFnc = async () => {
        try {
            const model = await mobilenet.load();
            const predict = await model.classify(animalImgRef.current);
            setPredectData(predict);
            toast.success("Done");
        } catch (err) {
            toast.error("Something went wrong please try again");
        }
    };

    useEffect(() => {
        if (selectedFile) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setDisplayImg(objectUrl);
        }
    }, [selectedFile]);

    return (
        <div className='container mx-auto'>
            <div className='w-7/12 mx-auto border-b'>
                <h1 className='text-center my-5 font-semibold text-xl'>Select your image</h1>
                <div className='mb-4 text-center'>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='file'
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                    />
                    <button
                        className='mt-5 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        type='button'
                        onClick={predictionFnc}
                    >
                        Predict
                    </button>
                </div>
            </div>
            <div className="flex mt-10">
                <div className="w-7/12">
                    <img className="w-7/12 mx-auto" id='img' ref={animalImgRef} src={displayImg} alt='animal' />
                </div>
                <div className="w-5/12">
                    {predectData?.map((data,i) => {
                        console.log(data);
                        return (
                            <div key={i}>
                                <h1>
                                    Name: <span>{data.className}</span>
                                </h1>
                                <p>
                                    Probability: <span>{data.probability}</span>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            
        </div>
    );
}

export default App;
