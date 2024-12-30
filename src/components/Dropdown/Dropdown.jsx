// /* eslint-disable react/prop-types */
// import { Icon } from '@iconify/react';
// import styles from "./Dropdown.module.scss";

// function Dropdown(props) {

//     const toggleOptions=()=>{
//         document.getElementsByClassName(styles.options)[0].classList.toggle(styles.showOptions);
//     }
//     const handleOption1=()=>{
//         toggleOptions();
//         props.option1Click();
//     }
//     const handleOption2=()=>{
//         toggleOptions();
//         props.option2Click();
//     }

//   return (
//    <div className={styles.Dropdown}>
//     <div onClick={toggleOptions} className={styles.selected}>Core Team<Icon className={styles.icon} icon="gridicons:dropdown"  color="brown" /></div>
    
//    <div className={styles.options}>
//    <div className={styles.option} onClick={handleOption1} >{props.option1}</div>
//    <hr />
//     <div className={styles.option} onClick={handleOption2} >{props.option2}</div>
//    </div>
//    </div>
//   );
// }

// export default Dropdown;



// /* eslint-disable react/prop-types */
// import { Icon } from "@iconify/react";
// import styles from "./Dropdown.module.scss";

// function Dropdown(props) {
//   const toggleOptions = () => {
//     document.getElementsByClassName(styles.options)[0].classList.toggle(styles.showOptions);
//   };

//   const handleOption1 = () => {
//     toggleOptions();
//     props.option1Click();
//   };

//   const handleOption2 = () => {
//     toggleOptions();
//     props.option2Click();
//   };

//   return (
//     <div className={styles.Dropdown}>
//       <div onClick={toggleOptions} className={styles.selected}>
//         Core Team
//         <Icon className={styles.icon} icon="gridicons:dropdown" color="brown" />
//       </div>

//       <div className={styles.options}>
//         <div className={styles.option} onClick={handleOption1}>
//           {props.option1}
//         </div>
//         <hr />
//         <div className={styles.option} onClick={handleOption2}>
//           {props.option2}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dropdown;



// /* eslint-disable react/prop-types */
// import { Icon } from "@iconify/react";
// import styles from "./Dropdown.module.scss";

// function Dropdown(props) {
//   const toggleOptions = () => {
//     document.getElementsByClassName(styles.options)[0].classList.toggle(styles.showOptions);
//   };

//   const handleOption1 = () => {
//     toggleOptions();
//     props.option1Click();
//   };

//   const handleOption2 = () => {
//     toggleOptions();
//     props.option2Click();
//   };

//   return (
//     <div className={styles.Dropdown}>
//       <div onClick={toggleOptions} className={styles.selected}>
//         {props.title} {/* Dynamic title for dropdown */}
//         <Icon className={styles.icon} icon="gridicons:dropdown" color="brown" />
//       </div>

//       <div className={styles.options}>
//         <div className={styles.option} onClick={handleOption1}>
//           {props.option1}
//         </div>
//         <hr />
//         <div className={styles.option} onClick={handleOption2}>
//           {props.option2}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dropdown;




/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import styles from "./Dropdown.module.scss";
import { useState } from "react";

function Dropdown({ title, option1, option2, option3, option1Click, option2Click, option3Click }) {
  const [showOptions, setShowOptions] = useState(false); // Local state for dropdown visibility

  const toggleOptions = () => {
    setShowOptions((prev) => !prev); // Toggle dropdown visibility
  };

  const handleOption1 = () => {
    setShowOptions(false);
    option1Click();
  };

  const handleOption2 = () => {
    setShowOptions(false);
    option2Click();
  };

  const handleOption3 = () => {
    setShowOptions(false);
    option3Click && option3Click();
  };

  return (
    <div className={styles.Dropdown}>
      <div onClick={toggleOptions} className={styles.selected}>
        {title}
        <Icon className={styles.icon} icon="gridicons:dropdown" color="brown" />
      </div>

      {showOptions && (
        <div className={styles.options}>
          <div className={styles.option} onClick={handleOption1}>
            {option1}
          </div>
          <hr />
          <div className={styles.option} onClick={handleOption2}>
            {option2}
          </div>
          {option3 && (
            <>
              <hr />
              <div className={styles.option} onClick={handleOption3}>
                {option3}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
