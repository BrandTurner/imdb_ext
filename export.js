(function() {

  var dbName = 'todos-vanillajs';

  var savedFileEntry, fileDisplayPath;

  function getTodosAsText(callback) {
  }

  function exportToFileEntry(fileEntry) {
  	savedFileEntry = fileEntry;

  	var status = document.getElementById('status');

  	// Use this to get a file path appropriate for displaying
  	chrome.fileSystem.getDisplayPath(fileEntry, function(path) {
  		fileDisplayPath = path;
  		status.innerText = 'Exporting to ' + path;
  	})

  }

  function doExportToDisk() {
  	if (savedFileEntry) {
  		exportToFileEntry(savedFileEntry);
	  } else {
	  	chrome.fileSystem.chooseEntry( {
	  		type: 'saveFile',
	  		suggestedName: 'guestList.txt',
	  		accepts: [ { 	description: 'Text files (*.txt)',
	  				     	extensions: ['txt']	
	  		} ],
	  		acceptsAllTypes: true
	  	}, exportToFileEntry);
  	}
  }

  document.getElementById('exportToDisk').addEventListener('click', doExportToDisk);

})();