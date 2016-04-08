
var openAlert = NSAlert.alloc().init();

//var view = NSView.alloc().initWithFrame_(NSMakeRect(0,0,200,25));
var input = NSTextField.alloc().initWithFrame_(NSMakeRect(0,0,200,25));

openAlert.setMessageText("Generate DummyText");
openAlert.setInformativeText("Please enter the number of sentences you like to generate");
openAlert.setAccessoryView(input);
openAlert.addButtonWithTitle('GO');
openAlert.addButtonWithTitle('Cancel');

openAlert.runModal();
var repeatResult = input.intValue();


defineClass('BlindTexter < GDSelectionCommand', {

  'execute' : function() {

    //Ausgewählte Objekte
    var objects = selectionController.selectedObjects();
    var iCountJson = 0;

    //Objekte
    for (var i=0; i<objects.count(); i++) {
      var cell = objects[i];

      //URL Abruf
      var myURL = NSURL.alloc().initWithString("https://baconipsum.com/api/?type=meat-and-filler&sentences="+ repeatResult +"&start-with-lorem=1");

      // we receive raw data so we create an NSData Object with it
      var myData = NSData.alloc().initWithContentsOfURL_(myURL);
      var json = NSJSONSerialization.JSONObjectWithData_options_error_(myData,0,nil);
      log (json);
      //End Texting

      var text = json[0];
      objects[i].setValue_forKey_inState_(text,"textString",nil);

    }
  }
  ,'executeGUI' : function() {
    screenChangeManager.rebuildRenderObjects();
  }
  ,'undoGUI' : function() {
    this.executeGUI();
  }
}
);

var command = BlindTexter.command();
document.commandManager().executeCommand(command);
