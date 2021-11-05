// import React, {useState} from "react";
// import FileInput from "../inputs/FileInput";
// import SliderInstrument from "../instruments/SliderInstrument";
// import PadInstrument from "../instruments/PadInstrument";
// import {fetchPost} from "../../common";
//
// const Numbers = () => {
//     const [samples, setSamples] = useState(null);
//
//     const apiEndpoint = '/api/synthesize-numbers/';
//     const handleSubmit = (file) => {
//         const formData = new FormData();
//         formData.append("type", "file");
//         formData.append("value", file, "tempfile.csv");
//         fetchPost(apiEndpoint, formData, setSamples, false);
//     };
//
//     return (
//         <>
//             <h1>Numbers</h1>
//             <p>
//                 This component sonifies a CSV file with a single column of floats.
//             </p>
//             <p>
//                 This is for demoing only. Please don't ship me.
//             </p>
//             <textarea
//
//
//             />
//             <button>
//             </button>
//
//             {samples && <>
//                 <SliderInstrument samples={samples} />
//                 <PadInstrument samples={samples} />
//             </>}
//         </buttoN>
//     );
//
// };
//
// export default Numbers;
