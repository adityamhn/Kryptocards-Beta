import Swal from 'sweetalert2'

 
  export const showFormMessage = (titleText,icon) => {
    Swal.fire({
     
      titleText,
      icon:icon,
   

      showConfirmButton:false,
      showCancelButton: true,
      cancelButtonText: 'Dismiss',
   
      buttonsStyling:true,
      showClass: {
        backdrop: 'swal2-noanimation',
      },
      customClass : {
        cancelButton : 'cancel-button-styling cancel-button-styling-common',
        title:'modal-title-styling cancel-button-styling-common',
        container:'modal-container-styling modal-container-styling-common',
        popup:"modal-popup-styling modal-popup-styling-common"
      },
      hideClass: {
        // popup: '',
        backdrop: '',
      },
    });
  };