// import React, { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import * as d3 from "d3";
// import cloud from "d3-cloud";

// const ThirdRow = () => {
//   const occurences = useSelector((state) => state.occurenceReducer);
//   const wordCloudRef = useRef(null);

//   useEffect(() => {
//     createWordCloud();
//   },[createWordCloud], [occurences]);

//   const createWordCloud = () => {
//     const words = occurences.map((occurence) => ({
//       text: occurence.mots,
//       size: occurence["fréquence d'apparition en Avril"],
//     }));

//     const layout = cloud()
//       .size([800, 600])
//       .words(words)
//       .padding(5)
//       .rotate(() => ~~(Math.random() * 2) * 90)
//       .fontSize((d) => d.size)
//       .on("end", draw);

//     layout.start();

//     function draw(words) {
//       const svg = d3
//         .select(wordCloudRef.current)
//         .append("svg")
//         .attr("width", layout.size()[0])
//         .attr("height", layout.size()[1])
//         .append("g")
//         .attr("transform", `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`);

//       svg
//         .selectAll("text")
//         .data(words)
//         .enter()
//         .append("text")
//         .style("font-size", (d) => `${d.size}px`)
//         .style("fill", () => d3.scaleOrdinal(d3.schemeCategory10)(Math.random() * 10))
//         .attr("text-anchor", "middle")
//         .attr("transform", (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
//         .text((d) => d.text);
//     }
//   };

//   return (
//     <div>
//       <h2>Nuage de mots</h2>
//       <div ref={wordCloudRef}></div>
//     </div>
//   );
// };

// export default ThirdRow;
