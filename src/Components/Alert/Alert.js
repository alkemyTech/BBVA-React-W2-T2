import swal from 'sweetalert';

// And with a third argument, you can add an icon to your alert! There are 4 predefined ones: "warning", "error", "success" and "info".
const Alert = (title, message, type) =>{
    swal(title, message, type);
}


export default Alert