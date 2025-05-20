

 
function toggleCommentsField(executionContext) {
    var formContext = executionContext.getFormContext();
    var dropdownValue = formContext.getAttribute("new_showcomments").getValue();
    var commentsField = formContext.getControl("new_comments");

    
    if (dropdownValue === 100000000) {
        commentsField.setVisible(true);
    } else {
        commentsField.setVisible(false);
    }
}

function validatePhoneNumber(executionContext) {
    var formContext = executionContext.getFormContext();
    var phoneAttr = formContext.getAttribute("telephone1");

    if (phoneAttr) {
        var value = phoneAttr.getValue();
        var regex = /^\d{10}$/;

        if (value && !regex.test(value)) {
            phoneAttr.setIsValid(false);
            phoneAttr.setNotification("Phone number must be 10 digits.");
        } else {
            phoneAttr.setIsValid(true);
            phoneAttr.clearNotification();
        }
    }
}


function autoPopulateContact(executionContext) {
    var formContext = executionContext.getFormContext();
    var accountAttr = formContext.getAttribute("parentcustomerid");

    if (accountAttr && accountAttr.getValue() !== null) {
        var contactLookup = [{
            id: "{REPLACE_WITH_CONTACT_GUID}",  // Replace with actual GUID
            name: "John Doe",                   // Replace with real contact name
            entityType: "contact"
        }];

        formContext.getAttribute("primarycontactid").setValue(contactLookup);
    }
}

