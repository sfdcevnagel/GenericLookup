({
    addClass : function (element, className) {
        //Global Aura util method for adding a style class from an aura element
        $A.util.addClass(element,className);
    }, 
    
    removeClass : function (element , className) {
        //Global Aura util method for removing a style class from an aura element
        $A.util.removeClass(element,className);
    },
    
    showElement : function (element) {
        //To show an aura html element
        var self = this;
        self.removeClass(element,'slds-hide');
        self.addClass(element,'slds-show');
    },
    
    hideElement : function (element) {
        //To hide an aura html element
        var self = this;
        self.removeClass(element,'slds-show');
        self.addClass(element,'slds-hide');
    },
    searchContent : function (component,searchContent) {
        //The helper method calls sets the matched search content to component view
        //Now, it is returing some dummy records
        //Note - In your application - you should call the server method here with search query string 
        //(searchContent)as parameter.
        //Matched records should  sets to v.fetchedRecords attribute.
        var record = [{"name": "Account1","description":"Account . Location1"},
                      {"name": "Account2","description":"Account . Location2"},
                      {"name": "Account3","description":"Account . Location3"},
                      {"name": "Account4","description":"Account . Location4"},
                      {"name": "Account5","description":"Account . Location5"},
                      {"name": "Account6","description":"Account . Location6"},
                      {"name": "Account7","description":"Account . Location7"}
                     ];
        component.set("v.fetchedRecords",record);
    },
    searchObject : function (component,searchContent) {
        var sObjects = [{"name": "Account","description":"Account . Standard Object","api":"Account"},
                      {"name": "Case","description":"Case . Standard Object","api":"Case"},
                        {"name": "RMA Form","description":"Account .  Custom Object","api":"RMA_Form__c"},
                      {"name": "Service Quote","description":"Account . Custom Object","api":"Service_Quote__c"},
                      {"name": "Quote","description":"Quote . Standard Object","api":"Quote"},
                      {"name": "Asset","description":"Asset . Standard Object","api":"Asset"},
                      {"name": "Opportunity","description":"Opportunity . Standard Object","api":"Opportunity"}
                     ];
        component.set("v.fetchedRecords",sObjects);
    }
})