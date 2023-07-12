 import * as FilePond from 'filepond';
 import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

 // Import the plugin code
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

 FilePond.registerPlugin(
    FilePondPluginImagePreview, 
    FilePondPluginFileValidateType
);

 // Get a reference to the file input element
 const inputElement = document.querySelector("#post-images");

 // Create a FilePond instance
 const pond = FilePond.create(inputElement, {
    credits: {},
    storeAsFile:true,
    allowMultiple: true,
    allowReorder:true,
    acceptedFileTypes: ['image/*'],
 });