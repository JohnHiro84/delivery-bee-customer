


export const validateReview = function(stars, message) {
   
  let error_stars = true;
  let error_message = true;

  if(stars >= 1 && stars <= 5){
    error_stars = false;
  }

  if(message.length >= 1){
    error_message = false;
  }
  return {
    "stars": error_stars,
    "message": error_message
  };

}
