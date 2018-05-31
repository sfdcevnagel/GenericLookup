({
    onLeaveLookupPane : function(component, event, helper) {
        //Search - Input control focus removed on mouse leave
        var inputContainerCmp = component.find('master-container');
        helper.removeClass(inputContainerCmp,'slds-has-input-focus');
    },
    remove : function (component, event, helper) {
        //Hide the active SLDS - pill
        var selectedItemPill = component.find('selected-item-pill');
        helper.hideElement(selectedItemPill);
        
        //Show search-input control
        var inputElement = component.find('input-area');
        helper.showElement(inputElement);
    },
    onInputChange : function (component, event, helper) {
        var searchContent = component.get("v.searchText");
        var lookupContainerCmp = component.find("lookUpPane");
        if ( searchContent && searchContent.trim().length > 0 ) {
            searchContent = searchContent.trim();
            helper.addClass(lookupContainerCmp,'slds-is-open');
            helper.removeClass(lookupContainerCmp,'slds-is-close');
            //calls the search content method for fetching the records based on the user input
            helper.searchContent(component,searchContent);
        } else {
            helper.removeClass(lookupContainerCmp,'slds-is-open');
            helper.addClass(lookupContainerCmp,'slds-is-close');
        }
        
    },
    onSearchInputClick : function (component, event, helper) {
        //input control foucs enabled by adding focus style class
        var inputContainerCmp = component.find('master-container');
        helper.addClass(inputContainerCmp,'slds-has-input-focus');
    },
    selectLookupSObject : function (component , event , helper ){
        //Gets "isObjectSelection" attribute value for 
        //verifying that if the lookup is already opened or not  
        //
        var isObjSelectorAlreadyClicked = component.get("v.isObjectSelection");
        var lookupContainerCmp = component.find("lookUpPane");
        
        if( !isObjSelectorAlreadyClicked ) {
            //show the lookup container
        	helper.addClass(lookupContainerCmp,'slds-is-open');
        	helper.removeClass(lookupContainerCmp,'slds-is-close');
            //fetchs all objects available in the org
        	helper.searchObject(component,"");
        } else {
            //if the lookup already opened then hide the lookup container
            helper.addClass(lookupContainerCmp,'slds-is-close');
        	helper.removeClass(lookupContainerCmp,'slds-is-open');
        }
        //Resets the object selection
        component.set("v.isObjectSelection",!isObjSelectorAlreadyClicked);
        
    },
    selectedRecordRowClick : function (component, event, helper) {
        
        //event triggered on lookup row selection
        //fetching the details of selected row and it's index
        var targetSource = event.currentTarget;
        var selectedIndex = targetSource.dataset.index;
        
        console.log(targetSource,selectedIndex);
        //Gets "isObjectSelection" attribute value
        var isObjectSelection = component.get("v.isObjectSelection");
        var listedRecords = component.get("v.fetchedRecords");
        if (listedRecords && listedRecords.length > 0 && +selectedIndex >=0) {
            var selectedRecord = listedRecords[selectedIndex];
            //Search input control value resets
            component.find("searchContent").set("v.value",""); 
            
            //Hide the lookup
            var lookupContainerCmp = component.find("lookUpPane");
            helper.removeClass(lookupContainerCmp,'slds-is-open');
            helper.addClass(lookupContainerCmp,'slds-is-close');
            
            if (isObjectSelection) {
                //if the object-selection is enabled (means user selecting object)
                //then the lookup and input container hides for choosing the record under the selected sObject
                
                //Hide if any SLDS-Pill is visible since it is object selection
            	var selectedItemPill = component.find('selected-item-pill');
            	helper.hideElement(selectedItemPill);
                
                //Show the search-input control
            	var inputElement = component.find('input-area');
            	helper.showElement(inputElement);
                
                //sets the selected object
                component.set("v.selectedSObject",selectedRecord);
                //reset the object selection
                component.set("v.isObjectSelection",!isObjectSelection);
                
            } else {
                //Show Selected row content as a SLDS - pill
            	var selectedItemPill = component.find('selected-item-pill');
            	helper.showElement(selectedItemPill);
                
                //Hide the search-input control
            	var inputElement = component.find('input-area');
            	helper.hideElement(inputElement);
                
                //sets the selected record
                component.set("v.selectedRecord",selectedRecord);
            }
            
            
            
        }
    }
})