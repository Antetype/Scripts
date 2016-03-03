/*
    Similar to the 'Force Update Widget' script. This one reverts all instances
    of the selected widget.
*/

defineClass('JSReverAllInstancesCommand < GDSelectionCommand', {
    ,'execute' : function(sel) {
                    var cell = selectionController.selectedObjects().firstObject();
                    var instances = cell.widget().instances().allObjects();
                    instances.forEach(function(eachInstance) {
                        eachInstance.revertHierarchy();
                        eachInstance.revertInstanceProperties();
                        eachInstance.revertSpecificationCellIfOverwritten();
                        eachInstance.revertPropertyBindings();
                    });
                }   
    ,'executeGUI' : function(sel) {
                    screenChangeManager.rebuildRenderObjects(); 
                }
    ,'undoGUI' : function(sel) {
                    this.executeGUI();
                }
}
);

var command := JSReverAllInstancesCommand.command();
document.commandManager().executeCommand(command);

/*
RevertAllInstancesCommand : GDSelectionCommand {
    - execute {
        | cell instances |
        cell := selectionController selectedObjects firstObject.
        instances := cell widget instances.
        instances allObjects do: [:eachInstance |
            eachInstance revertHierarchy; revertInstanceProperties; revertSpecificationCellIfOverwritten; revertPropertyBindings.
        ].
    }

    - executeGUI {
        screenChangeManager rebuildRenderObjects. 
    }

    - undoGUI {
        self executeGUI.    
    }
}.

command := RevertAllInstancesCommand command.
document commandManager executeCommand: command.
*/
