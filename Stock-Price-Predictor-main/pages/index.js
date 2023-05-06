import React, { useEffect, useRef, useState } from 'react'
import Microsoft from '../Data/Microsoft.json'
import Amazon from '../Data/Amazon.json'
import Netflix from '../Data/Netflix.json'
import BAC from '../Data/BAC.json'
import Coca from '../Data/Coca.json'
import Fdex from '../Data/Fdex.json'
import Ford from '../Data/Ford.json'
import Gmotors from '../Data/Gmotors.json'
import Google from '../Data/Google.json'
import Ibm from '../Data/Ibm.json'
import Intel from '../Data/Intel.json'
import JP from '../Data/JP.json'
import Qualcom from '../Data/Qualcom.json'
import Tesla from '../Data/Tesla.json'
import Wallmart from '../Data/Wallmart.json'
import Lists from '../components/Lists'
import { BallTriangle } from 'react-loader-spinner'
import Head from 'next/head'

function index() {
  const [loading, setLoading] = useState(true)
  let options = useRef(null)
  let scrolls = useRef(null)
  const [set, setSet] = useState('')

  let count = 0

  function changes() {
    setLoading(true)
    setSet(options.current.value)
    setLoading(false)
    scrolls.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  function changeData() {
    setLoading(true)
    setTimeout(changes, 3000)
  }

  function SetData() {
    setLoading(true)
    setSet('Microsoft')
    setLoading(false)
    count = 1
    scrolls.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  if (count === 0) {
    useEffect(() => {
      setTimeout(SetData, 3000)
    }, [])
  }

  return (
    <>
      <Head>
        <title>Stock Price Predictor</title>
      </Head>
      <div className="m-auto  h-[100%] w-[100%] max-w-[80rem] border-0 border-white px-3 md:px-5    ">
        <img src="/title.png" alt="" className=" m-auto my-10  w-[90%] " />

        <select
          ref={options}
          onChange={changeData}
          className=" mt-5 rounded-sm   bg-transparent py-3 pr-5 font-serif text-[1.6rem] font-medium tracking-wider text-slate-200 outline-none sm:pr-10  "
        >
          <option value="Microsoft" className="bg-black">
            Microsoft
          </option>
          <option value="Amazon" className="bg-black">
            Amazon
          </option>
          <option value="Netflix" className="bg-black">
            Netflix
          </option>
          <option value="BAC" className="bg-black">
            Bank Of America
          </option>
          <option value="Coca" className="bg-black">
            Coca Cola
          </option>
          <option value="Fdex" className="bg-black">
            Fedex
          </option>
          <option value="Ford" className="bg-black">
            Ford Motors
          </option>
          <option value="Gmotors" className="bg-black">
            General Motors
          </option>
          <option value="Google" className="bg-black">
            Google
          </option>
          <option value="Ibm" className="bg-black">
            Ibm
          </option>
          <option value="Intel" className="bg-black">
            Intel
          </option>
          <option value="JP" className="bg-black">
            JP Morgan Chase
          </option>
          <option value="Qualcom" className="bg-black">
            Qualcom
          </option>
          <option value="Tesla" className="bg-black">
            Tesla
          </option>
          <option value="Wallmart" className="bg-black">
            Wallmart
          </option>
        </select>

        <div className=" mt-10 w-[100%]  md:mt-10 ">
          {loading ? (
            <div className=" mt-36  flex h-fit w-[100%] items-center justify-center">
              <BallTriangle color="#00BFFF" height={80} width={80} />
            </div>
          ) : (
            <img
              src={`/${set}.png`}
              alt=""
              className="w-[100%] rounded-md shadow-md shadow-slate-300  "
            />
          )}
        </div>

        {!loading && (
          <div
            ref={scrolls}
            className=" my-14 flex w-[100%] flex-col items-center   md:my-32 "
          >
            {/*  */}

            <div className="flex w-[100%] flex-wrap  items-center  rounded-t-md bg-white shadow-sm shadow-slate-100 ">
              <p className=" w-[20%] border-[0.1rem] border-slate-200 py-4  px-4 text-left font-serif text-[1.3rem] font-semibold  tracking-wide text-slate-800 sm:text-[1.6rem] ">
                Index
              </p>
              <p className=" w-[40%] border-[0.1rem] border-slate-200 py-4  px-4 text-left font-serif text-[1.3rem] font-semibold tracking-wide text-slate-800  md:text-[1.6rem]">
                Close
              </p>
              <p className=" w-[40%] border-[0.1rem] border-slate-200 py-4  px-4 text-left font-serif text-[1.3rem] font-semibold tracking-wide text-slate-800 md:text-[1.6rem] ">
                Prediction
              </p>

              {set === 'Microsoft' &&
                Microsoft.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'Amazon' &&
                Amazon.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}
              {set === 'Netflix' &&
                Netflix.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}
              {set === 'BAC' &&
                BAC.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'Coca' &&
                Coca.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'Fdex' &&
                Fdex.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'Ford' &&
                Ford.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'Gmotors' &&
                Gmotors.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'Google' &&
                Google.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}
              {set === 'Ibm' &&
                Ibm.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'Intel' &&
                Intel.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'JP' &&
                JP.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'Qualcom' &&
                Qualcom.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'Tesla' &&
                Tesla.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}

              {set === 'Wallmart' &&
                Wallmart.map((data, index) => (
                  <Lists
                    key={index}
                    index={data.index}
                    close={data.Close}
                    prediction={data.Predictions}
                  />
                ))}
            </div>
          </div>
        )}

        {/*  */}
      </div>
    </>
  )
}

export default index
