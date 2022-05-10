import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as mobilenet from "@tensorflow-models/mobilenet";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";

function App() {
  const animalImgRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayImg, setDisplayImg] = useState(null);
  const [predectData, setPredectData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const predictionFnc = async () => {
    try {
      setIsLoading(true);
      const model = await mobilenet.load();
      const predict = await model.classify(animalImgRef.current);
      setPredectData(predict);
      toast.success("Done");
      setIsLoading(false);
    } catch (err) {
      toast.error("Something went wrong please try again");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setDisplayImg(objectUrl);
    }
  }, [selectedFile]);

  return (
    <div className='container mx-auto px-5 md:px-0'>
      <div className={`w-7/12 mx-auto ${displayImg ? "border-b" : ""}`}>
        <h1 className='text-center my-5 font-semibold text-xl'>
          Select your image
        </h1>
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
      <div className='md:flex my-10'>
        <div className='md:w-7/12'>
          {displayImg ? (
            <img
              className='w-7/12 mx-auto shadow-lg rounded-lg border border-gray-100'
              id='img'
              ref={animalImgRef}
              src={displayImg}
              alt='animal'
            />
          ) : (
            ""
          )}
        </div>
        <div className='md:w-5/12'>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {predectData?.map((data, i) => {
                console.log(data);
                return (
                  <div className='md:w-8/12 font-semibold text-gray-700' key={i}>
                    <div className='my-5 shadow-lg rounded-lg border border-gray-50 p-5'>
                      <h1 className='text-lg'>
                        Name: <span>{data.className}</span>
                      </h1>
                      <p>
                        Probability:{" "}
                        <span>{(data.probability * 100).toPrecision(2)}%</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
