import Swal from 'sweetalert2'

 
export const showCardModal = (color,text) => {
    Swal.fire({
        width:"60%",
        heightAuto:true,
      titleText:color.toUpperCase(),
      html: `<span class="${color}-modal-text-styling">${text} <span>`,
      
      
    showConfirmButton:false,
      showCancelButton: true,
      cancelButtonText: 'Dismiss',
   
      buttonsStyling:true,
      showClass: {
        backdrop: 'swal2-noanimation',
      },
      customClass : {
        cancelButton : `${color}-cancel-button-styling cancel-button-styling-common`,
        title:`${color}-modal-text-styling`,
        container:`${color}-modal-container-styling modal-container-styling-common`,
        popup:`${color}-modal-popup-styling modal-popup-styling-common`
      },
      hideClass: {
        // popup: '',
        backdrop: '',
      },
    });
  };


 