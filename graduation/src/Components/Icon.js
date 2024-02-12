// import React, { useState } from "react";
// // import styled from "styled-components";

// const Icon = i`
//   background-color: ${({ isColored }) => (isColored ? "green" : "lightGrey")};
// `;
// const Styled = Styled.i`
//   width: 50px;
//     ${Icon} {
//       color:"#FFF"
//       margin: 5px;
//     }
//     i:nth-child(${({icon})=>icon.index+1}){
//       background-color: ${({ icon }) => (icon.color ? "green" : "lightGrey")};
//     }
// `;

// const Icons={
//   const [icon, setIcon] = useState({index:0,color:false});
//   const [icons] = useState(['icon1','icon2','icon3','icon4','icon5']);
//   const handleClick=(index)=>{
//      let newIcon = {...icon}
//      newIcon.color = index!==newIcon.index?true:!newIcon.color;
//      newIcon.index = index;
//      setIcon(newIcon);
// }
//   return (
    
//         <Styled icon={icon}>
//       <i>
//         {icons.map((icon,index)=>(<div onClick={()=>handleClick(index)}>{icon}</div>))}
//       </i>
//     </Styled>
//         );
// };

// export default Icons;
