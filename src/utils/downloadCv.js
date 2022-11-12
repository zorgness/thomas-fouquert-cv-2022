export const downloadCv = () => {
  fetch('cv-thomas-fouquert.pdf').then(response => {
    response.blob().then(blob => {

        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'cv-thomas-fouquert.pdf';
        alink.click();
    })
})
}
