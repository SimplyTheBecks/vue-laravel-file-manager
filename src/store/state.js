export default {
  /**
   * Active manager
   * left or right
   * default: left
   */
  activeManager: 'left',

  /**
   * Clipboard
   * Operation type - copy || cut
   */
  clipboard: {
    type: null,
    disk: null,
    directories: [],
    files: [],
  },

  // available disks
  disks: [],

  // file callback for ckeditor, ...
  fileCallback: null,

  // full screen mode
  fullScreen: false,

  // search term
  searchTerm: '',

  // preloader
  preloader: false,

  // files from drag and drop FM
  filesFromDrag: []

};
