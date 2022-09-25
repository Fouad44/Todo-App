/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////    OUT OF TASK  ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";

const LikesCounter = () => {
   const [likeCounter, setLikeCounter] = useState(0);

   const handleIncrement = () => {
      setLikeCounter((prev) => prev + 1);
   };

   const handleDecrement = () => {
      setLikeCounter((prev) => {
         if (prev > 0) {
            return prev - 1;
         }
         return 0;
      });
   };

   return (
      <>
         <button onClick={handleIncrement} className="btn btn-warning">
            Like
         </button>
         <button onClick={handleDecrement} className="btn btn-danger">
            Dislike
         </button>
         <h1>The likes counter is {likeCounter}</h1>;
      </>
   );
};

export default LikesCounter;
