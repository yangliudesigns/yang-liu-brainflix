import React from 'react'
import './Button.scss';


export default function Button({ type, text, icon }) {
  return (
    <div>
      <button className="btn paragraph-buttons">
      {icon && <img className="btn-icon" src={icon} alt="icon" />}
      {text}
      </button>
    </div>
  )
}






// export default function Button({type, text, icon }) {
//   return (
//     <button type={type} className="btn">
//       <img className="btn-icon" src={icon} alt="icon" />
//       {text}
//     </button>
//   );
// }

// //navigation
// import React from 'react';
// import Button from '../Button/Button';
// import uploadIcon from '../../assets/images/upload-icon.svg'; 

// function Navigation() {
//   return (
//     <nav className="navigation">
//         <a href="#">
//             <Button text="UPLOAD" icon={uploadIcon} />
//         </a>
//     </nav>
//   );
// }

// export default Navigation;

// //comment section
// import React from 'react';
// import Button from '../Button/Button';
// import commentIcon from '../../assets/images/comment-icon.svg'; 

// function Comment() {
//     return (
//       <nav className="comment">
//         <Button type="submit" text="COMMENT" icon={commentIcon} />
//       </nav>
//     );
//   }
  
//   export default Comment;