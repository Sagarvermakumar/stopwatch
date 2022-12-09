var currentDate = new Date();
var dd = String(currentDate.getDate()).padStart(2, '0');
var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = currentDate.getFullYear();

currentDate = dd + '/'  + mm + '/' + yyyy;
export default currentDate